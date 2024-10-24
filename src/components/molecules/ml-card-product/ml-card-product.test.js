"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_card_product_1 = require("../ml-card-product");
(0, vitest_1.describe)('When rendering the MlCardProduct component', () => {
    (0, vitest_1.it)('should render with mock data', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData)));
        // Assert the title is displayed
        (0, vitest_1.expect)(react_1.screen.getByText(ml_card_product_1.MlCardProductMockData.title)).toBeInTheDocument();
        // Assert the brand name is displayed
        (0, vitest_1.expect)(react_1.screen.getByText(ml_card_product_1.MlCardProductMockData.brandName)).toBeInTheDocument();
        // Assert the "Recoge en" pickup message is displayed
        (0, vitest_1.expect)(react_1.screen.getByText(/Recoge en 2 hrs./)).toBeInTheDocument();
        // Assert the "Recibe mañana" shipping message is displayed
        (0, vitest_1.expect)(react_1.screen.getByText('Recibe mañana')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display correct shipping and pickup messages', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData)));
        // Assert the correct shipping message is displayed
        (0, vitest_1.expect)(react_1.screen.getByText('Recibe mañana')).toBeInTheDocument();
        // Assert the correct pickup message is displayed
        (0, vitest_1.expect)(react_1.screen.getByText(/Recoge en 2 hrs./)).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display "Recibe hoy" when shipping date is today', () => {
        const today = new Date();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData, { shippingDate: today })));
        // Assert that the shipping message says "Recibe hoy"
        (0, vitest_1.expect)(react_1.screen.getByText('Recibe hoy')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display "Recoge ahora" when pickup date is in the past', () => {
        const pastPickupDate = new Date(new Date().getTime() - 1 * 3600 * 1000); // 1 hour ago
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData, { pickupDate: pastPickupDate })));
        // Assert that the pickup message says "Recoge ahora"
        (0, vitest_1.expect)(react_1.screen.getByText('Recoge ahora')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display "Recoge en 1 día" when pickup date is tomorrow', () => {
        const tomorrowPickupDate = new Date(new Date().getTime() + 24 * 3600 * 1000); // 1 day from now
        const rendrR = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData, { pickupDate: tomorrowPickupDate })));
        react_1.screen.debug(rendrR.container);
        // Assert that the pickup message says "Recoge en 1 día"
        (0, vitest_1.expect)(react_1.screen.getByText('Recoge en 1 día')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should display "Recibe en 3 días" when shipping date is in 3 days', () => {
        const shippingIn3Days = new Date(new Date().getTime() + 3 * 24 * 3600 * 1000); // 3 days from now
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_card_product_1.MlCardProduct, Object.assign({}, ml_card_product_1.MlCardProductMockData, { shippingDate: shippingIn3Days })));
        // Assert that the shipping message says "Recibe en 3 días"
        (0, vitest_1.expect)(react_1.screen.getByText('Recibe en 3 días')).toBeInTheDocument();
    });
});
