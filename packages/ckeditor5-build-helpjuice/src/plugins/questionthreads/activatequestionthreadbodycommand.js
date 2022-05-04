import Command from '@ckeditor/ckeditor5-core/src/command';

export default class ActivateQuestionThreadBodyCommand extends Command {
    execute({ value }) {
        const editor = this.editor

        editor.model.change(writer => {
            const questionThreadBodies = this._findNodes(writer, 'questionThreadBody', editor.model.document.getRoot());

            questionThreadBodies.forEach(e => {
                const questionThreadId = e.getAttribute('questionThreadId')
                writer.setAttribute('active', questionThreadId === value, e)
            })
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