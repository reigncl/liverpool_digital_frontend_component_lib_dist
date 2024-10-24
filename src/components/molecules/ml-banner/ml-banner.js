"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlBanner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const atoms_1 = require("../../atoms");
const ml_picture_1 = require("../ml-picture");
const foundations_1 = require("../../foundations");
const class_variance_authority_1 = require("class-variance-authority");
/**
 * Define the styles using cva for the banner container.
 */
const bannerStyles = (0, class_variance_authority_1.cva)('w-full overflow-hidden md:overflow-visible', {
    variants: {
        variant: {
            default: 'max-w-screen max-h-screen',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});
/**
 * MlBanner component displays a responsive banner image that changes based on the viewport size.
 * It can optionally be wrapped with a link.
 *
 * @param props - The properties for the MlBanner component.
 * @returns The rendered MlBanner component.
 */
const MlBanner = (props) => {
    const { 'data-testid': testid = 'ml-banner-test-id', linkProps, sources, defaultImage } = props;
    const content = ((0, jsx_runtime_1.jsx)(foundations_1.AspectRatio, { ratio: "16:9", children: (0, jsx_runtime_1.jsx)(ml_picture_1.MlPicture, { sources: sources, defaultImage: Object.assign(Object.assign({}, defaultImage), { height: 'auto', width: 'full', fit: 'cover-lg', maxHeight: 'screen', position: 'left-lg' }) }) }));
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: linkProps ? ((0, jsx_runtime_1.jsx)(atoms_1.AtLink, Object.assign({ dataTestId: testid }, linkProps, { className: bannerStyles(), variant: "unstyled", children: content }))) : ((0, jsx_runtime_1.jsx)("div", { "data-testid": testid, className: bannerStyles(), children: content })) }));
};
exports.MlBanner = MlBanner;
