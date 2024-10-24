import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const atImageVariants: (props?: ({
    fit?: "none" | "fill" | "contain" | "cover" | "scale-down" | "cover-lg" | null | undefined;
    position?: "left-lg" | "absolute" | null | undefined;
    width?: "full" | null | undefined;
    height?: "full" | "auto" | null | undefined;
    maxHeight?: "screen" | null | undefined;
    transform?: "translate-x-full" | "translate-x-0" | "-translate-x-full" | null | undefined;
    transition?: "duration-500" | null | undefined;
    rounded?: "md" | "lg" | "none" | "full" | "xl" | "2xl" | null | undefined;
    shadow?: "md" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type AtImageVariantProps = VariantProps<typeof atImageVariants>;
export type AtImageProps = React.ImgHTMLAttributes<HTMLImageElement> & AtImageVariantProps;
export declare const AtImage: ({ src, alt, title, fit, width, height, maxHeight, position, transform, transition, rounded, shadow, ...props }: AtImageProps) => import("react/jsx-runtime").JSX.Element | undefined;
export {};
//# sourceMappingURL=at-image.d.ts.map