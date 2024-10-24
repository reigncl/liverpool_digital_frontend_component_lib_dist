"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlBand = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_variance_authority_1 = require("class-variance-authority");
const react_2 = require("swiper/react");
require("swiper/css");
const modules_1 = require("swiper/modules");
const atoms_1 = require("../../atoms");
const providers_1 = require("../../../providers");
/**
 * Define the styles using cva for the label.
 */
const labelStyles = (0, class_variance_authority_1.cva)('inline', {
    variants: {
        fontWeight: {
            bold: 'font-bold',
            semibold: 'font-semibold',
        },
        color: {
            pink: 'text-prim-600',
            black: 'text-carbon-500',
        },
    },
    defaultVariants: {
        color: 'black',
    },
});
/**
 * Define the styles using cva for the band.
 */
const mlBandVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        content: {
            button: 'flex items-center p-3',
            slide: 'text-body-sm md:text-body-base flex text-center content-center w-full',
            icon: 'text-carbon-500',
            link: 'content-center h-full py-5',
        },
    },
    defaultVariants: {
        content: 'slide',
    },
});
/**
 * The MlBand component is a carousel in React that displays up to 10 labels with custom styles and button navigation.
 * It uses Swiper to automatically or manually swipe between labels.
 *
 * @param props - The properties for the MlBand component.
 * @returns The rendered MlBand component.
 */
const MlBand = (props) => {
    const { labels, 'data-testid': testid = 'ml-band-test-id' } = props;
    const [swiperInstance, setSwiperInstance] = (0, react_1.useState)(null);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(0);
    const viewport = (0, providers_1.useViewport)();
    const { isMD } = viewport;
    if (labels.length < 1 || labels.length > 10) {
        throw new Error('The number of labels must be between 1 and 10.');
    }
    const renderStyledLabel = (label) => {
        return label.map((part, index) => {
            const { text, style } = part;
            return ((0, jsx_runtime_1.jsx)("span", { className: labelStyles({
                    fontWeight: style === null || style === void 0 ? void 0 : style.fontWeight,
                    color: style === null || style === void 0 ? void 0 : style.color,
                }), children: text }, index));
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-carbon-0", "data-testid": testid, children: [labels.length > 1 && ((0, jsx_runtime_1.jsx)(atoms_1.AtButton, { "aria-label": "prev-button", className: mlBandVariants({ content: 'button' }), onClick: () => swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.slidePrev(), children: (0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { className: mlBandVariants({ content: 'icon' }), name: "chevron_left", size: isMD ? 'md' : 'sm' }) })), (0, jsx_runtime_1.jsx)(react_2.Swiper, { autoplay: { delay: 5000 }, className: "w-full", loop: isMD ? false : true, modules: [modules_1.Autoplay], onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex), onSwiper: (swiper) => setSwiperInstance(swiper), children: labels.map((label, index) => ((0, jsx_runtime_1.jsx)(react_2.SwiperSlide, { className: mlBandVariants({ content: 'slide' }), children: labels[activeIndex].url ? ((0, jsx_runtime_1.jsx)(atoms_1.AtLink, { href: labels[activeIndex].url, variant: "unstyled", children: (0, jsx_runtime_1.jsx)("div", { className: mlBandVariants({ content: 'link' }), children: renderStyledLabel(label.label) }) })) : ((0, jsx_runtime_1.jsx)("div", { className: mlBandVariants({ content: 'link' }), children: renderStyledLabel(label.label) })) }, index))) }), labels.length > 1 && ((0, jsx_runtime_1.jsx)(atoms_1.AtButton, { "aria-label": "next-button", className: mlBandVariants({ content: 'button' }), variant: "tertiary", onClick: () => swiperInstance === null || swiperInstance === void 0 ? void 0 : swiperInstance.slideNext(), children: (0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { className: mlBandVariants({ content: 'icon' }), name: "chevron_right", size: isMD ? 'md' : 'sm' }) }))] }));
};
exports.MlBand = MlBand;
