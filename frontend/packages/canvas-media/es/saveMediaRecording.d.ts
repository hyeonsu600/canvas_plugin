export default function saveMediaRecording(file: any, rcsConfig: any, done: any, onProgress: any): Promise<K5Uploader | undefined>;
export function saveClosedCaptions(media_object_id: any, subtitles: any, rcsConfig: any, maxBytes: any): Promise<any>;
export function saveClosedCaptionsForAttachment(attachmentId: any, subtitles: any, rcsConfig: any, maxBytes: any): Promise<any>;
export namespace VIDEO_SIZE_OPTIONS {
    let height: string;
    let width: string;
}
import { K5Uploader } from '@instructure/k5uploader';
