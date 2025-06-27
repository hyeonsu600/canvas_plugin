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
import React, { Component, useEffect, useState } from 'react';
import { arrayOf, bool, func, objectOf, shape, string, element, oneOfType } from 'prop-types';
import formatMessage from 'format-message';
import { Alert } from '@instructure/ui-alerts';
import { IconButton } from '@instructure/ui-buttons';
import { IconAddLine } from '@instructure/ui-icons';
import { View } from '@instructure/ui-view';
import getTranslations from '../getTranslations';
import ClosedCaptionCreatorRow from './ClosedCaptionCreatorRow';
import { sortedClosedCaptionLanguageList } from '../closedCaptionLanguages';
// TODO:
//   - Limit file creation
//   - Convert ClosedCaptionCreator into a function component and the
//     getTranslation stuff into a hook (see UploadMedia.js too)
export default function ClosedCaptionCreator(props) {
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
        return _jsx(ClosedCaptionPanel, { ...props });
    }
    else {
        return _jsx("div", {});
    }
}
export class ClosedCaptionPanel extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "newButtonClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => {
                this.setState({
                    addingNewClosedCaption: true,
                    newSelectedFile: null,
                    newSelectedLanguage: null,
                    announcement: null,
                });
            }
        });
        Object.defineProperty(this, "onFileSelected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: newFile => {
                if (this.state.newSelectedLanguage && newFile) {
                    this.setState(prevState => {
                        const subtitles = prevState.subtitles.concat([
                            {
                                locale: prevState.newSelectedLanguage.id,
                                file: newFile,
                                isNew: true,
                            },
                        ]);
                        this.props.updateSubtitles(subtitles);
                        return {
                            subtitles,
                            addingNewClosedCaption: false,
                            newSelectedFile: null,
                            newSelectedLanguage: null,
                            announcement: formatMessage(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION, { lang: prevState.newSelectedLanguage.label }),
                        };
                    });
                }
                else {
                    this.setState({ newSelectedFile: newFile, announcement: null });
                }
            }
        });
        Object.defineProperty(this, "onLanguageSelected", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: lang => {
                if (this.state.newSelectedFile) {
                    this.setState(prevState => {
                        const subtitles = prevState.subtitles.concat([
                            { locale: lang.id, file: prevState.newSelectedFile, isNew: true },
                        ]);
                        this.props.updateSubtitles(subtitles);
                        return {
                            subtitles,
                            addingNewClosedCaption: false,
                            newSelectedFile: null,
                            newSelectedLanguage: null,
                            announcement: formatMessage(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION, { lang: lang.label }),
                        };
                    });
                }
                else {
                    this.setState({ newSelectedLanguage: lang, announcement: null });
                }
            }
        });
        Object.defineProperty(this, "onRowDelete", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: locale => {
                this.setState(prevState => {
                    const deletedLang = this.closedCaptionLanguages.findIndex(l => l.id === locale);
                    const deletedCCIndex = prevState.subtitles.findIndex(s => s.locale === locale);
                    const subtitles = prevState.subtitles.filter(s => s.locale !== locale);
                    this.props.updateSubtitles(subtitles);
                    return {
                        subtitles,
                        addingNewClosedCaption: subtitles.length > 0 ? prevState.addingNewClosedCaption : true,
                        announcement: formatMessage(this.props.uploadMediaTranslations.UploadMediaStrings.DELETED_CAPTION, { lang: deletedLang?.label }),
                        lastDeletedCCIndex: deletedCCIndex,
                    };
                });
            }
        });
        this.state = {
            addingNewClosedCaption: !props?.subtitles?.length, // if there are none, show the + button
            newSelectedFile: null,
            newSelectedLanguage: null,
            lastDeletedCCIndex: -1,
            subtitles: props.subtitles || [],
            announcement: null,
        };
        this.closedCaptionLanguages = sortedClosedCaptionLanguageList(this.props.userLocale);
        this._addButtonRef = React.createRef();
        this._newCreatorRef = React.createRef();
        this._nextCCRef = React.createRef();
    }
    componentDidUpdate() {
        if (document.activeElement === document.body) {
            // where focus goes when it's lost
            if (this._newCreatorRef.current) {
                this._newCreatorRef.current.focus();
            }
            else if (this._nextCCRef.current) {
                this._nextCCRef.current.focus();
            }
            else {
                this._addButtonRef.current?.focus();
            }
            // setState in componentDidUpdate is generally bad form,
            // but in this case it makes sense to clear lastDeletedCCIndex
            // here in the place where it's just been used to help direct focus.
            this.setState(state => {
                if (state.lastDeletedCCIndex !== -1) {
                    return { lastDeletedCCIndex: -1 };
                }
                return null;
            });
        }
    }
    render() {
        const { ADD_NEW_CAPTION_OR_SUBTITLE } = this.props.uploadMediaTranslations.UploadMediaStrings;
        return (_jsxs(View, { display: "inline-block", "data-testid": "ClosedCaptionPanel", children: [this.state.announcement && (_jsx(Alert, { liveRegion: this.props.liveRegion, screenReaderOnly: true, isLiveRegionAtomic: true, liveRegionPoliteness: "assertive", children: this.state.announcement })), _jsx(View, { display: "inline-block", children: this.state.subtitles.map((cc, index) => (_jsx(ClosedCaptionCreatorRow, { ref: index === this.state.lastDeletedCCIndex ? this._nextCCRef : undefined, liveRegion: this.props.liveRegion, uploadMediaTranslations: this.props.uploadMediaTranslations, onDeleteRow: this.onRowDelete, onLanguageSelected: this.onLanguageSelected, onFileSelected: this.onFileSelected, languages: this.closedCaptionLanguages, selectedLanguage: this.closedCaptionLanguages.find(l => l.id === cc.locale), selectedFile: cc.file, inheritedCaption: cc.inherited, mountNode: this.props.mountNode }, cc.locale))) }), this.state.addingNewClosedCaption ? (_jsx(View, { as: "div", children: _jsx(ClosedCaptionCreatorRow, { ref: this._newCreatorRef, liveRegion: this.props.liveRegion, uploadMediaTranslations: this.props.uploadMediaTranslations, onDeleteRow: this.onRowDelete, onLanguageSelected: this.onLanguageSelected, onFileSelected: this.onFileSelected, languages: this.closedCaptionLanguages.filter(candidate_lang => {
                            // remove already selected languages form the list
                            return !this.state.subtitles.find(st => !st.inherited && st.locale === candidate_lang.id);
                        }), selectedLanguage: this.state.newSelectedLanguage, selectedFile: this.state.newSelectedFile, mountNode: this.props.mountNode }) })) : (_jsx("div", { style: { position: 'relative', textAlign: 'center' }, children: _jsx(IconButton, { ref: this._addButtonRef, shape: "circle", color: "primary", screenReaderLabel: ADD_NEW_CAPTION_OR_SUBTITLE, onClick: this.newButtonClick, margin: "x-small auto", children: _jsx(IconAddLine, {}) }) }))] }));
    }
}
Object.defineProperty(ClosedCaptionPanel, "propTypes", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        liveRegion: func.isRequired,
        subtitles: arrayOf(shape({
            locale: string.isRequired,
            inherited: bool,
            file: shape({ name: string.isRequired }).isRequired,
        })),
        updateSubtitles: func.isRequired,
        uploadMediaTranslations: shape({
            UploadMediaStrings: objectOf(string),
            SelectStrings: objectOf(string),
        }).isRequired,
        userLocale: string,
        mountNode: oneOfType([element, func]),
    }
});
Object.defineProperty(ClosedCaptionPanel, "defaultProps", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        userLocale: 'en',
    }
});
