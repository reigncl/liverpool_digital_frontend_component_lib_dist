"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
/**
 * Circle
 */
const circleBase = (0, class_variance_authority_1.cva)(['size-7', 'rounded-full', 'border', 'flex', 'items-center', 'justify-center', 'hover:border-carbon-500'], {
    variants: {
        active: {
            true: 'border-carbon-500',
            false: 'border-carbon-50',
        },
    },
});
const mlColorPickerVariants = (0, class_variance_authority_1.cva)('flex items-center gap-x-2', {
    variants: {},
    defaultVariants: {},
});
const MlColorPicker = (_a) => {
    var { colors, activeColor, onChangeColor, onPlusButtonClick } = _a, props = __rest(_a, ["colors", "activeColor", "onChangeColor", "onPlusButtonClick"]);
    const colorPickerClass = mlColorPickerVariants();
    const [selectedColor, setSelectedColor] = (0, react_1.useState)(activeColor !== null && activeColor !== void 0 ? activeColor : colors[0]);
    const handleChangeColor = (color) => {
        setSelectedColor(color);
        onChangeColor === null || onChangeColor === void 0 ? void 0 : onChangeColor(color);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: colorPickerClass }, props, { children: [colors.slice(0, 5).map((color) => ((0, jsx_runtime_1.jsx)("div", { className: circleBase({ active: selectedColor === color }), children: (0, jsx_runtime_1.jsx)(atoms_1.AtButton, { "aria-label": "color", borderRadius: "full", size: "color-picker", style: { backgroundColor: color }, variant: "color-picker", onClick: () => handleChangeColor(color) }) }, color))), colors.length > 5 && ((0, jsx_runtime_1.jsx)(atoms_1.AtButton, { "aria-label": "add color", borderRadius: "full", size: "color-picker-more", variant: "color-picker", onClick: onPlusButtonClick, children: (0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { color: "carbon-300", name: "add", size: "sm" }) }))] })));
};
exports.MlColorPicker = MlColorPicker;
