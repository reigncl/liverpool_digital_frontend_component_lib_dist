import { VariantProps } from 'class-variance-authority';
import type { ReactElement } from 'react';
import { AtPriceProps } from '../../atoms';
import { MlPictureProps } from '../ml-picture';
/**
 * Interface for the MlCardProductRecommendation component props.
 */
export interface MlCardProductRecommendationProps extends MlCardProductVariantProps {
    /** Additional custom class names */
    className?: string;
    /** Data test ID for testing purposes */
    'data-testid'?: string;
    /** Price component properties */
    price: AtPriceProps;
    /** Brand name of the product */
    brandName: string;
    /** Product image properties */
    productImage: MlPictureProps;
}
/**
 * Variants for the MlCardProductRecommendation component styling.
 */
export declare const mlCardProductRecommendationVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
/** Type for variant properties derived from mlCardProductRecommendationVariants */
export type MlCardProductVariantProps = VariantProps<typeof mlCardProductRecommendationVariants>;
/**
 * Component to display a product recommendation card.
 *
 * @param {MlCardProductRecommendationProps} props - Component properties.
 * @returns {ReactElement} The rendered product recommendation card.
 */
export declare const MlCardProductRecommendation: ({ className, variant, productImage, price, brandName, "data-testid": testid, }: MlCardProductRecommendationProps) => ReactElement;
//# sourceMappingURL=ml-card-product-recommendation.d.ts.map