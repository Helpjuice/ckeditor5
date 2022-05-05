import Command from '@ckeditor/ckeditor5-core/src/command';

export default class DeactivateAllQuestionThreadBodiesCommand extends Command {
    execute() {
        const editor = this.editor

        editor.editing.view.change(writer => {
            const questionThreadBodies = this._findNodes(editor.model, 'questionThreadBody', editor.model.document.getRoot());
            questionThreadBodies.forEach(el => {
                const viewElement = editor.editing.mapper.toViewElement(el)
                if (!viewElement) return;

                writer.removeClass('active', viewElement)
            })
        })
    }

    _findNodes(model, type, root) {
        const nodes = [];
        const range = model.createRangeIn(root);

        for (const value of range.getWalker({ ignoreElementEnd: true })) {
            const node = value.item;

            if (node.name == type) {
                nodes.push(node);
            }
        }

        return nodes;
    };
}