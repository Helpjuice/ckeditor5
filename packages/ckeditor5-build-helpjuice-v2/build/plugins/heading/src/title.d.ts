/**
 * The Title plugin.
 *
 * It splits the document into `Title` and `Body` sections.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Title {
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    static get requires(): string[];
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * A reference to an empty paragraph in the body
     * created when there is no element in the body for the placeholder purposes.
     *
     * @private
     * @type {null|module:engine/model/element~Element}
     */
    private _bodyPlaceholder;
    /**
     * Returns the title of the document. Note that because this plugin does not allow any formatting inside
     * the title element, the output of this method will be a plain text, with no HTML tags.
     *
     * It is not recommended to use this method together with features that insert markers to the
     * data output, like comments or track changes features. If such markers start in the title and end in the
     * body, the result of this method might be incorrect.
     *
     * @param {Object} [options] Additional configuration passed to the conversion process.
     * See {@link module:engine/controller/datacontroller~DataController#get `DataController#get`}.
     * @returns {String} The title of the document.
     */
    getTitle(options?: Object | undefined): string;
    /**
     * Returns the body of the document.
     *
     * Note that it is not recommended to use this method together with features that insert markers to the
     * data output, like comments or track changes features. If such markers start in the title and end in the
     * body, the result of this method might be incorrect.
     *
     * @param {Object} [options] Additional configuration passed to the conversion process.
     * See {@link module:engine/controller/datacontroller~DataController#get `DataController#get`}.
     * @returns {String} The body of the document.
     */
    getBody(options?: Object | undefined): string;
    /**
     * Returns the `title` element when it is in the document. Returns `undefined` otherwise.
     *
     * @private
     * @returns {module:engine/model/element~Element|undefined}
     */
    private _getTitleElement;
    /**
     * Model post-fixer callback that ensures that `title` has only one `title-content` child.
     * All additional children should be moved after the `title` element and renamed to a paragraph.
     *
     * @private
     * @param {module:engine/model/writer~Writer} writer
     * @returns {Boolean}
     */
    private _fixTitleContent;
    /**
     * Model post-fixer callback that creates a title element when it is missing,
     * takes care of the correct position of it and removes additional title elements.
     *
     * @private
     * @param {module:engine/model/writer~Writer} writer
     * @returns {Boolean}
     */
    private _fixTitleElement;
    /**
     * Model post-fixer callback that adds an empty paragraph at the end of the document
     * when it is needed for the placeholder purposes.
     *
     * @private
     * @param {module:engine/model/writer~Writer} writer
     * @returns {Boolean}
     */
    private _fixBodyElement;
    /**
     * Model post-fixer callback that removes a paragraph from the end of the document
     * if it was created for the placeholder purposes and is not needed anymore.
     *
     * @private
     * @param {module:engine/model/writer~Writer} writer
     * @returns {Boolean}
     */
    private _fixExtraParagraph;
    /**
     * Attaches the `Title` and `Body` placeholders to the title and/or content.
     *
     * @private
     */
    private _attachPlaceholders;
    /**
     * Creates navigation between the title and body sections using <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> keys.
     *
     * @private
     */
    private _attachTabPressHandling;
}
