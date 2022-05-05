import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import InsertQuestionThreadCommand from './insertquestionthreadcommand';
import RemoveQuestionThreadCommand from './removequestionthreadcommand';

export default class QuestionThreadsEditing extends Plugin {
    init() {
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('insertQuestionThread', new InsertQuestionThreadCommand(this.editor))
        this.editor.commands.add('removeQuestionThread', new RemoveQuestionThreadCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.extend('$text', { allowAttributes: 'questionThread' })
    }

    _defineConverters() {
        const conversion = this.editor.conversion

        conversion.for('upcast').elementToAttribute({
            view: {
                name: 'i',
                classes: ['helpjuice-thread'],
                attributes: ['data-id']
            },
            model: {
                key: 'questionThread',
                value: viewElement => viewElement.getAttribute('data-id')
            }
        })

        conversion.for('downcast').attributeToElement({
            model: 'questionThread',
            view: (value, { writer }) => {
                return writer.createAttributeElement('i', {
                    class: ['helpjuice-thread'],
                    'data-id': value
                })
            }
        })
    }
}