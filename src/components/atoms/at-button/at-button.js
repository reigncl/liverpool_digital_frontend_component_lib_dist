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
exports.AtButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atButtonVariants = (0, class_variance_authority_1.cva)('flex items-center font-bold ', {
    variants: {
        size: {
            md: 'py-3 px-4 gap-3 h-fit min-h-4 text-body-sm',
            lg: 'px-6 py-3 gap-4 h-fit min-h-6 text-body-base',
            'color-picker': 'size-5',
            'color-picker-more': 'size-7 ',
        },
        variant: {
            primary: `text-white bg-cta-primary 
      hover:bg-cta-primary-hover active:bg-cta-primary-press 
      disabled:bg-carbon-75 disabled:text-carbon-400`,
            'primary-invert': 'bg-white text-prim-500 hover:text-prim-700 active:text-prim-800 disabled:text-carbon-75 disabled:bg-carbon-400',
            secondary: 'bg-transparent text-prim-500 border border-solid border-prim-500 ' +
                'hover:border-prim-700 hover:text-prim-700 ' +
                'active:border-prim-800 active:text-prim-800 ' +
                'disabled:border-carbon-400 disabled:text-carbon-400',
            'secondary-invert': 'bg-transparent text-white border border-solid border-white',
            'color-picker': 'justify-center border bg-carbon-50 ',
            tertiary: 'border-none bg-none text-prim-500 hover:text-prim-700 active:text-prim-800 disabled:text-carbon-400',
            'tertiary-invert': 'border-none bg-none text-white',
        },
        borderRadius: {
            none: 'rounded-none',
            rounded: 'rounded',
            full: 'rounded-full',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'primary',
        borderRadius: 'rounded',
    },
});
const AtButton = (_a) => {
    var { As = 'button', borderRadius = 'rounded', label, variant = 'primary', size, href, children, 'data-testId': testId = As === 'a' ? 'link' : 'button' } = _a, props = __rest(_a, ["As", "borderRadius", "label", "variant", "size", "href", "children", 'data-testId']);
    const Component = As; // Either 'button' or 'a'
    const buttonClass = atButtonVariants({ variant, size, borderRadius });
    return ((0, jsx_runtime_1.jsx)(Component, Object.assign({ className: buttonClass, href: href }, props, { "data-testId": testId, children: children || label })));
};
exports.AtButton = AtButton;
