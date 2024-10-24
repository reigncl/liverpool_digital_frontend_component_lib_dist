"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapseProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const ml_collapse_1 = require("./ml-collapse");
exports.collapseProps = {
    name: 'collapse-1',
    label: 'Title',
    children: (0, jsx_runtime_1.jsx)("p", { children: "This is a collapse content" }),
};
(0, vitest_1.describe)('components/molecules/ml-collapse', () => {
    (0, vitest_1.it)('Renders default collapse', () => {
        const { label } = exports.collapseProps;
        const { getByText, getByRole } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_collapse_1.MlCollapse, Object.assign({}, exports.collapseProps)));
        const details = getByRole('group');
        const currentLabel = getByText(String(label));
        getByText('This is a collapse content');
        (0, vitest_1.expect)(ml_collapse_1.MlCollapse).toBeTruthy();
        (0, vitest_1.expect)(currentLabel).toBeInTheDocument();
        (0, vitest_1.expect)(details).toHaveClass('flex items-center border-b border-carbon-500');
    });
    (0, vitest_1.it)('Starts closed content is not visible', () => {
        const { getByRole, getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_collapse_1.MlCollapse, Object.assign({}, exports.collapseProps)));
        const content = getByText('This is a collapse content');
        const details = getByRole('group');
        (0, vitest_1.expect)(content).not.toBeVisible();
        (0, vitest_1.expect)(details).not.toHaveAttribute('open');
    });
    (0, vitest_1.it)('On click opens and content visible', () => __awaiter(void 0, void 0, void 0, function* () {
        const { getByRole, getByText } = (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_collapse_1.MlCollapse, Object.assign({}, exports.collapseProps)));
        const details = getByRole('group');
        const button = react_1.screen.getByText(/title/i).closest('summary');
        const detailsContent = getByText('This is a collapse content');
        yield react_1.fireEvent.click(button);
        yield (0, react_1.waitFor)(() => {
            (0, vitest_1.expect)(details).toHaveAttribute('open');
            (0, vitest_1.expect)(button).toHaveAttribute('aria-expanded', 'true');
            (0, vitest_1.expect)(detailsContent).toBeVisible();
        });
    }));
});
