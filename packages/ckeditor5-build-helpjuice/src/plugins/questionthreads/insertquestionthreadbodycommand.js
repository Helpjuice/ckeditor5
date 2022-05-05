import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertQuestionThreadBodyCommand extends Command {
    execute({ value }) {
        const editor = this.editor
        const selection = editor.model.document.selection

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            const questionThreadBody = writer.createElement('questionThreadBody', {
                ...Object.fromEntries(selection.getAttributes()),
                questionThreadId: value
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