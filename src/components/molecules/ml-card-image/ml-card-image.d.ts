import { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { AtLinkProps } from '../../atoms';
import { MlPictureProps } from '../ml-picture';
import { AspectRatioVariantProps } from '../../foundations';
/**
 * Box
 */
declare const boxBase: (props?: ({
    box?: "fullUnder" | "fullOver" | "simpeUnder" | null | undefined;
    alignText?: "center" | "left" | null | undefined;
    textSize?: "base" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const mlCardImageVariants: (props?: ({} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlCardImageVariantProps = VariantProps<typeof mlCardImageVariants>;
export type MlCardImageBoxVariantProps = VariantProps<typeof boxBase>;
export type MlCardImageProps = PropsWithChildren<MlCardImageVariantProps & MlCardImageBoxVariantProps> & MlPictureProps & Pick<AspectRatioVariantProps, 'ratio'> & {
    linkProps: AtLinkProps;
    /**
     * The colors to display
     */
    title?: string;
    /**
     * The active color
     */
    description?: string;
    shadow?: 'md';
};
export declare const MlCardImage: ({ sources, defaultImage, ratio, title, description, box, alignText, textSize, shadow, linkProps, }: MlCardImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ml-card-image.d.ts.map