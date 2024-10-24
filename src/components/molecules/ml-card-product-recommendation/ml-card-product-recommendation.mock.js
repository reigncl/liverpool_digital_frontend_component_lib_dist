"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlCardProductRecomendationMockData = void 0;
const atoms_1 = require("../../atoms");
exports.MlCardProductRecomendationMockData = {
    className: '',
    'data-testid': 'ml-card-product-recomendation-test-id',
    price: atoms_1.SimplePriceWithDiscountMock,
    brandName: 'Brand name marca se limita a dos líneas...',
    productImage: {
        sources: [
            {
                srcSet: `images/card-product-recommendation.png`,
                type: 'image/png',
                screenType: 'sm',
            },
        ],
        defaultImage: {
            alt: 'Wooden dining table with a modern design and sleek finish',
            title: 'Modern wooden dining table with a sleek finish.',
            src: '/images/card-product-recommendation.png',
        },
    },
};
