/**
 * All inst-ui icons as an array.
 *
 * Note that this does require including these all in the built modules, but it appears that they were already
 * present, as testing with and without this didn't yield much difference in module size.
 */
export declare const instUiIconsArray: Array<InstUiIcon>;
/**
 * Type for inst ui icons
 */
export interface InstUiIcon {
    variant: 'Line' | 'Solid';
    glyphName: string;
    /**
     * SVG code for the icon
     */
    src: string;
    deprecated: boolean;
}
