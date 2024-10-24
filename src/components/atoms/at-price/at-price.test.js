"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const _1 = require("./");
const _2 = require("./");
(0, vitest_1.describe)('AtPrice Component', () => {
    (0, vitest_1.it)('Renders the simple price correctly', () => {
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.AtPrice, Object.assign({}, _2.SimplePriceMock)));
        const priceElement = getByText('$250'); // Match $250.50
        (0, vitest_1.expect)(priceElement).toBeInTheDocument();
        (0, vitest_1.expect)(getByText('50')).toBeInTheDocument(); // fractional part
    });
    (0, vitest_1.it)('Renders the simple price with percentage discount correctly', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.AtPrice, Object.assign({}, _2.SimplePriceWithDiscountMock)));
        (0, vitest_1.expect)(getByTestId('discounted')).toHaveTextContent('$495');
        (0, vitest_1.expect)(getByTestId('original')).toHaveTextContent('$550');
    });
    (0, vitest_1.it)('Renders the simple price with fixed discount correctly', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.AtPrice, Object.assign({}, _2.SimplePriceWithFixedDiscountMock)));
        (0, vitest_1.expect)(getByTestId('discounted')).toHaveTextContent('$500,000.00');
        (0, vitest_1.expect)(getByTestId('original')).toHaveTextContent('$550,000.00');
    });
    (0, vitest_1.it)('Renders the price range correctly', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(_1.AtPrice, Object.assign({}, _2.RangePriceMock)));
        (0, vitest_1.expect)(getByTestId('min')).toHaveTextContent('$200.00');
        (0, vitest_1.expect)(getByTestId('max')).toHaveTextContent('$650.00');
    });
});
