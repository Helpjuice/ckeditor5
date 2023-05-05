/**
 * The heading command. It is used by the {@link module:heading/heading~Heading heading feature} to apply headings.
 *
 * @extends module:core/command~Command
 */
export default class HeadingCommand {
    /**
     * Creates an instance of the command.
     *
     * @param {module:core/editor/editor~Editor} editor Editor instance.
     * @param {Array.<String>} modelElements Names of the element which this command can apply in the model.
     */
    constructor(editor: any, modelElements: Array<string>);
    /**
     * If the selection starts in a heading (which {@link #modelElements is supported by this command})
     * the value is set to the name of that heading model element.
     * It is  set to `false` otherwise.
     *
     * @observable
     * @readonly
     * @member {Boolean|String} #value
     */
    /**
     * Set of defined model's elements names that this command support.
     * See {@link module:heading/heading~HeadingOption}.
     *
     * @readonly
     * @member {Array.<String>}
     */
    readonly modelElements: string[];
    /**
     * @inheritDoc
     */
    refresh(): void;
    value: any;
    isEnabled: boolean | undefined;
    /**
     * Executes the command. Applies the heading to the selected blocks or, if the first selected
     * block is a heading already, turns selected headings (of this level only) to paragraphs.
     *
     * @param {Object} options
     * @param {String} options.value Name of the element which this command will apply in the model.
     * @fires execute
     */
    execute(options: {
        value: string;
    }): void;
}
