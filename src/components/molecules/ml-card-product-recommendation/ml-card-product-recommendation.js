"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlCardProductRecommendation = exports.mlCardProductRecommendationVariants = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const ml_picture_1 = require("../ml-picture");
const truncateText_1 = require("../../../helpers/truncateText");
/**
 * Variants for the MlCardProductRecommendation component styling.
 */
exports.mlCardProductRecommendationVariants = (0, class_variance_authority_1.cva)('rounded shadow', {
    variants: {
        variant: {
            default: 'bg-white p-4 gap-5 flex flex-row justify-center shadow-blur w-81',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
/**
 * Component to display a product recommendation card.
 *
 * @param {MlCardProductRecommendationProps} props - Component properties.
 * @returns {ReactElement} The rendered product recommendation card.
 */
const MlCardProductRecommendation = ({ className, variant, productImage, price, brandName, 'data-testid': testid = 'ml-card-product-recommendation-test-id', }) => ((0, jsx_runtime_1.jsxs)("div", { className: (0, exports.mlCardProductRecommendationVariants)({ variant, className }), "data-testid": testid, children: [(0, jsx_runtime_1.jsx)("div", { className: "min-w-22 h-30", children: (0, jsx_runtime_1.jsx)(ml_picture_1.MlPicture, Object.assign({}, productImage)) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3 w-50 justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-body-base text-carbon-500 font-semibold leading-6 overflow-hidden text-ellipsis whitespace-normal ", children: (0, truncateText_1.truncateText)(brandName.trim(), 46) }), (0, jsx_runtime_1.jsx)(atoms_1.AtPrice, Object.assign({}, price))] })] }));
exports.MlCardProductRecommendation = MlCardProductRecommendation;
