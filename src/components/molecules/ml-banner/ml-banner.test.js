"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const _1 = require("./");
(0, vitest_1.describe)('MlBanner', () => {
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
    });
    (0, vitest_1.it)('renders without crashing', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlBanner, Object.assign({}, _1.MlBannerMockData)));
        (0, vitest_1.expect)(react_1.screen.getByTestId('ml-banner-test-id')).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders a picture inside an aspect ratio', () => {
        var _a;
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlBanner, Object.assign({}, _1.MlBannerMockData)));
        (0, vitest_1.expect)(react_1.screen.getByAltText(String((_a = _1.MlBannerMockData.defaultImage) === null || _a === void 0 ? void 0 : _a.alt))).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders the content inside a link when linkProps are provided', () => {
        const linkProps = { href: 'https://example.com' };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlBanner, Object.assign({}, _1.MlBannerMockData, { linkProps: linkProps })));
        const link = react_1.screen.getByTestId('ml-banner-test-id');
        (0, vitest_1.expect)(link).toHaveAttribute('href', 'https://example.com');
    });
    (0, vitest_1.it)('does not render a link when linkProps are not provided', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlBanner, Object.assign({}, _1.MlBannerMockData)));
        (0, vitest_1.expect)(react_1.screen.getByTestId('ml-banner-test-id').tagName).toBe('DIV');
    });
    (0, vitest_1.it)('renders with custom alt and title when provided', () => {
        const altText = 'Custom Alt Text';
        const titleText = 'Custom Title Text';
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlBanner, Object.assign({}, _1.MlBannerMockData, { title: titleText, defaultImage: Object.assign(Object.assign({}, _1.MlBannerMockData.defaultImage), { alt: altText, title: titleText }) })));
        const image = react_1.screen.getByAltText(altText);
        (0, vitest_1.expect)(image).toBeInTheDocument();
        (0, vitest_1.expect)(image).toHaveAttribute('title', titleText);
    });
});
