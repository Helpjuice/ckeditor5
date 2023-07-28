export default class MermaidEditing extends Plugin {
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * @inheritDoc
     */
    afterInit(): void;
    /**
     * @inheritDoc
    */
    _registerCommands(): void;
    /**
     * Adds converters.
     *
     * @private
     */
    private _defineConverters;
    /**
     *
     * @private
     * @param {*} evt
     * @param {*} data
     * @param {*} conversionApi
     */
    private _mermaidDataDowncast;
    /**
     *
     * @private
     * @param {*} evt
     * @param {*} data
     * @param {*} conversionApi
     */
    private _mermaidDowncast;
    /**
     *
     * @param {*} evt
     * @param {*} data
     * @param {*} conversionApi
     * @returns
     */
    _sourceAttributeDowncast(evt: any, data: any, conversionApi: any): void;
    /**
     *
     * @private
     * @param {*} evt
     * @param {*} data
     * @param {*} conversionApi
     */
    private _mermaidUpcast;
    /**
     * Renders Mermaid in a given `domElement`. Expect this domElement to have mermaid
     * source set as text content.
     *
     * @param {HTMLElement} domElement
     */
    _renderMermaid(domElement: HTMLElement): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
