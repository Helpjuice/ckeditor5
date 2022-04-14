import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileUpload from './icons/file-upload.svg';

export default class InsertUploadUI extends Plugin {
	static get pluginName() {
		return 'InsertUpload';
	}

	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'InsertUpload', locale => {
			const view = new ButtonView( locale );

			// Configure dropdown's button properties:
			view.set( {
				label: t( 'Files Manager' ),
				icon: FileUpload,
				tooltip: true,
				class: 'insert-upload-btn'
			} );

			view.on( 'execute', () => {
				document.getElementById( 'files-manager-request' ).click();
			} );

			return view;
		} );
	}
}
