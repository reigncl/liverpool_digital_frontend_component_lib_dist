"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlRichText = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const json_rte_serializer_1 = require("@contentstack/json-rte-serializer");
const dompurify_1 = __importDefault(require("dompurify"));
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const foundations_1 = require("../../foundations");
const atoms_1 = require("../../atoms");
const mlRichTextVariant = (0, class_variance_authority_1.cva)('', {
    variants: {
        alignment: {
            left: 'text-start',
            right: 'text-end',
            center: 'text-center',
        },
        heading: {
            title: 'heading-xs-bold text-base pb-4',
            subtitle: 'body-xl-semi text-base pb-2',
        },
        img: { default: '[&_img]:pb-2' },
        link: { default: '[&_a]:underline' },
        ol: { default: '[&_ol]:list-decimal [&_ol]:list-inside' },
        ul: { default: '[&_ul]:list-disc [&_ul]:list-inside [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4' },
        imgSize: {
            default: 'max-w-[200px] max-h-[200px]',
        },
        fontSize: {
            base: 'text-body-base leading-8',
            caption: 'text-caption leading-7',
            'body-sm': 'text-body-sm',
        },
        fontColor: {
            base: 'text-base',
            white: 'text-inverted',
        },
    },
    defaultVariants: {
        alignment: 'left',
        fontColor: 'base',
        fontSize: 'base',
        img: 'default',
        ol: 'default',
        ul: 'default',
        link: 'default',
    },
});
const getHeading = ({ alignment = 'left', domNode, fontColor = 'base', headingLevel, variant = 'title', }) => {
    const HeadingTag = `h${headingLevel}`;
    return ((0, jsx_runtime_1.jsx)(HeadingTag, { className: (0, class_variance_authority_1.cx)(mlRichTextVariant({
            alignment,
            heading: variant,
            fontColor,
            fontSize: null,
            img: null,
            ol: null,
            ul: null,
            link: null,
        })), children: domNode.children[0].data }));
};
const MlRichText = ({ alignment = 'left', fontColor, fontSize, headingLevel = 2, jsonRte }) => {
    const htmlString = (0, json_rte_serializer_1.jsonToHtml)(jsonRte);
    const safeHtmlString = dompurify_1.default.sanitize(htmlString);
    // Parse the HTML string into React components
    const reactElement = (0, html_react_parser_1.default)(safeHtmlString, {
        replace: (domNode) => {
            if (domNode.type === 'tag') {
                switch (domNode.name) {
                    case 'h1':
                        return getHeading({ alignment, fontColor, domNode, headingLevel, variant: 'title' });
                    case 'h2':
                        return getHeading({ alignment, fontColor, domNode, headingLevel: headingLevel + 1, variant: 'subtitle' });
                    case 'figure':
                        const img = domNode.children[0];
                        const src = img.attribs['data-sys-asset-filelink'];
                        const alt = img.attribs['data-sys-asset-filename'].split('.')[0] || 'attached image';
                        return src ? ((0, jsx_runtime_1.jsx)("div", { className: mlRichTextVariant({
                                imgSize: 'default',
                                alignment: null,
                                fontColor: null,
                                fontSize: null,
                                heading: null,
                                img: null,
                                ol: null,
                                ul: null,
                                link: null,
                            }), children: (0, jsx_runtime_1.jsx)(foundations_1.AspectRatio, { ratio: '1:1', children: (0, jsx_runtime_1.jsx)(atoms_1.AtImage, { alt: alt, src: src }) }) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
                }
            }
        },
    });
    return (0, jsx_runtime_1.jsx)("div", { className: mlRichTextVariant({ alignment, fontColor, fontSize }), children: reactElement });
};
exports.MlRichText = MlRichText;
