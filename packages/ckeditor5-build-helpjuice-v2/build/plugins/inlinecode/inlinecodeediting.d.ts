/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Plugin } from 'ckeditor5/src/core';
export declare const INLINECODE = "inlineCode";
export declare const INLINECODE_COMMAND = "inlineCodeCommand";
export default class InlineCodeEditing extends Plugin {
    static get pluginName(): 'InlineCodeEditing';
    init(): void;
}
