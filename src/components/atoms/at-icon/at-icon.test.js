"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const at_icon_1 = require("./at-icon");
exports.iconProps = {
    name: 'chevron_right',
    size: 'base',
};
(0, vitest_1.describe)('components/icon', () => {
    (0, vitest_1.it)('Renders default icon', () => {
        const { name, size } = exports.iconProps;
        const { getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_icon_1.AtIcon, { name: name, size: size }));
        (0, vitest_1.expect)(at_icon_1.AtIcon).toBeTruthy();
        const currentLabel = getByText(String(name));
        (0, vitest_1.expect)(currentLabel).toBeInTheDocument();
    });
    (0, vitest_1.it)('Renders icon with custom size , color and variant', () => {
        const customProps = {
            name: 'search',
            size: 'lg',
            color: '#FF0000',
            variant: 'materialOutlined',
        };
        const { getByLabelText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(at_icon_1.AtIcon, Object.assign({}, customProps)));
        const icon = getByLabelText('search');
        (0, vitest_1.expect)(icon).toBeInTheDocument();
        (0, vitest_1.expect)(icon).toHaveStyle('font-size: 40px'); // 'lg' size corresponds to 40px
        (0, vitest_1.expect)(icon).toHaveStyle('color: #FF0000');
        (0, vitest_1.expect)(icon).toHaveClass('material-icons-outlined');
    });
});
