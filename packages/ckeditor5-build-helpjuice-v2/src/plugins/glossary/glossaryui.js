import { ButtonView } from 'ckeditor5/src/ui';
import { Plugin } from 'ckeditor5/src/core';
import BookIcon from './icons/book-icon.svg';

export default class GlossaryUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( 'glossary', locale => {
			const buttonView = new ButtonView( locale );

			buttonView.set( {
				label: t( 'Insert Glossary' ),
				icon: BookIcon,
				tooltip: true,
				class: 'insert-glossary-btn'
			} );

			// Execute the command when the button is clicked (executed).
			this.listenTo( buttonView, 'execute', () => {
				const glossaryModal = document.getElementById( 'new-glossary-term-modal' );
				const glossaryTermExpression = glossaryModal.querySelector( '#glossary_term_expression' );
				const glossaryTermDefinition = glossaryModal.querySelector( '#glossary_term_definition' );

				const range = editor.model.document.selection.getFirstRange();
				let selection = '';
				for ( const item of range.getItems() ) {
					if ( item.data ) {
						selection += item.data;
					}
				}

				if ( selection.length ) {
					// WE USE `window.getSelection()` BECAUSE EDITOR SELECTION DOESN'T ACCEPT `getBoundingClientRect`
					const range = window.getSelection().getRangeAt( 0 );
					const position = range.getBoundingClientRect();
					const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					const selectionHeight = position.bottom - position.top;
					const maxLeftPost = document.querySelector( '.editor-content-new .editor-body' ).getBoundingClientRect().right - ( glossaryModal.offsetWidth + 40 );

					// SHOW MODAL ON CORRECT POSITION
					glossaryModal.style.display = 'block';
					glossaryModal.style.top = position.top + scrollTop + selectionHeight + 8 + 'px';
					glossaryModal.style.left = position.left > maxLeftPost ? `${ maxLeftPost }px` : `${ position.left }px`;
					// SET TERM EXPRESSION
					glossaryTermExpression.value = selection.trim();
					glossaryTermDefinition.value = '';
				} else {
					this.createMessage( 'comment-message error', 'You must select some text in order to create a glossary item' );
				}
			} );

			return buttonView;
		} );
	}

	createMessage( classes, text ) {
		const message = document.createElement( 'div' );
		message.className = classes;
		message.textContent = text;
		document.getElementById( 'article-comments' ).append( message );
		message.style.display = 'block';

		setTimeout( () => message.remove(), 3000 );
	}
}
