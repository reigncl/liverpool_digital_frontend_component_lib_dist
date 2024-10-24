/// <reference types="react" />
import { type VariantProps } from 'class-variance-authority';
import { AtImageProps } from '../../atoms/at-image/at-image';
declare const mlPictureVariants: (props?: ({
    media?: "md" | "lg" | "sm" | "xl" | "2xl" | "xs" | "3xl" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlPictureVariantProps = VariantProps<typeof mlPictureVariants>;
export interface MlPictureSource extends React.SourceHTMLAttributes<HTMLSourceElement> {
    screenType?: MlPictureVariantProps['media'];
    type?: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp' | 'image/svg+xml' | 'image/avif';
}
export interface MlPictureProps extends MlPictureVariantProps {
    sources?: Array<MlPictureSource>;
    defaultImage?: AtImageProps;
}
export declare const MlPicture: ({ sources: allSources, defaultImage }: MlPictureProps) => import("react/jsx-runtime").JSX.Element | undefined;
export {};
//# sourceMappingURL=ml-picture.d.ts.map