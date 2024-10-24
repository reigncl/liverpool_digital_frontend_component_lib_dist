import { VariantProps } from 'class-variance-authority';
declare const mlRichTextVariant: (props?: ({
    alignment?: "center" | "left" | "right" | null | undefined;
    heading?: "title" | "subtitle" | null | undefined;
    img?: "default" | null | undefined;
    link?: "default" | null | undefined;
    ol?: "default" | null | undefined;
    ul?: "default" | null | undefined;
    imgSize?: "default" | null | undefined;
    fontSize?: "base" | "caption" | "body-sm" | null | undefined;
    fontColor?: "base" | "white" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlRichTextVariantProps = VariantProps<typeof mlRichTextVariant>;
export interface MlRichTextProps extends MlRichTextVariantProps {
    headingLevel?: 1 | 2;
    jsonRte: {};
}
export declare const MlRichText: ({ alignment, fontColor, fontSize, headingLevel, jsonRte }: MlRichTextProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ml-rich-text.d.ts.map