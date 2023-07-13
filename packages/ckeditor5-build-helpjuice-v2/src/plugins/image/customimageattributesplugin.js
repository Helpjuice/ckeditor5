/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageInline from '@ckeditor/ckeditor5-image/src/imageinline';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';

export default class CustomImageAttributesPlugin extends Plugin {
	static get requires() {
		return [ ImageInline, ImageBlock ];
	}

	init() {
		const editor = this.editor;

		editor.model.schema.extend( 'imageInline', {
		  allowAttributes: [ 'alt', 'src', 'srcset', 'width', 'height', 'style' ]
		});

		editor.model.schema.extend( 'imageBlock', {
		  allowAttributes: [ 'alt', 'src', 'srcset', 'width', 'height', 'style' ]
		});

		editor.conversion.for( 'upcast' ).attributeToAttribute({
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
		  });


		editor.conversion.for('downcast').add(dispatcher => {
			dispatcher.on('attribute:style:imageBlock', (evt, data, conversionApi) => {
				const viewElement = conversionApi.mapper.toViewElement(data.item);

				conversionApi.writer.setAttribute('style', data.attributeNewValue, viewElement);
			});

			dispatcher.on('attribute:style:imageInline', (evt, data, conversionApi) => {
				const viewElement = conversionApi.mapper.toViewElement(data.item);

				conversionApi.writer.setAttribute('style', data.attributeNewValue, viewElement);
			});
		});
	}
}
