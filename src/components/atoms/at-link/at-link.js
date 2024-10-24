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
exports.AtLink = exports.IconPositions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const types_1 = require("../../../types");
const at_icon_1 = require("../at-icon/at-icon");
const atLinkVariant = (0, class_variance_authority_1.cva)('cursor-pointer focus-visible:outline-prim-500', {
    variants: {
        variant: {
            default: 'text-body-sm hover:underline',
            hover: 'text-caption hover:text-cta-primary',
            caption: 'text-caption hover:underline',
            lg: 'text-body-lg text-cta-primary',
            underlined: 'link-sm-regular text-cta-inverted',
            unstyled: '',
        },
        fontColor: {
            default: 'text-base',
            primary: 'text-cta-primary',
            white: 'text-cta-inverted',
        },
    },
    defaultVariants: {
        variant: 'default',
        fontColor: 'default',
    },
    compoundVariants: [
        {
            variant: ['default', 'hover', 'caption', 'lg', 'underlined'],
            className: 'flex w-fit',
        },
    ],
});
var IconPositions;
(function (IconPositions) {
    IconPositions["LEFT"] = "left";
    IconPositions["RIGHT"] = "right";
})(IconPositions || (exports.IconPositions = IconPositions = {}));
const AtLink = (_a) => {
    var { ariaCurrent, altText, children, dataTestId = 'at-link', fontColor, gtmData, href, iconProps, iconPosition = IconPositions.RIGHT, label, onClick, role, style, tabIndex, target, textClasses = '', variant = 'default' } = _a, _props = __rest(_a, ["ariaCurrent", "altText", "children", "dataTestId", "fontColor", "gtmData", "href", "iconProps", "iconPosition", "label", "onClick", "role", "style", "tabIndex", "target", "textClasses", "variant"]);
    const iconExtraClass = iconPosition === IconPositions.LEFT
        ? `order-first self-center ${label ? 'mr-1' : ''}`
        : `${label ? 'self-center ml-1' : ''}`;
    const handleOnClick = (e) => {
        onClick === null || onClick === void 0 ? void 0 : onClick(e, { gtmData });
    };
    return ((0, jsx_runtime_1.jsx)("a", { "aria-current": ariaCurrent, "aria-label": altText || label, className: atLinkVariant({ variant, fontColor }), "data-testid": dataTestId, href: href, rel: target === types_1.Target.BLANK ? 'noopener noreferrer' : '', role: role, style: style, tabIndex: tabIndex, target: target, onClick: handleOnClick, children: children !== null && children !== void 0 ? children : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [label && (0, jsx_runtime_1.jsx)("span", { className: `flex items-center ${textClasses}`, children: label }), iconProps && (0, jsx_runtime_1.jsx)(at_icon_1.AtIcon, Object.assign({ className: iconExtraClass, color: "currentColor" }, iconProps))] })) }));
};
exports.AtLink = AtLink;
