"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_picture_1 = require("./ml-picture");
const getImagesForAllBreackpoints = () => {
    const sources = Array();
    const screenTypes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
    for (const screen of screenTypes) {
        sources.push({
            screenType: screen,
            srcSet: `https://placehold.co/2000?text=${screen}`,
            type: 'image/webp',
        });
    }
    return {
        sources,
        defaultImage: {
            alt: 'default alt',
            title: 'default title',
            src: 'https://placehold.co/2000?text=default',
        },
    };
};
(0, vitest_1.describe)('Picture Component', () => {
    const pictures = getImagesForAllBreackpoints();
    const sources = pictures.sources || [];
    const defaultImage = pictures.defaultImage;
    (0, vitest_1.it)('renders a <picture> element with the correct child elements', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_picture_1.MlPicture, Object.assign({}, pictures)));
        const pictureElement = container.querySelector('picture');
        (0, vitest_1.expect)(pictureElement).toBeInTheDocument();
        const sourceElements = container.querySelectorAll('source');
        (0, vitest_1.expect)(sourceElements).toHaveLength(sources.length);
        sources.forEach((source, index) => {
            (0, vitest_1.expect)(sourceElements[index]).toHaveAttribute('srcSet', source.srcSet);
            (0, vitest_1.expect)(sourceElements[index]).toHaveAttribute('media', source.media);
        });
        const imgElement = container.querySelector('img');
        (0, vitest_1.expect)(imgElement).toBeInTheDocument();
        (0, vitest_1.expect)(imgElement).toHaveAttribute('src', defaultImage === null || defaultImage === void 0 ? void 0 : defaultImage.src);
        (0, vitest_1.expect)(imgElement).toHaveAttribute('alt', defaultImage === null || defaultImage === void 0 ? void 0 : defaultImage.alt);
    });
    (0, vitest_1.it)('renders without crashing when no sources are provided', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_picture_1.MlPicture, Object.assign({}, pictures)));
        const pictureElement = container.querySelector('picture');
        (0, vitest_1.expect)(pictureElement).toBeInTheDocument();
        const imgElement = container.querySelector('img');
        (0, vitest_1.expect)(imgElement).toBeInTheDocument();
        (0, vitest_1.expect)(imgElement).toHaveAttribute('src', defaultImage === null || defaultImage === void 0 ? void 0 : defaultImage.src);
        (0, vitest_1.expect)(imgElement).toHaveAttribute('alt', defaultImage === null || defaultImage === void 0 ? void 0 : defaultImage.alt);
    });
});
