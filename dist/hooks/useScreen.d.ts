interface Screen {
    name: string;
    maxWidth?: number;
    minWidth?: number;
    maxHeight?: number;
    minHeight?: number;
}
export declare function useScreen(screens: Screen[]): {
    width: number;
    height: number;
    screen: string;
};
export {};
