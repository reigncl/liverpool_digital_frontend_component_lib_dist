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
exports.AtImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atImageVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        fit: {
            cover: 'object-cover',
            contain: 'object-contain',
            fill: 'object-fill',
            none: 'object-none',
            'scale-down': 'object-scale-down',
            'cover-lg': 'lg:object-cover',
        },
        position: {
            'left-lg': 'lg:object-left',
            absolute: 'absolute',
        },
        width: {
            full: 'w-full',
        },
        height: {
            full: 'h-full',
            auto: 'h-auto',
        },
        maxHeight: {
            screen: 'max-h-screen',
        },
        transform: {
            'translate-x-full': 'translate-x-full',
            'translate-x-0': 'translate-x-0',
            '-translate-x-full': '-translate-x-full',
        },
        transition: {
            'duration-500': 'transition-transform duration-500 ease-in-out',
        },
        rounded: {
            full: 'rounded-full',
            none: 'rounded-none',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            '2xl': 'rounded-2xl',
        },
        shadow: {
            md: 'shadow-md',
        },
    },
    defaultVariants: {
        fit: 'cover',
        width: 'full',
        height: 'full',
    },
});
const AtImage = (_a) => {
    var { src, alt, title, fit, width, height, maxHeight, position, transform, transition, rounded, shadow } = _a, props = __rest(_a, ["src", "alt", "title", "fit", "width", "height", "maxHeight", "position", "transform", "transition", "rounded", "shadow"]);
    if (!src)
        return;
    return ((0, jsx_runtime_1.jsx)("img", Object.assign({ alt: alt, className: atImageVariants({
            fit,
            width,
            height,
            maxHeight,
            position,
            transform,
            transition,
            rounded,
            shadow,
        }), src: src, title: title }, props)));
};
exports.AtImage = AtImage;
