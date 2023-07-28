/**
 * The mermaid split view command.
 *
 * Allows to switch to a split view mode.
 *
 * @extends module:core/command~Command
 */
export default class MermaidSplitViewCommand {
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
