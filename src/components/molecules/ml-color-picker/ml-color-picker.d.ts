import React, { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const mlColorPickerVariants: (props?: ({} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlColorPickerVariantProps = VariantProps<typeof mlColorPickerVariants>;
export type MlColorPickerProps = React.HTMLAttributes<HTMLDivElement> & PropsWithChildren<MlColorPickerVariantProps> & {
    /**
     * The colors to display
     */
    colors: string[];
    /**
     * The active color
     */
    activeColor?: string;
    /**
     * The onChangeColor event
     */
    onChangeColor?: (color: string) => void;
    /**
     * The onPlusButtonClick event
     */
    onPlusButtonClick?: () => void;
};
export declare const MlColorPicker: ({ colors, activeColor, onChangeColor, onPlusButtonClick, ...props }: MlColorPickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ml-color-picker.d.ts.map