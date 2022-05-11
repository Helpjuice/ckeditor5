import Command from '@ckeditor/ckeditor5-core/src/command';

export default class RemoveGlossaryCommand extends Command {
    execute({ dataId }) {
        const editor = this.editor

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            this._findGlossary(editor.model.document.getRoot(), dataId).forEach(el => {
                writer.removeAttribute('spanDataId', el)
				writer.removeAttribute('spanDataDefinition', el)
                writer.removeAttribute('spanGlossaryClass', el)
                writer.removeAttribute('span', el)
            });
        })
    }

    _findGlossary(root, id) {
        let result = []

        if (root.getAttribute('spanDataId') === id) {
            result.push(root)
            return result
        }

        if (!root.childCount) {
            return result
        }

        for (const child of root.getChildren()) {
            result.push(...this._findGlossary(child, id))
        }
        return result;
    }
}
