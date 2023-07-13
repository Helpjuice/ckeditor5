/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import type AttributeCommand from './inlinecodecommand';

const INLINECODE = 'inlineCode';

export default class InlineCodeUI extends Plugin {
	public static get pluginName(): 'InlineCodeUI' {
		return 'InlineCodeUI';
	}

	public init(): void {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add(INLINECODE, locale => {
			// @ts-ignore
			const command: AttributeCommand = editor.commands.get( INLINECODE )!;
			const view = new ButtonView( locale );

			view.set( {
				label: t( 'Insert Inline Code' ),
				icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 19h18v-2H3v2zM3 5v2h18V5H3zm5 7h8v-2H8v2z"/></svg>',
				tooltip: true,
				isToggleable: true
			} );

			view.bind( 'isOn', 'isEnabled' ).to( command, 'value', 'isEnabled' );

			// Execute command.
			this.listenTo( view, 'execute', () => {
				editor.execute( INLINECODE );
				editor.editing.view.focus();
			} );

			return view;
		} );
	}
}
