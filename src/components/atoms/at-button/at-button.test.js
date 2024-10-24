"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const at_button_1 = require("./at-button");
exports.buttonProps = {
    label: 'Button Label',
    variant: 'primary',
};
(0, vitest_1.describe)('components/button', () => {
    (0, vitest_1.it)('Renders base button', () => {
        const { label, variant } = exports.buttonProps;
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: label, variant: variant }));
        (0, vitest_1.expect)(at_button_1.AtButton).toBeTruthy();
        const currentLabel = getByText(String(label));
        (0, vitest_1.expect)(currentLabel).toBeInTheDocument();
    });
});
(0, vitest_1.describe)('AtButton Component', () => {
    (0, vitest_1.it)('renders as a button by default', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Test Button" }));
        const buttonElement = getByTestId('button');
        (0, vitest_1.expect)(buttonElement).toBeInTheDocument();
        (0, vitest_1.expect)(buttonElement.tagName).toBe('BUTTON');
        (0, vitest_1.expect)(buttonElement).toHaveTextContent('Test Button');
    });
    (0, vitest_1.it)('renders as an anchor when As="a"', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { As: "a", href: "https://liverpool.com.mx", label: "Test Link" }));
        const linkElement = getByTestId('link');
        (0, vitest_1.expect)(linkElement).toBeInTheDocument();
        (0, vitest_1.expect)(linkElement.tagName).toBe('A');
        (0, vitest_1.expect)(linkElement).toHaveAttribute('href', 'https://liverpool.com.mx');
        (0, vitest_1.expect)(linkElement).toHaveTextContent('Test Link');
    });
    (0, vitest_1.it)('applies the correct variant and size classes', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Styled Button", size: "lg", variant: "secondary" }));
        const buttonElement = getByTestId('button');
        const className = buttonElement.className;
        // Check size 'lg' classes
        (0, vitest_1.expect)(className).toContain('px-6');
        (0, vitest_1.expect)(className).toContain('py-3');
        (0, vitest_1.expect)(className).toContain('gap-4');
        (0, vitest_1.expect)(className).toContain('h-fit');
        (0, vitest_1.expect)(className).toContain('min-h-6');
        (0, vitest_1.expect)(className).toContain('text-body-base');
        // Check variant 'secondary' classes
        (0, vitest_1.expect)(className).toContain('bg-transparent');
        (0, vitest_1.expect)(className).toContain('text-prim-500');
        (0, vitest_1.expect)(className).toContain('border');
        (0, vitest_1.expect)(className).toContain('border-solid');
        (0, vitest_1.expect)(className).toContain('border-prim-500');
    });
    (0, vitest_1.it)('applies default variant and size when none are specified', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Default Button" }));
        const buttonElement = getByTestId('button');
        const className = buttonElement.className;
        // Default size is 'md'
        (0, vitest_1.expect)(className).toContain('py-3');
        (0, vitest_1.expect)(className).toContain('px-4');
        (0, vitest_1.expect)(className).toContain('gap-3');
        (0, vitest_1.expect)(className).toContain('h-fit');
        (0, vitest_1.expect)(className).toContain('min-h-4');
        (0, vitest_1.expect)(className).toContain('text-body-sm');
        // Default variant is 'primary'
        (0, vitest_1.expect)(className).toContain('text-white');
        (0, vitest_1.expect)(className).toContain('bg-cta-primary');
    });
    (0, vitest_1.it)('sets data-testId correctly', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Test Button" }));
        const buttonElement = getByTestId('button');
        (0, vitest_1.expect)(buttonElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('allows custom data-testId', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { "data-testId": "custom-id", label: "Custom Test ID" }));
        const buttonElement = getByTestId('custom-id');
        (0, vitest_1.expect)(buttonElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders children over label when both are provided', () => {
        const { getByText, queryByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Label Text", children: (0, jsx_runtime_1.jsx)("span", { children: "Child Text" }) }));
        (0, vitest_1.expect)(getByText('Child Text')).toBeInTheDocument();
        (0, vitest_1.expect)(queryByText('Label Text')).not.toBeInTheDocument();
    });
    (0, vitest_1.it)('passes other props to the button element', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { "data-extra": "extra-data", id: "test-id", label: "Button with Props" }));
        const buttonElement = getByTestId('button');
        (0, vitest_1.expect)(buttonElement).toHaveAttribute('id', 'test-id');
        (0, vitest_1.expect)(buttonElement).toHaveAttribute('data-extra', 'extra-data');
    });
    (0, vitest_1.it)('handles onClick event', () => {
        const handleClick = vitest_1.vi.fn();
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { label: "Clickable Button", onClick: handleClick }));
        const buttonElement = getByTestId('button');
        react_1.fireEvent.click(buttonElement);
        (0, vitest_1.expect)(handleClick).toHaveBeenCalledTimes(1);
    });
    (0, vitest_1.it)('renders disabled button when disabled is true', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_button_1.AtButton, { disabled: true, label: "Disabled Button" }));
        const buttonElement = getByTestId('button');
        (0, vitest_1.expect)(buttonElement).toBeDisabled();
    });
});
