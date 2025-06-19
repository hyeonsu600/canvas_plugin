import { RceToolWrapper } from '../../RceToolWrapper';
/**
 * Returns a filtered list of items based on the term.
 *
 * This was copied from legacy code, and feels like it should be replaced by a string matching library.
 *
 * @param searchString search term
 * @param items objects to filter
 * @return matching items if a non-blank search term is provided, otherwise a copy of the original list
 */
export declare function filterItemsByTitleSubstring<T extends {
    title: string;
}>(searchString: string | undefined | null, items: T[]): T[];
export interface ExternalToolSelectionDialogProps {
    ltiButtons: RceToolWrapper[];
    onDismiss: () => void;
}
export declare function ExternalToolSelectionDialog(props: ExternalToolSelectionDialogProps): JSX.Element;
