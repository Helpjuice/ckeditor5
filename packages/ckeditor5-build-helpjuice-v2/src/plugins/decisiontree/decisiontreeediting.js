import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import { toWidget, toWidgetEditable } from "@ckeditor/ckeditor5-widget/src/utils";
import Widget from "@ckeditor/ckeditor5-widget/src/widget";
import InsertDecisionTreeCommand from "./insertdecisiontreecommand";

export default class DecisionTreeEditing extends Plugin {
	static get requires() {
		return [Widget];
	}

	init() {
		this._defineSchema();
		this._defineConverters();
		this.editor.commands.add("insertDecisionTree", new InsertDecisionTreeCommand(this.editor));
	}

	_defineSchema() {
		const schema = this.editor.model.schema;

		// Schema for Root Element
		schema.register("decisionTree", {
			isObject: true,
			allowWhere: "$block",
			allowIn: "listItem"
		});

		// Schema for First Question
		schema.register("decisionTreeFirstQuestion", {
			isLimit: true,
			allowIn: "decisionTree",
			allowContentOf: "$root"
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeFirstQuestion") && childDefinition.name == "decisionTree") {
				return false;
			}
		});

		// Schema for Tabs
		schema.register("decisionTreeTabs", {
			isLimit: true,
			allowIn: ["decisionTree", "decisionTreeTabContent"],
			allowContentOf: ["$root"]
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeTabs") && childDefinition.name == "decisionTree" || childDefinition.name == "decisionTreeContent") {
				return false;
			}
		});

		// Schema for Tab Navigation
		schema.register("decisionTreeTabNav", {
			isLimit: true,
			allowIn: ["decisionTreeTabs",],
			allowContentOf: ["$root"]
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeTabNav") && childDefinition.name == "decisionTreeTabs") {
				return false;
			}
		});

		// Schema for Button
		schema.register("decisionTreeButton", {
			isLimit: true,
			allowIn: "decisionTreeTabNav",
			allowContentOf: "$root",
			allowAttributes: ["data-id", "data-active"]
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeButton") && childDefinition.name == "decisionTreeTabNav") {
				return false;
			}
		});

		// Schema for Button Text
		schema.register("decisionTreeButtonText", {
			isLimit: true,
			allowIn: "decisionTreeButton",
			allowContentOf: "$root"
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeButtonText") && childDefinition.name == "decisionTreeButton") {
				return false;
			}
		});

		// // Schema for Delete Button Element
		schema.register("decisionTreeDeleteButton", {
			isLimit: true,
			allowIn: "decisionTreeButton"
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeDeleteButton") && childDefinition.name == "decisionTreeButton") {
				return false;
			}
		});

		// // Schema for Button
		schema.register("decisionTreeAddTabButton", {
			isLimit: true,
			allowIn: "decisionTreeTabNav",
			allowContentOf: "$root"
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeAddTabButton") && childDefinition.name == "decisionTreeTabNav") {
				return false;
			}
		});

		// Schema for Tab Content
		schema.register("decisionTreeTabContent", {
			isLimit: true,
			allowIn: ["decisionTreeTabs"],
			allowContentOf: ["$root", "decisionTreeTabs"],
			allowAttributes: ["id", "data-active"]
		});

		// Schema for Add Answers
		schema.register("decisionTreeTabContentInner", {
			isLimit: true,
			allowIn: "decisionTreeTabContent",
			allowContentOf: ["$root"]
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeTabContentInner") && childDefinition.name == "decisionTreeTabContent") {
				return false;
			}
		});

		// Schema for Add Answers
		schema.register("decisionTreeAddAnswers", {
			isLimit: true,
			allowIn: "decisionTreeTabs",
			allowAttributes: ["data-behavior"]
		});

		schema.addChildCheck((context, childDefinition) => {
			if (context.endsWith("decisionTreeAddAnswers") && childDefinition.name == "decisionTreeTabs") {
				return false;
			}
		});

		schema.register("decisionTreeDelete", {
			isObject: true,
			isLimit: true,
			allowIn: "decisionTree"
		});
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		// Conversion for Root Element
		conversion.for("upcast").elementToElement({
			model: "decisionTree",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTree",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTree",
			view: (modelElement, { writer: viewWriter }) => {
				const link = viewWriter.createUIElement("a", {
					class: 'helpjuice-decision-tree-info',
					href: 'https://help.helpjuice.com/article-editor/article-decision-trees',
					target: '_blank',
					title: 'Read more about decision trees'
				});
				const div = viewWriter.createContainerElement("div", { class: "helpjuice-decision-tree" }, [ link ]);

				return toWidget(div, viewWriter, { label: "Insert Decision Tree" });
			}
		});

		// Conversion for First Question
		conversion.for("upcast").elementToElement({
			model: "decisionTreeFirstQuestion",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-first-question"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeFirstQuestion",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-first-question"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeFirstQuestion",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", { class: "helpjuice-decision-tree-first-question" });

				return toWidgetEditable(div, viewWriter);
			}
		});

		// Conversion for Tabs
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-tabs"
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeTabs");
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeTabs",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-tabs"
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeTabs",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-tabs"
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		// // Conversion for Tabs Navigation
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-tab-nav"
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeTabNav");
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeTabNav",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-nav"
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeTabNav",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-nav"
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-tab-content",
				attributes: ["id", "data-active"]
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeTabContent", {
					"id": viewElement.getAttribute("id"),
					"data-active": viewElement.getAttribute("data-active")
				});
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeTabContent",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content",
					"id": modelElement.getAttribute("id"),
					"data-active": modelElement.getAttribute("data-active")
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeTabContent",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content",
					id: modelElement.getAttribute("id"),
					"data-active": modelElement.getAttribute("data-active")
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		// // Conversion for Button
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-button",
				attributes: ["data-id", "data-active"]
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeButton", {
					"data-id": viewElement.getAttribute("data-id"),
					"data-active": viewElement.getAttribute("data-active")
				});
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeButton",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-button",
					"data-id": modelElement.getAttribute("data-id"),
					"data-active": modelElement.getAttribute("data-active")
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeButton",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-button",
					"data-id": modelElement.getAttribute("data-id"),
					"data-active": modelElement.getAttribute("data-active")
				});

				return toWidgetEditable(div, viewWriter);
			}
		});
		conversion.attributeToAttribute( { model: "data-active", view: "data-active" } );

		// // Conversion for Button Text
		conversion.for("upcast").elementToElement({
			model: "decisionTreeButtonText",
			view: {
				name: "div",
				classes: ["helpjuice-decision-tree-button-text", "notranslate"]
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeButtonText",
			view: {
				name: "div",
				classes: ["helpjuice-decision-tree-button-text", "notranslate"]
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeButtonText",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", { class: "helpjuice-decision-tree-button-text notranslate" });

				return toWidgetEditable(div, viewWriter);
			}
		});

		// Converison for Delete Button Text
		conversion.for("upcast").elementToElement({
			model: "decisionTreeDeleteButton",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-delete-button"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeDeleteButton",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-delete-button"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeDeleteButton",
			view: (modelElement, { writer: viewWriter }) => {
				// Note: You use a more specialized createEditableElement() method here.
				const div = viewWriter.createContainerElement("div", { class: "helpjuice-decision-tree-delete-button" });

				return toWidget(div, viewWriter);
			}
		});

		// // Conversion for Add Button
		conversion.for("upcast").elementToElement({
			model: "decisionTreeAddTabButton",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-add-tab-button"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeAddTabButton",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-add-tab-button"
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeAddTabButton",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createContainerElement("div", {
					class: "helpjuice-decision-tree-add-tab-button"
				})

				return toWidget(div, viewWriter);
			}
		});

		// Conversion for Tab Content
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-tab-content",
				attributes: ["id", "data-active"]
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeTabContent", {
					"id": viewElement.getAttribute("id"),
					"data-active": viewElement.getAttribute("data-active")
				});
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeTabContent",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content",
					"id": modelElement.getAttribute("id"),
					"data-active": modelElement.getAttribute("data-active")
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeTabContent",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content",
					id: modelElement.getAttribute("id"),
					"data-active": modelElement.getAttribute("data-active")
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		// Conversion for Tab Content Inner
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-tab-content-inner"
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeTabContentInner");
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeTabContentInner",
			view: ( modelElement, { writer } ) => {
				return writer.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content-inner"
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeTabContentInner",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", {
					class: "helpjuice-decision-tree-tab-content-inner"
				});

				return toWidgetEditable(div, viewWriter);
			}
		});

		// Conversion for Add Answers
		conversion.for("upcast").elementToElement({
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-add-answers",
				attributes: ["data-behavior"]
			},
			model: ( viewElement, { writer } ) => {
				return writer.createElement( "decisionTreeAddAnswers", {
					"data-behavior": viewElement.getAttribute("data-behavior")
				});
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeAddAnswers",
			view: ( modelElement, { writer } ) => {
				return writer.createContainerElement("div", {
					class: "helpjuice-decision-tree-add-answers",
					"data-behavior": modelElement.getAttribute("data-behavior")
				});
			},
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeAddAnswers",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createContainerElement("div", {
					class: "helpjuice-decision-tree-add-answers",
					"data-behavior": modelElement.getAttribute("data-behavior")
				});

				return toWidget(div, viewWriter);
			}
		});

		conversion.for("upcast").elementToElement({
			model: "decisionTreeDelete",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-delete"
			}
		});
		conversion.for("dataDowncast").elementToElement({
			model: "decisionTreeDelete",
			view: {
				name: "div",
				classes: "helpjuice-decision-tree-delete"
			}
		});
		conversion.for("editingDowncast").elementToElement({
			model: "decisionTreeDelete",
			view: (modelElement, { writer: viewWriter }) => {
				const div = viewWriter.createEditableElement("div", { class: "helpjuice-decision-tree-delete" });
				return toWidget(div, viewWriter);
			}
		});
	}
}
