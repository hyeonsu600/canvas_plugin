import React from 'react';
/**
 * Provide an iframe for launching an LTI tool directly from the frontend.
 * Works just like all existing usages of the LTI <iframe> element, including
 * extracting a ref of the <iframe> directly and setting things on it later.
 */
declare const ToolLaunchIframe: React.ForwardRefExoticComponent<React.IframeHTMLAttributes<HTMLIFrameElement> & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLIFrameElement>>;
export default ToolLaunchIframe;
