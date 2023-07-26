export default class MermaidToolbar extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires(): (typeof WidgetToolbarRepository)[];
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
    /**
     * @inheritDoc
     */
    afterInit(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { WidgetToolbarRepository } from "@ckeditor/ckeditor5-widget";
