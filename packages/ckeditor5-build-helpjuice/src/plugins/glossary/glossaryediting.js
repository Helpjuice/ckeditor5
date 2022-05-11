import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import InsertGlossaryCommand from './insertglossarycommand';
import RemoveGlossaryCommand from './removeglossarycommand';

export default class GlossaryEditing extends Plugin {
    init() {
        this._defineSchema();
        this._defineConverters();

        this.editor.commands.add('insertGlossary', new InsertGlossaryCommand(this.editor))
        this.editor.commands.add('removeGlossary', new RemoveGlossaryCommand(this.editor))
    }

    _defineSchema() {
        const schema = this.editor.model.schema;
        schema.extend('$text', { allowAttributes: ['spanDataId', 'spanDataDefinition', 'spanGlossaryClass'] })
    }

    _defineConverters() {
        const conversion = this.editor.conversion

		conversion.for('upcast').elementToAttribute( {
			view: {
				name: 'span'
			},
			model:  {
				key: 'spanGlossaryClass',
				value: viewElement => viewElement.getAttribute('class')
			}
		});

		conversion.for('upcast').elementToAttribute( {
			view: {
				name: 'span',
                attributes: ['data-id']
			},
			model:  {
				key: 'spanDataId',
				value: viewElement => viewElement.getAttribute('data-id')
			}
		});

		conversion.for('upcast').elementToAttribute( {
			view: {
				name: 'span',
                attributes: ['data-definition']
			},
			model:  {
				key: 'spanDataDefinition',
				value: viewElement => viewElement.getAttribute('data-definition')
			}
		});


		conversion.for('downcast').attributeToElement({
            model: {
				key: 'spanDataId',
				name: '$text'
			},
            view: (modelAttributeValue, { writer }) => {
                return writer.createAttributeElement('span', {
                    class: 'hj-glossary-item',
                    'data-id': modelAttributeValue
                })
            }
        })
		conversion.for('downcast').attributeToElement({
            model: {
				key: 'spanDataDefinition',
				name: '$text'
			},
            view: (modelAttributeValue, { writer }) => {
                return writer.createAttributeElement('span', {
                    'data-definition': modelAttributeValue
                })
            }
        })
    }
}
