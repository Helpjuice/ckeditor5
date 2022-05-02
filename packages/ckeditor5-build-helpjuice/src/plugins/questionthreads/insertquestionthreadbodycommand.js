import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertQuestionThreadBodyCommand extends Command {
    execute() {
        const editor = this.editor
        const selection = editor.model.document.selection

        editor.model.change(writer => {
            const questionThreadBody = writer.createElement('questionThreadBody', {
                ...Object.fromEntries(selection.getAttributes()),
                questionThreadId: generateThreadIndex()
            })

            writer.append(editor.model.getSelectedContent(selection), questionThreadBody)
            editor.model.insertContent(questionThreadBody)

            writer.setSelection(questionThreadBody, 'on')
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection

        const isAllowed = model.schema.checkChild(selection.focus.parent, 'questionThreadBody')

        this.isEnabled = !selection.isCollapsed && isAllowed
    }
}

function generateThreadIndex() {
    return Date.now().toString().substring(3) + '-' + Math.random().toString(36).substring(2,7)
}