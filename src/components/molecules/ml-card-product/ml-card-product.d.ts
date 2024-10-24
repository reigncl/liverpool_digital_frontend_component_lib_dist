import { type ReactElement } from 'react';
import { AtPriceProps } from '../../atoms';
import { MlColorPickerProps } from '../ml-color-picker';
import { MlReviewProps } from '../ml-review/ml-review';
import { VariantProps } from 'class-variance-authority';
import { MlImageSliderProps } from '../ml-image-slider';
export interface MlCardProductProps {
    'data-testid'?: string;
    isPreSell?: boolean;
    hasGift?: boolean;
    /** The product title */
    title: string;
    /** The brand name */
    brandName: string;
    /** Whether the product is sponsored */
    isSponsored?: boolean;
    /** Props for the price component */
    priceProps: AtPriceProps;
    /** Props for the color picker component */
    colorPickerProps?: MlColorPickerProps;
    /** Props for the review component */
    ratingProps?: MlReviewProps;
    /** Source URL for the product image */
    imageSliderProps?: MlImageSliderProps;
    /** Layout variant: 'grid' or 'list' */
    layout?: 'grid' | 'list';
    shippingDate?: Date;
    pickupDate?: Date;
}
declare const mlCardProductVariants: (props?: ({
    layout?: "grid" | "list" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlCardProductVariantProps = VariantProps<typeof mlCardProductVariants>;
export declare const MlCardProduct: ({ shippingDate, pickupDate, ...props }: MlCardProductProps) => ReactElement;
export {};
//# sourceMappingURL=ml-card-product.d.ts.map