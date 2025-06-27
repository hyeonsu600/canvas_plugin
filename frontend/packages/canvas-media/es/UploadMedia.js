import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { bool, element, func, instanceOf, oneOfType, shape, string } from 'prop-types';
import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { isEqual } from 'lodash';
import { Button, CloseButton } from '@instructure/ui-buttons';
import { Heading } from '@instructure/ui-heading';
import { Modal } from '@instructure/ui-modal';
import { Tabs } from '@instructure/ui-tabs';
import { px } from '@instructure/ui-utils';
import { ProgressBar } from '@instructure/ui-progress';
import { Text } from '@instructure/ui-text';
import formatMessage from './format-message';
import { ACCEPTED_FILE_TYPES } from './acceptedMediaFileTypes';
import LoadingIndicator from './shared/LoadingIndicator';
import saveMediaRecording, { saveClosedCaptions, saveClosedCaptionsForAttachment, } from './saveMediaRecording';
import translationShape from './translationShape';
import getTranslations from './getTranslations';
import { CC_FILE_MAX_BYTES, mediaExtension } from './shared/constants';
const fileExtensionRegex = /\.\S/;
const DEFAULT_EXTENSION = 'webm';
// This component will guarantee formatMessage is initialized with the user
// locale's translations before rendering the actual UploadMedia component.
// This lets clients simply import UploadMedia and render it w/o having to
// remember to call something else to initalize canvas-media's i18n
// TODO: convert UploadMedia to a function component and the getTranslations
//       bit into a hook
export default function UploadMedia(props) {
    const [translationsLoaded, setTranslationsLoaded] = useState(false);
    useEffect(() => {
        getTranslations(props.userLocale)
            .catch(() => {
            // ignore and fallback to english
        })
            .finally(() => {
            setTranslationsLoaded(true);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (translationsLoaded) {
        return _jsx(UploadMediaModal, { ...props });
    }
    else {
        return _jsx("div", { children: formatMessage('Loading...') });
    }
}
const ComputerPanel = React.lazy(() => import('./ComputerPanel'));
const MediaRecorder = React.lazy(() => import('./MediaRecorder'));
export const PANELS = {
    COMPUTER: 0,
    RECORD: 1,
};
export class UploadMediaModal extends React.Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "inferSelectedPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tabs => {
                let selectedPanel = -1;
                if (tabs.upload) {
                    selectedPanel = 0;
                }
                else if (tabs.record) {
                    selectedPanel = 1;
                }
                return selectedPanel;
            }
        });
        Object.defineProperty(this, "handleSubmit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                switch (this.state.selectedPanel) {
                    case PANELS.COMPUTER: {
                        const { computerFile } = this.state;
                        this.computerPanelRef.current?.updateValidationMessages(computerFile);
                        if (computerFile?.title?.trim()) {
                            this.uploadFile(computerFile);
                        }
                        break;
                    }
                    case PANELS.RECORD: {
                        const button = document.getElementById('media_capture_save_button');
                        if (button)
                            button.disabled = true;
                        this.uploadFile(this.state.recordedFile);
                        break;
                    }
                    default: {
                        throw new Error('Selected Panel is invalid'); // Should never get here
                    }
                }
            }
        });
        Object.defineProperty(this, "submitEnabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                return !this.props.disableSubmitWhileUploading || !this.state.uploading;
            }
        });
        Object.defineProperty(this, "onSaveMediaProgress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: progress => {
                this.setState({ progress });
            }
        });
        Object.defineProperty(this, "saveMediaCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (err, data) => {
                const { onUploadComplete, onDismiss, rcsConfig } = this.props;
                const { selectedPanel, subtitles } = this.state;
                if (err) {
                    onUploadComplete?.(err, data);
                }
                else {
                    try {
                        const { media_object } = data.mediaObject;
                        let captions;
                        if (selectedPanel === PANELS.COMPUTER && subtitles.length > 0) {
                            captions = await saveClosedCaptionsForAttachment(media_object.attachment_id, subtitles, rcsConfig, CC_FILE_MAX_BYTES);
                        }
                        onUploadComplete?.(null, data, captions?.data);
                    }
                    catch (ex) {
                        onUploadComplete?.(ex, null);
                    }
                }
                onDismiss?.();
                const button = document.getElementById('media_capture_save_button');
                if (button)
                    button.disabled = false;
            }
        });
        Object.defineProperty(this, "renderModalBody", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                const { COMPUTER_PANEL_TITLE, DRAG_FILE_TEXT, LOADING_MEDIA, RECORD_PANEL_TITLE, MEDIA_RECORD_NOT_AVAILABLE, } = this.props.uploadMediaTranslations.UploadMediaStrings;
                if (!this.props.open) {
                    return null;
                }
                return (_jsxs(Tabs, { maxWidth: "large", onRequestTabChange: (_, { index }) => {
                        const { tabs } = this.props;
                        // You can only change tabs if more than one tab is available
                        if (tabs.upload && tabs.record) {
                            this.setState({ selectedPanel: index });
                        }
                    }, children: [this.props.tabs.upload && (_jsx(Tabs.Panel, { isSelected: this.state.selectedPanel === PANELS.COMPUTER, renderTitle: () => COMPUTER_PANEL_TITLE, children: _jsx(Suspense, { fallback: LoadingIndicator(LOADING_MEDIA), children: _jsx(ComputerPanel, { ref: this.computerPanelRef, theFile: this.state.computerFile, setFile: file => this.setState({ computerFile: file }), hasUploadedFile: this.state.hasUploadedFile, setHasUploadedFile: uploadFileState => this.setState({ hasUploadedFile: uploadFileState }), label: DRAG_FILE_TEXT, uploadMediaTranslations: this.props.uploadMediaTranslations, accept: ACCEPTED_FILE_TYPES, userLocale: this.props.userLocale, liveRegion: this.props.liveRegion, updateSubtitles: subtitles => {
                                        this.setState({ subtitles });
                                    }, bounds: this.state.modalBodySize, mountNode: this.props.mountNode, useStudioPlayer: this.props.useStudioPlayer }) }) }, "computer")), this.props.tabs.record && (_jsx(Tabs.Panel, { isSelected: this.state.selectedPanel === PANELS.RECORD, renderTitle: () => RECORD_PANEL_TITLE, children: _jsx(Suspense, { fallback: LoadingIndicator(LOADING_MEDIA), children: _jsx(MediaRecorder, { MediaCaptureStrings: this.props.uploadMediaTranslations.MediaCaptureStrings, errorMessage: MEDIA_RECORD_NOT_AVAILABLE, onSave: file => this.setState({ recordedFile: file }, this.handleSubmit) }) }) }, "record"))] }));
            }
        });
        Object.defineProperty(this, "onModalClose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.setState({
                    hasUploadedFile: false,
                    selectedPanel: this.inferSelectedPanel(this.props.tabs),
                    computerFile: null,
                });
                this.props.onDismiss();
            }
        });
        Object.defineProperty(this, "renderModalFooter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                if (this.state.selectedPanel === PANELS.RECORD) {
                    return null;
                }
                const { CLOSE_TEXT, SUBMIT_TEXT, PROGRESS_LABEL } = this.props.uploadMediaTranslations.UploadMediaStrings;
                return (_jsxs(Modal.Footer, { children: [this.state.uploading && (_jsx(ProgressBar, { screenReaderLabel: PROGRESS_LABEL, valueNow: this.state.progress, valueMax: 100, renderValue: ({ valueNow }) => {
                                return _jsxs(Text, { children: [valueNow, "%"] });
                            } })), "\u00A0", _jsxs(Button, { onClick: this.onModalClose, children: [" ", CLOSE_TEXT, " "] }), "\u00A0", _jsx(Button, { onClick: e => {
                                e.preventDefault();
                                this.handleSubmit();
                            }, color: "primary", type: "submit", interaction: this.submitEnabled() ? 'enabled' : 'disabled', children: SUBMIT_TEXT })] }));
            }
        });
        const defaultSelectedPanel = this.inferSelectedPanel(props.tabs);
        if (props.computerFile) {
            props.computerFile.title = props.computerFile.name;
        }
        this.state = {
            hasUploadedFile: !!props.computerFile,
            uploading: false,
            progress: 0,
            selectedPanel: defaultSelectedPanel,
            computerFile: props.computerFile || null,
            subtitles: [],
            recordedFile: null,
            modalBodySize: { width: NaN, height: NaN },
        };
        this.modalBodyRef = React.createRef();
        this.computerPanelRef = React.createRef();
    }
    uploadFile(file) {
        this.setState({ uploading: true }, () => {
            this.props.onStartUpload && this.props.onStartUpload(file);
            file.userEnteredTitle = file.title;
            file.userEnteredTitle ||= file.name;
            if (!fileExtensionRegex.test(file.userEnteredTitle)) {
                const extension = mediaExtension(file.type) || DEFAULT_EXTENSION;
                file.userEnteredTitle += file.userEnteredTitle.endsWith('.')
                    ? `${extension}`
                    : `.${extension}`;
            }
            saveMediaRecording(file, this.props.rcsConfig, this.saveMediaCallback, this.onSaveMediaProgress);
        });
    }
    componentDidMount() {
        this.setBodySize(this.state);
    }
    componentDidUpdate(prevProps, prevState) {
        this.setBodySize(prevState);
        const invalidPanelSelected = () => (this.state.selectedPanel === PANELS.COMPUTER && !this.props.tabs.upload) ||
            (this.state.selectedPanel === PANELS.RECORD && !this.props.tabs.record);
        // If the specified tabs have not changed and the selected panel is valid,
        // don't attempt to set the selected panel state (this would trigger an
        // endless loop).
        if (isEqual(prevProps.tabs, this.props.tabs) && !invalidPanelSelected())
            return;
        if (prevState.selectedPanel === -1 || invalidPanelSelected()) {
            // The tabs prop has changed and the selectedPanel was
            // never set in the constructor, or the selectedPanel is invalid
            // given the available tabs. Attempt to infer the selected panel
            // based on the new tabs list
            // ** This is an eslint error which I don't have the context
            // ** to address working my current ticket. Ignore for now
            // ** since it's been working for a while now.
            this.setState({ selectedPanel: this.inferSelectedPanel(this.props.tabs) });
        }
    }
    setBodySize(state) {
        if (this.modalBodyRef.current) {
            // eslint-disable-next-line react/no-find-dom-node
            const thebody = ReactDOM.findDOMNode(this.modalBodyRef.current);
            const modalBodySize = thebody.getBoundingClientRect();
            modalBodySize.height -= px('3rem'); // leave room for the tabs
            if (modalBodySize.width !== state.modalBodySize.width ||
                modalBodySize.height !== state.modalBodySize.height) {
                if (modalBodySize.width > 0 && modalBodySize.height > 0) {
                    this.setState({ modalBodySize });
                }
            }
        }
    }
    render() {
        const { CLOSE_TEXT, UPLOAD_MEDIA_LABEL } = this.props.uploadMediaTranslations.UploadMediaStrings;
        const dataProps = Object.keys(this.props)
            .filter(p => /^data-/.test(p))
            .reduce((obj, key) => {
            obj[key] = this.props[key];
            return obj;
        }, {});
        return (_jsxs(Modal, { label: UPLOAD_MEDIA_LABEL, mountNode: this.props.mountNode, size: "large", onDismiss: this.onModalClose, open: this.props.open, shouldCloseOnDocumentClick: false, liveRegion: this.props.liveRegion, ...dataProps, children: [_jsxs(Modal.Header, { children: [_jsx(CloseButton, { onClick: this.onModalClose, offset: "medium", placement: "end", screenReaderLabel: CLOSE_TEXT }), _jsx(Heading, { children: UPLOAD_MEDIA_LABEL })] }), _jsx(Modal.Body, { ref: this.modalBodyRef, children: this.renderModalBody() }), this.renderModalFooter()] }));
    }
}
Object.defineProperty(UploadMediaModal, "propTypes", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        disableSubmitWhileUploading: bool,
        liveRegion: func,
        mountNode: oneOfType([element, func]),
        rcsConfig: shape({
            contextId: string,
            contextType: string,
            origin: string,
            headers: shape({ Authorization: string }),
        }),
        onStartUpload: func,
        onUploadComplete: func,
        onDismiss: func,
        open: bool,
        tabs: shape({
            record: bool,
            upload: bool,
        }),
        uploadMediaTranslations: translationShape,
        // for testing
        computerFile: instanceOf(File),
        userLocale: string,
        useStudioPlayer: bool,
    }
});
Object.defineProperty(UploadMediaModal, "defaultProps", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        disableSubmitWhileUploading: false,
        userLocale: 'en',
    }
});
