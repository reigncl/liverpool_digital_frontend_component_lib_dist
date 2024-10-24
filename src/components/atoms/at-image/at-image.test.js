"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const at_image_1 = require("./at-image");
const atImage = {
    src: `https://placehold.co/300x300?text=at-image`,
    alt: 'at-image alt',
    title: 'at-image title',
};
(0, vitest_1.describe)('Img Component', () => {
    const { src, alt = '', title } = atImage;
    (0, vitest_1.it)('renders an image with correct src, alt and title attributes', () => {
        const { getByAltText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_image_1.AtImage, { alt: alt, src: src, title: title }));
        const imgElement = getByAltText(alt);
        (0, vitest_1.expect)(imgElement).toBeInTheDocument();
        (0, vitest_1.expect)(imgElement).toHaveAttribute('src', src);
        (0, vitest_1.expect)(imgElement).toHaveAttribute('alt', alt);
        (0, vitest_1.expect)(imgElement).toHaveAttribute('title', title);
    });
    (0, vitest_1.it)('renders without crashing', () => {
        const { getByAltText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_image_1.AtImage, { alt: alt, src: src }));
        const imgElement = getByAltText(alt);
        (0, vitest_1.expect)(imgElement).toBeTruthy();
    });
});
