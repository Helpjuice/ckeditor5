/**
 * The `HeadingButtonsUI` plugin defines a set of UI buttons that can be used instead of the
 * standard drop down component.
 *
 * This feature is not enabled by default by the {@link module:heading/heading~Heading} plugin and needs to be
 * installed manually to the editor configuration.
 *
 * Plugin introduces button UI elements, which names are same as `model` property from {@link module:heading/heading~HeadingOption}.
 *
 *		ClassicEditor
 *			.create( {
 *				plugins: [ ..., Heading, Paragraph, HeadingButtonsUI, ParagraphButtonUI ]
 *				heading: {
 *					options: [
 *						{ model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
 *						{ model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
 *						{ model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
 *						{ model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' }
 *					]
 * 				},
 * 				toolbar: [ 'paragraph', 'heading1', 'heading2', 'heading3' ]
 *			} )
 *			.then( ... )
 *			.catch( ... );
 *
 * NOTE: The `'paragraph'` button is defined in by the {@link module:paragraph/paragraphbuttonui~ParagraphButtonUI} plugin
 * which needs to be loaded manually as well.
 *
 * It is possible to use custom icons by providing `icon` config option in {@link module:heading/heading~HeadingOption}.
 * For the default configuration standard icons are used.
 *
 * @extends module:core/plugin~Plugin
 */
export default class HeadingButtonsUI {
    /**
     * @inheritDoc
     */
    init(): void;
    /**
     * Creates single button view from provided configuration option.
     *
     * @private
     * @param {Object} option
     */
    private _createButton;
}
