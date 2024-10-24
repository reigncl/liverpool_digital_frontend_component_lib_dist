"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewport = exports.ViewportProvider = exports.ViewportContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const use_viewport_width_1 = require("../hooks/use-viewport-width");
/**
 * Configuration object mapping Tailwind CSS breakpoints to their pixel values.
 */
const screenConfig = {
    xs: '430px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};
/**
 * An array of screen objects derived from the screenConfig, each containing a key and min width.
 */
const screens = getScreens(screenConfig);
/**
 * React context for providing viewport size information.
 */
exports.ViewportContext = (0, react_1.createContext)({});
/**
 * ViewportProvider component that provides viewport size context to its children.
 *
 * @param props - The properties for the ViewportProvider.
 * @returns The provider component wrapping its children.
 */
function ViewportProvider({ children }) {
    const windowWidth = (0, use_viewport_width_1.useViewportWidth)();
    /**
     * Memoized calculation of the viewport size booleans based on the current window width.
     */
    const isTailwindViewport = (0, react_1.useMemo)(() => {
        if (windowWidth) {
            return getIsIThemeViewports(screens, windowWidth);
        }
        return {};
    }, [windowWidth]);
    return (0, jsx_runtime_1.jsx)(exports.ViewportContext.Provider, { value: Object.assign({}, isTailwindViewport), children: children });
}
exports.ViewportProvider = ViewportProvider;
/**
 * Custom hook to access the viewport size context.
 *
 * @returns The current viewport size booleans.
 * @throws Will throw an error if used outside of a ViewportProvider.
 */
function useViewport() {
    const context = (0, react_1.useContext)(exports.ViewportContext);
    if (!context) {
        throw new Error('useViewport must be used within a ViewportProvider');
    }
    return context;
}
exports.useViewport = useViewport;
/**
 * Converts a configuration object of screen sizes into an array of IScreen objects.
 *
 * @param config - The screen configuration object.
 * @returns An array of screen objects with keys and minimum widths.
 */
function getScreens(config) {
    return Object.keys(config).reduce((accumulator, key) => {
        const screenSizeMatch = config[key].match(/\d+/);
        if (screenSizeMatch) {
            const screen = {
                key: `is${key.toUpperCase()}`,
                min: parseInt(screenSizeMatch[0], 10),
            };
            accumulator.push(screen);
        }
        return accumulator;
    }, []);
}
/**
 * Determines which breakpoints the current window width satisfies.
 *
 * @param screens - The array of screen breakpoints.
 * @param windowWidth - The current window width in pixels.
 * @returns An object mapping breakpoint keys to booleans indicating if the window width satisfies them.
 */
function getIsIThemeViewports(screens, windowWidth) {
    return screens.reduce((accumulator, screen) => {
        accumulator[screen.key] = windowWidth >= screen.min;
        return accumulator;
    }, {});
}
