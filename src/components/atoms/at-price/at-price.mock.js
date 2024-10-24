"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangePriceWithFixedDiscountMock = exports.RangePriceWithDiscountMock = exports.RangePriceMock = exports.SimplePriceWithFixedDiscountMock = exports.SimplePriceWithDiscountMock = exports.SimplePriceMock = void 0;
exports.SimplePriceMock = {
    variant: 'simple',
    amount: 250.5, // Example price with fractional part
};
exports.SimplePriceWithDiscountMock = {
    variant: 'simple-discount',
    amount: 550,
    discount: 10,
    isPercentageDiscount: true, // Using percentage discount
};
exports.SimplePriceWithFixedDiscountMock = {
    variant: 'simple-discount',
    amount: 550000,
    discount: 50000,
    isPercentageDiscount: false, // Fixed discount instead of percentage
};
exports.RangePriceMock = {
    variant: 'range',
    amount: [200, 650], // Example price range with fractional part
};
exports.RangePriceWithDiscountMock = {
    variant: 'range-discount',
    amount: [400.3, 550.3],
    discount: 37.423,
    isPercentageDiscount: true, // Using percentage discount
};
exports.RangePriceWithFixedDiscountMock = {
    variant: 'range-discount',
    amount: [400.3, 550.3],
    discount: 50,
    isPercentageDiscount: false, // Fixed discount instead of percentage
};
