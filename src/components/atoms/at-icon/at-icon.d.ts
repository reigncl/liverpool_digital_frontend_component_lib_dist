/// <reference types="react" />
import { type VariantProps } from 'class-variance-authority';
export type AtIconVariantProps = VariantProps<typeof iconVariants>;
export type IconName = 'chevron_right' | 'chevron_left' | 'keyboard_arrow_down' | 'keyboard_arrow_up' | 'search' | 'close' | 'menu' | 'location_on_outlined' | 'shopping_bag' | 'account_circle' | 'X' | 'instagram' | 'image_outline' | 'facebook' | 'profeco' | 'distintivo' | 'add' | 'star_empty' | 'star_full' | 'star_half' | 'store' | 'truck';
export type IconProps = {
    size?: number;
    color?: string;
    name?: string;
};
declare const iconVariants: (props?: ({
    size?: "base" | "md" | "lg" | "sm" | "xl" | "2xl" | "rating" | null | undefined;
    variant?: "material" | "materialOutlined" | "materialRound" | "materialSharp" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface AtIconProps extends AtIconVariantProps {
    /**
     * Indicate the icon name
     */
    name: IconName;
    /**
     * Indicate the icon color
     */
    color?: string;
    className?: string;
}
export declare const icons: Record<string, (props: IconProps) => JSX.Element>;
export declare const AtIcon: ({ name, size, color, variant, className }: AtIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=at-icon.d.ts.map