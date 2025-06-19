import _pt from "prop-types";
/*
 * Copyright (C) 2024 - present Instructure, Inc.
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

import React, { useCallback, useState } from 'react';
import tinycolor from 'tinycolor2';
import formatMessage from '../../../../format-message';
import { Button } from '@instructure/ui-buttons';
import { ColorPreset, ColorMixer, ColorContrast } from '@instructure/ui-color-picker';
import { Flex } from '@instructure/ui-flex';
import { Pill } from '@instructure/ui-pill';
import { RadioInputGroup, RadioInput } from '@instructure/ui-radio-input';
import { Tabs } from '@instructure/ui-tabs';
import { Text } from '@instructure/ui-text';
import { ToggleDetails } from '@instructure/ui-toggle-details';
import { View } from '@instructure/ui-view';
import { isTransparent, getContrastStatus, getDefaultColors } from './colorUtils';

// A custom type constraint that enforces at least one key is present

const ColorPicker = ({
  tabs,
  colorsInUse,
  onCancel,
  onSave
}) => {
  const [currFgColor, setCurrFgColor] = useState(tabs.foreground?.color);
  const [currBgColor, setCurrBgColor] = useState(isTransparent(tabs.background?.color) ? tabs.effectiveBgColor || '#ffffff' : tabs.background?.color);
  const [currBorderColor, setCurrBorderColor] = useState(tabs.border?.color);
  const [activeTab, setActiveTab] = useState(() => {
    if (tabs.foreground) return 'foreground';
    if (tabs.background) return 'background';
    return 'border';
  });
  const [defaultColors] = useState(getDefaultColors());
  const [customForeground, setCustomForeground] = useState(!!tabs.foreground?.color && tabs.foreground.color !== tabs.foreground.default);
  const [customBackground, setCustomBackground] = useState(!isTransparent(tabs.background?.color) && tabs.background?.color !== tabs.background?.default);
  const [customBorder, setCustomBorder] = useState(!isTransparent(tabs.border?.color) && tabs.border?.color !== tabs.border?.default);
  const handleFgColorChange = useCallback(newColor => {
    setCurrFgColor(newColor);
  }, []);
  const handleBgColorChange = useCallback(newColor => {
    const c = tinycolor(newColor).toHexString();
    setCurrBgColor(c);
  }, []);
  const handleBorderColorChange = useCallback(newColor => {
    setCurrBorderColor(newColor);
  }, []);
  const handleTabChange = useCallback((_event, tabData) => {
    setActiveTab(tabData.id);
  }, []);
  const handleChangePickAColor = useCallback((_e, value) => {
    const isCustom = value === 'custom';
    if (activeTab === 'foreground') {
      setCustomForeground(isCustom);
      if (!isCustom) {
        setCurrFgColor(undefined);
      }
    } else if (activeTab === 'background') {
      setCustomBackground(isCustom);
      if (!isCustom) {
        setCurrBgColor(undefined);
      }
    } else if (activeTab === 'border') {
      setCustomBorder(isCustom);
      if (!isCustom) {
        setCurrBorderColor('#00000000');
      }
    }
  }, [activeTab]);
  const handleCancel = useCallback(() => {
    onCancel();
  }, [onCancel]);
  const handleSubmit = useCallback(() => {
    setActiveTab(currFgColor ? 'foreground' : 'background');
    const newcolors = {};
    if (customForeground && currFgColor) {
      const c = tinycolor(currFgColor).toHexString();
      newcolors.fgcolor = c;
    }
    if (customBackground && currBgColor) {
      const c = tinycolor(currBgColor).toHexString();
      newcolors.bgcolor = c;
    }
    if (currBorderColor) {
      newcolors.bordercolor = customBorder && !isTransparent(currBorderColor) ? currBorderColor : undefined;
      if (newcolors.bordercolor) {
        const c = tinycolor(newcolors.bordercolor).toHexString();
        newcolors.bordercolor = c;
      }
    }
    onSave(newcolors);
  }, [currBgColor, currBorderColor, currFgColor, customBackground, customBorder, customForeground, onSave]);
  const getColorPresets = variant => {
    const defaults = defaultColors;
    if (tabs.background?.default) {
      defaults[0] = tabs.background.default;
    }
    if (tabs.foreground?.default) {
      defaults[1] = tabs.foreground.default;
    }
    // return only unique colors
    return [...defaults, ...(colorsInUse?.[variant] || [])].filter((c, i, a) => a.indexOf(c) === i && !isTransparent(c));
  };
  const renderColorMixer = (variant, enabled) => {
    let value = currBgColor;
    let onSelectColor = handleBgColorChange;
    if (variant === 'foreground') {
      value = currFgColor;
      onSelectColor = handleFgColorChange;
    }
    if (variant === 'border') {
      value = currBorderColor;
      onSelectColor = handleBorderColorChange;
    }
    if (isTransparent(value)) value = '#fff'; // or the ColorMixer will return a transparent color

    return /*#__PURE__*/React.createElement(ColorMixer, {
      "data-testid": "color-mixer",
      disabled: !enabled,
      value: value,
      withAlpha: false,
      onChange: onSelectColor,
      rgbRedInputScreenReaderLabel: formatMessage('Input field for red'),
      rgbGreenInputScreenReaderLabel: formatMessage('Input field for green'),
      rgbBlueInputScreenReaderLabel: formatMessage('Input field for blue'),
      rgbAlphaInputScreenReaderLabel: formatMessage('Input field for alpha'),
      colorSliderNavigationExplanationScreenReaderLabel: formatMessage("You are on a color slider. To navigate the slider left or right, use the 'A' and 'D' buttons respectively"),
      alphaSliderNavigationExplanationScreenReaderLabel: formatMessage("You are on an alpha slider. To navigate the slider left or right, use the 'A' and 'D' buttons respectively"),
      colorPaletteNavigationExplanationScreenReaderLabel: formatMessage("You are on a color palette. To navigate on the palette up, left, down or right, use the 'W', 'A', 'S' and 'D' buttons respectively")
    });
  };
  const renderColorPreset = (variant, enabled) => {
    let currColor = currBgColor;
    if (variant === 'foreground') currColor = currFgColor || defaultColors[1];
    if (variant === 'border') currColor = currBorderColor || '#00000000';
    let onSelectColor = handleBgColorChange;
    if (variant === 'foreground') onSelectColor = handleFgColorChange;
    if (variant === 'border') onSelectColor = handleBorderColorChange;
    return /*#__PURE__*/React.createElement(ColorPreset, {
      "data-testid": "color-preset",
      disabled: !enabled,
      label: formatMessage('Previously chosen colors'),
      colors: getColorPresets(variant),
      selected: currColor,
      onSelect: onSelectColor
    });
  };

  // this will only get called if either tabs.foreground or tabs.border is defined
  const getFirstColor = () => {
    let firstColor, firstColorLabel;
    if (activeTab === 'foreground' || activeTab === 'background' && !!tabs.foreground) {
      firstColor = currFgColor || tabs.foreground?.default || defaultColors[0];
      firstColorLabel = formatMessage('Color');
    } else if (activeTab === 'border' || activeTab === 'background' && !!tabs.border) {
      firstColor = currBorderColor || tabs.border?.default || defaultColors[0];
      firstColorLabel = formatMessage('Border');
    }
    // @ts-expect-error
    return {
      firstColor,
      firstColorLabel
    };
  };
  const renderColorContrastSummary = () => {
    const {
      firstColor
    } = getFirstColor();
    const ok = getContrastStatus(firstColor, currBgColor || tabs.effectiveBgColor || '#fff');
    return /*#__PURE__*/React.createElement(Flex, {
      as: "div",
      gap: "x-large"
    }, /*#__PURE__*/React.createElement(Text, {
      weight: "bold"
    }, formatMessage('Color Contrast')), /*#__PURE__*/React.createElement(Pill, {
      color: ok ? 'success' : 'danger'
    }, ok ? formatMessage('PASS') : formatMessage('FAIL')));
  };
  const renderColorContrast = () => {
    if (!(tabs.background || tabs.effectiveBgColor)) return null;
    if (!(tabs.foreground || tabs.border)) return null;
    if (!currBgColor) return null;
    const {
      firstColor,
      firstColorLabel
    } = getFirstColor();
    if (firstColor === null) return null;
    return /*#__PURE__*/React.createElement(ToggleDetails, {
      summary: renderColorContrastSummary(),
      "data-testid": "color-contrast-summary"
    }, /*#__PURE__*/React.createElement(View, {
      as: "div",
      margin: "small 0 0 0"
    }, /*#__PURE__*/React.createElement(ColorContrast, {
      "data-testid": "color-contrast",
      firstColor: firstColor,
      secondColor: currBgColor || tabs.effectiveBgColor || '#fff',
      label: formatMessage('Color Contrast Ratio'),
      successLabel: formatMessage('PASS'),
      failureLabel: formatMessage('FAIL'),
      normalTextLabel: formatMessage('Normal text'),
      largeTextLabel: formatMessage('Large text'),
      graphicsTextLabel: formatMessage('Graphics text'),
      firstColorLabel: firstColorLabel,
      secondColorLabel: formatMessage('Background')
    })));
  };
  const renderTab = variant => {
    let choosersEnabled = true;
    if (variant === 'foreground') {
      choosersEnabled = customForeground;
    } else if (variant === 'background') {
      choosersEnabled = customBackground;
    } else if (variant === 'border') {
      choosersEnabled = customBorder;
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
      as: "div",
      margin: "0 0 small 0"
    }, /*#__PURE__*/React.createElement(RadioInputGroup, {
      layout: "columns",
      name: "pickcolor",
      description: formatMessage('Pick a color'),
      size: "small",
      value: choosersEnabled ? 'custom' : 'none',
      onChange: handleChangePickAColor
    }, /*#__PURE__*/React.createElement(RadioInput, {
      label: formatMessage('Default'),
      value: "none"
    }), /*#__PURE__*/React.createElement(RadioInput, {
      label: formatMessage('Custom'),
      value: "custom"
    }))), renderColorMixer(variant, choosersEnabled), renderColorPreset(variant, choosersEnabled));
  };
  return /*#__PURE__*/React.createElement(View, {
    as: "div",
    "data-testid": "color-picker"
  }, /*#__PURE__*/React.createElement(View, {
    as: "div",
    padding: "small",
    "data-mce-component": true
  }, /*#__PURE__*/React.createElement(Tabs, {
    onRequestTabChange: handleTabChange
  }, !!tabs.foreground && /*#__PURE__*/React.createElement(Tabs.Panel, {
    id: "foreground",
    renderTitle: formatMessage('Color'),
    isSelected: activeTab === 'foreground'
  }, renderTab('foreground')), !!tabs.background && /*#__PURE__*/React.createElement(Tabs.Panel, {
    id: "background",
    renderTitle: formatMessage('Background'),
    isSelected: activeTab === 'background'
  }, renderTab('background')), !!tabs.border && /*#__PURE__*/React.createElement(Tabs.Panel, {
    id: "border",
    renderTitle: formatMessage('Border'),
    isSelected: activeTab === 'border'
  }, renderTab('border'))), renderColorContrast()), /*#__PURE__*/React.createElement(View, {
    as: "div",
    background: "secondary",
    padding: "small",
    textAlign: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleCancel
  }, formatMessage('Cancel')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleSubmit,
    margin: "0 0 0 small",
    color: "primary"
  }, formatMessage('Apply'))));
};
ColorPicker.propTypes = {
  colorsInUse: _pt.shape({
    foreground: _pt.arrayOf(_pt.string).isRequired,
    background: _pt.arrayOf(_pt.string).isRequired,
    border: _pt.arrayOf(_pt.string).isRequired
  }),
  onCancel: _pt.func.isRequired,
  onSave: _pt.func.isRequired
};
export { ColorPicker };