"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const ml_review_1 = require("./ml-review");
const defaultProps = {
    dataTestId: 'ml-review',
    reviewsNum: 10,
};
(0, vitest_1.describe)('MlReview Component', () => {
    (0, vitest_1.it)('renders base ml-review', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, defaultProps)));
        (0, vitest_1.expect)(getByTestId('ml-review')).toBeInTheDocument();
    });
    (0, vitest_1.it)('displays correct number of reviews', () => {
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, { rating: 3.5, reviewsNum: 10 }));
        (0, vitest_1.expect)(getByText('(10)')).toBeInTheDocument();
    });
    (0, vitest_1.it)('does not render stars if reviewsNum is 0', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, { rating: 3.5, reviewsNum: 0 }));
        (0, vitest_1.expect)(container).toBeEmptyDOMElement();
    });
    (0, vitest_1.it)('renders correct number of full stars', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, defaultProps, { rating: 3.5 })));
        const fullStars = container.querySelectorAll('svg[aria-label="star_full"]');
        (0, vitest_1.expect)(fullStars.length).toBe(3);
    });
    (0, vitest_1.it)('renders correct number of half stars', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, defaultProps, { rating: 3.5 })));
        const halfStars = container.querySelectorAll('svg[aria-label="star_half"]');
        (0, vitest_1.expect)(halfStars.length).toBe(1);
    });
    (0, vitest_1.it)('renders correct number of empty stars', () => {
        const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, defaultProps, { rating: 3.5 })));
        const emptyStars = container.querySelectorAll('svg[aria-label="star_empty"]');
        (0, vitest_1.expect)(emptyStars.length).toBe(1);
    });
    (0, vitest_1.it)('renders correctly with different ratings', () => {
        const ratings = [0, 1.2, 1.8, 2, 4, 5];
        ratings.forEach((rating) => {
            const { container } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, defaultProps, { rating: rating })));
            const fullStars = container.querySelectorAll('svg[aria-label="star_full"]').length;
            const halfStars = container.querySelectorAll('svg[aria-label="star_half"]').length;
            const emptyStars = container.querySelectorAll('svg[aria-label="star_empty"]').length;
            (0, vitest_1.expect)(fullStars + halfStars + emptyStars).toBe(5);
        });
    });
});
