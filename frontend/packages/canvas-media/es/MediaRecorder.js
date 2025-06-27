import { jsx as _jsx } from "react/jsx-runtime";
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
import React from 'react';
import { Alert } from '@instructure/ui-alerts';
import { canUseMediaCapture, MediaCapture } from '@instructure/media-capture';
import { func, object, string } from 'prop-types';
export default function MediaRecorder(props) {
    return (_jsx("div", { children: canUseMediaCapture() ? (_jsx(MediaCapture, { translations: props.MediaCaptureStrings, onCompleted: props.onSave })) : (_jsx(Alert, { variant: "info", margin: "small", children: props.errorMessage })) }));
}
MediaRecorder.propTypes = {
    onSave: func.isRequired,
    errorMessage: string.isRequired,
    MediaCaptureStrings: object
};
