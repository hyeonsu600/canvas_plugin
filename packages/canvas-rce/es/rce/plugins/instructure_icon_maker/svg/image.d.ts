export function buildImage(settings: any): any;
/**
 * Calculates the transformation props for a given
 * shape and size.
 *
 * A Transform takes the following shape:
 * {
 *   x: string,
 *   y: string,
 *   width: number,
 *   height: number,
 *   translateX: number,
 *   translateY: number
 * }
 *
 * @param {Shape} shape
 * @param {Size} size
 *
 * @returns Transform
 */
export function transformForShape(shape: {
    Square: string;
    Circle: string;
    Triangle: string;
    Diamond: string;
    Pentagon: string;
    Hexagon: string;
    Octagon: string;
    Star: string;
}, size: {
    None: string;
    ExtraSmall: string;
    Small: string;
    Medium: string;
    Large: string;
    ExtraLarge: string;
}): {
    width: any;
    height: any;
    translateX: number;
    translateY: number;
    x: string;
    y: string;
} | undefined;
