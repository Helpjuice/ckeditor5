export default class MermaidUI extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * Adds all mermaid-related buttons.
     *
     * @private
     */
    private _addButtons;
    /**
     * Adds the button for inserting mermaid.
     *
     * @private
     */
    private _addInsertMermaidButton;
    /**
     * Adds the button linking to the mermaid guide.
     *
     * @private
     */
    private _addMermaidInfoButton;
    /**
     * Adds the mermaid balloon toolbar button.
     *
     * @private
     * @param {module:core/editor/editor~Editor} editor
     * @param {String} name Name of the button.
     * @param {String} label Label for the button.
     * @param {String} icon The button icon.
     */
    private _createToolbarButton;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
