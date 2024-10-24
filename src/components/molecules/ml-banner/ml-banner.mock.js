"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlBannerMockData = void 0;
exports.MlBannerMockData = {
    'data-testid': 'ml-banner-test-id',
    sources: [
        {
            srcSet: '/images/liverpool-banner-mobile.png',
            type: 'image/png',
            screenType: 'sm',
        },
        {
            screenType: 'md',
            srcSet: '/images/liverpool-banner-desktop.png',
            type: 'image/png',
        },
    ],
    defaultImage: {
        src: '/images/liverpool-banner-desktop.png',
        alt: 'liverpool',
        title: 'liverpool',
    },
};
