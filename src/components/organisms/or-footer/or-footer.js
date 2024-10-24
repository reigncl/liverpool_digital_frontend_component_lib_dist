"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrFooter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const molecules_1 = require("../../molecules");
const orFooterVariants = (0, class_variance_authority_1.cva)('', {
    variants: {},
    defaultVariants: {},
});
const OrFooter = ({ menuItems, menuLink, description, socialMedia, content, extraContent }) => {
    const footerClass = orFooterVariants();
    return ((0, jsx_runtime_1.jsxs)("footer", { className: footerClass, children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-footer-primary", children: (0, jsx_runtime_1.jsxs)("div", { className: "container justify-between pt-8", children: [(0, jsx_runtime_1.jsxs)("nav", { "aria-label": "Footer Navigation Mobile", className: "xl:hidden", children: [menuItems.map((menu) => {
                                    var _a, _b;
                                    return ((0, jsx_runtime_1.jsx)(molecules_1.MlCollapse, { label: menu.label, name: "footer-menu", children: (0, jsx_runtime_1.jsx)(molecules_1.MlLinkList, { fontColor: "white", links: (_b = (_a = menu.items) === null || _a === void 0 ? void 0 : _a.map((item) => ({ label: item.label, href: item.url, fontColor: 'white' }))) !== null && _b !== void 0 ? _b : [] }) }, menu.label));
                                }), content && ((0, jsx_runtime_1.jsx)("div", { className: "py-10", children: (0, jsx_runtime_1.jsx)(molecules_1.MlRichText, { fontColor: "white", fontSize: "body-sm", jsonRte: content }) }))] }), (0, jsx_runtime_1.jsxs)("nav", { "aria-label": "Footer Navigation", className: "hidden xl:flex justify-between pb-14", children: [menuItems.map((menu) => {
                                    var _a, _b;
                                    return ((0, jsx_runtime_1.jsx)(molecules_1.MlLinkList, { fontColor: "white", links: (_b = (_a = menu.items) === null || _a === void 0 ? void 0 : _a.map((item) => ({ label: item.label, href: item.url, fontColor: 'white' }))) !== null && _b !== void 0 ? _b : [], title: menu.label }, menu.label));
                                }), content && (0, jsx_runtime_1.jsx)(molecules_1.MlRichText, { fontColor: "white", fontSize: "body-sm", jsonRte: content })] }), (0, jsx_runtime_1.jsx)("hr", { className: "bg-white" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between flex-col xl:flex-row py-8 gap-y-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-center text-caption", children: description }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-1 justify-center", children: menuLink.map(({ label, url, target }, index) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(atoms_1.AtLink, { href: url, label: label, target: target, textClasses: "text-white text-center", variant: "caption" }), index < menuLink.length - 1 && (0, jsx_runtime_1.jsx)("span", { className: "text-white", children: "/" })] }, label))) }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-4 justify-center items-center", children: socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.map((social) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(atoms_1.AtLink, { altText: social.label, href: social.url, iconProps: {
                                                    color: 'white',
                                                    name: social.icon,
                                                    size: social.icon === 'profeco' || social.icon === 'distintivo' ? '2xl' : 'base',
                                                }, target: social.target }), social.icon === 'profeco' && (0, jsx_runtime_1.jsx)("span", { className: "h-3 border-r-[0.5px] border-white" })] }, `icon-footer-${social.label}`))) })] })] }) }), extraContent && ((0, jsx_runtime_1.jsx)("div", { className: "bg-footer-secondary", children: (0, jsx_runtime_1.jsx)("div", { className: "container flex flex-col text-center gap-y-3 py-6", children: (0, jsx_runtime_1.jsx)(molecules_1.MlRichText, { alignment: "center", fontColor: "white", fontSize: "caption", jsonRte: extraContent }) }) }))] }));
};
exports.OrFooter = OrFooter;
