/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { Plugin } from 'ckeditor5/src/core';
import InlineCodeCommand from './inlinecodecommand';

const INLINECODE = 'inlineCode';

export default class InlineCodeEditing extends Plugin {
	public static get pluginName(): 'InlineCodeEditing' {
		return 'InlineCodeEditing';
	}

	public init(): void {
		const editor = this.editor;

		editor.model.schema.extend( '$text', { allowAttributes: INLINECODE } );

		editor.conversion.attributeToElement( {
			model: INLINECODE,
			view: {
				name: 'code'
			}
		} );

		editor.commands.add( INLINECODE, new InlineCodeCommand( editor, INLINECODE ) );
	}
}
