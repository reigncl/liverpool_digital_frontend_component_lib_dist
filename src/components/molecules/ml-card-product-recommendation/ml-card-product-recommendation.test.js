"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_card_product_recommendation_mock_1 = require("./ml-card-product-recommendation.mock");
const _1 = require("./");
(0, vitest_1.describe)('MlCardProductRecomendation Component', () => {
    (0, vitest_1.it)('renders without crashing', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData)));
        const component = react_1.screen.getByTestId('ml-card-product-recomendation-test-id');
        (0, vitest_1.expect)(component).toBeInTheDocument();
    });
    (0, vitest_1.it)('displays the correct brand name', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData)));
        (0, vitest_1.expect)(react_1.screen.getByText('Brand name marca se limita a dos líneas...')).toBeInTheDocument();
    });
    (0, vitest_1.it)('passes the correct props to MlPicture', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData)));
        const image = react_1.screen.getByAltText('Wooden dining table with a modern design and sleek finish');
        (0, vitest_1.expect)(image).toBeInTheDocument();
        (0, vitest_1.expect)(image).toHaveAttribute('src', '/images/card-product-recommendation.png');
    });
    (0, vitest_1.it)('passes the correct props to AtPrice', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData)));
        // Adjust the expected text based on what SimplePriceWithDiscountMock renders
        (0, vitest_1.expect)(react_1.screen.getByText('$495')).toBeInTheDocument();
    });
    (0, vitest_1.it)('applies custom class names', () => {
        const mockDataWithClass = Object.assign(Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData), { className: 'custom-class' });
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, mockDataWithClass)));
        const component = react_1.screen.getByTestId('ml-card-product-recomendation-test-id');
        (0, vitest_1.expect)(component).toHaveClass('custom-class');
    });
    (0, vitest_1.it)('should render truncated brandName correctly when it exceeds 46 characters', () => {
        const longBrandName = 'A Very Long Brand Name That Should Be Truncated At Forty-Six Characters';
        const truncatedName = 'A Very Long Brand Name That Should Be Trunc...';
        const props = Object.assign(Object.assign({}, ml_card_product_recommendation_mock_1.MlCardProductRecomendationMockData), { brandName: longBrandName });
        (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.MlCardProductRecommendation, Object.assign({}, props)));
        // Check if the truncated brand name is rendered
        const brandNameElement = react_1.screen.getByText(truncatedName);
        (0, vitest_1.expect)(brandNameElement).toBeInTheDocument();
    });
});
