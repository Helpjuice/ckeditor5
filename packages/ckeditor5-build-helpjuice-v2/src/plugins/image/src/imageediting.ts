//@ts-nocheck
/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module image/image/imageediting
 */

import { Plugin } from 'ckeditor5/src/core';
import type { ViewElement } from 'ckeditor5/src/engine';
import ImageLoadObserver from './imageloadobserver';
import InsertImageCommand from './insertimagecommand';
import ReplaceImageSourceCommand from './replaceimagesourcecommand';
import ImageUtils from '@ckeditor/ckeditor5-image/src/imageutils';

/**
 * The image engine plugin. This module loads common code shared between
 * {@link module:image/image/imageinlineediting~ImageInlineEditing} and
 * {@link module:image/image/imageblockediting~ImageBlockEditing} plugins.
 *
 * This plugin registers the {@link module:image/image/insertimagecommand~InsertImageCommand 'insertImage'} command.
 */
export default class ImageEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	public static get requires() {
		return [ImageUtils] as const;
	}

	/**
	 * @inheritDoc
	 */
	public static get pluginName(): 'ImageEditing' {
		return 'ImageEditing';
	}

	/**
	 * @inheritDoc
	 */
	public init(): void {
		const editor = this.editor;
		const conversion = editor.conversion;

		// See https://github.com/ckeditor/ckeditor5-image/issues/142.
		editor.editing.view.addObserver(ImageLoadObserver);

		conversion
			.for('upcast')
			.attributeToAttribute({
				view: {
					name: 'img',
					key: 'alt',
				},
				model: 'alt',
			})
			.attributeToAttribute({
				view: {
					name: 'img',
					key: 'width',
				},
				model: 'width',
			})
			.attributeToAttribute({
				view: {
					name: 'img',
					key: 'height',
				},
				model: 'height',
			})
			.attributeToAttribute({
				// @ts-ignore
				model: {
					key: 'style',
					name: 'imageBlock',
				},
				view: 'style',
			})
			.attributeToAttribute({
				// @ts-ignore
				model: {
					key: 'style',
					name: 'imageInline',
				},
				view: 'style',
			})
			.attributeToAttribute({
				view: {
					name: 'img',
					key: 'srcset',
				},
				model: {
					key: 'srcset',
					value: (viewImage: ViewElement) => {
						const value: Record<string, string> = {
							data: viewImage.getAttribute('srcset')!,
						};

						if (viewImage.hasAttribute('width')) {
							value.width = viewImage.getAttribute('width')!;
						}

						return value;
					},
				},
			});

		conversion.for('downcast').add((dispatcher) => {
			dispatcher.on(
				'attribute:style:imageBlock',
				(evt, data, conversionApi) => {
					const viewElement = conversionApi.mapper.toViewElement(
						data.item
					);

					conversionApi.writer.setAttribute(
						'style',
						data.attributeNewValue,
						viewElement
					);
				}
			);

			dispatcher.on(
				'attribute:style:imageInline',
				(evt, data, conversionApi) => {
					const viewElement = conversionApi.mapper.toViewElement(
						data.item
					);

					conversionApi.writer.setAttribute(
						'style',
						data.attributeNewValue,
						viewElement
					);
				}
			);
		});

		const insertImageCommand = new InsertImageCommand(editor);
		const replaceImageSourceCommand = new ReplaceImageSourceCommand(editor);

		editor.commands.add('insertImage', insertImageCommand);
		editor.commands.add('replaceImageSource', replaceImageSourceCommand);

		// `imageInsert` is an alias for backward compatibility.
		editor.commands.add('imageInsert', insertImageCommand);
	}
}
