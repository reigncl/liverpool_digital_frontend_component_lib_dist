"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlLinkList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const mlLinkListVariant = (0, class_variance_authority_1.cva)('flex flex-col mb-4 xl:mb-0', {
    variants: {
        alignment: {
            left: 'items-start',
            center: 'items-center',
            right: 'items-end',
        },
        fontColor: {
            default: 'text-base',
            white: 'text-white',
        },
    },
    defaultVariants: {
        alignment: 'left',
        fontColor: 'default',
    },
});
const MlLinkList = ({ title, titleLevel = 'h2', links, fontColor, 'data-testid': testId = 'ml-link-list', }) => {
    const TitleTag = titleLevel;
    return ((0, jsx_runtime_1.jsxs)("div", { className: mlLinkListVariant({ fontColor }), "data-testid": testId, children: [title && (0, jsx_runtime_1.jsx)(TitleTag, { className: 'text-xl mb-4', children: title }), (0, jsx_runtime_1.jsx)("ul", { className: "list-none p-0 m-0", "data-testid": testId + '-ul', children: links.map((linkProps, index) => ((0, jsx_runtime_1.jsx)("li", { className: index + 1 === links.length ? '' : 'mb-2', children: (0, jsx_runtime_1.jsx)(atoms_1.AtLink, Object.assign({}, linkProps)) }, index))) })] }));
};
exports.MlLinkList = MlLinkList;
