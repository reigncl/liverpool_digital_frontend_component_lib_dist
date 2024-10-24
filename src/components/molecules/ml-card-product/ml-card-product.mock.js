"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlCardProductMockData = void 0;
const atoms_1 = require("../../atoms");
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
exports.MlCardProductMockData = {
    'data-testid': 'ml-card-product-test-id',
    ratingProps: {
        rating: 1,
        reviewsNum: 4,
    },
    title: 'Título del producto máximo dos líneas...',
    brandName: 'Brand name marca se limita a dos líneas...',
    pickupDate: new Date(new Date().getTime() + 2 * 3600 * 1000),
    shippingDate: tomorrow,
    priceProps: atoms_1.SimplePriceWithDiscountMock,
    colorPickerProps: {
        colors: [
            '#1D3557',
            '#457B9D',
            '#E63946',
            '#A8DADC',
            '#F4A261', // Sandy Orange
        ],
        activeColor: '#0000ff',
    },
    isPreSell: true,
    isSponsored: true,
    hasGift: true,
    imageSliderProps: {
        images: [
            {
                src: '/images/card-product-image.png',
                alt: 'product',
                title: 'headphones',
            },
        ],
    },
};
