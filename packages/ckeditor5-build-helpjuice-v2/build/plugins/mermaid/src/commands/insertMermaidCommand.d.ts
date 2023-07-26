/**
 * The insert mermaid command.
 *
 * Allows to insert mermaid.
 *
 * @extends module:core/command~Command
 */
export default class InsertMermaidCommand {
    /**
     * @inheritDoc
     */
    refresh(): void;
    isEnabled: boolean | undefined;
    /**
     * @inheritDoc
     */
    execute(): undefined;
}
