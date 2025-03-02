/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/image/imageediting
 */

import { Plugin } from 'ckeditor5/src/core';
import ImageLoadObserver from './imageloadobserver';
import InsertImageCommand from './insertimagecommand';
import ImageUtils from '../imageutils';

/**
 * The image engine plugin. This module loads common code shared between
 * {@link module:image/image/imageinlineediting~ImageInlineEditing} and
 * {@link module:image/image/imageblockediting~ImageBlockEditing} plugins.
 *
 * This plugin registers the {@link module:image/image/insertimagecommand~InsertImageCommand 'insertImage'} command.
 *
 * @extends module:core/plugin~Plugin
 */
export default class ImageEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ ImageUtils ];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'ImageEditing';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const conversion = editor.conversion;

		// See https://github.com/ckeditor/ckeditor5-image/issues/142.
		editor.editing.view.addObserver( ImageLoadObserver );

		conversion.for( 'upcast' )
			.attributeToAttribute( {
				view: {
					name: 'img',
					key: 'alt'
				},
				model: 'alt'
			} )
			.attributeToAttribute( {
				view: {
					name: 'img',
					key: 'width'
				},
				model: 'width'
			} )
			.attributeToAttribute( {
				view: {
					name: 'img',
					key: 'height'
				},
				model: 'height'
			} )
			.attributeToAttribute({
				model: {
					key: 'style',
					name: 'imageBlock'
				},
				view: 'style'
			})
			.attributeToAttribute({
				model: {
					key: 'style',
					name: 'imageInline'
				},
				view: 'style'
			})
			.attributeToAttribute( {
				view: {
					name: 'img',
					key: 'srcset'
				},
				model: {
					key: 'srcset',
					value: viewImage => {
						const value = {
							data: viewImage.getAttribute( 'srcset' )
						};

						if ( viewImage.hasAttribute( 'width' ) ) {
							value.width = viewImage.getAttribute( 'width' );
						}

						return value;
					}
				}
			} )

			conversion.for('downcast').add(dispatcher => {
				dispatcher.on('attribute:style:imageBlock', (evt, data, conversionApi) => {
					const viewElement = conversionApi.mapper.toViewElement(data.item);

					conversionApi.writer.setAttribute('style', data.attributeNewValue, viewElement);
				});

				dispatcher.on('attribute:style:imageInline', (evt, data, conversionApi) => {
					const viewElement = conversionApi.mapper.toViewElement(data.item);

					conversionApi.writer.setAttribute('style', data.attributeNewValue, viewElement);
				});
			});

		const insertImageCommand = new InsertImageCommand( editor );

		// Register `insertImage` command and add `imageInsert` command as an alias for backward compatibility.
		editor.commands.add( 'insertImage', insertImageCommand );
		editor.commands.add( 'imageInsert', insertImageCommand );
	}
}
