import { type ReactElement } from 'react';
import { AtLinkProps } from '../../atoms';
import { MlPictureProps } from '../ml-picture';
/**
 * Props for the MlBanner component.
 */
export interface MlBannerProps extends MlPictureProps {
    /** Data-testid attribute for testing purposes. */
    'data-testid'?: string;
    /** Title attribute for the image. */
    title?: string;
    /** Additional class names for the image element. */
    linkProps?: AtLinkProps;
}
/**
 * MlBanner component displays a responsive banner image that changes based on the viewport size.
 * It can optionally be wrapped with a link.
 *
 * @param props - The properties for the MlBanner component.
 * @returns The rendered MlBanner component.
 */
export declare const MlBanner: (props: MlBannerProps) => ReactElement;
//# sourceMappingURL=ml-banner.d.ts.map