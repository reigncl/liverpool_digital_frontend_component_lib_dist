"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom/vitest");
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vitest_1.vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vitest_1.vi.fn(),
        removeListener: vitest_1.vi.fn(),
        addEventListener: vitest_1.vi.fn(),
        removeEventListener: vitest_1.vi.fn(),
        dispatchEvent: vitest_1.vi.fn(),
    })),
});
(0, vitest_1.afterEach)(() => {
    (0, react_1.cleanup)();
});
