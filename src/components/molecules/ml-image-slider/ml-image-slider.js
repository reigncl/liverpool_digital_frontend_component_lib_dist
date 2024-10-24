"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MlImageSlider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const class_variance_authority_1 = require("class-variance-authority");
const react_1 = require("react");
const at_image_1 = require("../../atoms/at-image/at-image");
const __1 = require("../../..");
const mlImageSliderVariants = (0, class_variance_authority_1.cva)('w-45 lg:w-55', {
    variants: {},
    defaultVariants: {},
});
const MlImageSlider = ({ images }) => {
    const [hovered, setHovered] = (0, react_1.useState)(false);
    const [delayedHover, setDelayedHover] = (0, react_1.useState)(false);
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    const [startX, setStartX] = (0, react_1.useState)(0);
    const sliderRef = (0, react_1.useRef)(null);
    const sliderClass = mlImageSliderVariants();
    (0, react_1.useEffect)(() => {
        let timer;
        if (hovered) {
            timer = setTimeout(() => {
                setDelayedHover(true);
            }, 500);
        }
        else {
            clearTimeout(timer);
            setDelayedHover(false);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [hovered]);
    (0, react_1.useEffect)(() => {
        const slider = sliderRef.current;
        if (!slider)
            return;
        const handleDragStart = (e) => {
            e.preventDefault();
            setIsDragging(true);
            setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
        };
        const handleDragEnd = () => {
            setIsDragging(false);
        };
        const handleDrag = (e) => {
            if (!isDragging)
                return;
            const currentX = 'touches' in e ? e.touches[0].pageX : e.pageX;
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                }
                else {
                    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                }
                setIsDragging(false);
            }
        };
        slider.addEventListener('mousedown', handleDragStart);
        slider.addEventListener('touchstart', handleDragStart);
        slider.addEventListener('mousemove', handleDrag);
        slider.addEventListener('touchmove', handleDrag);
        slider.addEventListener('mouseup', handleDragEnd);
        slider.addEventListener('touchend', handleDragEnd);
        slider.addEventListener('mouseleave', handleDragEnd);
        return () => {
            slider.removeEventListener('mousedown', handleDragStart);
            slider.removeEventListener('touchstart', handleDragStart);
            slider.removeEventListener('mousemove', handleDrag);
            slider.removeEventListener('touchmove', handleDrag);
            slider.removeEventListener('mouseup', handleDragEnd);
            slider.removeEventListener('touchend', handleDragEnd);
            slider.removeEventListener('mouseleave', handleDragEnd);
        };
    }, [isDragging, startX, images.length]);
    const handleProgressBarClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const totalWidth = rect.width;
        const clickPercentage = clickPosition / totalWidth;
        const newIndex = Math.floor(clickPercentage * images.length);
        setCurrentIndex(newIndex);
    };
    if (images.length === 0)
        return null;
    if (images.length === 1)
        return ((0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(__1.AspectRatio, { ratio: "3:4", children: (0, jsx_runtime_1.jsx)(at_image_1.AtImage, Object.assign({}, images[0])) }) }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: sliderClass, children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden xl:block", onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: (0, jsx_runtime_1.jsxs)(__1.AspectRatio, { overflow: "hidden", position: "relative", ratio: "3:4", children: [(0, jsx_runtime_1.jsx)(at_image_1.AtImage, { alt: images[0].alt, position: "absolute", src: images[0].src, transform: delayedHover ? '-translate-x-full' : 'translate-x-0', transition: "duration-500" }), (0, jsx_runtime_1.jsx)(at_image_1.AtImage, { alt: images[1].alt, position: "absolute", src: images[1].src, transform: delayedHover ? 'translate-x-0' : 'translate-x-full', transition: "duration-500" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "xl:hidden", children: [(0, jsx_runtime_1.jsx)("div", { ref: sliderRef, className: "relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing", role: "presentation", style: { touchAction: 'pan-y', userSelect: 'none' }, children: (0, jsx_runtime_1.jsx)(__1.AspectRatio, { ratio: "3:4", children: images.map((src, index) => ((0, jsx_runtime_1.jsx)(at_image_1.AtImage, { alt: src.alt, position: "absolute", src: src.src, style: {
                                    transform: `translateX(${(index - currentIndex) * 100}%)`,
                                }, transition: "duration-500" }, index))) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full mt-0.5 relative", children: (0, jsx_runtime_1.jsx)("div", { "aria-label": "Image slider progress bar", className: "bg-carbon-50 rounded-full h-0.75 cursor-pointer", role: "progressbar", onClick: handleProgressBarClick, children: (0, jsx_runtime_1.jsx)("div", { className: "bg-carbon-300 rounded-full h-full absolute", style: {
                                    width: `${100 / images.length}%`,
                                    left: `${(currentIndex / images.length) * 100}%`,
                                } }) }) })] })] }));
};
exports.MlImageSlider = MlImageSlider;
