"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarEmpty = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StarEmpty = ({ size = 20, color = '#C0C0C0', name = '' }) => {
    return ((0, jsx_runtime_1.jsx)("svg", { "aria-label": name, fill: "none", height: size, viewBox: "0 0 20 19", width: size, xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { "clip-rule": "evenodd", d: "M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z", fill: color, "fill-rule": "evenodd" }) }));
};
exports.StarEmpty = StarEmpty;
