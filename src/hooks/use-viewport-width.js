"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewportWidth = void 0;
const react_1 = require("react");
function useViewportWidth() {
    const [windowWidth, setWindowWidth] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        setWindowWidth(window.innerWidth);
        function handleWindowSizeChange() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return windowWidth;
}
exports.useViewportWidth = useViewportWidth;
