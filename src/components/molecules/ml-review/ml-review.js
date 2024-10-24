"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlReview = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const mlReviewVariant = (0, class_variance_authority_1.cva)('flex gap-1', {
    variants: {
        container: {
            main: 'items-center text-body-sm text-low-emphasis',
            rating: 'p-0.5',
        },
    },
    defaultVariants: {
        container: 'main',
    },
});
const normalizeReviews = (reviewsNum) => {
    return Math.floor(reviewsNum);
};
const normalizeRating = (rating) => {
    let normalizedRating = Math.max(0, Math.min(5, Number(rating)));
    const floorRating = Math.floor(normalizedRating);
    const decimalPart = normalizedRating - floorRating;
    if (decimalPart >= 0.75) {
        normalizedRating = floorRating + 1; // Round up
    }
    else if (decimalPart >= 0.25) {
        normalizedRating = floorRating + 0.5; // Round half
    }
    else {
        normalizedRating = floorRating; // Keep int
    }
    const fullStars = Math.floor(normalizedRating);
    const halfStars = normalizedRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStars);
    return {
        starTypes: [
            { value: fullStars, name: 'star_full' },
            { value: halfStars, name: 'star_half' },
            { value: emptyStars, name: 'star_empty' },
        ],
        normalizedRating,
    };
};
const MlReview = ({ dataTestId = '', rating = 0, reviewsNum }) => {
    if (!reviewsNum || reviewsNum <= 0) {
        return null;
    }
    const { starTypes, normalizedRating } = normalizeRating(rating);
    return ((0, jsx_runtime_1.jsxs)("div", { className: mlReviewVariant(), "data-testid": dataTestId, children: [(0, jsx_runtime_1.jsx)("div", { "aria-label": `${normalizedRating} stars of 5`, className: mlReviewVariant({ container: 'rating' }), role: "img", children: starTypes.map(({ value, name }) => Array(value)
                    .fill(null)
                    .map((_, i) => (0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { name: name, size: "rating" }, `${name}-${i}`))) }), (0, jsx_runtime_1.jsxs)("span", { children: ["(", normalizeReviews(reviewsNum), ")"] })] }));
};
exports.MlReview = MlReview;
