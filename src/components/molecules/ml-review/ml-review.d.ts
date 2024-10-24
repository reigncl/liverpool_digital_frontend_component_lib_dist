import React from 'react';
import { VariantProps } from 'class-variance-authority';
declare const mlReviewVariant: (props?: ({
    container?: "main" | "rating" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlReviewVariantProps = VariantProps<typeof mlReviewVariant>;
export interface MlReviewProps extends MlReviewVariantProps {
    dataTestId?: string;
    rating?: number;
    reviewsNum?: number;
}
export declare const MlReview: React.FC<MlReviewProps>;
export {};
//# sourceMappingURL=ml-review.d.ts.map