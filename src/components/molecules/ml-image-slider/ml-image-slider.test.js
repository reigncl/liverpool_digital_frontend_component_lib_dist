"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const vitest_1 = require("vitest");
const ml_image_slider_1 = require("./ml-image-slider");
// Mock images data for testing
const mockImages = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
];
(0, vitest_1.describe)('MlImageSlider', () => {
    (0, vitest_1.beforeEach)(() => {
        vitest_1.vi.clearAllMocks();
    });
    (0, vitest_1.it)('renders without crashing', () => {
        const props = { images: mockImages };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, props)));
        const firstImage = react_1.screen.getAllByAltText('Image 1')[0];
        (0, vitest_1.expect)(firstImage).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders correctly with only one image', () => {
        const props = { images: [mockImages[0]] };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, props)));
        const singleImage = react_1.screen.getAllByAltText('Image 1')[0];
        (0, vitest_1.expect)(singleImage).toBeInTheDocument();
        const secondImage = react_1.screen.queryByAltText('Image 2');
        (0, vitest_1.expect)(secondImage).not.toBeInTheDocument();
    });
    (0, vitest_1.it)('changes images on hover (desktop view)', () => {
        const props = { images: mockImages };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, props)));
        const container = react_1.screen.getAllByAltText('Image 1')[0].parentElement;
        react_1.fireEvent.mouseEnter(container);
        const secondImage = react_1.screen.getAllByAltText('Image 2')[0];
        (0, vitest_1.expect)(secondImage).toBeInTheDocument();
    });
    (0, vitest_1.it)('handles touch events to swipe through images (mobile view)', () => {
        const props = { images: mockImages };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, props)));
        const slider = react_1.screen.getByRole('presentation');
        react_1.fireEvent.touchStart(slider, { touches: [{ clientX: 100 }] });
        react_1.fireEvent.touchStart(slider, { touches: [{ clientX: 100 }] });
        react_1.fireEvent.touchMove(slider, { touches: [{ clientX: 50 }] });
        react_1.fireEvent.touchEnd(slider);
        const currentImage = react_1.screen.getAllByAltText('Image 2')[0];
        (0, vitest_1.expect)(currentImage).toBeInTheDocument();
    });
    (0, vitest_1.it)('clicking the progress bar changes the current image', () => {
        const props = { images: mockImages };
        (0, react_1.render)((0, jsx_runtime_1.jsx)(ml_image_slider_1.MlImageSlider, Object.assign({}, props)));
        const progressBar = react_1.screen.getByRole('progressbar');
        react_1.fireEvent.click(progressBar, {
            clientX: 100,
            currentTarget: { offsetWidth: 200, getBoundingClientRect: () => ({ left: 0 }) },
        });
        const currentImage = react_1.screen.getAllByAltText('Image 2')[0];
        (0, vitest_1.expect)(currentImage).toBeInTheDocument();
    });
});
