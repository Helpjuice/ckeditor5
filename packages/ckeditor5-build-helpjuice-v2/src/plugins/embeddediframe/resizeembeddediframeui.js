import { ButtonView, LabeledFieldView, createLabeledInputText, FocusCycler, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils';
import { Plugin } from 'ckeditor5/src/core';

class FormView extends View {
	constructor( locale ) {
		super( locale );

		this.focusTracker = new FocusTracker();
		this.keystrokes = new KeystrokeHandler();

		// Allow arrow keys to be used on the inputs; otherwise, CKEditor will attempt to change the focus to the next/previous toolbar item
		this.keystrokes.set( 'arrowleft', ( ev, _cancel ) => {
			ev.stopPropagation();
		} );
		this.keystrokes.set( 'arrowright', ( ev, _cancel ) => {
			ev.stopPropagation();
		} );

		this.heightInputView = this._createInput( 'Height' );
		this.widthInputView = this._createInput( 'Width' );
		this.saveButtonView = this._createButton( 'Resize', 'ck-button-action ck-button-resize' );
		this.convertToLinkButtonView = this._createButton( 'Convert to Link', 'ck-button-convert-to-link' );

		this.saveButtonView.bind( 'isEnabled' ).to( this, 'isEnabled' );
		this.saveButtonView.delegate( 'execute' ).to( this, 'resize' );
		this.convertToLinkButtonView.delegate( 'execute' ).to( this, 'convertToLink' );

		this.childViews = this.createCollection( [
			this.heightInputView,
			this.widthInputView,
			this.saveButtonView,
			this.convertToLinkButtonView,
		] );

		this.focusCycler = new FocusCycler( {
			focusables: this.childViews,
			focusTracker: this.focusTracker,
			keystrokeHandler: this.keystrokes,
			actions: {
				focusPrevious: 'shift + tab',
				focusNext: 'tab'
			}
		} );

		this.setTemplate( {
			tag: 'form',
			attributes: {
				class: ['ck', 'ck-form', 'ck-hj-embedded-iframe-resize-form'],
				tabindex: -1
			},
			children: this.childViews
		} );
	}

	destroy() {
		super.destroy();

		this.focusTracker.destroy();
		this.keystrokes.destroy();
	}

	render() {
		super.render();

		for ( const view of this.childViews ) {
			this.focusTracker.add( view.element );
		}

		this.keystrokes.listenTo( this.element );
	}

	get heightInputValue() {
		return this.heightInputView.fieldView.element.value;
	}

	set heightInputValue( value ) {
		this.heightInputView.fieldView.value = value;
	}

	get widthInputValue() {
		return this.widthInputView.fieldView.element.value;
	}

	set widthInputValue( value ) {
		this.widthInputView.fieldView.value = value;
	}

	_createInput( label ) {
		const labeledInput = new LabeledFieldView( this.locale, createLabeledInputText );
		labeledInput.label = label;
		return labeledInput;
	}

	_createButton( label, className ) {
		const button = new ButtonView();

		button.set( {
			label,
			class: className,
			withText: true
		} );

		return button;
	}
}

export default class ResizeEmbeddedIFrameUI extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'resizeEmbeddedIFrame', locale => {
			const command = editor.commands.get( 'resizeEmbeddedIFrame' );
			const view = new FormView( locale );

			command.on( 'set:value', ( _evt, _property, value ) => {
				view.heightInputValue = value?.height;
				view.widthInputValue = value?.width;
			} );
			view.bind( 'isEnabled' ).to( command, 'isEnabled' );

			this.listenTo( view, 'resize', () => {
				editor.execute( 'resizeEmbeddedIFrame', { height: view.heightInputValue, width: view.widthInputValue } );
			} );

			this.listenTo( view, 'convertToLink', () => {
				editor.execute( 'replaceEmbeddedIFrameWithLink', command.value.source );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
