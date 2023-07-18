/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { Plugin } from 'ckeditor5/src/core';
import AttributeCommand from '@ckeditor/ckeditor5-basic-styles/src/attributecommand';

export const INLINECODE = 'inlineCode';
export const INLINECODE_COMMAND = 'inlineCodeCommand';

export default class InlineCodeEditing extends Plugin {
	public static get pluginName(): 'InlineCodeEditing' {
		return 'InlineCodeEditing';
	}

	public init(): void {
		const editor = this.editor;

		editor.model.schema.extend( '$text', { allowAttributes: INLINECODE } );

		editor.model.schema.setAttributeProperties( INLINECODE, {
			isFormatting: true
		} );

		editor.conversion.attributeToElement( {
			model: INLINECODE,
			view: {
				name: 'code'
			}
		} );

		editor.commands.add( INLINECODE_COMMAND, new AttributeCommand( editor, INLINECODE ) );

		editor.keystrokes.set( 'Ctrl+Alt+C', INLINECODE_COMMAND );
	}
}
