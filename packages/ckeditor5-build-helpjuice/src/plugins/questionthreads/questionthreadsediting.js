import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget, toWidgetEditable } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';
import InsertQuestionThreadBodyCommand from './insertquestionthreadbodycommand';

export default class QuestionThreadsEditing extends Plugin {
    static get requires() {
        return [Widget];
    }

    init() {
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('insertQuestionThreadBody', new InsertQuestionThreadBodyCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register('questionThreadBody', {
            allowWhere: '$text',
            isInline: true,
            isObject: true,
            allowAttributesOf: '$text',
            allowAttributes: ['questionThreadId'],
        })
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToElement({
            view: {
                name: 'i',
                classes: ['helpjuice-thread'],
                attributes: ['data-id']
            },
            model: (viewElement, { writer: modelWriter }) => {
                const model = modelWriter.createElement('questionThreadBody', {
                    questionThreadId: viewElement.getAttribute('data-id')
                })

                return model
            }
        })

        conversion.for('editingDowncast').elementToElement({
            model: 'questionThreadBody',
            view: (modelItem, { writer: viewWriter }) => {
                const widgetElement = createQuestionThreadBodyView(modelItem, viewWriter)

                return toWidget(widgetElement, viewWriter)
            }
        })

        conversion.for('dataDowncast').elementToElement({
            model: 'questionThreadBody',
            view: (modelItem, { writer: viewWriter }) => createQuestionThreadBodyView(modelItem, viewWriter)
        })
    }
}

function createQuestionThreadBodyView(modelItem, viewWriter) {
    const id = modelItem.getAttribute('questionThreadId')

    const questionThreadBodyView = viewWriter.createEditableElement('i', {
        class: 'helpjuice-thread',
        'data-id': id
    })

    return questionThreadBodyView
}