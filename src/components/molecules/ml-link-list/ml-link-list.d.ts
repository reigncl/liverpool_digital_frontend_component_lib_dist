import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { AtLinkProps } from '../../atoms';
type TitleLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface MlLinkListProps extends MlLinkListVariantProps {
    links: AtLinkProps[];
    title?: string;
    titleLevel?: TitleLevels;
    'data-testid'?: string;
}
declare const mlLinkListVariant: (props?: ({
    alignment?: "center" | "left" | "right" | null | undefined;
    fontColor?: "default" | "white" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export type MlLinkListVariantProps = VariantProps<typeof mlLinkListVariant>;
export declare const MlLinkList: React.FC<MlLinkListProps>;
export {};
//# sourceMappingURL=ml-link-list.d.ts.map