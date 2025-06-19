import { Editor } from 'tinymce';
import { ListStyleTypeValue } from '../core/ListUtils';
import { ExtractRequired } from '../../../../util/ExtractRequired';
/**
 * Supported list style types by the RCE
 */
export type RceListTypeInfoKey = ExtractRequired<ListStyleTypeValue, 'disc' | 'circle' | 'square' | 'decimal' | 'upper-alpha' | 'upper-roman'>;
export default function register(editor: Editor): void;
