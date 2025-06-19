export class Mathml {
    static get processNewMathEventName(): string;
    constructor(features?: {}, config?: {});
    _features: {};
    _config: {};
    loadMathJax(configFile?: string, cb?: null): void;
    preventMathJax(): boolean;
    isMathOnPage(): boolean;
    isMathInElement(elem: any): boolean;
    get mathJaxGenerated(): RegExp;
    get ignore_list(): string;
    isMathJaxIgnored(elem: any): boolean;
    isMathMLOnPage(): boolean;
    isMathJaxLoaded(): boolean;
    shouldProcess(elem: any): boolean;
    processNewMathInElem(elem: any): void;
    reloadElement(elem: any): void;
}
export namespace mathImageHelper {
    function getImageEquationText(img: any): string | undefined;
    function catchEquationImages(refnode: any): true | undefined;
    function removeStrayEquationImages(refnode: any): void;
    function nearlyInfiniteStyleFix(elem: any): void;
}
export const MathJaxDirective: Readonly<{
    Ignore: "mathjax_ignore";
    Process: "mathjax_process";
}>;
