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

	getQuestionThreadElement(questionThreadId) {
		const thread = this._findNodes('questionThreadBody').find(e => e.getAttribute('questionThreadId') === questionThreadId)
		if (!thread) return;

		const viewElement = this.editor.editing.mapper.toViewElement(thread)
		return this.editor.editing.view.domConverter.mapViewToDom(viewElement)
	}

	getQuestionThreadPosition(questionThreadId) {
		const domTarget = this.getQuestionThreadElement(questionThreadId)
		if (!domTarget) return null;

		return domTarget.getBoundingClientRect()
	}

	getQuestionThreadIds() {
		return this._findNodes('questionThreadBody').map(e => e.getAttribute('questionThreadId'))
	}

	isInsideQuestionThread(el, questionThreadId) {
		const thread = this._findNodes('questionThreadBody').find(e => e.getAttribute('questionThreadId') === questionThreadId)
		if (!thread) return false;

		const viewElement = this.editor.editing.mapper.toViewElement(thread)
		const domTarget = this.editor.editing.view.domConverter.mapViewToDom(viewElement)

		return domTarget.contains(el)
	}

    _findNodes(type) {
        const nodes = [];
		const range = this.editor.model.createRangeIn(this.editor.model.document.getRoot())

        for (const value of range.getWalker({ ignoreElementEnd: true })) {
            const node = value.item;

            if (node.name == type) {
                nodes.push(node);
            }
        }

        return nodes;
    }
}
