"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlPicture = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const at_image_1 = require("../../atoms/at-image/at-image");
const react_1 = require("react");
const mlPictureVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        media: {
            xs: '(max-width: 320px)',
            sm: '(max-width: 640px)',
            md: '(max-width: 768px)',
            lg: '(max-width: 1024px)',
            xl: '(max-width: 1280px)',
            '2xl': '(max-width: 1441px)',
            '3xl': '(max-width: 1921px)',
        },
    },
    defaultVariants: {
        media: 'xs',
    },
});
const breakpointsOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
const MlPicture = ({ sources: allSources = [], defaultImage }) => {
    const hasSources = allSources.length > 0;
    const hasDefaultImage = defaultImage && (defaultImage === null || defaultImage === void 0 ? void 0 : defaultImage.src);
    const sources = (0, react_1.useMemo)(() => {
        return allSources
            .filter((r) => r.screenType)
            .sort((a, b) => {
            return breakpointsOrder.indexOf(String(a.screenType)) - breakpointsOrder.indexOf(String(b.screenType));
        });
    }, [allSources]);
    if (!hasSources)
        return;
    return ((0, jsx_runtime_1.jsxs)("picture", { children: [sources.map(({ srcSet, type, screenType }, key) => {
                const hasImg = srcSet && type && screenType;
                return (hasImg && (0, jsx_runtime_1.jsx)("source", { srcSet: srcSet, media: mlPictureVariants({ media: screenType }), type: type }, key));
            }), hasDefaultImage && (0, jsx_runtime_1.jsx)(at_image_1.AtImage, Object.assign({}, defaultImage))] }));
};
exports.MlPicture = MlPicture;
