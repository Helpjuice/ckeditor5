/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import type AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';
import { INLINECODE, INLINECODE_COMMAND } from './inlinecodeediting';


export default class InlineCodeUI extends Plugin {
	public static get pluginName(): 'InlineCodeUI' {
		return 'InlineCodeUI';
	}

	public init(): void {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add( INLINECODE, locale => {
			// @ts-ignore
			const command: AttributeCommand = editor.commands.get( INLINECODE_COMMAND )!;
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Inline Code' ),
				icon: '<svg fill="#333" width="24px" height="24px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#333" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fff" stroke-width="0.9120000000000001"></g><g id="SVGRepo_iconCarrier"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path><path d="M9.293 9.293 5.586 13l3.707 3.707 1.414-1.414L8.414 13l2.293-2.293zm5.414 0-1.414 1.414L15.586 13l-2.293 2.293 1.414 1.414L18.414 13z"></path></g></svg>',
				keystroke: 'Ctrl+Alt+C',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( INLINECODE_COMMAND );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
