/// <reference types="react" />
import { VariantProps } from 'class-variance-authority';
declare const priceStyles: (props?: ({
    variant?: "simple" | "simple-discount" | "range" | "range-discount" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type PriceVariantProps = VariantProps<typeof priceStyles>;
export interface AtPriceProps extends PriceVariantProps {
    amount: number | [number, number];
    discount?: number;
    isPercentageDiscount?: boolean;
    'data-testid'?: string;
    locale?: Intl.LocalesArgument;
}
export declare const AtPrice: React.FC<AtPriceProps>;
export {};
//# sourceMappingURL=at-price.d.ts.map