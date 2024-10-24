"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtPrice = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
// Root div styles (if needed for overall component styling)
const priceStyles = (0, class_variance_authority_1.cva)('', {
    variants: {
        variant: {
            simple: '',
            'simple-discount': 'flex flex-row items-center',
            range: 'flex flex-row items-center',
            'range-discount': 'flex flex-col items-start',
        },
    },
});
// Styles for the main price amount
const amountStyles = (0, class_variance_authority_1.cva)('text-feedback-error text-body-xl font-bold', {
    variants: {
        variant: {
            simple: '',
            'simple-discount': '',
            range: '',
            'range-discount': '',
        },
    },
});
// Styles for the original price when showing a discount
const originalPriceStyles = (0, class_variance_authority_1.cva)('text-carbon-300 text-body-sm', {
    variants: {
        variant: {
            'simple-discount': 'line-through ml-1',
            'range-discount': '[&>span]:line-through',
        },
    },
});
// Styles for the fractional part of the price
const fractionalStyles = (0, class_variance_authority_1.cva)('text-sm align-super text-caption', {
    variants: {
        variant: {
            simple: '',
            'simple-discount': '',
            range: '',
            'range-discount': '',
        },
    },
});
// Helper function to format price with integer and fractional parts
const createPriceFormatter = (locale) => {
    const formatPrice = (amount, variant) => {
        const integerPart = Math.floor(amount);
        const fractionalPart = (amount % 1).toFixed(2).slice(2); // Get the cents part
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", { children: ["$", integerPart.toLocaleString(locale)] }), (0, jsx_runtime_1.jsxs)("span", { className: fractionalStyles({ variant }), children: [(0, jsx_runtime_1.jsx)("span", { className: "invisible", children: "." }), fractionalPart] })] }));
    };
    return formatPrice;
};
// Function to calculate the discounted price
const getDiscountedPrice = (amount, discount, isPercentageDiscount = true) => {
    return isPercentageDiscount
        ? amount * (1 - discount / 100) // Apply percentage discount
        : amount - discount; // Apply discrete value discount
};
const AtPrice = ({ amount, discount, variant, 'data-testid': testId, isPercentageDiscount = true, // Default to percentage-based discount
locale = 'en-US', }) => {
    const formatPrice = createPriceFormatter(locale);
    const renderPrice = () => {
        switch (variant) {
            case 'simple':
                return (0, jsx_runtime_1.jsx)("span", { className: amountStyles({ variant }), children: formatPrice(amount, variant) });
            case 'simple-discount':
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { "data-testid": "discounted", className: amountStyles({ variant }), children: formatPrice(getDiscountedPrice(amount, discount || 0, isPercentageDiscount), variant) }), (0, jsx_runtime_1.jsx)("span", { "data-testid": "original", className: originalPriceStyles({ variant }), children: formatPrice(amount, variant) })] }));
            case 'range':
                const [min, max] = amount;
                return ((0, jsx_runtime_1.jsxs)("span", { className: amountStyles({ variant }), children: [(0, jsx_runtime_1.jsxs)("span", { "data-testid": "min", children: [" ", formatPrice(min, variant)] }), " -", ' ', (0, jsx_runtime_1.jsx)("span", { "data-testid": "max", children: formatPrice(max, variant) })] }));
            case 'range-discount':
                const [minRange, maxRange] = amount;
                return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("span", { className: amountStyles({ variant }), children: [formatPrice(getDiscountedPrice(minRange, discount || 0, isPercentageDiscount), variant), " -", ' ', formatPrice(getDiscountedPrice(maxRange, discount || 0, isPercentageDiscount), variant)] }), (0, jsx_runtime_1.jsxs)("span", { "data-testid": testId + '-original-prices', className: originalPriceStyles({ variant }), children: [(0, jsx_runtime_1.jsx)("span", { "data-testid": testId + '-min-price-range', children: formatPrice(minRange, variant) }), " -", ' ', (0, jsx_runtime_1.jsx)("span", { "data-testid": testId + '-max-price-range', children: formatPrice(maxRange, variant) })] })] }));
            default:
                return null;
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": testId, className: priceStyles({ variant }), children: renderPrice() }));
};
exports.AtPrice = AtPrice;
