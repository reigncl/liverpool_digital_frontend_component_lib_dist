import { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const aspectRatioVariants: (props?: ({
    ratio?: "1:1" | "5:4" | "4:3" | "3:2" | "16:9" | "2:1" | "4:5" | "3:4" | "2:3" | "9:16" | "1:2" | null | undefined;
    position?: "relative" | null | undefined;
    overflow?: "hidden" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type AspectRatioVariantProps = VariantProps<typeof aspectRatioVariants>;
export type AspectRatioProps = PropsWithChildren<AspectRatioVariantProps>;
export declare const AspectRatio: ({ ratio, children, position, overflow }: AspectRatioProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=aspect-ratio.d.ts.map