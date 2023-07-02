export default class EmbeddedIFrame extends Plugin {
    static get requires(): (typeof EmbeddedIFrameToolbar | typeof ResizeEmbeddedIFrameUI)[];
}
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import EmbeddedIFrameToolbar from "./embeddediframetoolbar";
import ResizeEmbeddedIFrameUI from "./resizeembeddediframeui";
