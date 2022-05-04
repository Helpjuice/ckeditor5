import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import CommentIcon from './icons/comment.svg';

export default class QuestionThreadsUI extends Plugin {
    init() {
        const questionThreads = this.editor.plugins.get('QuestionThreads')

        this.editor.model.document.selection.on('change:range', () => {
            const selectedElement = this.editor.model.document.selection.getSelectedElement()
            if (selectedElement && selectedElement.name === 'questionThreadBody') {
                const threadIndex = selectedElement.getAttribute('questionThreadId')
                this.editor.commands.get('activateQuestionThreadBody').execute({ value: threadIndex })
                questionThreads.fire('questionThreadSelected', threadIndex)
            } else {
                this.editor.commands.get('deactivateAllQuestionThreadBodies').execute()
            }
        })
    }
}