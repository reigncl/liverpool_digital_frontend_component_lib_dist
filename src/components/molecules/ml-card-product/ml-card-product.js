"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlCardProduct = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const atoms_1 = require("../../atoms");
const ml_color_picker_1 = require("../ml-color-picker");
const ml_review_1 = require("../ml-review/ml-review");
const class_variance_authority_1 = require("class-variance-authority");
const providers_1 = require("../../../providers");
const ml_image_slider_1 = require("../ml-image-slider");
const contentContainerVariants = (0, class_variance_authority_1.cva)('flex-1', {
    variants: {
        layout: {
            grid: 'gap-2 flex flex-col',
            list: 'justify-center flex flex-col',
        },
    },
});
const productImageContainerVariants = (0, class_variance_authority_1.cva)('h-auto', {
    variants: {
        layout: {
            grid: 'w-45 md:w-55',
            list: 'md:w-45 lg:w-55 flex flex-col items-center justify-center w-35',
        },
    },
});
const mlCardProductVariants = (0, class_variance_authority_1.cva)('', {
    variants: {
        layout: {
            grid: 'flex flex-col gap-2 w-45 md:w-55',
            list: 'p-5 md:p-3 flex flex-row gap-6 justify-center w-full h-fit border-b border-b-carbon-75 border-solid md:max-w-5xl sm:max-w-3xl',
        },
    },
    defaultVariants: {
        layout: 'grid',
    },
});
/** Function to calculate shipping time message */
const getShippingMessage = (date) => {
    date = new Date(date);
    const now = new Date();
    const diffInTime = date.getTime() - now.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    if (diffInDays <= 0) {
        return 'Recibe hoy';
    }
    else if (diffInDays === 1) {
        return 'Recibe mañana';
    }
    else {
        return `Recibe en ${diffInDays} días`;
    }
};
/** Function to calculate pickup time message */
const getPickupMessage = (date) => {
    date = new Date(date);
    const now = new Date();
    const diffInTime = date.getTime() - now.getTime();
    const diffInHours = Math.ceil(diffInTime / (1000 * 3600));
    if (diffInHours <= 0) {
        return 'Recoge ahora';
    }
    else if (diffInHours < 24) {
        return `Recoge en ${diffInHours} hrs.`;
    }
    else {
        const diffInDays = Math.ceil(diffInHours / 24);
        return `Recoge en ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
    }
};
const ShippingAndPickup = ({ shippingMessage, pickupMessage }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [shippingMessage && ((0, jsx_runtime_1.jsxs)("div", { className: "text-body-sm text-carbon-500 flex flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { name: "truck" }), shippingMessage] })), pickupMessage && ((0, jsx_runtime_1.jsxs)("div", { className: "text-body-sm text-carbon-500 flex flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { name: "store" }), pickupMessage] }))] }));
const CardProductGridContent = ({ title, brandName, isSponsored = false, priceProps, colorPickerProps, ratingProps, isPreSell, hasGift, shippingMessage, pickupMessage, }) => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [colorPickerProps && ((0, jsx_runtime_1.jsx)("div", { className: "mb-2", children: (0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { colors: colorPickerProps.colors, activeColor: colorPickerProps.activeColor, onChangeColor: colorPickerProps.onChangeColor }) })), isSponsored && (0, jsx_runtime_1.jsx)("div", { className: "text-body-base text-carbon-300 font-normal", children: "Patrocinado" }), (0, jsx_runtime_1.jsx)("div", { className: "text-body-base text-carbon-500  font-semibold", children: brandName }), (0, jsx_runtime_1.jsx)("div", { className: "text-body-base ", children: title }), (0, jsx_runtime_1.jsx)(atoms_1.AtPrice, Object.assign({}, priceProps)), hasGift ? ((0, jsx_runtime_1.jsx)("div", { className: "w-fit", children: (0, jsx_runtime_1.jsx)(atoms_1.AtTag, { text: "Regalo con compra", variant: "flag" }) })) : undefined, isPreSell ? ((0, jsx_runtime_1.jsx)("div", { className: "w-fit", children: (0, jsx_runtime_1.jsx)(atoms_1.AtTag, { text: "Preventa", variant: "attribute" }) })) : undefined, (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [ratingProps && (0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, ratingProps)), (0, jsx_runtime_1.jsx)(ShippingAndPickup, { shippingMessage: shippingMessage, pickupMessage: pickupMessage })] })] }));
const CardProductListContent = ({ title, brandName, isSponsored = false, priceProps, colorPickerProps, ratingProps, isPreSell, hasGift, shippingMessage, pickupMessage, }) => {
    const { isMD } = (0, providers_1.useViewport)();
    const textContent = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isSponsored && (0, jsx_runtime_1.jsx)("div", { className: "text-body-base text-carbon-300 font-normal", children: "Patrocinado" }), (0, jsx_runtime_1.jsx)("div", { className: "text-body-base text-carbon-500  font-semibold", children: brandName }), (0, jsx_runtime_1.jsx)("div", { className: "text-body-base ", children: title })] }));
    const colorPickerElement = ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: colorPickerProps && ((0, jsx_runtime_1.jsx)("div", { className: "mb-2", children: (0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { colors: colorPickerProps.colors, activeColor: colorPickerProps.activeColor, onChangeColor: colorPickerProps.onChangeColor }) })) }));
    const presellTag = isPreSell ? ((0, jsx_runtime_1.jsxs)("div", { className: "w-fit", children: [(0, jsx_runtime_1.jsx)(atoms_1.AtTag, { text: "Preventa", variant: "attribute" }), ' '] })) : undefined;
    const giftTag = hasGift ? ((0, jsx_runtime_1.jsxs)("div", { className: "w-fit", children: [(0, jsx_runtime_1.jsx)(atoms_1.AtTag, { text: "Regalo con compra", variant: "flag" }), ' '] })) : undefined;
    if (isMD) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2 flex-1 ", children: [textContent, colorPickerElement, presellTag, ratingProps && (0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, ratingProps))] }), (0, jsx_runtime_1.jsxs)("div", { className: "border-l border-l-carbon-75 border-solid px-8 justify-center flex flex-col gap-2", children: [(0, jsx_runtime_1.jsx)(atoms_1.AtPrice, Object.assign({}, priceProps)), giftTag, (0, jsx_runtime_1.jsx)(ShippingAndPickup, { shippingMessage: shippingMessage, pickupMessage: pickupMessage })] })] }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "gap-2 flex flex-col", children: [textContent, colorPickerElement, (0, jsx_runtime_1.jsx)(atoms_1.AtPrice, Object.assign({}, priceProps)), giftTag, presellTag, (0, jsx_runtime_1.jsxs)("div", { children: [ratingProps && (0, jsx_runtime_1.jsx)(ml_review_1.MlReview, Object.assign({}, ratingProps)), (0, jsx_runtime_1.jsx)(ShippingAndPickup, { shippingMessage: shippingMessage, pickupMessage: pickupMessage })] })] }));
};
const MlCardProduct = (_a) => {
    var { shippingDate, pickupDate } = _a, props = __rest(_a, ["shippingDate", "pickupDate"]);
    const { imageSliderProps, layout = 'grid', 'data-testid': dataTestId = 'ml-card-product' } = props;
    const shippingMessage = (0, react_1.useMemo)(() => (shippingDate ? getShippingMessage(shippingDate) : ''), [shippingDate]);
    const pickupMessage = (0, react_1.useMemo)(() => (pickupDate ? getPickupMessage(pickupDate) : ''), [pickupDate]);
    const contentProps = Object.assign(Object.assign({}, props), { pickupMessage,
        shippingMessage });
    return ((0, jsx_runtime_1.jsxs)("section", { className: mlCardProductVariants({ layout }), "data-testid": dataTestId, children: [imageSliderProps && ((0, jsx_runtime_1.jsx)("div", { className: productImageContainerVariants({ layout }), children: (0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, imageSliderProps)) })), (0, jsx_runtime_1.jsx)("div", { className: contentContainerVariants({ layout }), children: layout === 'grid' ? ((0, jsx_runtime_1.jsx)(CardProductGridContent, Object.assign({}, contentProps))) : ((0, jsx_runtime_1.jsx)(CardProductListContent, Object.assign({}, contentProps))) })] }));
};
exports.MlCardProduct = MlCardProduct;
