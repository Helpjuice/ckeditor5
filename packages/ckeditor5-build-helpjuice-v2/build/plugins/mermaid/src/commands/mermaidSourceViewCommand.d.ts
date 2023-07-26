/**
 * The mermaid source view command.
 *
 * Allows to switch to a source view mode.
 *
 * @extends module:core/command~Command
 */
export default class MermaidSourceViewCommand {
    /**
     * @inheritDoc
     */
    refresh(): void;
    isEnabled: boolean | undefined;
    value: boolean | undefined;
    /**
     * @inheritDoc
     */
    execute(): void;
}
