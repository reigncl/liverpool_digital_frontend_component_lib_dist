import { VariantProps } from 'class-variance-authority';
/**
 *  Variants used for product tagging in liverpool: Flag and Attribute (Atributo)
 */
declare const atTagVariant: (props?: ({
    variant?: "flag" | "attribute" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type AtTagVariantProps = VariantProps<typeof atTagVariant>;
export interface AtTagProps extends AtTagVariantProps {
    /** A string that represents the text label. */
    text: string;
    /** An optional string used for testing purposes to identify the element. */
    dataTestId?: string;
}
export declare const AtTag: ({ text, variant, dataTestId }: AtTagProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=at-tag.d.ts.map