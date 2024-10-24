import { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { IconName } from '../../atoms';
declare const orFooterVariants: (props?: ({} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type TItemMenu = {
    label: string;
    url: string;
    target?: string;
    subItems?: TItemMenu[];
};
export type TMenuLink = {
    label: string;
    url: string;
    target?: string;
    items?: TItemMenu[];
};
export type TSocialMediaLink = {
    label: string;
    url: string;
    icon: IconName;
    target?: string;
};
export type OrFooterVariantProps = VariantProps<typeof orFooterVariants>;
export type OrFooterProps = PropsWithChildren<OrFooterVariantProps> & {
    /**
     * Represents the menu items displayed in the footer of the application.
     * This prop is an array of objects, where each object corresponds to an individual
     * menu item with the following properties:
     *
     * @type {Array<Object>}
     * @property {String} label - The text displayed for the menu item.
     * @property {String} url - The URL that the menu item links to. This should be a
     * valid path within the application or an external link.
     * @property {String} [target] - (Optional) Specifies where to open the linked document.
     * For example, "_blank" to open in a new tab.
     * @property {Array<TItemMenu>} [subItems] - (Optional) An array of submenu items
     * that can be nested under the main menu item. Each submenu item follows the
     * same structure as the main menu items.
     *
     */
    menuItems: TMenuLink[];
    /**
     * An array of additional navigation links
     * for the footer, typically used for prominent actions like "Privacy Policy" or
     * "Terms of Service".
     */
    menuLink: TMenuLink[];
    /**
     * A brief description or contextual
     * information displayed in the footer, providing users with additional insights
     * or details about the website or application.
     */
    description: string;
    /**
     * An array of
     * social media links displayed in the footer, allowing users to connect with
     * various platforms.
     */
    socialMedia?: TSocialMediaLink[];
    content?: {};
    extraContent?: {};
};
export declare const OrFooter: ({ menuItems, menuLink, description, socialMedia, content, extraContent }: OrFooterProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=or-footer.d.ts.map