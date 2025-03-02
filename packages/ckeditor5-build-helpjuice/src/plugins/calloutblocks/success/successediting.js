import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import { toWidget, toWidgetEditable } from "@ckeditor/ckeditor5-widget/src/utils";
import Widget from "@ckeditor/ckeditor5-widget/src/widget";
import InsertSuccessCommand from "./insertsuccesscommand";

export default class SuccessEditing extends Plugin {
	static get requires() {
		return [Widget];
	}

	init() {
		this._defineSchema();
		this._defineConverters();

		this.editor.commands.add("insertSuccess", new InsertSuccessCommand(this.editor));
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		schema.register("success", {
			isObject: true,
			allowWhere: "$block",
			allowIn: "listItem"
		});

		schema.register("successBody", {
			isLimit: true,
			allowIn: "success",
			allowContentOf: "$root"
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("successBody") && childDefinition.name == "success") {
				return false;
			}
		});

		schema.register("successDelete", {
			isObject: true,
			isLimit: true,
			allowIn: "success"
		});
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: ["helpjuice-callout", "success"],
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement("success");
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "success",
			view: ( modelElement, { writer } ) => {
				return writer.createContainerElement("div", {
					class: "helpjuice-callout success"
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "success",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createContainerElement("div", {
					class: "helpjuice-callout success"
				});

				return toWidget(div, viewWriter);
			}
		});

		conversion.for("upcast").elementToElement({
			model: "successBody",
			view: {
				name: "div",
				classes: "helpjuice-callout-body"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "successBody",
			view: {
				name: "div",
				classes: "helpjuice-callout-body"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "successBody",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", { class: "helpjuice-callout-body" });

				return toWidgetEditable(div, viewWriter);
			}
		});

		conversion.for("upcast").elementToElement({
			model: "successDelete",
			view: {
				name: "div",
				classes: "helpjuice-callout-delete"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "successDelete",
			view: {
				name: "div",
				classes: "helpjuice-callout-delete"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "successDelete",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", { class: "helpjuice-callout-delete" });
				return toWidget(div, viewWriter);
			}
		});
	}
}
