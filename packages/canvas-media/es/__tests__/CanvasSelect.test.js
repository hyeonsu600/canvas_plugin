import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*
 * Copyright (C) 2020 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 *
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
/*
 ** Copied from canvas-lms/ui/shared/react/components/__test__/CanvasSelect.test.js
 */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@instructure/canvas-theme';
import CanvasSelect from '../shared/CanvasSelect';
import { vi } from 'vitest';
function selectProps(override = {}) {
    return {
        id: 'sel1',
        label: 'Choose one',
        value: undefined,
        onChange: () => { },
        translatedStrings: {
            USE_ARROWS: 'Use arrow keys to navigate options.',
            LIST_COLLAPSED: 'List collapsed.',
            LIST_EXPANDED: 'List expanded.',
            OPTION_SELECTED: '{option} selected.',
        },
        liveRegion: () => liveRegion,
        ...override,
    };
}
function selectOpts() {
    return [
        _jsx(CanvasSelect.Option, { id: "1", value: "one", children: "One" }, "1"),
        _jsx(CanvasSelect.Option, { id: "2", value: "two", children: "Two" }, "2"),
        _jsx(CanvasSelect.Option, { id: "3", value: "three", children: "Three" }, "3"),
    ];
}
function renderSelect(otherProps) {
    return render(_jsx(CanvasSelect, { ...selectProps(otherProps), children: selectOpts() }));
}
let liveRegion = null;
beforeAll(() => {
    if (!document.getElementById('flash_screenreader_holder')) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'flash_screenreader_holder';
        liveRegion.setAttribute('role', 'alert');
        document.body.appendChild(liveRegion);
    }
});
afterAll(() => {
    if (liveRegion) {
        liveRegion.remove();
    }
});
describe('CanvasSelect component', () => {
    it('renders', () => {
        const { getByText } = renderSelect();
        expect(getByText('Choose one')).toBeInTheDocument();
    });
    it('shows the selected option', () => {
        const { getByDisplayValue } = renderSelect({ value: 'two' });
        expect(getByDisplayValue('Two')).toBeInTheDocument();
    });
    it('calls onChange when selection changes', async () => {
        const handleChange = vi.fn();
        const { getByText } = renderSelect({ onChange: handleChange });
        const label = getByText('Choose one');
        await fireEvent.click(label);
        // the options list is open now
        const three = getByText('Three');
        await fireEvent.click(three);
        expect(handleChange).toHaveBeenCalled();
    });
    it('forwards the isDisabled prop', async () => {
        const handleChange = vi.fn();
        const { getByText } = render(_jsxs(CanvasSelect, { ...selectProps({ onChange: handleChange }), children: [_jsx(CanvasSelect.Option, { id: "1", value: "one", children: "One" }, "1"), _jsx(CanvasSelect.Option, { id: "2", value: "two", children: "Two" }, "2"), _jsx(CanvasSelect.Option, { id: "3", value: "three", isDisabled: true, children: "Three" }, "3")] }));
        const label = getByText('Choose one');
        await fireEvent.click(label);
        const three = getByText('Three');
        await fireEvent.click(three);
        expect(handleChange).not.toHaveBeenCalled();
    });
    it('filters out undefined options', async () => {
        const { getByText } = render(_jsxs(CanvasSelect, { ...selectProps(), children: [_jsx(CanvasSelect.Option, { id: "1", value: "one", children: "One" }, "1"), "undefined", _jsx(CanvasSelect.Option, { id: "3", value: "three", isDisabled: true, children: "Three" }, "3")] }));
        const label = getByText('Choose one');
        await fireEvent.click(label);
        expect(getByText('One')).toBeInTheDocument();
        expect(getByText('Three')).toBeInTheDocument();
    });
    it('handles no children', async () => {
        const { getByText } = render(_jsx(CanvasSelect, { ...selectProps({ noOptionsLabel: 'No Options' }) }));
        const label = getByText('Choose one');
        await fireEvent.click(label);
        expect(getByText('No Options')).toBeInTheDocument();
    });
    it('handles no options', async () => {
        const { getByText } = render(_jsx(CanvasSelect, { ...selectProps({ noOptionsLabel: 'No Options' }), children: "what is this?" }));
        const label = getByText('Choose one');
        await fireEvent.click(label);
        expect(getByText('No Options')).toBeInTheDocument();
    });
    describe('CanvasSelectGroups', () => {
        it('renders enumerated groups and options', async () => {
            const { getByText } = render(_jsxs(CanvasSelect, { ...selectProps(), children: [_jsxs(CanvasSelect.Group, { id: "1", label: "Group A", children: [_jsx(CanvasSelect.Option, { id: "1", value: "one", children: "One" }), _jsx(CanvasSelect.Option, { id: "2", value: "two", children: "Two" }), _jsx(CanvasSelect.Option, { id: "3", value: "three", children: "Three" })] }), _jsxs(CanvasSelect.Group, { id: "2", label: "Group B", children: [_jsx(CanvasSelect.Option, { id: "4", value: "four", children: "Four" }), _jsx(CanvasSelect.Option, { id: "5", value: "five", children: "Five" }), _jsx(CanvasSelect.Option, { id: "6", value: "siz", children: "Six" })] })] }));
            expect(getByText('Choose one')).toBeInTheDocument();
            const label = getByText('Choose one');
            await fireEvent.click(label);
            expect(getByText('Group A')).toBeInTheDocument();
            expect(getByText('One')).toBeInTheDocument();
            expect(getByText('Group B')).toBeInTheDocument();
            expect(getByText('Four')).toBeInTheDocument();
        });
        it('renders group with one option', async () => {
            const { getByText } = render(_jsx(CanvasSelect, { ...selectProps(), children: _jsx(CanvasSelect.Group, { id: "1", label: "Group A", children: _jsx(CanvasSelect.Option, { id: "1", value: "one", children: "One" }) }) }));
            expect(getByText('Choose one')).toBeInTheDocument();
            const label = getByText('Choose one');
            await fireEvent.click(label);
            expect(getByText('Group A')).toBeInTheDocument();
            expect(getByText('One')).toBeInTheDocument();
        });
    });
    it('renders generated groups and options', async () => {
        const data = [
            {
                label: 'Group A',
                items: [
                    { id: '1', value: 'one', label: 'One' },
                    { id: '2', value: 'two', label: 'Two' },
                    { id: '3', value: 'three', label: 'Three' },
                ],
            },
            {
                label: 'Group B',
                items: [
                    { id: '4', value: 'four', label: 'Four' },
                    { id: '5', value: 'five', label: 'Five' },
                    { id: '6', value: 'siz', label: 'Six' },
                ],
            },
        ];
        let k = 0;
        const { getByText } = render(_jsxs(CanvasSelect, { ...selectProps(), children: [_jsx(CanvasSelect.Option, { id: "0", value: "0", children: "Zero" }), data.map(grp => (_jsx(CanvasSelect.Group, { label: grp.label, children: grp.items.map(opt => (_jsx(CanvasSelect.Option, { id: opt.id, value: opt.value, children: opt.label }, `${++k}`))) }, `${++k}`)))] }));
        expect(getByText('Choose one')).toBeInTheDocument();
        const label = getByText('Choose one');
        await fireEvent.click(label);
        expect(getByText('Group A')).toBeInTheDocument();
        expect(getByText('One')).toBeInTheDocument();
        expect(getByText('Group B')).toBeInTheDocument();
        expect(getByText('Four')).toBeInTheDocument();
    });
});
