/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextArea } from '@instructure/ui-text-area';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Checkbox } from '@instructure/ui-checkbox';
import { Heading } from '@instructure/ui-heading';
import { Modal } from '@instructure/ui-modal';
import { Flex } from '@instructure/ui-flex';
import { debounce } from '@instructure/debounce';
import { ConditionalTooltip } from '../../shared/ConditionalTooltip';
import formatMessage from '../../../../format-message';
import MemoizedEquationEditorToolbar from '../EquationEditorToolbar';
import { containsAdvancedSyntax } from './advancedOnlySyntax';
import * as advancedPreference from './advancedPreference';
import { instuiPopupMountNodeFn } from '../../../../util/fullscreenHelpers';
import { css } from 'aphrodite';
import { MathJaxDirective, Mathml } from '../../../../enhance-user-content/mathml';
import styles from './styles';
import RCEGlobals from '../../../RCEGlobals';

// Import the <math-field> container and all
// the relevant math fonts from mathlive
import '../mathlive';
import { insertTextIntoLatexTextarea } from './latexTextareaUtil';
export default class EquationEditorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advanced: this.props.openAdvanced || !!this.props.originalLatex.advancedOnly,
      workingFormula: this.props.originalLatex.latex || ''
    };
    this.previewElement = /*#__PURE__*/React.createRef();
    this.advancedEditor = /*#__PURE__*/React.createRef();
    // ********* //
    // Callbacks //
    // ********* //
    this.executeCommand = (cmd, advancedCmd) => {
      if (this.state.advanced) {
        const insertionText = advancedCmd || cmd;
        const textarea = this.advancedEditor.current?._textarea;
        if (textarea) {
          insertTextIntoLatexTextarea(textarea, insertionText);
          this.setState({
            workingFormula: textarea.value
          });
        }
      } else {
        this.mathField.insert(cmd, {
          focus: 'true'
        });
      }
    };
    this.handleModalCancel = () => {
      this.props.onModalDismiss();
    };
    this.handleModalDone = () => {
      const {
        onModalDismiss,
        onEquationSubmit
      } = this.props;
      const output = this.state.advanced ? this.state.workingFormula : this.getMathFiled();
      if (output) {
        onEquationSubmit(output);
      }
      onModalDismiss();
    };
    this.renderMathInAdvancedPreview = debounce(() => {
      if (this.previewElement.current) {
        this.previewElement.current.innerHTML = String.raw`\(${this.state.workingFormula}\)`;
        this.mathml.processNewMathInElem(this.previewElement.current);
      }
    }, EquationEditorModal.debounceRate, {
      leading: false,
      trailing: true
    });
    this.toggleAdvanced = () => {
      this.setState(state => {
        if (state.advanced) {
          this.setMathField(state.workingFormula || '');
          return {
            advanced: false,
            workingFormula: ''
          };
        } else {
          return {
            advanced: true,
            workingFormula: this.getMathFiled()
          };
        }
      });
      this.setPreviewElementContent();
    };
    this.toggleAndUpdatePreference = () => {
      this.toggleAdvanced();
      advancedPreference.isSet() ? advancedPreference.remove() : advancedPreference.set();
    };
    this.registerBasicEditorListener = () => {
      const basicEditor = document.querySelector('math-field');
      basicEditor.addEventListener('input', e => {
        if (this.advancedModeOnly(e.target.value)) {
          this.toggleAdvanced();
          this.setState({
            workingFormula: e.target.value
          });
        }
      });
    };
    this.handleFieldRef = node => {
      this.mathField = node;
    };
    // ******************* //
    // Rendering functions //
    // ******************* //
    this.renderFooter = () => {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        "data-testid": "equation-editor-modal-cancel",
        onClick: this.handleModalCancel
      }, formatMessage('Cancel')), /*#__PURE__*/React.createElement(Button, {
        "data-testid": "equation-editor-modal-done",
        margin: "none none none xx-small",
        onClick: this.handleModalDone,
        color: "primary"
      }, formatMessage('Done')));
    };
    this.renderToggle = () => {
      const lockToggle = this.state.advanced && this.advancedModeOnly(this.state.workingFormula);
      return /*#__PURE__*/React.createElement(ConditionalTooltip, {
        condition: lockToggle,
        renderTip: formatMessage('This equation cannot be rendered in Basic View.'),
        on: ['hover', 'focus']
      }, /*#__PURE__*/React.createElement(Checkbox, {
        onChange: this.toggleAndUpdatePreference,
        checked: this.state.advanced,
        label: formatMessage('Directly Edit LaTeX'),
        variant: "toggle",
        disabled: lockToggle,
        "data-testid": "advanced-toggle"
      }));
    };
    this.render = () => {
      const {
        onModalClose
      } = this.props;
      return /*#__PURE__*/React.createElement(Modal, {
        "data-mce-component": true,
        label: formatMessage('Equation Editor'),
        mountNode: instuiPopupMountNodeFn,
        onClose: onModalClose,
        onDismiss: this.handleModalCancel,
        open: true,
        transition: "fade",
        shouldCloseOnDocumentClick: false
      }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(CloseButton, {
        "data-testid": "equation-editor-modal-close",
        placement: "end",
        offset: "medium",
        color: "primary",
        onClick: this.handleModalCancel,
        screenReaderLabel: formatMessage('Close')
      }), /*#__PURE__*/React.createElement(Heading, null, formatMessage('Equation Editor'))), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement("div", {
        className: css(styles.mathfieldContainer)
      }, /*#__PURE__*/React.createElement(MemoizedEquationEditorToolbar, {
        executeCommand: this.executeCommand
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: this.state.advanced ? 'none' : null
        }
      }, /*#__PURE__*/React.createElement("math-field", {
        style: {
          padding: '0.5em',
          overflow: 'auto',
          border: 'solid 1px',
          borderRadius: '4px'
        },
        ref: this.handleFieldRef,
        "default-mode": "inline-math",
        "virtual-keyboard-mode": "off",
        "keypress-sound": "none",
        "plonk-sound": "none",
        "math-mode-space": " ",
        "data-testid": "math-field"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: this.state.advanced ? null : 'none'
        }
      }, /*#__PURE__*/React.createElement(TextArea, {
        style: {
          height: '5.1rem',
          overflowY: 'auto',
          lineHeight: '1.7rem'
        },
        label: "",
        value: this.state.workingFormula,
        onChange: e => this.setState({
          workingFormula: e.target.value
        }),
        ref: this.advancedEditor,
        "data-testid": "advanced-editor"
      })), /*#__PURE__*/React.createElement("div", {
        className: css(styles.latexToggle)
      }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Flex.Item, null, this.renderToggle()))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: this.state.advanced ? null : 'none',
          marginTop: '1em'
        }
      }, /*#__PURE__*/React.createElement("span", {
        "data-testid": "mathml-preview-element",
        ref: this.previewElement,
        className: RCEGlobals.getFeatures()?.explicit_latex_typesetting ? MathJaxDirective.Process : null
      })))), /*#__PURE__*/React.createElement(Modal.Footer, null, this.renderFooter()));
    };
    this.mathml = new Mathml(RCEGlobals.getFeatures(), RCEGlobals.getConfig());
  }
  // **************** //
  // Helper functions //
  // **************** //

  insertNewRange() {
    const {
      editor,
      originalLatex
    } = this.props;
    const {
      startContainer,
      leftIndex,
      rightIndex
    } = originalLatex;
    if (!startContainer) return;
    const range = document.createRange();
    range.setStart(startContainer, leftIndex);
    range.setEnd(startContainer, rightIndex);
    editor.selection.setRng(range);
  }
  advancedModeOnly(latex) {
    const normalizedLatex = latex.replace(/\s+/, '');
    return containsAdvancedSyntax(normalizedLatex);
  }
  setPreviewElementContent() {
    if (this.state.workingFormula) {
      this.renderMathInAdvancedPreview();
    } else {
      this.previewElement.current.innerHTML = '';
    }
  }
  componentDidMount() {
    this.registerBasicEditorListener();
    this.setPreviewElementContent();
    this.stubMacros();
    if (!this.state.advanced) this.setMathField(this.state.workingFormula);
    this.insertNewRange();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.workingFormula !== prevState.workingFormula) {
      this.setPreviewElementContent();
    }
  }
  stubMacros() {
    // Mathlive's macros exist for a different use case;
    // we don't intend for our users to utilize them.
    // This effectively disables all of them to prevent
    // weird behaviors that users don't expect.
    this.mathField?.setOptions({
      macros: {}
    });
  }
  setMathField(formula) {
    this.mathField.setValue(formula);
  }
  getMathFiled() {
    return this.mathField.getValue();
  }
}
EquationEditorModal.debounceRate = 1000;
EquationEditorModal.propTypes = {
  editor: PropTypes.object.isRequired,
  onModalDismiss: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onEquationSubmit: PropTypes.func.isRequired,
  originalLatex: PropTypes.shape({
    latex: PropTypes.string,
    advancedOnly: PropTypes.bool,
    startContainer: PropTypes.element,
    leftIndex: PropTypes.number,
    rightIndex: PropTypes.number
  }).isRequired,
  openAdvanced: PropTypes.bool.isRequired
};