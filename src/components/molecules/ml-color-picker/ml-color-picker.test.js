"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest"); // vitest imports
const ml_color_picker_1 = require("./ml-color-picker");
// Mock props for testing
const mockColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
const mockOnChangeColor = vitest_1.vi.fn();
const mockOnPlusButtonClick = vitest_1.vi.fn();
(0, vitest_1.describe)('MlColorPicker component', () => {
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
    });
    (0, vitest_1.it)('renders correct number of color options', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { colors: mockColors, onChangeColor: mockOnChangeColor, onPlusButtonClick: mockOnPlusButtonClick }));
        // Check that five color buttons are rendered
        const colorButtons = react_1.screen.getAllByLabelText('color');
        (0, vitest_1.expect)(colorButtons.length).toBe(5);
        // Check that the "add color" button is also rendered
        const addColorButton = react_1.screen.getByLabelText('add color');
        (0, vitest_1.expect)(addColorButton).toBeInTheDocument();
    });
    (0, vitest_1.it)('handles color change correctly', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { activeColor: "#00ff00", colors: mockColors, onChangeColor: mockOnChangeColor, onPlusButtonClick: mockOnPlusButtonClick }));
        // Simulate clicking on a color button (e.g., red)
        const redColorButton = react_1.screen.getAllByLabelText('color')[0]; // First button is red
        react_1.fireEvent.click(redColorButton);
        // Expect the onChangeColor callback to be called with the correct color
        (0, vitest_1.expect)(mockOnChangeColor).toHaveBeenCalledWith('#ff0000');
    });
    (0, vitest_1.it)('triggers onPlusButtonClick when "add color" button is clicked', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { activeColor: "#00ff00", colors: mockColors, onChangeColor: mockOnChangeColor, onPlusButtonClick: mockOnPlusButtonClick }));
        // Simulate clicking on the "add color" button
        const addColorButton = react_1.screen.getByLabelText('add color');
        react_1.fireEvent.click(addColorButton);
        // Expect the onPlusButtonClick callback to be called
        (0, vitest_1.expect)(mockOnPlusButtonClick).toHaveBeenCalledTimes(1);
    });
    (0, vitest_1.it)('sets the correct active color on initial render', () => {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_color_picker_1.MlColorPicker, { activeColor: "#00ff00", colors: mockColors, onChangeColor: mockOnChangeColor, onPlusButtonClick: mockOnPlusButtonClick }));
        // Expect the green color to be initially active
        const activeButton = react_1.screen
            .getAllByLabelText('color')
            .find((button) => button.style.backgroundColor === 'rgb(0, 255, 0)');
        (0, vitest_1.expect)(activeButton).toBeInTheDocument();
    });
});
