"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_rich_text_1 = require("./ml-rich-text");
const jsonRte = {
    uid: 'Ikjwuyieutewyt8784762346',
    _version: 1,
    attrs: {},
    children: [
        {
            uid: '0b1d2b71639f4b83a9daeb082e1bd52c',
            type: 'reference',
            attrs: {
                'display-type': 'display',
                'asset-uid': 'bltb87e0bd5764c421e',
                'content-type-uid': 'sys_assets',
                'asset-link': 'https://picsum.photos/200/300',
                'asset-name': 'batman.png',
                'asset-type': 'image/png',
                type: 'asset',
                'class-name': 'embedded-asset',
                inline: false,
            },
            children: [
                {
                    text: '',
                },
            ],
        },
        {
            children: [{ text: '\n' }],
        },
        {
            uid: '767a479c6882471d9725852f042b67ce',
            type: 'h1',
            attrs: {},
            children: [{ text: 'Title' }],
        },
        {
            uid: '767a479c6882471d9725852f042b66ce',
            type: 'h2',
            attrs: {},
            children: [{ text: 'Subtitle' }],
        },
        {
            children: [{ text: '\n', break: true }],
        },
        {
            children: [
                {
                    text: 'Leo quis enim etiam tincidunt. Dignissim felis neque diam ultrices. \n \n Aenean arcu nunc tincidunt augue.',
                },
            ],
            type: 'p',
            uid: 'sdh1234',
            attrs: {},
        },
        {
            children: [{ text: '', break: true }],
        },
        {
            children: [
                {
                    text: 'Leo quis enim etiam tincidunt. Dignissim felis neque diam ultrices. Aenean arcu nunc tincidunt augue. Massa habitasse magna eu consequat lectus ultricies ipsum non id. Eu aliquet a habitant donec ut sit dignissim. Proin commodo imperdiet fringilla gravida purus dui a vulputate semper. Aliquet risus gravida eget arcu consequat luctus. ',
                },
                {
                    text: 'It has good content. ',
                    bold: true,
                },
                {
                    text: 'Enjoy the good reading!',
                    bold: true,
                    italic: true,
                },
            ],
            type: 'p',
            uid: 'sdh1235',
            attrs: {},
        },
        {
            children: [{ text: '', break: true }],
        },
        {
            children: [
                {
                    children: [{ text: 'Bullet 1.' }],
                    type: 'li',
                },
                {
                    children: [{ text: 'Bullet 2.' }],
                    type: 'li',
                },
                {
                    children: [{ text: 'Bullet 3.' }],
                    type: 'li',
                },
            ],
            type: 'ul',
            uid: 'sdh1236',
            attrs: {},
        },
        {
            children: [{ text: '\n' }],
        },
        {
            children: [
                {
                    children: [{ text: 'Bold text.', bold: true }],
                    type: 'li',
                },
                {
                    children: [{ text: 'Italic text.', italic: true }],
                    type: 'li',
                },
                {
                    children: [
                        {
                            attrs: { href: 'https://google.com' },
                            children: [{ text: 'Link' }],
                            type: 'a',
                        },
                        { text: ' to a website.' },
                    ],
                    type: 'li',
                },
            ],
            type: 'ol',
            uid: 'sdh1237',
            attrs: {},
        },
    ],
    type: 'doc',
};
const richTextProps = {
    alignment: 'left',
    jsonRte: jsonRte,
};
(0, vitest_1.describe)('components/molecules/ml-rich-text', () => {
    (0, vitest_1.it)('Renders base rich text', () => {
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_rich_text_1.MlRichText, Object.assign({}, richTextProps)));
        (0, vitest_1.expect)(getByText('Title')).toBeInTheDocument();
    });
    (0, vitest_1.it)('Has correct classes for headings', () => {
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_rich_text_1.MlRichText, Object.assign({}, richTextProps)));
        // Verify title class
        const titleElement = getByText('Title');
        (0, vitest_1.expect)(titleElement).toHaveClass('heading-xs-bold text-base pb-4');
        // Verify subtitle class
        const subtitleElement = getByText('Subtitle');
        (0, vitest_1.expect)(subtitleElement).toHaveClass('body-xl-semi text-base pb-2');
        // Verify default alignment
        const containerElement = document.querySelector('.text-start');
        (0, vitest_1.expect)(containerElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('Has correct classes for alignment right', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_rich_text_1.MlRichText, { alignment: "right", jsonRte: jsonRte }));
        const containerElement = container.querySelector('.text-end');
        (0, vitest_1.expect)(containerElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('Has correct classes for center alignment', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_rich_text_1.MlRichText, { alignment: "center", jsonRte: jsonRte }));
        const containerElement = container.querySelector('.text-center');
        (0, vitest_1.expect)(containerElement).toBeInTheDocument();
    });
});
