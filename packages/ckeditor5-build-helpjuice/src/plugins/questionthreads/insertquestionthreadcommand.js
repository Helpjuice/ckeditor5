import Command from '@ckeditor/ckeditor5-core/src/command';

export default class InsertQuestionThreadCommand extends Command {
    execute({ value }) {
        const editor = this.editor
        const selection = editor.model.document.selection

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            const ranges = editor.model.schema.getValidRanges(selection.getRanges(), 'questionThread')

            for (const range of ranges) {
                writer.setAttribute('italic', true, range)
                writer.setAttribute('questionThread', value, range)
            }
        })
    }

    refresh() {
        const model = this.editor.model
        const selection = model.document.selection

        this.isEnabled = !selection.isCollapsed
    }
}