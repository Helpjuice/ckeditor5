import Command from '@ckeditor/ckeditor5-core/src/command';

export default class RemoveQuestionThreadBodyCommand extends Command {
    execute({ value }) {
        const editor = this.editor

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            const questionThreadBody = this._findQuestionThreadBodyById(writer, 'questionThreadBody', editor.model.document.getRoot(), value);
            if (!questionThreadBody) return;

            writer.unwrap(questionThreadBody)
        })
    }

    _findQuestionThreadBodyById(writer, type, root, id) {
        return this._findNodes(writer, type, root).find(e => e.getAttribute('questionThreadId') === id)
    }

    _findNodes(writer, type, root) {
        const nodes = [];
        const range = writer.createRangeIn(root);

        for (const value of range.getWalker({ ignoreElementEnd: true })) {
            const node = value.item;

            if (node.name == type) {
                nodes.push(node);
            }
        }

        return nodes;
    };
}