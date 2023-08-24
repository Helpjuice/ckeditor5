/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Plugin } from 'ckeditor5/src/core';
import InlineCodeEditing from './inlinecodeediting';
import InlineCodeUI from './inlinecodeui';
export default class InlineCode extends Plugin {
    static get requires(): readonly [typeof InlineCodeEditing, typeof InlineCodeUI];
    static get pluginName(): 'InlineCode';
}
