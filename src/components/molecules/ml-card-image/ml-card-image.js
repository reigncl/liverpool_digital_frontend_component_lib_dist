"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlCardImage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const ml_picture_1 = require("../ml-picture");
const foundations_1 = require("../../foundations");
/**
 * Box
 */
const boxBase = (0, class_variance_authority_1.cva)(['flex flex-col gap-2 p-3'], {
    variants: {
        box: {
            fullUnder: '',
            fullOver: 'bg-white  absolute bottom-[-44px] rounded-md w-fill-available mx-3 shadow-md',
            simpeUnder: '',
        },
        alignText: {
            center: 'items-center text-center',
            left: 'items-start',
        },
        textSize: {
            base: 'text-body-base',
            lg: 'text-body-lg',
            xl: 'text-body-xl',
        },
    },
    defaultVariants: {
        alignText: 'center',
        textSize: 'base',
    },
});
const mlCardImageVariants = (0, class_variance_authority_1.cva)('w-full h-full relative', {
    variants: {},
    defaultVariants: {},
});
const MlCardImage = ({ sources, defaultImage, ratio, title, description, box, alignText, textSize, shadow, linkProps, }) => {
    const cardImageClass = mlCardImageVariants();
    const boxClass = boxBase({ box, alignText, textSize });
    return ((0, jsx_runtime_1.jsx)(atoms_1.AtLink, Object.assign({}, linkProps, { variant: "unstyled", children: (0, jsx_runtime_1.jsxs)("div", { className: cardImageClass, children: [(0, jsx_runtime_1.jsx)(foundations_1.AspectRatio, { ratio: ratio, children: (0, jsx_runtime_1.jsx)(ml_picture_1.MlPicture, { defaultImage: Object.assign({ rounded: 'xl', shadow: shadow }, defaultImage), sources: sources }) }), box && ((0, jsx_runtime_1.jsxs)("div", { className: boxClass, children: [title && (0, jsx_runtime_1.jsx)("p", { className: "text-base font-semibold", children: title }), description && (box === 'fullOver' || box === 'fullUnder') && ((0, jsx_runtime_1.jsx)("p", { className: "text-base truncate-paragraph", children: description }))] }))] }) })));
};
exports.MlCardImage = MlCardImage;
