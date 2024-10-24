import { type VariantProps } from 'class-variance-authority';
import { AtImageProps } from '../../atoms/at-image/at-image';
declare const mlImageSliderVariants: (props?: ({} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlImageSliderVariantProps = VariantProps<typeof mlImageSliderVariants>;
export interface MlImageSliderProps extends MlImageSliderVariantProps {
    images: AtImageProps[];
}
export declare const MlImageSlider: ({ images }: MlImageSliderProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=ml-image-slider.d.ts.map