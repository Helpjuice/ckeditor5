import QuestionThreadsEditing from './questionthreadsediting';
import QuestionThreadsUI from './questionthreadsui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import './styles.css'

export default class QuestionThreads extends Plugin {
	static get requires() {
		return [QuestionThreadsEditing, QuestionThreadsUI];
	}

	static get pluginName() {
		return 'QuestionThreads';
	}
}
