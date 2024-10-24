"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_band_1 = require("../ml-band");
(0, vitest_1.describe)('When rendering the MlBand component', () => {
    (0, vitest_1.it)('should render without crashing', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_band_1.MlBand, Object.assign({}, ml_band_1.MlBandMockData)));
        (0, vitest_1.expect)(container).not.toBe(null);
    });
    (0, vitest_1.it)('should render using test-id', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_band_1.MlBand, Object.assign({}, ml_band_1.MlBandMockData)));
        const component = react_1.screen.getByTestId('ml-band-test-id');
        (0, vitest_1.expect)(component).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display navigation buttons when there is more than one label', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_band_1.MlBand, Object.assign({}, ml_band_1.MlBandMockData)));
        const prevButton = react_1.screen.getAllByTestId('button')[0];
        const nextButton = react_1.screen.getAllByTestId('button')[1];
        (0, vitest_1.expect)(prevButton).toBeInTheDocument();
        (0, vitest_1.expect)(nextButton).toBeInTheDocument();
    });
    (0, vitest_1.it)('should handle click events on navigation buttons', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_band_1.MlBand, Object.assign({}, ml_band_1.MlBandMockData)));
        const nextButton = react_1.screen.getAllByTestId('button')[1];
        react_1.fireEvent.click(nextButton);
        (0, vitest_1.expect)(react_1.screen.getByText('Slide 2')).toBeInTheDocument();
    });
});
