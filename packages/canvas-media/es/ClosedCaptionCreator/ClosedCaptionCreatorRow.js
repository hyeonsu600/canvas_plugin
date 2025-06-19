import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
/*
 * Copyright (C) 2019 - present Instructure, Inc.
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
import { arrayOf, bool, func, objectOf, shape, string, element, oneOfType } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { Alert } from '@instructure/ui-alerts';
import { Button, IconButton } from '@instructure/ui-buttons';
import { Flex } from '@instructure/ui-flex';
import { Tooltip } from '@instructure/ui-tooltip';
import { IconTrashLine, IconQuestionLine } from '@instructure/ui-icons';
import { ScreenReaderContent } from '@instructure/ui-a11y-content';
import { Text } from '@instructure/ui-text';
import { View } from '@instructure/ui-view';
import formatMessage from '../format-message';
import CanvasSelect from '../shared/CanvasSelect';
import { CC_FILE_MAX_BYTES } from '../shared/constants';
class ClosedCaptionCreatorRow extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "styles", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: StyleSheet.create({
                messageErrorContainer: {
                    position: 'relative',
                    minWidth: '350px',
                },
                messageErrorContent: {
                    marginTop: '0.5rem',
                    position: 'absolute',
                    botton: 0,
                    left: 0,
                },
            })
        });
        Object.defineProperty(this, "_langSelectRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: React.createRef()
        });
        Object.defineProperty(this, "_deleteCCBtnRef", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: React.createRef()
        });
        Object.defineProperty(this, "handleLanguageChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (event, selectedLang) => {
                this.props.onLanguageSelected(this.props.languages.find(l => l.id === selectedLang));
            }
        });
        Object.defineProperty(this, "handleDeleteRow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _e => {
                this.props.onDeleteRow(this.props.selectedLanguage.id);
            }
        });
        Object.defineProperty(this, "handleUploadClosedCaption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: event => {
                const uploadedCCFileSize = event.target.files[0].size;
                const maxCCFileSize = CC_FILE_MAX_BYTES;
                if (maxCCFileSize && uploadedCCFileSize > maxCCFileSize) {
                    this.props.onFileSelected(null);
                    const fileSizeMessageError = formatMessage('The selected file exceeds the {maxSize} Byte limit', {
                        maxSize: maxCCFileSize,
                    });
                    this.setState({
                        isValidCC: false,
                        messageErrorCC: fileSizeMessageError,
                    });
                }
                else {
                    this.props.onFileSelected(event.target.files[0]);
                    this.setState({
                        isValidCC: true,
                        messageErrorCC: '',
                    });
                }
            }
        });
        this.state = {
            isValidCC: true,
            messageErrorCC: '',
        };
    }
    get isReadonly() {
        return this.props.selectedFile && this.props.selectedLanguage;
    }
    focus() {
        if (this._langSelectRef.current) {
            this._langSelectRef.current.focus();
        }
        else if (this._deleteCCBtnRef.current) {
            this._deleteCCBtnRef.current.focus();
        }
    }
    renderChoosing() {
        return (_jsxs(Flex, { as: "div", wrap: "wrap", justifyItems: "start", alignItems: "end", "data-testid": "CC-CreatorRow-choosing", children: [this.renderSelectLanguage(), this.renderChooseFile()] }));
    }
    renderSelectLanguage() {
        const { CLOSED_CAPTIONS_SELECT_LANGUAGE } = this.props.uploadMediaTranslations.UploadMediaStrings;
        return (_jsx(Flex.Item, { margin: "0 small small 0", children: _jsx(CanvasSelect, { ref: this._langSelectRef, value: this.props.selectedLanguage?.id, label: _jsx(ScreenReaderContent, { children: CLOSED_CAPTIONS_SELECT_LANGUAGE }), liveRegion: this.props.liveRegion, onChange: this.handleLanguageChange, placeholder: CLOSED_CAPTIONS_SELECT_LANGUAGE, translatedStrings: this.props.uploadMediaTranslations.SelectStrings, mountNode: this.props.mountNode, children: this.props.languages.map(o => {
                    return (_jsx(CanvasSelect.Option, { id: o.id, value: o.id, children: o.label }, o.id));
                }) }) }));
    }
    renderChooseFile() {
        const { NO_FILE_CHOSEN, SUPPORTED_FILE_TYPES, CLOSED_CAPTIONS_CHOOSE_FILE } = this.props.uploadMediaTranslations.UploadMediaStrings;
        return (_jsxs(Flex.Item, { margin: "0 small small 0", children: [_jsx("input", { id: "attachmentFile", accept: ".vtt, .srt", ref: element => {
                        this.fileInput = element;
                    }, onChange: this.handleUploadClosedCaption, style: { display: 'none' }, type: "file" }), _jsxs(View, { as: "div", children: [_jsx(Text, { as: "div", children: SUPPORTED_FILE_TYPES }), _jsxs(Button, { id: "attachmentFileButton", onClick: () => {
                                this.fileInput.click();
                            }, ref: element => {
                                this.attachmentFileButton = element;
                            }, children: [this.props.selectedFile ? this.props.selectedFile.name : CLOSED_CAPTIONS_CHOOSE_FILE, _jsx(ScreenReaderContent, { children: this.state.messageErrorCC })] }), !this.props.selectedFile && (_jsx(View, { display: "inline-block", margin: "0 0 0 small", children: _jsx(Text, { color: "secondary", children: NO_FILE_CHOSEN }) })), !this.state.isValidCC && (_jsx(View, { as: "div", className: css(this.styles.messageErrorContainer), children: _jsxs("div", { className: css(this.styles.messageErrorContent), children: [_jsx(Text, { color: "danger", children: this.state.messageErrorCC }), _jsx(Alert, { variant: "error", screenReaderOnly: true, isLiveRegionAtomic: true, liveRegion: this.props.liveRegion, children: this.state.messageErrorCC })] }) }))] })] }));
    }
    renderChosen() {
        const { REMOVE_FILE } = this.props.uploadMediaTranslations.UploadMediaStrings;
        return (_jsxs(Flex, { as: "div", wrap: "wrap", justifyItems: "start", alignItems: "start", "data-testid": "CC-CreatorRow-chosen", children: [_jsx(Flex.Item, { margin: "0 0 small 0", children: _jsx(View, { as: "div", borderWidth: "small", padding: "0 0 0 small", borderRadius: "medium", width: "100%", children: _jsxs(Flex, { justifyItems: "space-between", children: [_jsx(Flex.Item, { children: _jsx(Text, { weight: "bold", children: this.props.selectedLanguage.label }) }), _jsx(Flex.Item, { margin: "0 0 0 x-small", children: _jsx(IconButton, { ref: this._deleteCCBtnRef, withBackground: false, withBorder: false, onClick: this.handleDeleteRow, screenReaderLabel: formatMessage(REMOVE_FILE, {
                                            lang: this.props.selectedLanguage.label,
                                        }), disabled: this.props.inheritedCaption, children: _jsx(IconTrashLine, {}) }) })] }) }) }), this.props.inheritedCaption && (_jsx(Tooltip, { renderTip: _jsxs(Text, { children: [formatMessage('Captions inherited from a parent course cannot be removed.'), _jsx("br", {}), formatMessage('You can replace by uploading a new caption file.')] }), children: _jsx(IconButton, { withBackground: false, withBorder: false, screenReaderLabel: this.props.selectedLanguage.label, children: _jsx(IconQuestionLine, { size: "x-small", color: "brand" }) }) }))] }));
    }
    render() {
        return (_jsx(Flex, { as: "div", display: "flex", direction: "column", width: "100%", children: this.isReadonly ? this.renderChosen() : this.renderChoosing() }));
    }
}
Object.defineProperty(ClosedCaptionCreatorRow, "propTypes", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        languages: arrayOf(shape({
            id: string,
            label: string,
        })),
        liveRegion: func,
        uploadMediaTranslations: shape({
            UploadMediaStrings: objectOf(string),
            SelectStrings: objectOf(string),
        }),
        onDeleteRow: func,
        onFileSelected: func,
        onLanguageSelected: func,
        selectedFile: shape({ name: string.isRequired }), // there's more, but his is all I care about
        selectedLanguage: shape({ id: string.isRequired, label: string.isRequired }),
        inheritedCaption: bool,
        mountNode: oneOfType([element, func]),
    }
});
export default ClosedCaptionCreatorRow;
