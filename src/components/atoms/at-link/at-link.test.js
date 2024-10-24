"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const at_link_1 = require("./at-link");
exports.linkProps = {
    label: 'Link Label',
    variant: 'default',
};
(0, vitest_1.describe)('components/atoms/at-link', () => {
    (0, vitest_1.it)('Renders base link', () => {
        const { label, variant } = exports.linkProps;
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_link_1.AtLink, { label: label, variant: variant }));
        (0, vitest_1.expect)(at_link_1.AtLink).toBeTruthy();
        const currentLabel = getByText(String(label));
        (0, vitest_1.expect)(currentLabel).toBeInTheDocument();
    });
});
