import React, { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const mlCollapseVariants: (props?: ({
    size?: "md" | null | undefined;
    variant?: "footer" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlCollapseVariantProps = VariantProps<typeof mlCollapseVariants>;
export type MlCollapseProps = React.HTMLAttributes<HTMLDetailsElement> & PropsWithChildren<MlCollapseVariantProps> & {
    /**
     * The button label
     */
    label?: string;
    /**
     * The name of the collapse group
     */
    name?: string;
    /**
     * The open state of the collapse
     */
    openCollape?: boolean;
    /**
     * The onToggleAction event of the collapse
     */
    onToggleAction?: (e: React.SyntheticEvent<HTMLDetailsElement>) => void;
};
export declare const MlCollapse: ({ label, size, name, children, openCollape, variant, onToggleAction, ...props }: MlCollapseProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ml-collapse.d.ts.map