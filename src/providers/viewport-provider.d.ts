import { ReactNode } from 'react';
/**
 * Interface representing the data provided by the ViewportContext.
 */
export interface IViewportContextData {
    /** Indicates if the viewport is at least 'xs' breakpoint size (430px). */
    isXs: boolean;
    /** Indicates if the viewport is at least 'sm' breakpoint size (640px). */
    isSM: boolean;
    /** Indicates if the viewport is at least 'md' breakpoint size (768px). */
    isMD: boolean;
    /** Indicates if the viewport is at least 'lg' breakpoint size (1024px). */
    isLG: boolean;
    /** Indicates if the viewport is at least 'xl' breakpoint size (1280px). */
    isXL: boolean;
    /** Indicates if the viewport is at least '2xl' breakpoint size (1536px). */
    is2XL: boolean;
    /** Allows for additional boolean properties with string keys. */
    [key: string]: boolean;
}
/**
 * Props for the ViewportProvider component.
 */
interface IViewportProviderProps {
    /** The child components that will have access to the viewport context. */
    children: ReactNode;
}
/**
 * React context for providing viewport size information.
 */
export declare const ViewportContext: import("react").Context<IViewportContextData>;
/**
 * ViewportProvider component that provides viewport size context to its children.
 *
 * @param props - The properties for the ViewportProvider.
 * @returns The provider component wrapping its children.
 */
export declare function ViewportProvider({ children }: IViewportProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Custom hook to access the viewport size context.
 *
 * @returns The current viewport size booleans.
 * @throws Will throw an error if used outside of a ViewportProvider.
 */
export declare function useViewport(): IViewportContextData;
export {};
//# sourceMappingURL=viewport-provider.d.ts.map