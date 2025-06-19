import { IconVideoLine } from '@instructure/ui-icons';
type FileType = {
    'content-type'?: string;
    content_type?: string;
    contextId?: string;
    contextType?: string;
    embed?: {
        id: string;
    };
    embedded_iframe_url?: string;
    href?: string;
    id?: string;
    media_entry_id?: string;
    mediaEntryId?: string;
    type?: string;
    url?: string;
    uuid?: string;
};
export declare function getIconFromType(type: string): typeof IconVideoLine;
export declare function isImage(type: string): boolean;
export declare function isAudioOrVideo(type: string): boolean;
export declare function isVideo(type: string): boolean;
export declare function isAudio(type: string): boolean;
export declare function isText(type: string): boolean;
export declare function isIWork(filename: string): boolean;
export declare function getIWorkType(filename: string): "" | "application/vnd.apple.pages" | "application/vnd.apple.keynote" | "application/vnd.apple.numbers";
export declare function mediaPlayerURLFromFile(file: FileType, canvasOrigin?: string): string | undefined;
export {};
