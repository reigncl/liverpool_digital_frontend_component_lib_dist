import { PropsWithChildren, type ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';
import 'swiper/css';
/**
 * Define the styles using cva for the band.
 */
declare const mlBandVariants: (props?: ({
    content?: "link" | "button" | "icon" | "slide" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlBandVariantProps = VariantProps<typeof mlBandVariants>;
/**
 * Props for the MlBand component.
 */
export type MlBandProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren<MlBandVariantProps> & {
    /** The labels to display in the band. */
    labels: Label[];
    /** Data-testid attribute for testing purposes. */
    'data-testid'?: string;
};
interface Label {
    /** The text to display in the label. */
    label: Statement[];
    /** The URL to navigate to when the label is clicked. */
    url?: string;
}
interface Statement {
    /** The text to display. */
    text: string;
    /** The style to apply to the text. */
    style?: {
        fontWeight?: 'bold' | 'semibold';
        color?: 'pink' | 'black';
    };
}
/**
 * The MlBand component is a carousel in React that displays up to 10 labels with custom styles and button navigation.
 * It uses Swiper to automatically or manually swipe between labels.
 *
 * @param props - The properties for the MlBand component.
 * @returns The rendered MlBand component.
 */
export declare const MlBand: (props: MlBandProps) => ReactElement;
export {};
//# sourceMappingURL=ml-band.d.ts.map