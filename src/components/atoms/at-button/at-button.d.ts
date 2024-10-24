import React, { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const atButtonVariants: (props?: ({
    size?: "md" | "lg" | "color-picker" | "color-picker-more" | null | undefined;
    variant?: "color-picker" | "primary" | "primary-invert" | "secondary" | "secondary-invert" | "tertiary" | "tertiary-invert" | null | undefined;
    borderRadius?: "none" | "rounded" | "full" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type AtButtonVariantProps = VariantProps<typeof atButtonVariants>;
export type AtButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & PropsWithChildren<AtButtonVariantProps> & {
    /**
     * Specify whether to render as a 'button' or an 'a' (anchor)
     */
    As?: 'button' | 'a';
    /**
     * The button label
     */
    label?: string;
    /**
     * The href attribute for the link (used if As="a")
     */
    href?: string;
    'data-testId'?: string;
};
export declare const AtButton: ({ As, borderRadius, label, variant, size, href, children, "data-testId": testId, ...props }: AtButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=at-button.d.ts.map