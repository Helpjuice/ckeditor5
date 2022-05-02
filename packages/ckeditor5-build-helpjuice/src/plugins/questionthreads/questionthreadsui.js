import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class QuestionThreadsUI extends Plugin {
    init() {
        const editor = this.editor
        const t = editor.t
    
        editor.ui.componentFactory.add('createNewQuestionThread', locale => {
            const command = editor.commands.get('insertQuestionThreadBody')
            const buttonView = new ButtonView(locale)

            buttonView.set({
                label: t('Start a new question thread'),
                tooltip: true,
                withText: true
            })

			buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');
            this.listenTo(buttonView, 'execute', () => {
                editor.execute('insertQuestionThreadBody')
                editor.editing.view.focus()
            })

            return buttonView
        })
    }
}