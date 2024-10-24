"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtIcon = exports.icons = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const Icon_1 = __importDefault(require("@mui/material/Icon"));
const free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = require("react");
const icons_1 = require("./icons");
const iconVariants = (0, class_variance_authority_1.cva)(``, {
    variants: {
        size: {
            sm: '16px',
            base: '24px',
            md: '32px',
            lg: '40px',
            xl: '48px',
            '2xl': '64px',
            rating: '20px',
        },
        variant: {
            material: 'material-icons',
            materialOutlined: 'material-icons-outlined',
            materialRound: 'material-icons-round',
            materialSharp: 'material-icons-sharp',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        size: 'base',
    },
});
const socialMedia = ['facebook', 'instagram', 'X'];
const svgIcons = ['profeco', 'distintivo', 'star_empty', 'star_full', 'star_half', 'store', 'truck'];
exports.icons = {
    distintivo: (props) => (0, jsx_runtime_1.jsx)(icons_1.DistintivoIcon, Object.assign({}, props)),
    profeco: (props) => (0, jsx_runtime_1.jsx)(icons_1.ProfecoIcon, Object.assign({}, props)),
    star_empty: (props) => (0, jsx_runtime_1.jsx)(icons_1.StarEmpty, Object.assign({}, props)),
    star_full: (props) => (0, jsx_runtime_1.jsx)(icons_1.StarFull, Object.assign({}, props)),
    star_half: (props) => (0, jsx_runtime_1.jsx)(icons_1.StarHalf, Object.assign({}, props)),
    store: (props) => (0, jsx_runtime_1.jsx)(icons_1.Store, Object.assign({}, props)),
    truck: (props) => (0, jsx_runtime_1.jsx)(icons_1.Truck, Object.assign({}, props)),
};
const AtIcon = ({ name, size, color, variant = 'material', className = '' }) => {
    const icon = (0, react_1.useMemo)(() => {
        switch (name) {
            case 'instagram':
                return free_brands_svg_icons_1.faInstagram;
            case 'facebook':
                return free_brands_svg_icons_1.faFacebookF;
            case 'X':
                return free_brands_svg_icons_1.faXTwitter;
            default:
                break;
        }
    }, [name]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: socialMedia.includes(name) && icon ? ((0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { "aria-label": name, icon: icon, style: { fontSize: iconVariants({ size }), color: color } })) : svgIcons.includes(name) ? (exports.icons[name]({ size: parseInt(iconVariants({ size }).split('px')[0]), color, name })) : ((0, jsx_runtime_1.jsx)(Icon_1.default, { "aria-label": name, baseClassName: `${iconVariants({ variant })} ${className}`, sx: { fontSize: iconVariants({ size }), color: color }, children: name })) }));
};
exports.AtIcon = AtIcon;
