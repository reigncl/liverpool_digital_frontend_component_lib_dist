"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspectRatio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const aspectRatioVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        ratio: {
            '1:1': 'aspect-[1/1]',
            '5:4': 'aspect-[5/4]',
            '4:3': 'aspect-[4/3]',
            '3:2': 'aspect-[3/2]',
            '16:9': 'aspect-[16/9]',
            '2:1': 'aspect-[2/1]',
            '4:5': 'aspect-[4/5]',
            '3:4': 'aspect-[3/4]',
            '2:3': 'aspect-[2/3]',
            '9:16': 'aspect-[9/16]',
            '1:2': 'aspect-[1/2]',
        },
        position: {
            relative: 'relative',
        },
        overflow: {
            hidden: 'overflow-hidden',
        },
    },
    defaultVariants: {
        ratio: '1:1',
    },
});
const AspectRatio = ({ ratio, children, position, overflow }) => {
    return (0, jsx_runtime_1.jsx)("div", { className: aspectRatioVariants({ ratio, position, overflow }), children: children });
};
exports.AspectRatio = AspectRatio;
