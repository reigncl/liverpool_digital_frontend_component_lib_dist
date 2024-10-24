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
exports.MlCollapse = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const class_variance_authority_1 = require("class-variance-authority");
const atoms_1 = require("../../atoms");
const mlCollapseVariants = (0, class_variance_authority_1.cva)('flex items-center border-b border-carbon-500', {
    variants: {
        size: {
            md: 'text-body-base',
        },
        variant: {
            footer: 'text-white',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'footer',
    },
});
const MlCollapse = (_a) => {
    var { label, size, name, children, openCollape, variant, onToggleAction } = _a, props = __rest(_a, ["label", "size", "name", "children", "openCollape", "variant", "onToggleAction"]);
    const collapseClass = mlCollapseVariants({ size, variant });
    const sectionId = (0, react_1.useId)();
    const [isOpen, setIsOpen] = (0, react_1.useState)(openCollape);
    const handleToggle = (e) => {
        setIsOpen(e.currentTarget.open);
        onToggleAction === null || onToggleAction === void 0 ? void 0 : onToggleAction(e);
    };
    return (
    //@ts-ignore for the name prop
    (0, jsx_runtime_1.jsxs)("details", Object.assign({ className: collapseClass, name: name, open: openCollape, onToggle: handleToggle }, props, { children: [(0, jsx_runtime_1.jsxs)("summary", { "aria-controls": sectionId, "aria-expanded": isOpen, className: "flex items-center justify-between gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "flex-1 py-4 font-semibold", children: label }), (0, jsx_runtime_1.jsx)(atoms_1.AtIcon, { name: isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down' })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-1", id: sectionId, children: children })] })));
};
exports.MlCollapse = MlCollapse;
