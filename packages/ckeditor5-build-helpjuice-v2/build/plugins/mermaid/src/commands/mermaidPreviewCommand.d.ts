/**
 * The mermaid preview command.
 *
 * Allows to switch to a preview mode.
 *
 * @extends module:core/command~Command
 */
export default class MermaidPreviewCommand {
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
