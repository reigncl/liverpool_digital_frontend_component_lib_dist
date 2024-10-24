import { VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { AtIconProps } from '../at-icon/at-icon';
declare const atLinkVariant: (props?: ({
    variant?: "default" | "caption" | "lg" | "hover" | "underlined" | "unstyled" | null | undefined;
    fontColor?: "default" | "primary" | "white" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export declare enum IconPositions {
    LEFT = "left",
    RIGHT = "right"
}
export interface OnClickProps {
    gtmData?: any;
}
export type AtLinkVariantProps = VariantProps<typeof atLinkVariant>;
export interface AtLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, AtLinkVariantProps {
    /** An optional attribute that adds an aria label if the label prop is undefined. */
    altText?: string;
    /** An optional attribute that indicates the current page within a set of links. */
    ariaCurrent?: AnchorHTMLAttributes<HTMLAnchorElement>['aria-current'];
    /** An optional string used for testing purposes to identify the element. */
    dataTestId?: string;
    /** An optional property for passing Google Tag Manager data. */
    gtmData?: unknown;
    /** An optional property that determines the position of the icon relative to the label. It can be either `LEFT` or `RIGHT`. */
    iconPosition?: IconPositions;
    /** An optional object containing properties for the icon, such as type, color, and size. */
    iconProps?: AtIconProps;
    /** An optional string that represents the text label of the link. */
    label?: string;
    /**
     * An optional function that handles click events, receiving the event and additional properties.
     * @param e The mouse event triggered by the click.
     * @param props Additional properties for the click event.
     */
    onClick?: (e?: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, props?: OnClickProps) => void;
    /** An optional string that defines the ARIA role of the element. */
    role?: string;
    /** An optional number that specifies the tab order of the element. */
    tabIndex?: number;
    /** An optional string that allows adding custom CSS classes to the text. */
    textClasses?: string;
}
export declare const AtLink: ({ ariaCurrent, altText, children, dataTestId, fontColor, gtmData, href, iconProps, iconPosition, label, onClick, role, style, tabIndex, target, textClasses, variant, ..._props }: AtLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=at-link.d.ts.map