"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarFull = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const StarFull = ({ size = 20, color = '#FFD457', name = '' }) => {
    return ((0, jsx_runtime_1.jsx)("svg", { "aria-label": name, fill: "none", height: size, viewBox: "0 0 20 19", width: size, xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { "clip-rule": "evenodd", d: "M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z", fill: color, "fill-rule": "evenodd" }) }));
};
exports.StarFull = StarFull;
