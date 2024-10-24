"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const at_tag_1 = require("./at-tag");
(0, vitest_1.describe)('componentes/atoms/at-tag', () => {
    (0, vitest_1.describe)('when the component is created', () => {
        (0, vitest_1.it)('should render correctly', () => {
            const text = 'New product';
            const { container, getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_tag_1.AtTag, { text: text }));
            (0, vitest_1.expect)(container).toBeTruthy();
            (0, vitest_1.expect)(getByText(text)).toBeInTheDocument();
        });
        (0, vitest_1.it)('should render the variant flag correctly', () => {
            const text = 'Flag';
            const { container, getByText, getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_tag_1.AtTag, { text: text, variant: "flag" }));
            (0, vitest_1.expect)(container).toBeTruthy();
            (0, vitest_1.expect)(getByText(text)).toBeInTheDocument();
            (0, vitest_1.expect)(getByTestId('at-tag')).toHaveClass('bg-blue-50 font-semibold text-feedback-flag');
        });
        (0, vitest_1.it)('should render the variant attribute correctly', () => {
            const text = 'Attribute';
            const { container, getByText, getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_tag_1.AtTag, { text: text, variant: "attribute" }));
            (0, vitest_1.expect)(container).toBeTruthy();
            (0, vitest_1.expect)(getByText(text)).toBeInTheDocument();
            (0, vitest_1.expect)(getByTestId('at-tag')).toHaveClass('bg-carbon-50 text-base');
        });
    });
});
