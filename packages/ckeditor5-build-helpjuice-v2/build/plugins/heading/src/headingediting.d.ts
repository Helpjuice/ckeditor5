/**
 * The headings engine feature. It handles switching between block formats &ndash; headings and paragraph.
 * This class represents the engine part of the heading feature. See also {@link module:heading/heading~Heading}.
 * It introduces `heading1`-`headingN` commands which allow to convert paragraphs into headings.
 *
 * @extends module:core/plugin~Plugin
 */
export default class HeadingEditing {
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    static get requires(): (typeof Paragraph)[];
    /**
     * @inheritDoc
     */
    constructor(editor: any);
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * @inheritDoc
     */
    afterInit(): void;
    /**
     * Adds default conversion for `h1` -> `heading1` with a low priority.
     *
     * @private
     * @param {module:core/editor/editor~Editor} editor Editor instance on which to add the `h1` conversion.
     */
    private _addDefaultH1Conversion;
}
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
