import Command from '@ckeditor/ckeditor5-core/src/command';

export default class DeactivateAllQuestionThreadBodiesCommand extends Command {
    execute() {
        const editor = this.editor

        editor.model.enqueueChange({ isUndoable: false }, writer => {
            const questionThreadBodies = this._findNodes(writer, 'questionThreadBody', editor.model.document.getRoot());
            questionThreadBodies.forEach(el => writer.setAttribute('active', false, el))
        })
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