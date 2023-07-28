export default class Mermaid extends Plugin {
    /**
     * @inheritDoc
     */
    static get requires(): (typeof MermaidEditing | typeof MermaidToolbar | typeof MermaidUI)[];
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import MermaidEditing from "./mermaidediting";
import MermaidToolbar from "./mermaidtoolbar";
import MermaidUI from "./mermaidui";
