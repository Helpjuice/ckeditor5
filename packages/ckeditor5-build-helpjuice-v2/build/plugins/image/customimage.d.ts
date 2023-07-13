export default class MyImagePlugin extends Plugin {
    static get requires(): (typeof ImageBlock | typeof ImageInline)[];
    init(): void;
}
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ImageBlock from "@ckeditor/ckeditor5-image/src/imageblock";
import ImageInline from "@ckeditor/ckeditor5-image/src/imageinline";
