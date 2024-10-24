"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtTag = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
/**
 *  Variants used for product tagging in liverpool: Flag and Attribute (Atributo)
 */
const atTagVariant = (0, class_variance_authority_1.cva)('text-body-sm px-2 py-[2px] rounded', {
    variants: {
        variant: {
            flag: 'bg-blue-50 font-semibold text-feedback-flag',
            attribute: 'bg-carbon-50 text-base',
        },
    },
    defaultVariants: {
        variant: 'flag',
    },
});
const AtTag = ({ text, variant, dataTestId = 'at-tag' }) => {
    return text ? ((0, jsx_runtime_1.jsx)("div", { className: atTagVariant({ variant }), "data-testid": dataTestId, children: (0, jsx_runtime_1.jsx)("span", { children: text }) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
};
exports.AtTag = AtTag;
