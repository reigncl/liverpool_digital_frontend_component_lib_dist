"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const ml_card_image_1 = require("./ml-card-image");
(0, vitest_1.describe)('MlCardImage Component', () => {
    const defaultProps = {
        sources: [
            {
                srcSet: '/images/liverpool-banner-mobile.png',
                type: 'image/png',
                screenType: 'sm',
            },
            {
                screenType: 'md',
                srcSet: '/images/liverpool-banner-desktop.png',
                type: 'image/png',
            },
        ],
        defaultImage: {
            src: '/images/liverpool-banner-desktop.png',
            alt: 'liverpool',
            title: 'liverpool',
        },
        ratio: '16:9',
        title: 'Test Title',
        description: 'Test Description',
        box: 'fullOver',
        alignText: 'center',
        textSize: 'base',
        shadow: 'md',
        linkProps: {
            href: '/test-link',
        },
    };
    (0, vitest_1.it)('renders the MlCardImage component correctly', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_image_1.MlCardImage, Object.assign({}, defaultProps)));
        // Check if title is rendered
        (0, vitest_1.expect)(react_1.screen.getByText('Test Title')).toBeInTheDocument();
        // Check if description is rendered
        (0, vitest_1.expect)(react_1.screen.getByText('Test Description')).toBeInTheDocument();
        (0, vitest_1.expect)(react_1.screen.getByAltText('liverpool')).toHaveAttribute('src', '/images/liverpool-banner-desktop.png');
    });
    (0, vitest_1.it)('renders the AtLink component with the correct href', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_image_1.MlCardImage, Object.assign({}, defaultProps)));
        const linkElement = react_1.screen.getByRole('link');
        (0, vitest_1.expect)(linkElement).toHaveAttribute('href', '/test-link');
    });
    (0, vitest_1.it)('does not render description if box prop is not "fullOver" or "fullUnder"', () => {
        const propsWithoutBox = Object.assign(Object.assign({}, defaultProps), { box: 'simpeUnder' });
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_image_1.MlCardImage, Object.assign({}, propsWithoutBox)));
        (0, vitest_1.expect)(react_1.screen.queryByText('Test Description')).not.toBeInTheDocument();
    });
    (0, vitest_1.it)('applies the correct class names based on variant props', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_image_1.MlCardImage, Object.assign({}, defaultProps)));
        const boxElement = react_1.screen.getByText('Test Title').closest('div');
        (0, vitest_1.expect)(boxElement).toHaveClass('bg-white');
        (0, vitest_1.expect)(boxElement).toHaveClass('absolute');
        (0, vitest_1.expect)(boxElement).toHaveClass('bottom-[-44px]');
    });
});
