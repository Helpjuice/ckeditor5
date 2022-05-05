import Command from '@ckeditor/ckeditor5-core/src/command';

export default class RemoveQuestionThreadCommand extends Command {
    execute({ value }) {
        const editor = this.editor

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            this._findQuestionThread(editor.model.document.getRoot(), value).forEach(el => {
                writer.removeAttribute('questionThread', el)
                writer.removeAttribute('italic', el)
            });
        })
    }

    _findQuestionThread(root, id) {
        let result = []

        if (root.getAttribute('questionThread') === id) {
            result.push(root)
            return result
        }

        if (!root.childCount) {
            return result
        }

        for (const child of root.getChildren()) {
            result.push(...this._findQuestionThread(child, id))
        }

        return result;
    }
}