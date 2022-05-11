import GlossaryEditing from './glossaryediting';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import './styles.css'

export default class Glossary extends Plugin {
	static get requires() {
		return [GlossaryEditing];
	}

	static get pluginName() {
		return 'Glossary';
	}
}
