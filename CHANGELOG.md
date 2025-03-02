Changelog
=========

## [38.0.0](https://github.com/ckeditor/ckeditor5/compare/v37.1.0...v38.0.0) (2023-05-22)

### Release highlights

#### "Powered by CKEditor" logo

From version v38.0.0 onwards, all open-source installations of CKEditor (using it under the GPL terms) will carry a small “Powered by CKEditor” logo in the bottom-right corner of the editing area. This new logo links directly to the [CKEditor website](https://ckeditor.com/) to strengthen the awareness of who’s powering and modernizing their rich text editor.

This change does not affect customers with commercial licenses. You can reach out to our Technical Support team using [this form](https://ckeditor.com/contact/), if you have any questions.

You can read more about this change in the [announcement on GitHub](https://github.com/ckeditor/ckeditor5/issues/14082), the [update guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-38.html), and the [Managing the "Powered by CKEditor" logo guide](https://ckeditor.com/docs/ckeditor5/latest/support/managing-ckeditor-logo.html).

#### Color picker

Until v38.0.0, users were only able to choose from predefined colors in features like font color, font background color, table border color, etc. Starting from v38.0.0, they can also use a color picker to choose any possible color.

The color picker is now available in the font color and font background color features. In the upcoming versions (next month), it will be added to the table-related color features.

If you're interested in keeping the old behavior where the user can choose only from predefined colors, check out the [update guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-38.html).

#### Styles

The latest update allows users to [apply styling](https://ckeditor.com/docs/ckeditor5/latest/features/style.html) to tables and their elements, as well as to lists and their items (`DocumentList` plugin). We've also fixed the behavior for links, so styles now only apply to the entire link. In addition, we've implemented a few bug fixes to address prior inconsistencies and issues.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* Introduced the "Powered by CKEditor" logo.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Color picker is now added by default to the font color and font background color dropdowns. Thanks to it, users can apply any color through these features. In places where users should use a limited number of colors, it is possible to disable the color picker using a configuration option.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced new values for the `trackFormatChanges` configuration parameter. Previously possible values were `true` or `false`. New possible values are: `'always'`, `'default'` (the old `true`), and `'never'` (the old `false`). Please update your configuration accordingly.
* Changed the look of the buttons in the comments and suggestions annotations. Previously, the buttons to add a comment, add a reply, or save the edited comment were represented by icons. Now they are proper buttons with text labels.

### Features

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Introduced experimental support for block drag & drop. Closes [#14033](https://github.com/ckeditor/ckeditor5/issues/14033). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Added support for resolved comment threads imported from Word.
* **[editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root)**: Introduced the `MultiRootEditor#disableRoot()` and `MultiRootEditor#enableRoot()` methods that allow switching only a particular root to a read-only state. ([commit](https://github.com/ckeditor/ckeditor5/commit/4e28b171d5a517c2d91a3e38504c12d4c869ba69))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `Model#canEditAt( selectable )` method that checks whether a given `selectable` is in an editable place in the model. It should be used instead of `Editor#isReadOnly` in multi-root integrations as it acknowledges the root's read-only state. ([commit](https://github.com/ckeditor/ckeditor5/commit/4e28b171d5a517c2d91a3e38504c12d4c869ba69))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Introduced the color picker feature for font and font background colors. Closes [#10988](https://github.com/ckeditor/ckeditor5/issues/10988). ([commit](https://github.com/ckeditor/ckeditor5/commit/23227a6725aacf8e37d4c5d64d724a30decaf354))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The styles dropdown now applies link styles only to the entire link. Closes [#11709](https://github.com/ckeditor/ckeditor5/issues/11709). ([commit](https://github.com/ckeditor/ckeditor5/commit/f23d002bcc3288e4c500353bec4d44f054f516ef))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Added custom styling support for the `<td>`, `<th>`, `<caption>`, and `<figcaption>` elements. Closes [#13777](https://github.com/ckeditor/ckeditor5/issues/13777). ([commit](https://github.com/ckeditor/ckeditor5/commit/92b418d05f9a1f5608b5356dbc6c1573be04f415))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Added support for the document lists feature. Closes [#11590](https://github.com/ckeditor/ckeditor5/issues/11590), [#12668](https://github.com/ckeditor/ckeditor5/issues/12668). ([commit](https://github.com/ckeditor/ckeditor5/commit/f4ddda86ecbb762565a90a7ba8a9fa5290796803))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The `<figure>` element can now be styled. See [#11590](https://github.com/ckeditor/ckeditor5/issues/11590). ([commit](https://github.com/ckeditor/ckeditor5/commit/f4ddda86ecbb762565a90a7ba8a9fa5290796803))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added more granular changes tracking.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced a new configuration parameter: `mergeNestedSuggestions: boolean` (default `true`). Introduced new values for the `trackFormatChanges` configuration parameter. See the API reference for more details.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced the color picker view. See [#10988](https://github.com/ckeditor/ckeditor5/issues/10988). ([commit](https://github.com/ckeditor/ckeditor5/commit/23227a6725aacf8e37d4c5d64d724a30decaf354))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The mentions dropdown no longer appears behind the comments archive dropdown panel and is now accessible.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed an error thrown when a resolved comment thread was received in a particular scenario.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comments archive panel is now correctly visible when the comments archive is opened from various toolbars.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comment thread `attributes` are now correctly returned in `CommentsRepository#getCommentThreads()`.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed the comment thread input area which was incorrectly displayed or hidden in particular cases.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed the editor crash when a comment was added to a comment thread imported from a Word file.
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added the `licenseKey` property to the `EditorConfig` interface. Closes [#13906](https://github.com/ckeditor/ckeditor5/issues/13906). ([commit](https://github.com/ckeditor/ckeditor5/commit/7e3e93c52fea343c3c850c4b9bcdcb97529f1bf6))
* **[document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline)**: The document outline and table of contents features should now support the multi-root editor.
* **[document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline)**: The document outline and table of contents features should not display placeholders for empty headings by default.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: TypeScript should suggest `editingDowncast` and `dataDowncast` in `conversion.for`. Closes [#13750](https://github.com/ckeditor/ckeditor5/issues/13750). ([commit](https://github.com/ckeditor/ckeditor5/commit/51e1b17955538db3c64bc97ee071f8199e99bcd7))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor should not crash when a custom element with an invalid attribute name is pasted. Closes [#13841](https://github.com/ckeditor/ckeditor5/issues/13841). ([commit](https://github.com/ckeditor/ckeditor5/commit/2389d304c3a178a8ffcab26d86c97bbc98c44b0e))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Screen readers should now announce the selected option in dropdown lists for the font size, font family, and heading features. Closes [#13250](https://github.com/ckeditor/ckeditor5/issues/13250). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fe4416c313d568fb41db1904fd80061b36bb957))
* **[heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading)**: Screen readers should now announce the selected option in dropdown lists for the font size, font family, and heading features. Closes [#13250](https://github.com/ckeditor/ckeditor5/issues/13250). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fe4416c313d568fb41db1904fd80061b36bb957))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Fixed the editor crash when pasting a table from Google Sheets. Closes [#13876](https://github.com/ckeditor/ckeditor5/issues/13876). ([commit](https://github.com/ckeditor/ckeditor5/commit/2abd9ff7c404f1f6c32e64c68dcde13d07177d8d))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: HTML classes from a paragraph created after pressing the <kbd>Enter</kbd> key in a heading are now removed. Closes [#11578](https://github.com/ckeditor/ckeditor5/issues/11578). ([commit](https://github.com/ckeditor/ckeditor5/commit/77091ec981a98a0d02291f9da23ef3e5bcdf9d8b))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed the width of tables pasted from Google Sheets. Closes [#13746](https://github.com/ckeditor/ckeditor5/issues/13746). ([commit](https://github.com/ckeditor/ckeditor5/commit/2abd9ff7c404f1f6c32e64c68dcde13d07177d8d))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed the editor crash when a legacy revision (created using the editor in version 37.1.0 or older) was restored.
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The remove format feature should also remove styles. Closes [#11580](https://github.com/ckeditor/ckeditor5/issues/11580). ([commit](https://github.com/ckeditor/ckeditor5/commit/ca522536ef0a1a3500af30e1736e2a8b91c1dd31))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The classes of the removed style are now preserved if other active styles also use them. Closes [#11748](https://github.com/ckeditor/ckeditor5/issues/11748). ([commit](https://github.com/ckeditor/ckeditor5/commit/823c7ffa934890b8116f29bab961e4b20306d217))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Removed comments with both `CK_DEBUG` and `istanbul` that break the Vite integration. See [#13922](https://github.com/ckeditor/ckeditor5/issues/13922). ([commit](https://github.com/ckeditor/ckeditor5/commit/ce9b09c631bbdd8afe304573f1e9ef5dd94fc1d4))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed the integration of the remove format and format painter features.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `mousedown` event should not be canceled on a UI button press so it can be dragged. See [#14033](https://github.com/ckeditor/ckeditor5/issues/14033). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The toolbar should not disappear when the toolbar separator is clicked. The toolbar view should be focusable the same as the dropdown panel views. Closes [#12172](https://github.com/ckeditor/ckeditor5/issues/12172). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Select all (<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>) should now be enabled by default in an input field placed in a dropdown panel. Closes [#13982](https://github.com/ckeditor/ckeditor5/issues/13982). ([commit](https://github.com/ckeditor/ckeditor5/commit/78466837d66f43ae6609030af05f6a294aec19f8))
* Screen readers should announce the selected option in dropdown lists for the code block, language, image (resize options), special characters (categories), and table (border style) features. Closes [#13748](https://github.com/ckeditor/ckeditor5/issues/13748). ([commit](https://github.com/ckeditor/ckeditor5/commit/40533f7e672ce020e4d20db043bca07f91b586d3))

### Other changes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Changed the comments annotation button styles from icons to labeled buttons.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comments archive header is now fixed at the top of the dropdown panel.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Changed the export type to export for plugins in the [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image) package. Closes [#13868](https://github.com/ckeditor/ckeditor5/issues/13868). ([commit](https://github.com/ckeditor/ckeditor5/commit/5b3f519043571335e6c1ec579c68a94d506e8d0e))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Changed the track changes annotation button styles from icons to labeled buttons.
* Optimized icons. ([commit](https://github.com/ckeditor/ckeditor5/commit/a7a99509c30183e4c1ed474d7da758551c575f99))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/08682f5ac50097cf41a804e689c9355bb6dc16de), [commit](https://github.com/ckeditor/ckeditor5/commit/fdbbe4ef80917291c0d69ffe6831c976dd6da924))
* Introduced the "Powered by CKEditor" logo. ([commit](https://github.com/ckeditor/ckeditor5/commit/383ea8aefab9575edee969581527daa1561e7e07))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.1.0 => v38.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.1.0 => v38.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-format-painter](https://www.npmjs.com/package/@ckeditor/ckeditor5-format-painter): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-slash-command](https://www.npmjs.com/package/@ckeditor/ckeditor5-slash-command): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-template](https://www.npmjs.com/package/@ckeditor/ckeditor5-template): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.1.0 => v38.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.1.0 => v38.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v37.1.0 => v38.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v37.1.0 => v38.0.0
</details>


## [38.0.0-rc.1](https://github.com/ckeditor/ckeditor5/compare/v37.1.0...v38.0.0-rc.1) (2023-05-16)

This is a hotfix release that addresses problems discovered after publishing code for our previous RC release. Please check the changelog for version `38.0.0-rc.0` below as well.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v38.0.0-rc.0 => v38.0.0-rc.1

Releases containing new features:

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v38.0.0-rc.0 => v38.0.0-rc.1

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-format-painter](https://www.npmjs.com/package/@ckeditor/ckeditor5-format-painter): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-slash-command](https://www.npmjs.com/package/@ckeditor/ckeditor5-slash-command): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-template](https://www.npmjs.com/package/@ckeditor/ckeditor5-template): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v38.0.0-rc.0 => v38.0.0-rc.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v38.0.0-rc.0 => v38.0.0-rc.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v38.0.0-rc.0 => v38.0.0-rc.1
</details>


## [38.0.0-rc.0](https://github.com/ckeditor/ckeditor5/compare/v37.1.0...v38.0.0-rc.0) (2023-05-16)

### Release highlights

#### "Powered by CKEditor" logo

From version v38.0.0 onwards, all open-source installations of CKEditor (using it under the GPL terms) will carry a small “Powered by CKEditor” logo in the bottom-right corner of the editing area. This new logo links directly to the [CKEditor website](https://ckeditor.com/) to strengthen the awareness of who’s powering and modernizing their rich text editor.

This change does not affect customers with commercial licenses. You can reach out to our Technical Support team using [this form](https://ckeditor.com/contact/), if you have any questions.

You can read more about this change in the [announcement on GitHub](https://github.com/ckeditor/ckeditor5/issues/14082), the [update guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-38.html), and the [Managing the "Powered by CKEditor" logo guide](https://ckeditor.com/docs/ckeditor5/latest/support/managing-ckeditor-logo.html).

#### Color picker

Until v38.0.0, users were only able to choose from predefined colors in features like font color, font background color, table border color, etc. Starting from v38.0.0, they can also use a color picker to choose any possible color.

The color picker is now available in the font color and font background color features. In the upcoming versions (next month), it will be added to the table-related color features.

If you're interested in keeping the old behavior where the user can choose only from predefined colors, check out the [update guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-38.html).

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* Introduced the "Powered by CKEditor" logo.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Color picker is now added by default to the font color and font background color dropdowns. Thanks to it, users can apply any color through these features. In places where users should use a limited number of colors, it is possible to disable the color picker using a configuration option.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced new values for the `trackFormatChanges` configuration parameter. Previously possible values were `true` or `false`. New possible values are: `'always'`, `'default'` (the old `true`), and `'never'` (the old `false`). Please update your configuration accordingly.
* Changed the look of the buttons in the comments and suggestions annotations. Previously, the buttons to add a comment, add a reply, or save the edited comment were represented by icons. Now they are proper buttons with text labels.

### Features

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Introduced experimental support for block drag & drop. Closes [#14033](https://github.com/ckeditor/ckeditor5/issues/14033). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Added support for resolved comment threads imported from Word.
* **[editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root)**: Introduced the `MultiRootEditor#disableRoot()` and `MultiRootEditor#enableRoot()` methods that allow switching only a particular root to a read-only state. ([commit](https://github.com/ckeditor/ckeditor5/commit/4e28b171d5a517c2d91a3e38504c12d4c869ba69))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `Model#canEditAt( selectable )` method that checks whether a given `selectable` is in an editable place in the model. It should be used instead of `Editor#isReadOnly` in multi-root integrations as it acknowledges the root's read-only state. ([commit](https://github.com/ckeditor/ckeditor5/commit/4e28b171d5a517c2d91a3e38504c12d4c869ba69))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Introduced the color picker feature for font and font background colors. Closes [#10988](https://github.com/ckeditor/ckeditor5/issues/10988). ([commit](https://github.com/ckeditor/ckeditor5/commit/23227a6725aacf8e37d4c5d64d724a30decaf354))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The styles dropdown now applies link styles only to the entire link. Closes [#11709](https://github.com/ckeditor/ckeditor5/issues/11709). ([commit](https://github.com/ckeditor/ckeditor5/commit/f23d002bcc3288e4c500353bec4d44f054f516ef))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Added custom styling support for the `<td>`, `<th>`, `<caption>`, and `<figcaption>` elements. Closes [#13777](https://github.com/ckeditor/ckeditor5/issues/13777). ([commit](https://github.com/ckeditor/ckeditor5/commit/92b418d05f9a1f5608b5356dbc6c1573be04f415))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Added support for the document lists feature. Closes [#11590](https://github.com/ckeditor/ckeditor5/issues/11590), [#12668](https://github.com/ckeditor/ckeditor5/issues/12668). ([commit](https://github.com/ckeditor/ckeditor5/commit/f4ddda86ecbb762565a90a7ba8a9fa5290796803))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The `<figure>` element can now be styled. See [#11590](https://github.com/ckeditor/ckeditor5/issues/11590). ([commit](https://github.com/ckeditor/ckeditor5/commit/f4ddda86ecbb762565a90a7ba8a9fa5290796803))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added more granular changes tracking.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced a new configuration parameter: `mergeNestedSuggestions: boolean` (default `true`). Introduced new values for the `trackFormatChanges` configuration parameter. See the API reference for more details.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced the color picker view. See [#10988](https://github.com/ckeditor/ckeditor5/issues/10988). ([commit](https://github.com/ckeditor/ckeditor5/commit/23227a6725aacf8e37d4c5d64d724a30decaf354))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The mentions dropdown no longer appears behind the comments archive dropdown panel and is now accessible.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed an error thrown when a resolved comment thread was received in a particular scenario.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comments archive panel is now correctly visible when the comments archive is opened from various toolbars.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comment thread `attributes` are now correctly returned in `CommentsRepository#getCommentThreads()`.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed the comment thread input area which was incorrectly displayed or hidden in particular cases.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed the editor crash when a comment was added to a comment thread imported from a Word file.
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added the `licenseKey` property to the `EditorConfig` interface. Closes [#13906](https://github.com/ckeditor/ckeditor5/issues/13906). ([commit](https://github.com/ckeditor/ckeditor5/commit/7e3e93c52fea343c3c850c4b9bcdcb97529f1bf6))
* **[document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline)**: The document outline and table of contents features should now support the multi-root editor.
* **[document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline)**: The document outline and table of contents features should not display placeholders for empty headings by default.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: TypeScript should suggest `editingDowncast` and `dataDowncast` in `conversion.for`. Closes [#13750](https://github.com/ckeditor/ckeditor5/issues/13750). ([commit](https://github.com/ckeditor/ckeditor5/commit/51e1b17955538db3c64bc97ee071f8199e99bcd7))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor should not crash when a custom element with an invalid attribute name is pasted. Closes [#13841](https://github.com/ckeditor/ckeditor5/issues/13841). ([commit](https://github.com/ckeditor/ckeditor5/commit/2389d304c3a178a8ffcab26d86c97bbc98c44b0e))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Screen readers should now announce the selected option in dropdown lists for the font size, font family, and heading features. Closes [#13250](https://github.com/ckeditor/ckeditor5/issues/13250). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fe4416c313d568fb41db1904fd80061b36bb957))
* **[heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading)**: Screen readers should now announce the selected option in dropdown lists for the font size, font family, and heading features. Closes [#13250](https://github.com/ckeditor/ckeditor5/issues/13250). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fe4416c313d568fb41db1904fd80061b36bb957))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Fixed the editor crash when pasting a table from Google Sheets. Closes [#13876](https://github.com/ckeditor/ckeditor5/issues/13876). ([commit](https://github.com/ckeditor/ckeditor5/commit/2abd9ff7c404f1f6c32e64c68dcde13d07177d8d))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: HTML classes from a paragraph created after pressing the <kbd>Enter</kbd> key in a heading are now removed. Closes [#11578](https://github.com/ckeditor/ckeditor5/issues/11578). ([commit](https://github.com/ckeditor/ckeditor5/commit/77091ec981a98a0d02291f9da23ef3e5bcdf9d8b))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed the width of tables pasted from Google Sheets. Closes [#13746](https://github.com/ckeditor/ckeditor5/issues/13746). ([commit](https://github.com/ckeditor/ckeditor5/commit/2abd9ff7c404f1f6c32e64c68dcde13d07177d8d))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed the editor crash when a legacy revision (created using the editor in version 37.1.0 or older) was restored.
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The remove format feature should also remove styles. Closes [#11580](https://github.com/ckeditor/ckeditor5/issues/11580). ([commit](https://github.com/ckeditor/ckeditor5/commit/ca522536ef0a1a3500af30e1736e2a8b91c1dd31))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The classes of the removed style are now preserved if other active styles also use them. Closes [#11748](https://github.com/ckeditor/ckeditor5/issues/11748). ([commit](https://github.com/ckeditor/ckeditor5/commit/823c7ffa934890b8116f29bab961e4b20306d217))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Removed comments with both `CK_DEBUG` and `istanbul` that break the Vite integration. See [#13922](https://github.com/ckeditor/ckeditor5/issues/13922). ([commit](https://github.com/ckeditor/ckeditor5/commit/ce9b09c631bbdd8afe304573f1e9ef5dd94fc1d4))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed the integration of the remove format and format painter features.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `mousedown` event should not be canceled on a UI button press so it can be dragged. See [#14033](https://github.com/ckeditor/ckeditor5/issues/14033). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The toolbar should not disappear when the toolbar separator is clicked. The toolbar view should be focusable the same as the dropdown panel views. Closes [#12172](https://github.com/ckeditor/ckeditor5/issues/12172). ([commit](https://github.com/ckeditor/ckeditor5/commit/44cb8cb9b090feb4797a73a65cde1cfd97b48035))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Select all (<kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>A</kbd>) should now be enabled by default in an input field placed in a dropdown panel. Closes [#13982](https://github.com/ckeditor/ckeditor5/issues/13982). ([commit](https://github.com/ckeditor/ckeditor5/commit/78466837d66f43ae6609030af05f6a294aec19f8))
* Screen readers should announce the selected option in dropdown lists for the code block, language, image (resize options), special characters (categories), and table (border style) features. Closes [#13748](https://github.com/ckeditor/ckeditor5/issues/13748). ([commit](https://github.com/ckeditor/ckeditor5/commit/40533f7e672ce020e4d20db043bca07f91b586d3))

### Other changes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Changed the comments annotation button styles from icons to labeled buttons.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comments archive header is now fixed at the top of the dropdown panel.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Changed the export type to export for plugins in the [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image) package. Closes [#13868](https://github.com/ckeditor/ckeditor5/issues/13868). ([commit](https://github.com/ckeditor/ckeditor5/commit/5b3f519043571335e6c1ec579c68a94d506e8d0e))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Changed the track changes annotation button styles from icons to labeled buttons.
* Optimized icons. ([commit](https://github.com/ckeditor/ckeditor5/commit/a7a99509c30183e4c1ed474d7da758551c575f99))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/08682f5ac50097cf41a804e689c9355bb6dc16de), [commit](https://github.com/ckeditor/ckeditor5/commit/fdbbe4ef80917291c0d69ffe6831c976dd6da924))
* Introduced the "Powered by CKEditor" logo. ([commit](https://github.com/ckeditor/ckeditor5/commit/383ea8aefab9575edee969581527daa1561e7e07))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.1.0 => v38.0.0-rc.0

Releases containing new features:

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.1.0 => v38.0.0-rc.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-format-painter](https://www.npmjs.com/package/@ckeditor/ckeditor5-format-painter): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-slash-command](https://www.npmjs.com/package/@ckeditor/ckeditor5-slash-command): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-template](https://www.npmjs.com/package/@ckeditor/ckeditor5-template): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.1.0 => v38.0.0-rc.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v37.1.0 => v38.0.0-rc.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v37.1.0 => v38.0.0-rc.0
</details>


## [37.1.0](https://github.com/ckeditor/ckeditor5/compare/v37.0.1...v37.1.0) (2023-04-19)

### Release highlights

#### Productivity Pack

We are excited to announce the release of a Productivity Pack for CKEditor 5. It includes five new premium features designed to boost productivity when working with the editor.

* **[Content templates](https://ckeditor.com/docs/ckeditor5/latest/features/template.html)**: The template feature allows you to insert predefined content structures into the document. Templates can provide both smaller portions of content (e.g. a formatted table) and base structures for entire documents (e.g. a formal letter template).
* **[Table of contents](https://ckeditor.com/docs/ckeditor5/latest/features/table-of-contents.html)**: The table of contents feature lets you insert a widget with the list of headings (section titles) that reflects the structure of the document. The list stays up–to–date automatically as the user works on the document. Clicking a list item navigates the user to the corresponding document section.
* **[Document outline](https://ckeditor.com/docs/ckeditor5/latest/features/document-outline.html)**: The document outline feature displays the list of sections (headings) of the document next to the editor. The outline updates automatically as the user works on the document. It offers quick navigation to a specific section upon clicking.
* **[Format painter](https://ckeditor.com/docs/ckeditor5/latest/features/format-painter.html)**: The format painter feature lets you copy text formatting (such as bold, italic, font size, color, etc.) and apply it in a different place in the edited document. It helps keep the formatting consistent and speeds up the creation of rich content.
* **[Slash commands](https://ckeditor.com/docs/ckeditor5/latest/features/slash-commands.html)**: The slash commands feature lets you execute a predefined command by writing its name or alias directly in the editor. When you type a slash (<kbd>/</kbd>), the suggested commands are displayed in a panel next to it. You can also type a phrase after the <kbd>/</kbd> to filter the results in the panel and to easily find the desired command.

#### Other changes

We continue to work on the [multi-root editor](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/multi-root-editor.html). This release introduces compatibility with reversion history and pagination. We also made some minor improvements and bug fixes.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: A text with language set is no longer styled as italic. To re-enable the previous behavior, add the following style definition to your CSS:

	```css
	.ck-content span[lang] { font-style: italic; }
	```

### Features

* **[template](https://www.npmjs.com/package/@ckeditor/ckeditor5-template)** Introduced the content templates feature. It allows inserting predefined templates into the editor content.
* **[document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline)** Introduced the document outline and table of contents features. The document outline feature allows the user to display a navigable list of sections (headings) of the document next to the editor. The table of contents feature lets them insert a widget with a list of headings (section titles) that reflects the structure of the document.
* **[format-painter](https://www.npmjs.com/package/@ckeditor/ckeditor5-format-painter)** Introduced the format painter feature. It allows the user to copy text formatting (such as bold, italic, font size, color, etc.) and apply it in a different place in the edited document.
* **[slash-command](https://www.npmjs.com/package/@ckeditor/ckeditor5-slash-command)** Introduced the slash commands feature. It allows the user to execute a predefined command by writing its name or alias directly in the editor.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced the revision history feature support for multi-root editor.
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: Introduced the basic pagination feature support for multi-root editor.
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: Made the `SourceEditing.updateEditorData()` method public to allow saving source editing data independently of the UI. Closes [#11008](https://github.com/ckeditor/ckeditor5/issues/11008). ([commit](https://github.com/ckeditor/ckeditor5/commit/acc02f4b3bfd6b707432fa51bdb1e5f4bb505923))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed the incorrect default permissions applied in non-real-time collaboration integrations.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `Selection#getSelectedBlocks()` should ignore trailing blocks where no content is selected. The selection of such blocks is not visible to the content author and is usually there unintentionally. Closes [#11585](https://github.com/ckeditor/ckeditor5/issues/11585). ([commit](https://github.com/ckeditor/ckeditor5/commit/9d9604b969d4cc5d7fb27a6fddad408fda56f972))
* **[enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter)**: Pressing <kbd>Shift</kbd>+<kbd>Enter</kbd> in Safari should insert `<br>` instead of splitting a block. Closes [#13321](https://github.com/ckeditor/ckeditor5/issues/13321). ([commit](https://github.com/ckeditor/ckeditor5/commit/90445f8269cfbcf481cabdf4b210b9815eca200d))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: `ListPropertiesEditing` should not crash if there was a list in an image caption element. Closes [#13858](https://github.com/ckeditor/ckeditor5/issues/13858). ([commit](https://github.com/ckeditor/ckeditor5/commit/8162741aa247568efc897e83787e224b3221b1a5))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Fixed an issue when the editor selection would sometimes not be moved past other users' selection when pressing arrow keys.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Text suggestions should replace the whole words. Closes [#13583](https://github.com/ckeditor/ckeditor5/issues/13583). ([commit](https://github.com/ckeditor/ckeditor5/commit/c6a8e85b3876f9d716e01999d994dbbf9b20727b))

### Other changes

* **[editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root)**: The multi-root editor will now throw an error if `EditorConfig#initialData` is mismatched with initial roots set in `MultiRootEditor#create()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/9fd594492dcf0b0110fb5d041bd89c59312e80c1))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `targetRanges` property of the `beforeInput` event data should be fixed to not cross the limit elements' boundaries. See [#13583](https://github.com/ckeditor/ckeditor5/issues/13583). ([commit](https://github.com/ckeditor/ckeditor5/commit/c6a8e85b3876f9d716e01999d994dbbf9b20727b))
* **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: `TextPartLanguage` no longer styles text as italic when the language is set. Closes [#12672](https://github.com/ckeditor/ckeditor5/issues/12672). ([commit](https://github.com/ckeditor/ckeditor5/commit/5be454a8948a10e2f4662b946daa5e2839bd0f8e))
* Switched from `ts-loader` to `esbuild-loader` when processing the TypeScript sources. It significantly reduces the build time when processing automated and manual tests or preparing snippets in the documentation. Closes [#13643](https://github.com/ckeditor/ckeditor5/issues/13643). ([commit](https://github.com/ckeditor/ckeditor5/commit/48e90dc3b8aec8adc333825d0c6e27295fc913cc))
* `MultiRootEditor` will first fire all `detachRoot` events and then all `addRoot` events if there are detached and added roots in the same batch. ([commit](https://github.com/ckeditor/ckeditor5/commit/629f8ab55d75516eb8151cfc250952667d4427e6))
* Updated translations.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-document-outline](https://www.npmjs.com/package/@ckeditor/ckeditor5-document-outline): v37.1.0
* [@ckeditor/ckeditor5-format-painter](https://www.npmjs.com/package/@ckeditor/ckeditor5-format-painter): v37.1.0
* [@ckeditor/ckeditor5-slash-command](https://www.npmjs.com/package/@ckeditor/ckeditor5-slash-command): v37.1.0
* [@ckeditor/ckeditor5-template](https://www.npmjs.com/package/@ckeditor/ckeditor5-template): v37.1.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.0.1 => v37.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.0.1 => v37.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.0.1 => v37.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.0.1 => v37.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v37.0.1 => v37.1.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v37.0.1 => v37.1.0
</details>


## [37.0.1](https://github.com/ckeditor/ckeditor5/compare/v37.0.0...v37.0.1) (2023-04-05)

### Known bugs

**⚠️ After the release we noticed a bug that may affect integrations which use the comments feature without real-time collaboration ⚠️**

**Update: This issue was fixed in version 37.1.0.**

Default permissions for the comments feature do not work correctly in integrations that do not use real-time collaboration. Users are unable to edit or remove their comments.

To solve this problem, make sure to set the permissions after the editor is initialized, for example:

```js
ClassicEditor.create( domElement, config ).then( editor => {
	// Set the default permissions set.
	editor.plugins.get( 'Permissions' ).setPermissions( [ 'document:write', 'comment:write', 'comment:admin' ] );
} );
```

### Release highlights

There was an invalid version of the `ckeditor5-collaboration` dependency in the following packages:

* **[@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**
* **[@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**
* **[@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**
* **[@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**

Due to that and the [CKEditor 5 versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html), we release all packages once again.

Check out the highlights of the [original v37.0.0 release](https://github.com/ckeditor/ckeditor5/releases/tag/v37.0.0).

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.0.0 => v37.0.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.0.0 => v37.0.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v37.0.0 => v37.0.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v37.0.0 => v37.0.1
</details>


## [37.0.0](https://github.com/ckeditor/ckeditor5/compare/v36.0.1...v37.0.0) (2023-04-05)

### Known bugs

**⚠️ After the release we noticed a bug that may affect integrations which use the comments feature without real-time collaboration ⚠️**

**Update: This issue was fixed in version 37.1.0.**

Default permissions for comments feature do not work correctly in integrations that do not use real-time collaboration. Users are unable to edit or remove their comments.

To solve this problem, make sure to set the permissions after the editor is initialized, for example:

```js
ClassicEditor.create( domElement, config ).then( editor => {
	// Set the default permissions set.
	editor.plugins.get( 'Permissions' ).setPermissions( [ 'document:write', 'comment:write', 'comment:admin' ] );
} );
```

### Release highlights

#### Migration to TypeScript

We are excited to announce that CKEditor 5 has been completely migrated to TypeScript, making v37.0.0 the first major release with full TypeScript support. This migration has brought numerous improvements, including better code organization and enhanced stability:

* **Full TypeScript support**: CKEditor now supports TypeScript in all its packages, making it easier for developers to write type-safe code and provide better code completion and error checking in IDEs.
* **Improved code quality**: The migration to TypeScript has allowed us to improve the overall code quality of CKEditor, resulting in better stability and performance.
* **Better documentation**: With TypeScript, we have been able to provide comprehensive and accurate type definitions for all the components in CKEditor, making it easier for developers to understand and use the API.
* **Enhanced developer experience**: TypeScript provides better tooling support, including code completion and error checking, which improves the overall developer experience.

Feel free to check our documentation to find out more about the [Using CKEditor 5 with a TypeScript setup](https://ckeditor.com/docs/ckeditor5/latest/installation/working-with-typescript.html) and read [the migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-37.html).

We believe this release will be a significant milestone for CKEditor 5 and will provide a better development experience for our users. Please try it out and let us know your feedback by leaving a comment in this [issue](https://github.com/ckeditor/ckeditor5/issues/12027).

#### Comments archive

We are excited to introduce the comments archive feature! The new feature provides a way to archive comments that are no longer relevant, reducing clutter and making it easier to focus on the most important feedback. Users are now able to resolve comment threads (instead of permanently removing them). Resolved comments are moved to the comments archive panel, which can be accessed from the toolbar. You can view and restore archived comment threads if necessary. This new feature will help simplify the feedback management process for the editor users.

Make sure to add the `commentsArchive` button to your toolbar configuration and review the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-37.html) to learn more about the feature from a technical point of view.

#### Multi-root editor

In this release, we added official support for the [multi-root editor type](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/multi-root-editor.html) and a new [multi-root editor build](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/predefined-builds.html#multi-root-editor). Additionally, we bring some fundamental improvements that make the multi-root editor more flexible and useful!

* Add and detach document roots. The multi-root editor will allow you to add or remove editing fields in your application in a dynamic fashion (i.e. after the editor was initialized), without the need to create additional editor instances.
* The multi-root editor will allow you to use root attributes to store additional metadata related to roots (editable fields). You can change these attributes and retrieve them when you save the document data. Finally, you can react to these changes to alter how your application looks or behaves. Root attributes are a tool that will help you customize the editing experience further according to your needs. To take advantage of root attributes, you will need to provide a custom feature. You will need to handle these attributes only if you provide custom features that use them.

**The multi-root editor is still a project in progress!**

While the new predefined build is readily available, **several features are not supported in the multi-root editor yet** as of this release. These include: revision history, pagination, PDF/Word export, table resize, word count, HTML comments, full-page editing, title, mini-map. Multi-root editor cannot be uploaded as an editor bundle to the Cloud Services. Multi-root editor is not compatible with framework integrations as of now.

We will work on bringing support for these features in the upcoming releases.

#### Tables

We expanded the General HTM Support feature with support for the `<colgroup>`’s and `<col>`’s attributes. We significantly refactored how these HTML elements are handled by the editor. They are now legit elements in the model instead of being kept as a `<table>` attribute.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* Upgraded the minimal versions of Node.js to `16.0.0` due to the end of LTS.
* The comments archive feature requires changes in the non-real time comments adapter integration. Please review the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-37.html) and the updated API documentation for the comments adapter.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table column widths are stored as model elements instead of a model element attribute. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479).
* The [`@ckeditor/ckeditor5-watchdog`](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog) package is no longer available as a standalone DLL build. It is now included in the main `ckeditor5-dll.js` build. See [#13707](https://github.com/ckeditor/ckeditor5/issues/13707).
* It is no longer possible to undo creating or removing a comment thread.
* UI in the comment annotation has changed. Remove and edit buttons were moved to a dropdown. A new button which resolves a comment thread was added.
* Comments outside the editor integration has to be updated due to the introduction of the comments archive. Please review the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-37.html).
* Comment and comment thread views have substantially changed due to the introduction of the comments archive. These changes may be incompatible with your custom views or templates. Please review the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-37.html).
* Regarding Export to PDF and Export to Word features, if you use a custom callback to get the document data, make sure to pass `ignoreResolvedComments: true` in the `editor.getData()` options. If not, the resolved comments may be visible in the converted document.

### Features

* **[build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root)**: Introduced a new editor build featuring the multi-root editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the comments archive. It is now possible to resolve a comment thread instead of removing it. Resolved comment threads can be reviewed in the comments archive and can be re-opened if the commented content is still available in the editor.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `comment:modify_all` permission that will allow the user to edit or remove all comments.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `model.Writer#addRoot()` and `model.Writer#detachRoot()`. Model roots can now be dynamically added to or detached from the document. All content gets removed from a detached root and new content cannot be inserted as long as the root is detached. Closes [#13388](https://github.com/ckeditor/ckeditor5/issues/13388). ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `Differ.getChangedRoots()` which returns the roots added or detached since the last differ reset. `Differ#isEmpty` and `Differ#hasDataChanges()` will return `true` if a root was added or detached. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Limiting the dropdown on the singular feed level should now be possible. Closes [#13504](https://github.com/ckeditor/ckeditor5/issues/13504). ([commit](https://github.com/ckeditor/ckeditor5/commit/489b3fda402504cb0492fceb368af475c8dd85b6))
* **[multi-root-editor](https://www.npmjs.com/package/@ckeditor/ckeditor5-multi-root-editor)**: Introduced the multi-root editor type that allows defining multiple editable areas handled by a single editor instance. Closes [#11493](https://github.com/ckeditor/ckeditor5/issues/11493). ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Added support for custom path prefixes in WebSocket URLs. Any path proceeding the required `/ws` part in the WebSocket URL is now preserved.

### Bug fixes

* **[build-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-build%20maintainer%3Ackeditor)**: Typings from the CKEditor 5 builds contain types of loaded plugins. Closes [#13676](https://github.com/ckeditor/ckeditor5/issues/13676). ([commit](https://github.com/ckeditor/ckeditor5/commit/fea9b5a22259cb72525ef61a3c117c55ebdd62e4))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/04c7d47f6a35b3a866ce624a6b8e42510b5eefbd))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/04c7d47f6a35b3a866ce624a6b8e42510b5eefbd))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `Renderer` should try to update existing DOM text nodes (instead of replacing them completely) so that external tools should not get lost if the watched DOM text node is removed and replaced with another one. Closes [#13051](https://github.com/ckeditor/ckeditor5/issues/13051). ([commit](https://github.com/ckeditor/ckeditor5/commit/617497a8ebe03a9f66f327479dff92c3dd10fe1c))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToStructure()` downcast helper should not skip attribute changes that happened with the modification of the children list. ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Attributes on the `<colgroup>`, and `<col>` elements should be preserved in the data. Closes [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Fixed description lists with name-value groups wrapped in `<div>` elements when upcasting using the General HTML Support feature. Closes [#12240](https://github.com/ckeditor/ckeditor5/issues/12240). ([commit](https://github.com/ckeditor/ckeditor5/commit/cb96419897e114e40dbeeca902b7463af372866f))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Fixed the image resize handle displaying `NaN` in some scenarios. Closes [#10776](https://github.com/ckeditor/ckeditor5/issues/10776). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d280fa041b43331c09a0db0f393f15c7b848f96))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The link text should update along with the URL if they were the same in the first place. Closes [#12588](https://github.com/ckeditor/ckeditor5/issues/12588). ([commit](https://github.com/ckeditor/ckeditor5/commit/0beb8c638e10d69160219629b44e8bee00d6c744))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Mentions re-export the `MentionFeed` and `ItemRenderer` types. Closes [#13705](https://github.com/ckeditor/ckeditor5/issues/13705). ([commit](https://github.com/ckeditor/ckeditor5/commit/191f6cc9975f9055687fd963738b6eeba8727466))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Make a text property optional in the `MentionFeedObjectItem` type. Closes [#13550](https://github.com/ckeditor/ckeditor5/issues/13550). ([commit](https://github.com/ckeditor/ckeditor5/commit/7df46f84fba04280b3de3d98e4d666d4d046945c))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: The mentions panel should be positioned left to the caret in editors with a right–to–left UI language. Closes [#13459](https://github.com/ckeditor/ckeditor5/issues/13459). ([commit](https://github.com/ckeditor/ckeditor5/commit/45ac9e29e87c02d5ce26fa461075c6f21c6d44a8))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed handling of bold text in RTL lists pasted from Microsoft Word. Closes [#13711](https://github.com/ckeditor/ckeditor5/issues/13711). ([commit](https://github.com/ckeditor/ckeditor5/commit/3abb8df5dfafbd31b432ada801e8878aff3b2eca))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Changed detection on heading rows and columns on table upcast. Closes [#3172](https://github.com/ckeditor/ckeditor5/issues/3172). ([commit](https://github.com/ckeditor/ckeditor5/commit/6f7e441d61fd1958f18740992e2bc8789cae302a))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Suggestion annotation discard button state is now bound with the `DiscardSuggestionCommand` state, instead of `AcceptSuggestionCommand`.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed an error thrown when a list item was created using autoformatting in the track changes mode.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: List style and document list style is now applied directly to a non-list element when used in the track changes mode.

### Other changes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `EditorConfig#initialData` and `EditorConfig#placeholder` options can now be set to `Record<string, string>` where the keys are root names and the values are settings for the related roots. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[editor-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-editor%20maintainer%3Ackeditor)**: Exposed the `Context`, `EditorWatchdog`, and `ContextWatchdog` classes as static editor properties. Closes [#13707](https://github.com/ckeditor/ckeditor5/issues/13707). ([commit](https://github.com/ckeditor/ckeditor5/commit/8933c865f9e54e9dae5e94f1b8743ee169ab3456))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `RootAttributeOperation` is now correctly handled by `Differ`. Root attribute changes will be returned in `Differ#getChangedRoots()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/c121061db5bd02cdf3c088ea7a38ec0b4614b121))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `model.Document#getRootNames()` now returns only attached roots by default. The `includeDetached` parameter was introduced to enable returning detached roots as well. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `RootOperation`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `model.DocumentFragment#isAttached` was introduced for compatibility reasons. It always returns `false`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Introduced the `StyleUtils` plugin to make the style utility functions accessible. Closes [#13484](https://github.com/ckeditor/ckeditor5/issues/13484). ([commit](https://github.com/ckeditor/ckeditor5/commit/ee181f9903b09701deba2d3d85dab25fb5fadfbf))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table column widths are stored as model elements instead of model element attributes. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced `CommentThread#attributes` as well as `#setAttribute()` and `#getAttribute()` methods.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced the `BaseSuggestionThreadView#canAccept` and `#canDiscard` observable properties. These properties are bound with related suggestions commands. `SuggestionThreadView#acceptButton.isEnabled` and `#discardButton.isEnabled` are bound to `#canAccept` an `#canDiscard`.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced `EditorUI#removeEditableElement()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added configuration to the `View#scrollToTheSelection()` helper allowing to scroll to the top of the boundary. Closes [#13688](https://github.com/ckeditor/ckeditor5/issues/13688). ([commit](https://github.com/ckeditor/ckeditor5/commit/75a5b122690c775cf55d61f3d80519cb85952ebb))
* Introduced `Observer#stopObserving()` to allow for proper removal of DOM editable elements from the editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* Improved augmentation in some packages. Related to [#13565](https://github.com/ckeditor/ckeditor5/issues/13565). ([commit](https://github.com/ckeditor/ckeditor5/commit/3869a1bdadc0aa9c83990ddbf20710b3eebb7e2b))
* Updated the required version of Node.js to 16. See [#13671](https://github.com/ckeditor/ckeditor5/issues/13671). ([commit](https://github.com/ckeditor/ckeditor5/commit/b70d102dcb77067dbe744270221c707e681583fd))
* The remaining CKEditor 5 packages have been rewritten to TypeScript:
  * **[@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: closes [#12997](https://github.com/ckeditor/ckeditor5/issues/12997). ([commit](https://github.com/ckeditor/ckeditor5/commit/7dea975058cfa1bd0c6b6b42a96187c3706547d9))
  * **[@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon)**: closes [#13000](https://github.com/ckeditor/ckeditor5/issues/13000). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block)**: closes [#13001](https://github.com/ckeditor/ckeditor5/issues/13001). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)**: closes [#13002](https://github.com/ckeditor/ckeditor5/issues/13002). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: closes [#13003](https://github.com/ckeditor/ckeditor5/issues/13003). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline)**: closes [#13004](https://github.com/ckeditor/ckeditor5/issues/13004). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox)**: closes [#13005](https://github.com/ckeditor/ckeditor5/issues/13005). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder)**: closes [#13006](https://github.com/ckeditor/ckeditor5/issues/13006). ([commit](https://github.com/ckeditor/ckeditor5/commit/fa105ac35c8666222967d5153b465d402d64d45a))
  * **[@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services)**: closes [#13007](https://github.com/ckeditor/ckeditor5/issues/13007). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image)**: closes [#13009](https://github.com/ckeditor/ckeditor5/issues/13009). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc2381107156955346104ae59796b696711d9605))
  * **[@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: closes [#13010](https://github.com/ckeditor/ckeditor5/issues/13010). ([commit](https://github.com/ckeditor/ckeditor5/commit/14fc8f2ed675ab531d3d9a27f7e2b6d8b2ade8a4))
  * **[@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: closes [#13011](https://github.com/ckeditor/ckeditor5/issues/13011). ([commit](https://github.com/ckeditor/ckeditor5/commit/80ffea2dbe1911667a4246e253dd9d01626cfa49))
  * **[@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: closes [#13015](https://github.com/ckeditor/ckeditor5/issues/13015). ([commit](https://github.com/ckeditor/ckeditor5/commit/9a90e4b137c1f850eec59c55ae2ff0faaa71efdc))
  * **[@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: closes [#13016](https://github.com/ckeditor/ckeditor5/issues/13016). ([commit](https://github.com/ckeditor/ckeditor5/commit/7e601da88c9f6c9ac64316df3ddb7a9de28e3e2a))
  * **[@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent)**: closes [#13018](https://github.com/ckeditor/ckeditor5/issues/13018). ([commit](https://github.com/ckeditor/ckeditor5/commit/9d57f22146022245b2873cf65759e76506cd3dc9))
  * **[@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: closes [#13020](https://github.com/ckeditor/ckeditor5/issues/13020). ([commit](https://github.com/ckeditor/ckeditor5/commit/0c5cbc9af6226b3324464a269fa96909cf62586c))
  * **[@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: closes [#13023](https://github.com/ckeditor/ckeditor5/issues/13023). ([commit](https://github.com/ckeditor/ckeditor5/commit/2a8f267f53315fdee1a4d2fd34b1c9819e986e3d))
  * **[@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format)**: closes [#13028](https://github.com/ckeditor/ckeditor5/issues/13028). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e66507d160fc2857278f4bfd7c0ea9a4e9f10a8))
  * **[@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: closes [#13029](https://github.com/ckeditor/ckeditor5/issues/13029). ([commit](https://github.com/ckeditor/ckeditor5/commit/521078075b09f3f9378cc946ef6e57492aa32dec))
  * **[@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: closes [#13030](https://github.com/ckeditor/ckeditor5/issues/13030). ([commit](https://github.com/ckeditor/ckeditor5/commit/bfe944ca9885e63407bdd67c55b3be60015f08ab))
  * **[@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: closes [#13031](https://github.com/ckeditor/ckeditor5/issues/13031). ([commit](https://github.com/ckeditor/ckeditor5/commit/a195c6047e6f06f2402ce1b60eb1278472a511b2))
  * **[@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: closes [#13032](https://github.com/ckeditor/ckeditor5/issues/13032). ([commit](https://github.com/ckeditor/ckeditor5/commit/b93dfa123390d836a37f9eaca8e4b3232db68e11))
  * **[@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: closes [#13033](https://github.com/ckeditor/ckeditor5/issues/13033). ([commit](https://github.com/ckeditor/ckeditor5/commit/d634c413763a7b47840be096712359f0c0d0a97a))
  * **[@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: closes [#13035](https://github.com/ckeditor/ckeditor5/issues/13035). ([commit](https://github.com/ckeditor/ckeditor5/commit/f42bedbe2cfedf43453e539ec3de03e84b1c2825))
  * **[@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core)**
  * **[@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**
  * **[@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**
  * **[@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**
  * **[@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**
  * **[@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor)**
  * **[@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**
  * **[@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**
  * **[@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**
  * **[@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/6fd3eddd3869e2ca9831f358dc97a101cef88882))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v36.0.1 => v37.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v36.0.1 => v37.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v36.0.1 => v37.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v36.0.1 => v37.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v36.0.1 => v37.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v36.0.1 => v37.0.0
</details>


## [37.0.0-rc.0](https://github.com/ckeditor/ckeditor5/compare/v36.0.1...v37.0.0-rc.0) (2023-04-03)

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* Upgraded the minimal versions of Node.js to `16.0.0` due to the end of LTS.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table columns' widths are stored as model elements instead of a model element attribute. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479).
* The [`@ckeditor/ckeditor5-watchdog`](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog) package is no longer available as a standalone DLL build. It is now included in the main `ckeditor5-dll.js` build. See [#13707](https://github.com/ckeditor/ckeditor5/issues/13707).

### Features

* **[build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root)**: Introduced a new editor build featuring the multi-root editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced comments archive. It is now possible to resolve a comment thread instead of removing it. Resolved comment threads can be reviewed in the comments archive and can be re-opened if the commented content is still available in the editor.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced `comment:modify_all` permission that will allow the user to edit or remove all comments.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `model.Writer#addRoot()` and `model.Writer#detachRoot()`. Model roots can now be dynamically added to or detached from the document. All content gets removed from a detached root and new content cannot be inserted as long as the root is detached. Closes [#13388](https://github.com/ckeditor/ckeditor5/issues/13388). ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `Differ.getChangedRoots()` which returns the roots added or detached since last the differ reset. `Differ#isEmpty` and `Differ#hasDataChanges()` will return `true` if a root was added or detached. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Limiting the dropdown on the singular feed level should now be possible. Closes [#13504](https://github.com/ckeditor/ckeditor5/issues/13504). ([commit](https://github.com/ckeditor/ckeditor5/commit/489b3fda402504cb0492fceb368af475c8dd85b6))
* **[multi-root-editor](https://www.npmjs.com/package/@ckeditor/ckeditor5-multi-root-editor)**: Introduced the multi-root editor type that allows defining multiple editable areas handled by a single editor instance. Closes [#11493](https://github.com/ckeditor/ckeditor5/issues/11493). ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Added support for custom path prefixes in WebSocket URLs. Any path proceeding the required `/ws` part in the WebSocket URL is now preserved.

### Bug fixes

* **[build-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-build%20maintainer%3Ackeditor)**: Typings from the CKEditor 5 builds contain types of loaded plugins. Closes [#13676](https://github.com/ckeditor/ckeditor5/issues/13676). ([commit](https://github.com/ckeditor/ckeditor5/commit/fea9b5a22259cb72525ef61a3c117c55ebdd62e4))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/04c7d47f6a35b3a866ce624a6b8e42510b5eefbd))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/04c7d47f6a35b3a866ce624a6b8e42510b5eefbd))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `Renderer` should try to update existing DOM text nodes (instead of replacing them completely) so that external tools should not get lost if the watched DOM text node is removed and replaced with another one. Closes [#13051](https://github.com/ckeditor/ckeditor5/issues/13051). ([commit](https://github.com/ckeditor/ckeditor5/commit/617497a8ebe03a9f66f327479dff92c3dd10fe1c))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToStructure()` downcast helper should not skip attribute changes that happened with the modification of the children list. ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Attributes on the `<colgroup>`, and `<col>` elements should be preserved in the data. Closes [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Fixed description lists with name-value groups wrapped in div elements when upcasting using the General HTML Support feature. Closes [#12240](https://github.com/ckeditor/ckeditor5/issues/12240). ([commit](https://github.com/ckeditor/ckeditor5/commit/cb96419897e114e40dbeeca902b7463af372866f))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Fixed the image resize handle displaying `NaN` in some scenarios. Closes [#10776](https://github.com/ckeditor/ckeditor5/issues/10776). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d280fa041b43331c09a0db0f393f15c7b848f96))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The link text should update along with the URL if they were the same in the first place. Closes [#12588](https://github.com/ckeditor/ckeditor5/issues/12588). ([commit](https://github.com/ckeditor/ckeditor5/commit/0beb8c638e10d69160219629b44e8bee00d6c744))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Mentions reexport the `MentionFeed` and `ItemRenderer` types. Closes [#13705](https://github.com/ckeditor/ckeditor5/issues/13705). ([commit](https://github.com/ckeditor/ckeditor5/commit/191f6cc9975f9055687fd963738b6eeba8727466))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Make a text property optional in the `MentionFeedObjectItem` type. Closes [#13550](https://github.com/ckeditor/ckeditor5/issues/13550). ([commit](https://github.com/ckeditor/ckeditor5/commit/7df46f84fba04280b3de3d98e4d666d4d046945c))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Mentions panel should be positioned left to the caret in editors with a right–to–left UI language. Closes [#13459](https://github.com/ckeditor/ckeditor5/issues/13459). ([commit](https://github.com/ckeditor/ckeditor5/commit/45ac9e29e87c02d5ce26fa461075c6f21c6d44a8))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed handling of bold text in RTL lists pasted from MS Word. Closes [#13711](https://github.com/ckeditor/ckeditor5/issues/13711). ([commit](https://github.com/ckeditor/ckeditor5/commit/3abb8df5dfafbd31b432ada801e8878aff3b2eca))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Changed detection on heading rows and columns on table upcast. Closes [#3172](https://github.com/ckeditor/ckeditor5/issues/3172). ([commit](https://github.com/ckeditor/ckeditor5/commit/6f7e441d61fd1958f18740992e2bc8789cae302a))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Suggestion annotation discard button state is now bound with the `DiscardSuggestionCommand` state, instead of `AcceptSuggestionCommand`.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed error thrown when a list item was created using autoformatting in the track changes mode.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: List style and document list style iss now applied directly to a non-list element when used in the track changes mode.

### Other changes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `EditorConfig#initialData` and `EditorConfig#placeholder` options can now be set to `Record<string, string>` where the keys are root names and the values are settings for the related roots. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[editor-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-editor%20maintainer%3Ackeditor)**: Exposed the `Context`, `EditorWatchdog`, and `ContextWatchdog` classes as static editor properties. Closes [#13707](https://github.com/ckeditor/ckeditor5/issues/13707). ([commit](https://github.com/ckeditor/ckeditor5/commit/8933c865f9e54e9dae5e94f1b8743ee169ab3456))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `RootAttributeOperation` is now correctly handled by `Differ`. Root attribute changes will be returned in `Differ#getChangedRoots()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/c121061db5bd02cdf3c088ea7a38ec0b4614b121))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `model.Document#getRootNames()` now returns only attached roots by default. The `includeDetached` parameter was introduced to enable returning detached roots as well. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `RootOperation`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `model.DocumentFragment#isAttached` was introduced for compatibility reasons. It always returns `false`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Migrated `ckeditor5-real-time-collaboration` to TypeScript.
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Introduced the `StyleUtils` plugin to make the style util functions accessible. Closes [#13484](https://github.com/ckeditor/ckeditor5/issues/13484). ([commit](https://github.com/ckeditor/ckeditor5/commit/ee181f9903b09701deba2d3d85dab25fb5fadfbf))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table columns' widths are stored as model elements instead of model element attributes. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced the `BaseSuggestionThreadView#canAccept` and `#canDiscard` observable properties. These properties are bound with related suggestions commands. `SuggestionThreadView#acceptButton.isEnabled` and `#discardButton.isEnabled` are bound to `#canAccept` an `#canDiscard`.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced `EditorUI#removeEditableElement()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added configuration to the `View#scrollToTheSelection()` helper allowing to scroll to the top of the boundary. Closes [#13688](https://github.com/ckeditor/ckeditor5/issues/13688). ([commit](https://github.com/ckeditor/ckeditor5/commit/75a5b122690c775cf55d61f3d80519cb85952ebb))
* Introduced `Observer#stopObserving()` to allow for proper removal of DOM editable elements from the editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/927df409f73c7018eb5a34a9908daab9cc4f9946))
* Improved augmentation in some packages. Related to [#13565](https://github.com/ckeditor/ckeditor5/issues/13565). ([commit](https://github.com/ckeditor/ckeditor5/commit/3869a1bdadc0aa9c83990ddbf20710b3eebb7e2b))
* Updated the required version of Node.js to 16. See [#13671](https://github.com/ckeditor/ckeditor5/issues/13671). ([commit](https://github.com/ckeditor/ckeditor5/commit/b70d102dcb77067dbe744270221c707e681583fd))
* The remaining CKEditor 5 packages have been rewritten to TypeScript:
  * **[@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: closes [#12997](https://github.com/ckeditor/ckeditor5/issues/12997). ([commit](https://github.com/ckeditor/ckeditor5/commit/7dea975058cfa1bd0c6b6b42a96187c3706547d9))
  * **[@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon)**: closes [#13000](https://github.com/ckeditor/ckeditor5/issues/13000). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block)**: closes [#13001](https://github.com/ckeditor/ckeditor5/issues/13001). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)**: closes [#13002](https://github.com/ckeditor/ckeditor5/issues/13002). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: closes [#13003](https://github.com/ckeditor/ckeditor5/issues/13003). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline)**: closes [#13004](https://github.com/ckeditor/ckeditor5/issues/13004). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox)**: closes [#13005](https://github.com/ckeditor/ckeditor5/issues/13005). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder)**: closes [#13006](https://github.com/ckeditor/ckeditor5/issues/13006). ([commit](https://github.com/ckeditor/ckeditor5/commit/fa105ac35c8666222967d5153b465d402d64d45a))
  * **[@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services)**: closes [#13007](https://github.com/ckeditor/ckeditor5/issues/13007). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image)**: closes [#13009](https://github.com/ckeditor/ckeditor5/issues/13009). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc2381107156955346104ae59796b696711d9605))
  * **[@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: closes [#13010](https://github.com/ckeditor/ckeditor5/issues/13010). ([commit](https://github.com/ckeditor/ckeditor5/commit/14fc8f2ed675ab531d3d9a27f7e2b6d8b2ade8a4))
  * **[@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: closes [#13011](https://github.com/ckeditor/ckeditor5/issues/13011). ([commit](https://github.com/ckeditor/ckeditor5/commit/80ffea2dbe1911667a4246e253dd9d01626cfa49))
  * **[@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: closes [#13015](https://github.com/ckeditor/ckeditor5/issues/13015). ([commit](https://github.com/ckeditor/ckeditor5/commit/9a90e4b137c1f850eec59c55ae2ff0faaa71efdc))
  * **[@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: closes [#13016](https://github.com/ckeditor/ckeditor5/issues/13016). ([commit](https://github.com/ckeditor/ckeditor5/commit/7e601da88c9f6c9ac64316df3ddb7a9de28e3e2a))
  * **[@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent)**: closes [#13018](https://github.com/ckeditor/ckeditor5/issues/13018). ([commit](https://github.com/ckeditor/ckeditor5/commit/9d57f22146022245b2873cf65759e76506cd3dc9))
  * **[@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: closes [#13020](https://github.com/ckeditor/ckeditor5/issues/13020). ([commit](https://github.com/ckeditor/ckeditor5/commit/0c5cbc9af6226b3324464a269fa96909cf62586c))
  * **[@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: closes [#13023](https://github.com/ckeditor/ckeditor5/issues/13023). ([commit](https://github.com/ckeditor/ckeditor5/commit/2a8f267f53315fdee1a4d2fd34b1c9819e986e3d))
  * **[@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format)**: closes [#13028](https://github.com/ckeditor/ckeditor5/issues/13028). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e66507d160fc2857278f4bfd7c0ea9a4e9f10a8))
  * **[@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: closes [#13029](https://github.com/ckeditor/ckeditor5/issues/13029). ([commit](https://github.com/ckeditor/ckeditor5/commit/521078075b09f3f9378cc946ef6e57492aa32dec))
  * **[@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: closes [#13030](https://github.com/ckeditor/ckeditor5/issues/13030). ([commit](https://github.com/ckeditor/ckeditor5/commit/bfe944ca9885e63407bdd67c55b3be60015f08ab))
  * **[@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: closes [#13031](https://github.com/ckeditor/ckeditor5/issues/13031). ([commit](https://github.com/ckeditor/ckeditor5/commit/a195c6047e6f06f2402ce1b60eb1278472a511b2))
  * **[@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: closes [#13032](https://github.com/ckeditor/ckeditor5/issues/13032). ([commit](https://github.com/ckeditor/ckeditor5/commit/b93dfa123390d836a37f9eaca8e4b3232db68e11))
  * **[@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: closes [#13033](https://github.com/ckeditor/ckeditor5/issues/13033). ([commit](https://github.com/ckeditor/ckeditor5/commit/d634c413763a7b47840be096712359f0c0d0a97a))
  * **[@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: closes [#13035](https://github.com/ckeditor/ckeditor5/issues/13035). ([commit](https://github.com/ckeditor/ckeditor5/commit/f42bedbe2cfedf43453e539ec3de03e84b1c2825))
  * **[@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core)**
  * **[@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**
  * **[@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**
  * **[@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**
  * **[@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**
  * **[@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor)**
  * **[@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**
  * **[@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**
  * **[@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**
  * **[@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/6fd3eddd3869e2ca9831f358dc97a101cef88882))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0-rc.0
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0-rc.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v36.0.1 => v37.0.0-rc.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v36.0.1 => v37.0.0-rc.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v36.0.1 => v37.0.0-rc.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v36.0.1 => v37.0.0-rc.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v36.0.1 => v37.0.0-rc.0
</details>


## [37.0.0-alpha.3](https://github.com/ckeditor/ckeditor5/compare/v37.0.0-alpha.2...v37.0.0-alpha.3) (2023-03-22)

### Release highlights

This release exposes `Context`, `EditorWatchdog`, and `ContextWatchdog` as static editor properties. This should simplify integrations and provide consistency with editor builds.

This introduces a minor breaking change: the [`@ckeditor/ckeditor5-watchdog`](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog) package is no longer available as a standalone [DLL build](https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/dll-builds.html). It is now included in the main `ckeditor5-dll.js` build. See [#13707](https://github.com/ckeditor/ckeditor5/issues/13707).

Please keep in mind that the release is marked as alpha, which means it is an experimental version, and some unexpected results may occur when using these typings.

We appreciate all of your feedback, as it helps us greatly to improve the final shape of the project. Please share it [here](https://github.com/ckeditor/ckeditor5/issues/11704).

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The [`@ckeditor/ckeditor5-watchdog`](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog) package is no longer available as a standalone DLL build. It is now included in the main `ckeditor5-dll.js` build. See [#13707](https://github.com/ckeditor/ckeditor5/issues/13707).

### Bug fixes

* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The link text should update along with the URL if they were the same in the first place. Closes [#12588](https://github.com/ckeditor/ckeditor5/issues/12588). ([commit](https://github.com/ckeditor/ckeditor5/commit/0beb8c638e10d69160219629b44e8bee00d6c744))

### Other changes

* **[editor-*](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-*)**: Exposed the `Context`, `EditorWatchdog`, and `ContextWatchdog` classes as static editor properties. Closes [#13707](https://github.com/ckeditor/ckeditor5/issues/13707). ([commit](https://github.com/ckeditor/ckeditor5/commit/8933c865f9e54e9dae5e94f1b8743ee169ab3456))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added configuration to the `View#scrollToTheSelection()` helper allowing to scroll to the top of the boundary. Closes [#13688](https://github.com/ckeditor/ckeditor5/issues/13688). ([commit](https://github.com/ckeditor/ckeditor5/commit/75a5b122690c775cf55d61f3d80519cb85952ebb))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:


Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v36.0.1 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.0.0-alpha.2 => v37.0.0-alpha.3
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.0.0-alpha.2 => v37.0.0-alpha.3
</details>


## [37.0.0-alpha.2](https://github.com/ckeditor/ckeditor5/compare/v37.0.0-alpha.1...v37.0.0-alpha.2) (2023-03-15)

### Release highlights

This release fixes typings in the predefined builds which should now properly maintain information about included plugins.

Please keep in mind that the release is marked as alpha, which means it is an experimental version and some unexpected results may occur when using these typings.

We appreciate all of your feedback, as it helps us greatly to improve the final shape of the project. Please share it [here](https://github.com/ckeditor/ckeditor5/issues/11704).

### Bug fixes

* **[build-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-build%20maintainer%3Ackeditor)**: Typings from the CKEditor 5 builds contain types of loaded plugins. Closes [#13676](https://github.com/ckeditor/ckeditor5/issues/13676). ([commit](https://github.com/ckeditor/ckeditor5/commit/fea9b5a22259cb72525ef61a3c117c55ebdd62e4))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Fix the image resize handle displaying `NaN` in some scenarios. Closes [#10776](https://github.com/ckeditor/ckeditor5/issues/10776). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d280fa041b43331c09a0db0f393f15c7b848f96))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.0.0-alpha.1 => v37.0.0-alpha.2
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.0.0-alpha.1 => v37.0.0-alpha.2
</details>


## [37.0.0-alpha.1](https://github.com/ckeditor/ckeditor5/compare/v37.0.0-alpha.0...v37.0.0-alpha.1) (2023-03-13)

### Release highlights

This release addresses the issues with TypeScript reporting some commands, plugins, and configurations as either unavailable or unknown, despite them being correctly registered.

This update also includes a breaking change from `alpha.0`. To ensure proper TypeScript support, update your imports to use the main package entry point instead of importing from package internals. See the example below:

```js
// ✔️
import { Table } from '@ckeditor/ckeditor5-table';

// ❌
import Table from '@ckeditor/ckeditor5-table/src/table';
```

Please keep in mind that the release is marked as `alpha`, which means it is an experimental version and some unexpected results may occur when using these typings.

We appreciate all of your feedback, as it helps us greatly to improve the final shape of the project. Please share it [here](https://github.com/ckeditor/ckeditor5/issues/11704).

### Features

* **[build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root)**: Introduced a new editor build featuring the multi-root editor. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* **[multi-root-editor](https://www.npmjs.com/package/@ckeditor/ckeditor5-multi-root-editor)**: Introduced the multi-root editor type that allows defining multiple editable areas handled by one editor instance. Closes [#11493](https://github.com/ckeditor/ckeditor5/issues/11493). ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))

### Bug fixes

* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Make a text property optional in the `MentionFeedObjectItem` type. Closes [#13550](https://github.com/ckeditor/ckeditor5/issues/13550). ([commit](https://github.com/ckeditor/ckeditor5/commit/7df46f84fba04280b3de3d98e4d666d4d046945c))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Change detection on heading rows and columns on table upcast. Closes [#3172](https://github.com/ckeditor/ckeditor5/issues/3172). ([commit](https://github.com/ckeditor/ckeditor5/commit/6f7e441d61fd1958f18740992e2bc8789cae302a))

### Other changes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `EditorConfig#initialData` and `EditorConfig#placeholder` options can now be set to `Record<string, string>` where the keys are root names and the values are settings for the related roots. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b9c4fe3dd8e22668f36c06af6cdc7af73d81cf))
* Improve augmentation in some packages. Related to [#13565](https://github.com/ckeditor/ckeditor5/issues/13565). ([commit](https://github.com/ckeditor/ckeditor5/commit/3869a1bdadc0aa9c83990ddbf20710b3eebb7e2b))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-build-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-multi-root): v37.0.0-alpha.1
* [@ckeditor/ckeditor5-editor-multi-root](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-multi-root): v37.0.0-alpha.1

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v37.0.0-alpha.0 => v37.0.0-alpha.1

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v37.0.0-alpha.0 => v37.0.0-alpha.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v37.0.0-alpha.0 => v37.0.0-alpha.1
</details>


## [37.0.0-alpha.0](https://github.com/ckeditor/ckeditor5/compare/v36.0.1...v37.0.0-alpha.0) (2023-02-27)

### Release highlights

This release brings the long-awaited feature: typings for CKEditor 5. They are compatible with TypeScript version 4.8.4 or higher.

Please keep in mind the release is marked as `alpha` which means it is an experimental version and some unexpected results may occur when using these typings.

We appreciate all your feedback that lets us improve the final shape of the project.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table columns' widths are stored as model elements instead of model element attributes. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479).

### Features

* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Limiting the dropdown on the singular feed level should be possible. Closes [#13504](https://github.com/ckeditor/ckeditor5/issues/13504). ([commit](https://github.com/ckeditor/ckeditor5/commit/489b3fda402504cb0492fceb368af475c8dd85b6))

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToStructure()` downcast helper should not skip attribute changes that happened with the modification of the children list. ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Attributes on the `<colgroup>`, and `<col>` elements should be preserved in the data. Closes [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Fix description lists with name-value groups wrapped in div elements when upcasting using the General HTML Support feature. Closes [#12240](https://github.com/ckeditor/ckeditor5/issues/12240). ([commit](https://github.com/ckeditor/ckeditor5/commit/cb96419897e114e40dbeeca902b7463af372866f))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Mentions panel should be positioned left to the caret in editors with right–to–left UI language. Closes [#13459](https://github.com/ckeditor/ckeditor5/issues/13459). ([commit](https://github.com/ckeditor/ckeditor5/commit/45ac9e29e87c02d5ce26fa461075c6f21c6d44a8))

### Other changes

* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Introduced the `StyleUtils` plugin to make the style util functions accessible. Closes [#13484](https://github.com/ckeditor/ckeditor5/issues/13484). ([commit](https://github.com/ckeditor/ckeditor5/commit/ee181f9903b09701deba2d3d85dab25fb5fadfbf))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table columns' widths are stored as model elements instead of model element attributes. See [#11479](https://github.com/ckeditor/ckeditor5/issues/11479). ([commit](https://github.com/ckeditor/ckeditor5/commit/61debdca19f7a5166433220b819232d20d8b9f26))
* The remaining CKEditor 5 packages have been rewritten to TypeScript:
  * **[@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: closes [#12997](https://github.com/ckeditor/ckeditor5/issues/12997). ([commit](https://github.com/ckeditor/ckeditor5/commit/7dea975058cfa1bd0c6b6b42a96187c3706547d9))
  * **[@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon)**: closes [#13000](https://github.com/ckeditor/ckeditor5/issues/13000). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block)**: closes [#13001](https://github.com/ckeditor/ckeditor5/issues/13001). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic)**: closes [#13002](https://github.com/ckeditor/ckeditor5/issues/13002). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: closes [#13003](https://github.com/ckeditor/ckeditor5/issues/13003). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline)**: closes [#13004](https://github.com/ckeditor/ckeditor5/issues/13004). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bf33ea3dc14b2354ec392bb34aa1bcce78b5ecc))
  * **[@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox)**: closes [#13005](https://github.com/ckeditor/ckeditor5/issues/13005). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder)**: closes [#13006](https://github.com/ckeditor/ckeditor5/issues/13006). ([commit](https://github.com/ckeditor/ckeditor5/commit/fa105ac35c8666222967d5153b465d402d64d45a))
  * **[@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services)**: closes [#13007](https://github.com/ckeditor/ckeditor5/issues/13007). ([commit](https://github.com/ckeditor/ckeditor5/commit/37dee8727bb44b2685a1e83285fd9d4fad0a04f7))
  * **[@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image)**: closes [#13009](https://github.com/ckeditor/ckeditor5/issues/13009). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc2381107156955346104ae59796b696711d9605))
  * **[@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: closes [#13010](https://github.com/ckeditor/ckeditor5/issues/13010). ([commit](https://github.com/ckeditor/ckeditor5/commit/14fc8f2ed675ab531d3d9a27f7e2b6d8b2ade8a4))
  * **[@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: closes [#13011](https://github.com/ckeditor/ckeditor5/issues/13011). ([commit](https://github.com/ckeditor/ckeditor5/commit/80ffea2dbe1911667a4246e253dd9d01626cfa49))
  * **[@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: closes [#13015](https://github.com/ckeditor/ckeditor5/issues/13015). ([commit](https://github.com/ckeditor/ckeditor5/commit/9a90e4b137c1f850eec59c55ae2ff0faaa71efdc))
  * **[@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: closes [#13016](https://github.com/ckeditor/ckeditor5/issues/13016). ([commit](https://github.com/ckeditor/ckeditor5/commit/7e601da88c9f6c9ac64316df3ddb7a9de28e3e2a))
  * **[@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent)**: closes [#13018](https://github.com/ckeditor/ckeditor5/issues/13018). ([commit](https://github.com/ckeditor/ckeditor5/commit/9d57f22146022245b2873cf65759e76506cd3dc9))
  * **[@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: closes [#13020](https://github.com/ckeditor/ckeditor5/issues/13020). ([commit](https://github.com/ckeditor/ckeditor5/commit/0c5cbc9af6226b3324464a269fa96909cf62586c))
  * **[@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: closes [#13023](https://github.com/ckeditor/ckeditor5/issues/13023). ([commit](https://github.com/ckeditor/ckeditor5/commit/2a8f267f53315fdee1a4d2fd34b1c9819e986e3d))
  * **[@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format)**: closes [#13028](https://github.com/ckeditor/ckeditor5/issues/13028). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e66507d160fc2857278f4bfd7c0ea9a4e9f10a8))
  * **[@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: closes [#13029](https://github.com/ckeditor/ckeditor5/issues/13029). ([commit](https://github.com/ckeditor/ckeditor5/commit/521078075b09f3f9378cc946ef6e57492aa32dec))
  * **[@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: closes [#13030](https://github.com/ckeditor/ckeditor5/issues/13030). ([commit](https://github.com/ckeditor/ckeditor5/commit/bfe944ca9885e63407bdd67c55b3be60015f08ab))
  * **[@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: closes [#13031](https://github.com/ckeditor/ckeditor5/issues/13031). ([commit](https://github.com/ckeditor/ckeditor5/commit/a195c6047e6f06f2402ce1b60eb1278472a511b2))
  * **[@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: closes [#13032](https://github.com/ckeditor/ckeditor5/issues/13032). ([commit](https://github.com/ckeditor/ckeditor5/commit/b93dfa123390d836a37f9eaca8e4b3232db68e11))
  * **[@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: closes [#13033](https://github.com/ckeditor/ckeditor5/issues/13033). ([commit](https://github.com/ckeditor/ckeditor5/commit/d634c413763a7b47840be096712359f0c0d0a97a))
  * **[@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: closes [#13035](https://github.com/ckeditor/ckeditor5/issues/13035). ([commit](https://github.com/ckeditor/ckeditor5/commit/f42bedbe2cfedf43453e539ec3de03e84b1c2825))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v36.0.1 => v37.0.0-alpha.0

Releases containing new features:

* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v36.0.1 => v37.0.0-alpha.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v36.0.1 => v37.0.0-alpha.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v36.0.1 => v37.0.0-alpha.0
</details>


## [36.0.1](https://github.com/ckeditor/ckeditor5/compare/v36.0.0...v36.0.1) (2023-02-06)

### Release highlights

This is a patch release that resolves two recent issues:

* The broken release to npm of the `@ckeditor/ckeditor5-highlight` package. We mistakenly published TypeScript source next to JavaScript files and that breaks some setups, making it harder to integrate the v36.0.0 of CKEditor 5 in your systems. See [#13373](https://github.com/ckeditor/ckeditor5/issues/13373) for more details.
* The performance regression in drag&drop of images on the newest version of Firefox (109.0.1). This is an issue caused by a change in Firefox itself and while Firefox’s team plans to revert it, we want to ship the workaround as soon as possible to you. See [#13366](https://github.com/ckeditor/ckeditor5/issues/13366) for more details.

### Bug fixes

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/74af23792bf0b060df1bc2665b63139a63001c71))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Dragging images in the editor should not lag in Firefox. Closes [#13366](https://github.com/ckeditor/ckeditor5/issues/13366). ([commit](https://github.com/ckeditor/ckeditor5/commit/74af23792bf0b060df1bc2665b63139a63001c71))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v36.0.0 => v36.0.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v36.0.0 => v36.0.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v36.0.0 => v36.0.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v36.0.0 => v36.0.1
</details>


## [36.0.0](https://github.com/ckeditor/ckeditor5/compare/v35.4.0...v36.0.0) (2023-01-23)

### Release highlights

We are happy to announce the release of CKEditor 5 v36.0.0.

* Faster editor load time thanks to delayed dropdown initialization.
* Improved performance when the editor includes the table column resize plugin.
* Improved inline annotations positioning.
* Configurable special characters categories order.
* Vite integration.


<!-- TODO: Add a link to the blog post. -->

Please refer to the [update guide](https://ckeditor.com/docs/ckeditor5/latest/updating/guides/update-to-36.html) to learn more about these changes.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `EditorUI` class was moved from `@ckeditor/ckeditor5-core` to `@ckeditor/ckeditor5-ui`.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The [`addToolbarToDropdown()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_dropdown_utils.html#function-addToolbarToDropdown) and [`addListToDropdown()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_dropdown_utils.html#function-addListToDropdown) helpers create content panels on the first dropdown open. Make sure that you access the dropdown panel after the dropdown is open. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890).
* Toolbar views are filled with items on the first appearance. Make sure that you access toolbar items after the toolbar is visible. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890).
* Contextual balloon panels are created on the first appearance. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890).

### Features

* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added the full page mode to preserve content outside of page body. Closes [#12950](https://github.com/ckeditor/ckeditor5/issues/12950). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb79bc9ffa722050cfbf272e63074bceea907387))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Apply `config.link.defaultProtocol` on pasted links. Closes [#12912](https://github.com/ckeditor/ckeditor5/issues/12912). ([commit](https://github.com/ckeditor/ckeditor5/commit/2dc2e2037d242358aae9dd0bf8125277595965cb))
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: The names of special character categories can now be translated. Closes [#5820](https://github.com/ckeditor/ckeditor5/issues/5820). ([commit](https://github.com/ckeditor/ckeditor5/commit/1616fc9b716014f6a6beff28b2b363c39ab3240d))
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: Added configurable ordering of special characters groups. Closes [#13220](https://github.com/ckeditor/ckeditor5/issues/13220). ([commit](https://github.com/ckeditor/ckeditor5/commit/a71d25eb3eaa9fba5e1e037f1ad128dba22d5a4c))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integrations for the following features:
  * Find and replace.
  * Image URL replace.
  * CKFinder ([commit](https://github.com/ckeditor/ckeditor5/commit/1b95b1736f3bfb4167efa2a001f2014d7fdc61db)).
  * Table properties and table cell properties.

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Markers that are next to an auto-paragraphed text nodes will be moved to the new paragraph together with the text. ([commit](https://github.com/ckeditor/ckeditor5/commit/e89f0218862dbfb035f9ac07128dbee83c4e1f98))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed focus handling issue which happened on Chrome after a nested editable was clicked. ([commit](https://github.com/ckeditor/ckeditor5/commit/4d31c6ced78ed83c3556635b0cf6e246e975b159))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed markers that were not properly set on list items and on elements in table cells, resulting in losing comments and suggestions after re-loading the document. Closes [#13285](https://github.com/ckeditor/ckeditor5/issues/13285). ([commit](https://github.com/ckeditor/ckeditor5/commit/1fa7ffcc5042b3a9d40dcfd03220fb707616a9ad))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Disabled the find and replace popup in source mode. Closes [#12939](https://github.com/ckeditor/ckeditor5/issues/12939). ([commit](https://github.com/ckeditor/ckeditor5/commit/d7885a5e37a1f78e71041c589e96adecdbb965da))
* **[import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**: Enabled the `.dotx` extension in the file dialog.
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The default list marker for an unordered list should be `disc` (instead of `circle`). Closes: [#13206](https://github.com/ckeditor/ckeditor5/issues/13206). ([commit](https://github.com/ckeditor/ckeditor5/commit/c37e3cbf76bb8d5cb7a4c3e81bdc0605b59e8d9a))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Fixed markers that were not properly set on list items and on elements in table cells, resulting in losing comments and suggestions after re-loading the document. Closes [#13285](https://github.com/ckeditor/ckeditor5/issues/13285). ([commit](https://github.com/ckeditor/ckeditor5/commit/1fa7ffcc5042b3a9d40dcfd03220fb707616a9ad))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed pasting images from MS Word 2016. Closes [#11993](https://github.com/ckeditor/ckeditor5/issues/11993). ([commit](https://github.com/ckeditor/ckeditor5/commit/e727b698fefa7c3f0e43adf79eb563af453b1281))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table and table cell property commands should not be called before changing any value to avoid creating unnecessary suggestions in the track changes mode. Closes [#13262](https://github.com/ckeditor/ckeditor5/issues/13262). ([commit](https://github.com/ckeditor/ckeditor5/commit/35a34e4352c6e65391cca691ddd10b2df3d1ef8c))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The editor should not crash on `getData()` call if the `PlainTableOutput` plugin is used with the `TableColumnResize` feature. Closes [#13164](https://github.com/ckeditor/ckeditor5/issues/13164). ([commit](https://github.com/ckeditor/ckeditor5/commit/97377f5749d4a2f137139eee47233c491e6712b4))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Fixed markers that were not properly set on list items and on elements in table cells, resulting in losing comments and suggestions after re-loading the document. Closes [#13285](https://github.com/ckeditor/ckeditor5/issues/13285). ([commit](https://github.com/ckeditor/ckeditor5/commit/1fa7ffcc5042b3a9d40dcfd03220fb707616a9ad))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Indent and outdent suggestions made on block images in document lists are now working correctly when accepted.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Suggestions are now correctly highlighted after typing inside the deletion suggestion.

### Other changes

* **[ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder)**: Set a correct value (`false`) for `CKFinderCommand#affectsData`. Now, the command's state depends only on related commands (`insertImage` and `link`). Closes [#13213](https://github.com/ckeditor/ckeditor5/issues/13213). ([commit](https://github.com/ckeditor/ckeditor5/commit/1b95b1736f3bfb4167efa2a001f2014d7fdc61db))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Moved the `EditorUI` class from `@ckeditor/ckeditor5-core` to `@ckeditor/ckeditor5-ui`. Closes [#12853](https://github.com/ckeditor/ckeditor5/issues/12853). ([commit](https://github.com/ckeditor/ckeditor5/commit/7db66463b3636a3d6b728728b1f192ad690dbfec))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Encapsulated image replacement into a command. Closes [#13217](https://github.com/ckeditor/ckeditor5/issues/13217) . ([commit](https://github.com/ckeditor/ckeditor5/commit/bf96e14d0cd75f1fa516c5af5724a37d2fcc8366))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Added `ReplaceImageSourceCommand` which encapsulates current image URL replacement logic. Closes [#13217](https://github.com/ckeditor/ckeditor5/issues/13217). ([commit](https://github.com/ckeditor/ckeditor5/commit/bf96e14d0cd75f1fa516c5af5724a37d2fcc8366))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Raised the list item reconversion priority to `'high'`. Closes [#13290](https://github.com/ckeditor/ckeditor5/issues/13290). ([commit](https://github.com/ckeditor/ckeditor5/commit/ca7d672fdbe6cee53bf1a11668bfa869619e6f9b))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table properties views are now created on the first open to boost editor startup time. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890). ([commit](https://github.com/ckeditor/ckeditor5/commit/c276c45a934e4ad7c2a8ccd0bd9a01f6442d4cd3))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Improved performance when the editor includes the table column resize plugin. Closes [#13097](https://github.com/ckeditor/ckeditor5/issues/13097). ([commit](https://github.com/ckeditor/ckeditor5/commit/7c5fb8df71e25c32c4ae0e375606c07dd14e3332))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Prepared more informative labels for list outdent suggestions when an item is removed from the list.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Dropdown panels, contextual balloon panels, and toolbar views are now initialized on the first opening to boost editor startup time. Closes [#12890](https://github.com/ckeditor/ckeditor5/issues/12890). ([commit](https://github.com/ckeditor/ckeditor5/commit/c276c45a934e4ad7c2a8ccd0bd9a01f6442d4cd3))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Widget toolbars are now initialized on the first opening to boost editor startup time. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890). ([commit](https://github.com/ckeditor/ckeditor5/commit/c276c45a934e4ad7c2a8ccd0bd9a01f6442d4cd3))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/50b7d792ae1f3e8d4098bacf1b037cfcfeb4fd0a), [commit](https://github.com/ckeditor/ckeditor5/commit/cceb2fe3a67813485374578b80ae875fe3487a3d), [commit](https://github.com/ckeditor/ckeditor5/commit/d1dad0a3ec043378415f4d24a44f09cddce4df8c))
* The dropdown panels are now initialized on the first opening to boost editor startup time. See [#12890](https://github.com/ckeditor/ckeditor5/issues/12890). ([commit](https://github.com/ckeditor/ckeditor5/commit/c276c45a934e4ad7c2a8ccd0bd9a01f6442d4cd3))
* Improved inline annotations positioning when marker contains multiple elements or multiple lines of text.
* Several packages have been rewritten to TypeScript:
  * [`@ckeditor/ckeditor5-alignment`](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): closes [#13026](https://github.com/ckeditor/ckeditor5/issues/13026). ([commit](https://github.com/ckeditor/ckeditor5/commit/b88a562966bcdb999c419cff033ceeffb972df68))
  * [`@ckeditor/ckeditor5-alignment`](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): closes [#12995](https://github.com/ckeditor/ckeditor5/issues/12995). ([commit](https://github.com/ckeditor/ckeditor5/commit/8a10049342d40e236365d3920477f2e9e4b85033))
  * [`@ckeditor/ckeditor5-autoformat`](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): closes [#12996](https://github.com/ckeditor/ckeditor5/issues/12996). ([commit](https://github.com/ckeditor/ckeditor5/commit/ac3dbbe4634688db3ea239306ecd9f3ebd9b22d7))
  * [`@ckeditor/ckeditor5-basic-styles`](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): closes [#12998](https://github.com/ckeditor/ckeditor5/issues/12998). ([commit](https://github.com/ckeditor/ckeditor5/commit/d4fa316686a02244b2ccb9700e3480a9318c2d1b))
  * [`@ckeditor/ckeditor5-block-quote`](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): closes [#12999](https://github.com/ckeditor/ckeditor5/issues/12999). ([commit](https://github.com/ckeditor/ckeditor5/commit/71ee1864d3d857cb4a9deb912afeeaf5b1aee20d))
  * [`@ckeditor/ckeditor5-highlight`](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): closes [#13013](https://github.com/ckeditor/ckeditor5/issues/13013). ([commit](https://github.com/ckeditor/ckeditor5/commit/4629e923340beb27610df456dd5c8b574a9b4e42))
  * [`@ckeditor/ckeditor5-adapter-ckfinder`](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): closes [#12994](https://github.com/ckeditor/ckeditor5/issues/12994). ([commit](https://github.com/ckeditor/ckeditor5/commit/d1627e19d28131c545125ffe217db69c9e76b02f))
  * [`@ckeditor/ckeditor5-heading`](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): closes [#13012](https://github.com/ckeditor/ckeditor5/issues/13012). ([commit](https://github.com/ckeditor/ckeditor5/commit/ce543ce9b940776429b7476a88663e9ce2ab0369))
  * [`@ckeditor/ckeditor5-horizontal-line`](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): closes [#13014](https://github.com/ckeditor/ckeditor5/issues/13014). ([commit](https://github.com/ckeditor/ckeditor5/commit/912042dc2793e1ff8034ae84b3f96756d6a69630))
  * [`@ckeditor/ckeditor5-language`](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): closes [#13019](https://github.com/ckeditor/ckeditor5/issues/13019). ([commit](https://github.com/ckeditor/ckeditor5/commit/40b0c23c935003a215a6081a2907fff972bd7586))
  * [`@ckeditor/ckeditor5-list`](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): closes [#13021](https://github.com/ckeditor/ckeditor5/issues/13021). ([commit](https://github.com/ckeditor/ckeditor5/commit/2680d44bf906cec03da9b3d77cff071dea687468))
  * [`@ckeditor/ckeditor5-markdown-gfm`](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): closes [#13022](https://github.com/ckeditor/ckeditor5/issues/13022). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d07bae35a8024496fb1f0229cfc0ea738d95a57))
  * [`@ckeditor/ckeditor5-mention`](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): closes [#13024](https://github.com/ckeditor/ckeditor5/issues/13024). ([commit](https://github.com/ckeditor/ckeditor5/commit/3686a812b0d7d1ef659aae02a8362eb9f5adf583))
  * [`@ckeditor/ckeditor5-minimap`](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): closes [#13025](https://github.com/ckeditor/ckeditor5/issues/13025). ([commit](https://github.com/ckeditor/ckeditor5/commit/6d9f922240896e1f45609418fca7c38c6a2c7cec))
  * [`@ckeditor/ckeditor5-paste-from-office`](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): closes [#13027](https://github.com/ckeditor/ckeditor5/issues/13027). ([commit](https://github.com/ckeditor/ckeditor5/commit/f6aad4fdb1d773f949bddbfeca45220005d52210))
  * [`@ckeditor/ckeditor5-word-count`](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): closes [#13036](https://github.com/ckeditor/ckeditor5/issues/13036). ([commit](https://github.com/ckeditor/ckeditor5/commit/46278527b583f12ee41de79add857b249b872a62))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Releases containing new features:

* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.4.0 => v36.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.4.0 => v36.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.4.0 => v36.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.4.0 => v36.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.4.0 => v36.0.0
</details>


## [35.4.0](https://github.com/ckeditor/ckeditor5/compare/v35.3.2...v35.4.0) (2022-12-07)

### Release highlights

We are happy to announce the release of CKEditor 5 v35.4.0.

* Allow list indexing to start from `0`.
* Added track changes integration for lists, document list properties, and table resize features.
* Introduced the `trackChanges.trackFormatChanges` configuration property which can be used to disable tracking of format changes.
* Added an option for dynamic filenames in the editor’s configuration for PDF/Word export.
* More editor packages migrated to TypeScript.

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.4.0-with-track-changes-expansions--and-better-control-over-the-pdf-and-word-converters/

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `HtmlDataProcessor` skips HTML comments by default. Set its `skipComments` property to `false` to retain comments (or use the [`HtmlComment`](https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html#html-comments) plugin).

### Features

* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Upcast the `<img>` element with the `display:block` style as a block image. Closes [#12811](https://github.com/ckeditor/ckeditor5/issues/12811). ([commit](https://github.com/ckeditor/ckeditor5/commit/8480de92614cd5c851e4d3c74afc982168491d4c))
* **[lists](https://www.npmjs.com/package/@ckeditor/ckeditor5-lists)**: Allow list indexing to start from `0`. Closes [#12827](https://github.com/ckeditor/ckeditor5/issues/12827). ([commit](https://github.com/ckeditor/ckeditor5/commit/2298735433c16be52642643cd0f5004d80962270))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integration for lists, document list properties, and table resize features.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced the `trackChanges.trackFormatChanges` configuration property which can be used to disable tracking of format changes.

### Bug fixes

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Replace a tab with four spaces when pasting data from clipboard. Closes [#12806](https://github.com/ckeditor/ckeditor5/issues/12806). ([commit](https://github.com/ckeditor/ckeditor5/commit/8aa3b3af0e4a8ffe0af1c7e036fd6cd3b7ab6b67))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: It is no longer necessary to make two mouse clicks to move the selection if the annotation in a wide sidebar was focused before.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Long user names will no longer break annotations styling in inline and narrow sidebar display modes.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Comment view should not lose focus or hide after clicking the cancel icon in the deletion confirmation box.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Removing a comment thread imported from a Word file with at least one reply, no longer results in an error where only the first comment was removed instead of the whole thread.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed a bug which in some scenarios caused rendering with an outdated selection state when the editor was focused (on Chromium browsers). Closes [#12967](https://github.com/ckeditor/ckeditor5/issues/12967). ([commit](https://github.com/ckeditor/ckeditor5/commit/c09f9ab9570b3da098ce556aadf0fc757e7536f6))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `Model#insertObject()` method should not crash when attempting to set a selection after inserting an inline element. Closes [#12809](https://github.com/ckeditor/ckeditor5/issues/12809). ([commit](https://github.com/ckeditor/ckeditor5/commit/322dbfb1255b3dad3bd0ad278a5b7a5c6a2ee8dc))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Markers should not be lost while upcasting a plain table (without the `<figure>` element). ([commit](https://github.com/ckeditor/ckeditor5/commit/bf78d7e464c20717a72c75e3c140431aeacc06f7))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Basic styles formatting now works well with the remove format feature. Closes [#12626](https://github.com/ckeditor/ckeditor5/issues/12626). ([commit](https://github.com/ckeditor/ckeditor5/commit/e4c1f36a530defb598ef177e76c54573d404ce2e))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: In some scenarios the document content was not updated by remote changes until the editor was focused.
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: The special character label in dropdown should be updated when navigating with keyboard. Closes [#12393](https://github.com/ckeditor/ckeditor5/issues/12393). ([commit](https://github.com/ckeditor/ckeditor5/commit/f253c7e8ae163604b644c03865f21b26df5cb3ad))
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: Special characters form a header should use a heading markup. Closes [#12464](https://github.com/ckeditor/ckeditor5/issues/12464). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e0a3bb229615b7302bee13a93f7a74629895526))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table `width` and `height` attributes should be upcasted from the `<figure>` element if it exists. Closes [#12812](https://github.com/ckeditor/ckeditor5/issues/12812). ([commit](https://github.com/ckeditor/ckeditor5/commit/a6ec6d4e41b828a809e725878e813e066681e05a))
* **[Table](https://www.npmjs.com/package/@ckeditor/ckeditor5-Table)**: Improved the label positioning in RTL editor mode in the insert table dropdown. Closes [#12833](https://github.com/ckeditor/ckeditor5/issues/12833). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d098d6b072b66aaccc09d682a1f3ab5fe96b34a))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed editor crash when the `TrackChangesData` plugin was used with some editor configurations including real-time collaboration plugins.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed editor crash when the `TrackChangesData` plugin was used with pagination plugin.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed various incorrect scenarios related to the document list integration with track changes.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Use all ranges in the `markMultiRangeFormatBlock` suggestion accept.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed the editor crash when the document list properties config is overwritten.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The keyboard navigation in grid dropdowns should not be reversed in RTL editor. Closes [#12871](https://github.com/ckeditor/ckeditor5/issues/12871). ([commit](https://github.com/ckeditor/ckeditor5/commit/d5c8363ffb034161f54318de87b679d539f9c6b5))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The split button divider should stretch to the edges of the button. Closes [#10936](https://github.com/ckeditor/ckeditor5/issues/10936). ([commit](https://github.com/ckeditor/ckeditor5/commit/8f00d4a47e34ba2073b8d1ff0e15ce4361597cc1))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Screen readers should now read the keyboard shortcuts to type around a widget. Closes [#11936](https://github.com/ckeditor/ckeditor5/issues/11936). ([commit](https://github.com/ckeditor/ckeditor5/commit/ccc16115b9d297b25fcbfdb5995c5d786855f231))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `HtmlDataProcessor` exposes an option to `skipComments`. Closes [#12813](https://github.com/ckeditor/ckeditor5/issues/12813). ([commit](https://github.com/ckeditor/ckeditor5/commit/6a7bc0488001176efa860dda8438d21f20c3dfb9))
* **[enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter)**: Made the `enterBlock()` helper publicly accessible through `EnterCommand#enterBlock()`. Closes [#12885](https://github.com/ckeditor/ckeditor5/issues/12885). ([commit](https://github.com/ckeditor/ckeditor5/commit/03b105a1e2e674afd0f3f8b61537271b7884e755))
* **[export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**: Added support for callbacks in the `fileName` configuration option.
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: Added support for callbacks in the `fileName` configuration option.
* **[import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**: Imported comments will keep only basic styling by default. This behavior can be changed using the new `importWord.commentsStyles` config property.
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Added access to list-related utils functions through the new `ListUtils` plugin to make it possible to use them in other packages. ([commit](https://github.com/ckeditor/ckeditor5/commit/37dc40c0aecafc08d4f5a3cade6fdc0576d49c39))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Added access to list-related utils functions through the new `DocumentListUtils` and `DocumentListPropertiesUtils` plugins to make it possible to use them in other packages. ([commit](https://github.com/ckeditor/ckeditor5/commit/cb1a3195bce9c88919efa8025004afd312647dc8))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: `TableWidthResizeCommand` will now reset the size values if an optional execution parameter is skipped. Closes [#12916](https://github.com/ckeditor/ckeditor5/issues/12916). ([commit](https://github.com/ckeditor/ckeditor5/commit/2d1e16c6cc2a35b70275e8b954ba8804eab680a4))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Removed the `I` generic parameter from the `Collection` class. See [#12763](https://github.com/ckeditor/ckeditor5/issues/12763). ([commit](https://github.com/ckeditor/ckeditor5/commit/b27b23f5bf78039a0c8d2844addbe22239876eab))
* Several packages have been rewritten to TypeScript:
  * [`@ckeditor/ckeditor5-editor-balloon`](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): closes [#12617](https://github.com/ckeditor/ckeditor5/issues/12617). ([commit](https://github.com/ckeditor/ckeditor5/commit/4a3b268e9d77b90bc198dab2823232ae4def9e20))
  * [`@ckeditor/ckeditor5-editor-classic`](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): closes [#12618](https://github.com/ckeditor/ckeditor5/issues/12618). ([commit](https://github.com/ckeditor/ckeditor5/commit/4991efdbede74ce5b5bf68c31fbc343eff226b80))
  * [`@ckeditor/ckeditor5-editor-decoupled`](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): closes [#12619](https://github.com/ckeditor/ckeditor5/issues/12619). ([commit](https://github.com/ckeditor/ckeditor5/commit/2cb21fcefec03b6cb38381d495a332817cad53bc))
  * [`@ckeditor/ckeditor5-editor-inline`](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): closes [#12620](https://github.com/ckeditor/ckeditor5/issues/12620). ([commit](https://github.com/ckeditor/ckeditor5/commit/5faf012e0d381ead0eccc2cbce960112a1bd681a))
  * [`@ckeditor/ckeditor5-essentials`](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): closes [#12621](https://github.com/ckeditor/ckeditor5/issues/12621). ([commit](https://github.com/ckeditor/ckeditor5/commit/46df564da2616f7374c27d0b957f2bc7f7bbd708))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/7b606f2c6cccb778ab54d4dfa29de222398e2c20))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Releases containing new features:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.3.2 => v35.4.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.3.2 => v35.4.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.3.2 => v35.4.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.3.2 => v35.4.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.3.2 => v35.4.0
</details>


## [35.3.2](https://github.com/ckeditor/ckeditor5/compare/v35.3.1...v35.3.2) (2022-11-18)

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Improved support for dictation (via VoiceControl) on iOS and multi-line text replacements on macOS. Closes [#2045](https://github.com/ckeditor/ckeditor5/issues/2045), [#11443](https://github.com/ckeditor/ckeditor5/issues/11443). ([commit](https://github.com/ckeditor/ckeditor5/commit/6f639c7c6327f1852756ba42510f8a0caeaf5ac6))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.3.1 => v35.3.2
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.3.1 => v35.3.2
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.3.1 => v35.3.2
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.3.1 => v35.3.2
</details>


## [35.3.1](https://github.com/ckeditor/ckeditor5/compare/v35.3.0...v35.3.1) (2022-11-11)

### Release highlights

Due to a vulnerability issue in the `socket.io-parser` package ([CVE-2022-2421](https://github.com/advisories/GHSA-qm95-pgcg-qqfq)) used by packages to offer [real-time collaboration](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/collaboration.html) services, we strongly advise updating to the latest CKEditor 5 version if your integration includes one of the following features:

* [Real-time collaborative comments](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html).
* [Real-time collaborative editing](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/real-time-collaboration/real-time-collaboration.html).
* [Real-time collaborative revision history](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/revision-history/revision-history.html).
* [Real-time collaborative track changes](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes.html).

### Bug fixes

* **[import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**: The Import from Word feature should accept a function specified in the configuration as `importWord.tokenUrl`.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.3.0 => v35.3.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.3.0 => v35.3.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.3.0 => v35.3.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.3.0 => v35.3.1
</details>


## [35.3.0](https://github.com/ckeditor/ckeditor5/compare/v35.2.1...v35.3.0) (2022-11-02)

### Release highlights

We are happy to announce the release of CKEditor 5 v35.3.0.

This release introduces the following new features:

* [Typing and text composition (IME) support has been refactored to use `beforeInput` DOM events instead of DOM mutations and keystrokes](https://github.com/ckeditor/ckeditor5/issues/11438).
* Track changes integration has been added for the document lists and table caption features.
* [Improvements to the `IconView` component now allow rich colorful icons](https://github.com/ckeditor/ckeditor5/issues/12597). Several other changes has also been added to improve the way the icons are handled.
* External annotations in comments and track changes have gotten additional visual information to emphasize that the author name comes from an external source.
* Several key packages were rewritten into TypeScript (listed below).

There were also bug fixes:

* External comments are no longer assigned to the user who imported them. Im means these are not editable by them and do not behave like they were created by that user (e.g. they do not join with other suggestions created by them).
* [Tooltips handling has been improved to better follow user interface events](https://github.com/ckeditor/ckeditor5/issues/12492).
* Fixed incorrect annotations order in the sidebar when a comment or a suggestion was set on a multi-line text (and in similar cases).

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.3.0-with-a-revamped-typing-and-ime-handling-better-external-annotations-handling/

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `DataTransfer` class has been moved to the [`@ckeditor/ckeditor5-engine`](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine) package.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: The `SuggestionDescriptionFactory#getItemLabel()` method now takes element object instead of an element name.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: The `SuggestionDescriptionFactory#registerElementLabel()` method now requires a second parameter to be a function (before, strings were also accepted). This may affect you if you provide custom plugins and use the track changes feature.
* The `input` command is now deprecated, you should use the `insertText` command instead. See [#11438](https://github.com/ckeditor/ckeditor5/issues/11438).

### Features

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Typing and text composition (IME) support has been refactored to use `beforeInput` DOM events instead of DOM mutations and keystrokes. Closes [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter)**: Typing and text composition (IME) support has been refactored to use `beforeInput` DOM events instead of DOM mutations and keystrokes. Closes [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integration for document lists feature.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integration for table caption feature.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Typing and text composition (IME) support has been refactored to use `beforeInput` DOM events instead of DOM mutations and keystrokes. Closes [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed incorrect annotations order in the sidebar when a comment or a suggestion was set on a multi-line text (and in similar cases).
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: External comments (e.g., imported from a Word file) should not be editable by the user who imported them.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `ModifySelection` class with word unit should not stop at the attribute boundary. Closes [#12673](https://github.com/ckeditor/ckeditor5/issues/12673), [#12657](https://github.com/ckeditor/ckeditor5/issues/12657). ([commit](https://github.com/ckeditor/ckeditor5/commit/fd8adb99de6f73c6e9419f116005c6241b2ac9b5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed conversion of the non-collapsed selection anchored between the `<br>` elements (in Safari). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The selection should not change when a table caption is turned off. ([commit](https://github.com/ckeditor/ckeditor5/commit/ffe3fe09e828f5c6b3f8aa04f29b6f5f7e1f02f6))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: The `SwitchButtonView`'s text and background color should stay the same regardless of the state because the toggle switch carries all the necessary information. Closes [#12519](https://github.com/ckeditor/ckeditor5/issues/12519). ([commit](https://github.com/ckeditor/ckeditor5/commit/b29f9c86c19b33f61ce16340914d2d11b9c27ab4))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed incorrect annotations order in the sidebar when a comment or a suggestion was set on a multi-line text (and in similar cases).
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: External suggestions (e.g., imported from a Word file) should not behave like suggestions created by the user who imported them (e.g., should not join with other suggestions created by the user, etc.).
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: A tooltip should also hide when the element it is attached to hides. Closes [#12492](https://github.com/ckeditor/ckeditor5/issues/12492). ([commit](https://github.com/ckeditor/ckeditor5/commit/ed5586389ac4a1b9a479469b11a0f28d0ff26a28))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Improvements to the `IconView` component now allow rich colorful icons. Closes [#12597](https://github.com/ckeditor/ckeditor5/issues/12597), [#12599](https://github.com/ckeditor/ckeditor5/issues/12599). ([commit](https://github.com/ckeditor/ckeditor5/commit/57100faf44918eef8f5b1a8635361fafa8306bb5))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Preserved presentational attributes from the icon source on the `<svg>` element ([#12597](https://github.com/ckeditor/ckeditor5/issues/12597)). ([commit](https://github.com/ckeditor/ckeditor5/commit/57100faf44918eef8f5b1a8635361fafa8306bb5))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: It is possible to opt out from the icon color inheritance ([#12599](https://github.com/ckeditor/ckeditor5/issues/12599)). ([commit](https://github.com/ckeditor/ckeditor5/commit/57100faf44918eef8f5b1a8635361fafa8306bb5))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Excluded icon internals from the CSS reset ([#12599](https://github.com/ckeditor/ckeditor5/issues/12599)). ([commit](https://github.com/ckeditor/ckeditor5/commit/57100faf44918eef8f5b1a8635361fafa8306bb5))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: UI tooltips should continue showing up until the last editor gets destroyed. Closes [#12602](https://github.com/ckeditor/ckeditor5/issues/12602). ([commit](https://github.com/ckeditor/ckeditor5/commit/5809d20c639838c6953e08353fd7d6afbd6f8d29))

### Other changes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Added additional visual information in comments and track changes annotations to emphasize that the author name comes from an external source.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced `@external.source` attribute for comments and suggestions to better inform what is the source of the external data. Improved related labels.
* **[enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter)**: The `enter` event is now mapped from a subset of `beforeInput` events. See [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**: Support has been added for executing an asynchronous callback passed via the [`config.exportPdf.dataCallback`](https://ckeditor.com/docs/ckeditor5/latest/api/module_export-pdf_exportpdf-ExportPdfConfig.html#member-dataCallback) configuration.
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: Support has been added for executing an asynchronous callback passed via the [`config.exportWord.dataCallback`](https://ckeditor.com/docs/ckeditor5/latest/api/module_export-word_exportword-ExportWordConfig.html#member-dataCallback) configuration.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced performance improvements for a scenario when undo is used after accepting or discarding a huge number of suggestions. Accepting or discarding many suggestions at once may now result in multiple undo steps.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: The `SuggestionDescriptionFactory#registerElementLabel()` method now accepts a callback function as the first parameter. This allows for setting labels for elements based on attributes or other factors.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added an additional visual information in comments and track changes annotations to emphasize that the author name comes from an external source.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced the `@external.source` attribute for comments and suggestions to better inform what is the source of the external data. Improved related labels.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Introduced a new `insertText` event mapped from a subset of `beforeInput` events. See [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: The `delete` event is now mapped from a subset of `beforeInput` events. See [#11438](https://github.com/ckeditor/ckeditor5/issues/11438). ([commit](https://github.com/ckeditor/ckeditor5/commit/a930fef60933e5e2f04f6f9bcbf9e651ef136588))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Allowed inserting extra children next to the field inside `LabeledFieldView`. Closes [#12598](https://github.com/ckeditor/ckeditor5/issues/12598). ([commit](https://github.com/ckeditor/ckeditor5/commit/3d01896eccbbe8d9c41b7f24243b469019922d15))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added types to `Config` and merged the `number` type into `PriorityString`. Closes [#12218](https://github.com/ckeditor/ckeditor5/issues/12218). ([commit](https://github.com/ckeditor/ckeditor5/commit/cfd00bf98fd655d89dae510e4a2fd002ee21d31b))
* Several packages have been rewritten to TypeScript:

  * [`@ckeditor/ckeditor5-clipboard`](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): closes [#12615](https://github.com/ckeditor/ckeditor5/issues/12615). ([commit](https://github.com/ckeditor/ckeditor5/commit/3dda63e55a51bc37abc752427fc7e864b5cd97b9))
  * [`@ckeditor/ckeditor5-core`](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): closes [#11727](https://github.com/ckeditor/ckeditor5/issues/11727). ([commit](https://github.com/ckeditor/ckeditor5/commit/cfd00bf98fd655d89dae510e4a2fd002ee21d31b))
  * [`@ckeditor/ckeditor5-enter`](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): closes [#12608](https://github.com/ckeditor/ckeditor5/issues/12608). ([commit](https://github.com/ckeditor/ckeditor5/commit/8fad1ded921d585f68170ed3a977bc560d13dd4b))
  * [`@ckeditor/ckeditor5-paragraph`](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): closes [#12609](https://github.com/ckeditor/ckeditor5/issues/12609). ([commit](https://github.com/ckeditor/ckeditor5/commit/9c52490a403e0f63b87e52ebefed7f3d91403585))
  * [`@ckeditor/ckeditor5-select-all`](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): closes [#12610](https://github.com/ckeditor/ckeditor5/issues/12610). ([commit](https://github.com/ckeditor/ckeditor5/commit/25aa452964a748f556843570edd67fb646ab4b56))
  * [`@ckeditor/ckeditor5-typing`](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): closes [#12611](https://github.com/ckeditor/ckeditor5/issues/12611). ([commit](https://github.com/ckeditor/ckeditor5/commit/8fb5c01cb6df60a5731e46d3018bc5339e5a8be4))
  * [`@ckeditor/ckeditor5-ui`](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): closes [#11726](https://github.com/ckeditor/ckeditor5/issues/11726). ([commit](https://github.com/ckeditor/ckeditor5/commit/cfd00bf98fd655d89dae510e4a2fd002ee21d31b))
  * [`@ckeditor/ckeditor5-undo`](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): closes [#12612](https://github.com/ckeditor/ckeditor5/issues/12612). ([commit](https://github.com/ckeditor/ckeditor5/commit/dfe632358dc83f00360bd8578def9524fda0750b))
  * [`@ckeditor/ckeditor5-upload`](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): closes [#12613](https://github.com/ckeditor/ckeditor5/issues/12613). ([commit](https://github.com/ckeditor/ckeditor5/commit/2115aee3a7a8cc650488e85a9108021ec29665b2))
  * [`@ckeditor/ckeditor5-widget`](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): closes [#12614](https://github.com/ckeditor/ckeditor5/issues/12614). ([commit](https://github.com/ckeditor/ckeditor5/commit/a89038fd0dc5b4148e25595a153d19a6e38007d5))

* Adds types for the `CommandCollection.execute()` and `Editor.execute()` methods. Closes [#12678](https://github.com/ckeditor/ckeditor5/issues/12678). ([commit](https://github.com/ckeditor/ckeditor5/commit/f94839e00816e9296a8fe096e9630f7b4b85e564))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.2.1 => v35.3.0

Releases containing new features:

* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.2.1 => v35.3.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.2.1 => v35.3.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.2.1 => v35.3.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.2.1 => v35.3.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.2.1 => v35.3.0
</details>


## [35.2.1](https://github.com/ckeditor/ckeditor5/compare/v35.2.0...v35.2.1) (2022-10-10)

This is a hotfix release which addresses problems discovered after publishing code for our previous main release. Please make sure to check the changelog for version `35.2.0` below as well.

### Bug fixes

* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Suggestions imported from Word file were not saved in the database.

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.2.0-with-the-import-from-word-plugin-new-toolbar-functionality-and-annotations-performance-improvement/

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.2.0 => v35.2.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.2.0 => v35.2.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.2.0 => v35.2.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.2.0 => v35.2.1
</details>


## [35.2.0](https://github.com/ckeditor/ckeditor5/compare/v35.1.0...v35.2.0) (2022-10-04)

### Release highlights

We are happy to announce the release of CKEditor 5 v35.2.0.

This release introduces the following new features:

* Substantial performance improvements in scenarios with big number (hundreds) of comments and suggestions.
* [The ability to group toolbar items using a declarative config](https://github.com/ckeditor/ckeditor5/issues/12490).
* [New category "Arrows" is available in the default configuration of the special characters dropdown](https://github.com/ckeditor/ckeditor5/issues/6167).

There were also bug fixes:

* [The image's alternative text button state now indicates whether any value is applied](https://github.com/ckeditor/ckeditor5/issues/12268).
* [The 'Show more items' toolbar button will no longer steal focus after clicking a button from it](https://github.com/ckeditor/ckeditor5/issues/12178).
* [The block toolbar will close properly upon clicking its button](https://github.com/ckeditor/ckeditor5/issues/12184).
* [Auto-linking will not happen for URLs without a protocol provided if `config.link.defaultProtocol` is not set](https://github.com/ckeditor/ckeditor5/issues/11040).
* [An improvement for keyboard navigation for style feature](https://github.com/ckeditor/ckeditor5/issues/12250).
* [The image insertion pane is no longer empty if opened with the <kbd>arrow down</kbd> keystroke](https://github.com/ckeditor/ckeditor5/issues/12215).
* [The color pickers in table and table cell properties forms are now accessible for keyboard users](https://github.com/ckeditor/ckeditor5/issues/12193).
* [The to-do list items should not interrupt the <kbd>tab</kbd> key navigation across the editor content](https://github.com/ckeditor/ckeditor5/issues/6535).

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.2.0-with-the-import-from-word-plugin-new-toolbar-functionality-and-annotations-performance-improvement/

Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-35.html#migration-to-ckeditor-5-v3520) to learn more about these changes.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles)**: The `bold` icon has been moved to the `@ckeditor/ckeditor5-core` package.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced external comments and suggestions which require special handling when saving them in the database. This will concern you, if you use non real-time collaboration and the import from Word feature. Read more about it in the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-35.html#migration-to-ckeditor-5-v3520).
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The templates for `CommentView` and `SuggestionThreadView` have changed. This may concern you, if you use custom annotation views or templates and the import from Word feature.
* **[paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph)**: The `paragraph` icon has been moved to the `@ckeditor/ckeditor5-core` package.
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Renamed `WidgetResizer#visibleResizer` to `selectedResizer`. `Resizer#isEnabled` no longer directly changes resizer visibility. Instead, `Resizer#isVisible` was introduced. `Resizer#isVisible` value depends on `Resizer#isEnabled` and (new) `Resizer#isSelected`. This may concern you if you implemented a custom widget that can be resized.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Comment input editor is now initialized on demand instead of being created in the `CommentInputView` constructor and initialized on render. `CommentInputView#editor` is now `null` right after the instance is created. This may concern you, if you use custom comment views.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Annotations with targets set to markers or DOM elements inside the editor editable must now be registered in `EditorAnnotations#registerAnnotation()` after they are created. This will concern you, if you have a custom feature that creates `Annotation` instances inside the editor. This does not affect the comments outside the editor feature.

### Features

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced integration for the import from Word feature to handle comments and suggestion included in the imported Word file.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced support for comments and suggestions that come from an external source (e.g. an imported document). Annotations for these items will be labelled to differentiate them from regular comments and suggestions. To mark an annotation as external, set the `@external` attribute when creating a comment or a suggestion.
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: The General HTML Support (GHS) feature can exclude elements from the allowed list of elements. ([commit](https://github.com/ckeditor/ckeditor5/commit/3707c366acf32e15a9d5b9f2472b449dfb8b40f5))
* **[import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word)**: Added a new package (`@ckeditor/ckeditor5-import-word`), that allows importing Word documents into CKEditor 5.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced integration for the import from Word feature to handle comments and suggestions included in the imported Word file.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced support for comments and suggestions that come from an external source (e.g. an imported document). Annotations for these items will be labelled to differentiate them from regular comments and suggestions. To mark an annotation as external, set the `@external` attribute when creating a comment or a suggestion.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Allowed grouping toolbar items into drop-downs by using a declarative config. Closes [#12490](https://github.com/ckeditor/ckeditor5/issues/12490). ([commit](https://github.com/ckeditor/ckeditor5/commit/a0f92cb226535011e47bc60f1b1cbbb052a892de))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: It is now possible to switch between annotations when multiple inline annotations are displayed in the contextual balloon.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed editor throwing the `Maximum call stack size exceeded` error when huge number of nodes were inserted at once into an element. Closes [#12428](https://github.com/ckeditor/ckeditor5/issues/12428). ([commit](https://github.com/ckeditor/ckeditor5/commit/f1e84275883964e77b7d7ca081168d29f0d65ff6))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Redefined most GHS-elements as not blocks in the schema. Closes [#12430](https://github.com/ckeditor/ckeditor5/issues/12430). ([commit](https://github.com/ckeditor/ckeditor5/commit/d9500fe4cdcc5ad6c5fc89b07fd530159cdd02be))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image insertion pane should not be empty if opened with the <kbd>arrow down</kbd> keystroke. Closes [#12215](https://github.com/ckeditor/ckeditor5/issues/12215). ([commit](https://github.com/ckeditor/ckeditor5/commit/3f415af49e3c3c19fa8cfd9ca6a9daa7a8632531))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Alternative text button now indicates whether any value is applied. Closes [#12268](https://github.com/ckeditor/ckeditor5/issues/12268). ([commit](https://github.com/ckeditor/ckeditor5/commit/961d05cdc182a54c7db2dc44857f5d88f3a281d0))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Fixed incorrect behavior when text before the auto-linked url was removed by pressing backspace. Previously, the removed text was reinserted on backspace press. Closes [#12447](https://github.com/ckeditor/ckeditor5/issues/12447). ([commit](https://github.com/ckeditor/ckeditor5/commit/38979ed46eb536b8064f48354e452499c6f71fd8))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Corrected autolinking URLs without a protocol given. Closes [#11040](https://github.com/ckeditor/ckeditor5/issues/11040). ([commit](https://github.com/ckeditor/ckeditor5/commit/628e959bd3e8d253ea85bf6318eedee47e1a0f55))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Improved styles for indented lists. Closes [#12179](https://github.com/ckeditor/ckeditor5/issues/12179). ([commit](https://github.com/ckeditor/ckeditor5/commit/f167b5cb6f4daae282acd722780078394df1bdbe))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: To-do list items should not interrupt the `Tab` key navigation across the editor content. Closes [#6535](https://github.com/ckeditor/ckeditor5/issues/6535). ([commit](https://github.com/ckeditor/ckeditor5/commit/08e61060dbd420a754abfb901d7a01eb3cab19b2))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: List properties changes made on a list inside a container element (e.g. block quote) are now correctly propagated also to a list directly after that container. Closes [#11082](https://github.com/ckeditor/ckeditor5/issues/11082). ([commit](https://github.com/ckeditor/ckeditor5/commit/c3aa4ba07e26ba0d2fbf55d75a652baae9c02155))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: The focus will move to the editor after inserting a media. Closes [#12186](https://github.com/ckeditor/ckeditor5/issues/12186). ([commit](https://github.com/ckeditor/ckeditor5/commit/e8a33da62a875d105e625b20ef85a55eb8df8603))
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: Pagination should work correctly for blocks with inline elements and soft breaks.
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Extra line breaks should not be generated while pasting from Google Docs. Closes [#10217](https://github.com/ckeditor/ckeditor5/issues/10217). ([commit](https://github.com/ckeditor/ckeditor5/commit/f2efceed1a98d0235d8829c1317ca62820b0fd35))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table cell widths will be preserved after pasting into the editor with table column resize feature and without table cell properties one. Closes [#12426](https://github.com/ckeditor/ckeditor5/issues/12426). ([commit](https://github.com/ckeditor/ckeditor5/commit/21a7ed2d50c488b7299c0b00abce98fc1d330ec1))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added keyboard (`spacebar`) support for the table insertion dropdown. Closes [#12344](https://github.com/ckeditor/ckeditor5/issues/12344). ([commit](https://github.com/ckeditor/ckeditor5/commit/9ff9d4497404febde725b998de23dc11284008dd))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Made color pickers in table and table cell properties forms accessible for keyboard users. Closes [#12193](https://github.com/ckeditor/ckeditor5/issues/12193). ([commit](https://github.com/ckeditor/ckeditor5/commit/8162d9258f21b2a8d6a33936f8787976228abd8f))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed editor crashing or disconnecting from real-time collaboration session when the initial content contained big number of suggestions.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: The word count plugin callback will no longer be called when track changes data plugin is used.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Styles dropdown integration will correctly create suggestions for block quotes and other elements containing block elements.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: `DropdownView` should close when it gets blurred. Also, `DropdownView` should focus its `#buttonView` only when it gets closed and the focus is inside its `panelView`. Closes [#12178](https://github.com/ckeditor/ckeditor5/issues/12178), [#12005](https://github.com/ckeditor/ckeditor5/issues/12005). ([commit](https://github.com/ckeditor/ckeditor5/commit/e8a33da62a875d105e625b20ef85a55eb8df8603))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The block toolbar should close upon clicking its button. Closes [#12184](https://github.com/ckeditor/ckeditor5/issues/12184). ([commit](https://github.com/ckeditor/ckeditor5/commit/f811d4961665b2c9954a35aad5a200b70e894485))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The image resizer handle should not be visible when the resizer is not enabled (e.g. in comments-only mode). Closes [#11891](https://github.com/ckeditor/ckeditor5/issues/11891). ([commit](https://github.com/ckeditor/ckeditor5/commit/560bbce6bd56b76ad7f57fec3de717abce9aca26))

### Other changes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced substantial performance improvements in scenarios with big number (hundreds) of comments and suggestions. Improved editor initialization time and editor responsiveness.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced `EditorAnnotations#registerAnnotation()`.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the optional `@external` attribute for comments and suggestions. `@external` is an object that contains fields with author name (`authorName`) and date (`createdAt`). The attribute is read-only and can be set only when a comment or suggestion is created.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `Model#insertContent()` will now insert markers added to `DocumentFragment#markers`. Closes [#12467](https://github.com/ckeditor/ckeditor5/issues/12467). ([commit](https://github.com/ckeditor/ckeditor5/commit/c8c05bce112d07f3a599874f4a39d63e96043ad8))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Reimplemented `Position#isTouching()` in order to achieve better editor performance. ([commit](https://github.com/ckeditor/ckeditor5/commit/10448f60ab6ff4a140b0fa0a573b8b6672e4b166))
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: Added missing arrow characters (`↑`, `→`, `↓`, `←`) into the selection table. Closes [#6167](https://github.com/ckeditor/ckeditor5/issues/6167). ([commit](https://github.com/ckeditor/ckeditor5/commit/d8e1dbd73ad190356bf74375f21c6db9164a7f50))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Improved keyboard navigation in the style feature drop-down. Closes [#12250](https://github.com/ckeditor/ckeditor5/issues/12250). ([commit](https://github.com/ckeditor/ckeditor5/commit/50f6eba9c1a8195db25734ec4e9b7537ac08acec))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced substantial performance improvements in scenarios with big number (hundreds) of comments and suggestions. Improved editor initialization time and editor responsiveness.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced optional `@external` attribute for comments and suggestions. `@external` is an object that contains fields with author name (`authorName`) and date (`createdAt`). The attribute is read-only and can be set only when a comment or suggestion is created.
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Dropped using lodash `isElement()` in `Rect` class in order to achieve better editor performance. ([commit](https://github.com/ckeditor/ckeditor5/commit/10448f60ab6ff4a140b0fa0a573b8b6672e4b166))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/00f5e2d01204f4ee7b1fc77107faf4c544703112), [commit](https://github.com/ckeditor/ckeditor5/commit/16ee7f5ba7ec2df026d5344bedb14e2af5e6e9d9), [commit](https://github.com/ckeditor/ckeditor5/commit/35f2f349ce957af442136eaf8c10de66aa0fc8d1))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-import-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-import-word): v35.2.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.1.0 => v35.2.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.1.0 => v35.2.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.1.0 => v35.2.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.1.0 => v35.2.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.1.0 => v35.2.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.1.0 => v35.2.0
</details>


## [35.1.0](https://github.com/ckeditor/ckeditor5/compare/v35.0.1...v35.1.0) (2022-08-29)

### Release highlights

We are happy to announce the release of CKEditor 5 v35.1.0.

This release introduces the following new features:

* [Accessibility improvements](https://github.com/ckeditor/ckeditor5/issues/11712).
* Changes in the editor theme improve the UI.
* The column resize feature has been improved.
* Migration to TypeScript takes another step.

There were also bug fixes:

* Fixed revision history crashes during various actions when the revision data contained `<br>` at the end of a block element (like `<p>`).
* [Fixed the focus after inserting an image](https://github.com/ckeditor/ckeditor5/issues/12229) - it is now moved to editable.

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.1.0-with-an-updated-interface-table-improvements-and-more-typescript/

Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-35.html#migration-to-ckeditor-5-v3510) to learn more about these changes.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `enableToolbarKeyboardFocus()` helper has been removed. Please use the [`EditorUI#addToolbar()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorui-EditorUI.html#function-addToolbar) method instead to enable accessible toolbar navigation (and focusing) using the `Alt+F10` and `Esc` keystrokes (see [#10368](https://github.com/ckeditor/ckeditor5/issues/10368)).
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The TooltipView UI component has been removed. Please use the new tooltip API instead. Please note, that this change does not affect the integrations that configure tooltips using the `ButtonView#tooltip` property.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The static properties of `BalloonPanelView` have been renamed. The `BalloonPanelView.arrowVerticalOffset` static property is now `arrowHeightOffset` and `BalloonPanelView.arrowHorizontalOffset` is now `arrowSideOffset`.

### Features

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Enabled toolbar focusing and navigation across various editor implementations and features. Closes [#10368](https://github.com/ckeditor/ckeditor5/issues/10368), [#5146](https://github.com/ckeditor/ckeditor5/issues/5146), [#9906](https://github.com/ckeditor/ckeditor5/issues/9906), [#10025](https://github.com/ckeditor/ckeditor5/issues/10025). ([commit](https://github.com/ckeditor/ckeditor5/commit/149958574adf4768a12582ffd2ea4445441f01b0))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added keyboard support for the table insertion dropdown. Closes [#3176](https://github.com/ckeditor/ckeditor5/issues/3176). ([commit](https://github.com/ckeditor/ckeditor5/commit/f27ab5a222aabf4d2186b80fa6ac2f3a061fef60))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Implemented a `TooltipManager` class to manage the UI tooltips across components and features. Closes [#12067](https://github.com/ckeditor/ckeditor5/issues/12067). ([commit](https://github.com/ckeditor/ckeditor5/commit/1acdf50abc397aa5d0b0f1c3e5b64987d148faf0))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced the `addKeyboardHandlingForGrid()` helper to handle grid keyboard navigation. Closes [#11851](https://github.com/ckeditor/ckeditor5/issues/11851). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e8cdcb9e493ddfbff6f56a12cd8599d3aa664b7))

### Bug fixes

* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Removed an unnecessary tooltip for the "Remove color" button. Closes [#12277](https://github.com/ckeditor/ckeditor5/issues/12277). ([commit](https://github.com/ckeditor/ckeditor5/commit/6655e822ec4912e2872106d90698be4679198a6c))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Fixed focus order for color grid in the font color and background drop-downs. Closes [#11841](https://github.com/ckeditor/ckeditor5/issues/11841). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e8cdcb9e493ddfbff6f56a12cd8599d3aa664b7))
* **[highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight)**: Restored the correct functionality of the "Remove highlight" toolbar button. Closes [#12265](https://github.com/ckeditor/ckeditor5/issues/12265). ([commit](https://github.com/ckeditor/ckeditor5/commit/80440ebe6b4752c35665ead7be0efc89c788113e))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Fixed the focus after inserting an image - it is now moved to editable. Closes [#12229](https://github.com/ckeditor/ckeditor5/issues/12229). ([commit](https://github.com/ckeditor/ckeditor5/commit/f2ae59341318408db6ac99d0dee614aa2fdfefd0))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Toggling an image or a table caption should focus the editing root. Closes [#12165](https://github.com/ckeditor/ckeditor5/issues/12165). ([commit](https://github.com/ckeditor/ckeditor5/commit/4e7d4634692ea8684c9fb69da54fa1957e9438cb))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Unified focus handling and keyboard navigation in the list properties drop-downs. Closes [#11041](https://github.com/ckeditor/ckeditor5/issues/11041). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e8cdcb9e493ddfbff6f56a12cd8599d3aa664b7))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed revision history crashes during various actions when the revision data contained `<br>` at the end of a block element (like `<p>`).
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: Added keyboard support to the special characters dropdown. Closes [#9037](https://github.com/ckeditor/ckeditor5/issues/9037). ([commit](https://github.com/ckeditor/ckeditor5/commit/037ac54b5bb34cfb03f2b607e8c5291651658f06))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Changed the color of the pressed button text or an icon to improve contrast. Improved the border contrast of inputs and editing roots. Improved the look of the focused state of switch buttons. Closes [#1405](https://github.com/ckeditor/ckeditor5/issues/1405), [#11842](https://github.com/ckeditor/ckeditor5/issues/11842). ([commit](https://github.com/ckeditor/ckeditor5/commit/5b49b89c0e2854a12d87fadd60ca96a709b43b4f))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Resizing a table with column count changed by another user no longer breaks the real-time collaboration. Closes [#12325](https://github.com/ckeditor/ckeditor5/issues/12325). ([commit](https://github.com/ckeditor/ckeditor5/commit/c1c1754392d702b215ee0d9cde48d241c1072f5b))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Added a semantic attribute for marking the dropdown button as expanded. Closes [#12258](https://github.com/ckeditor/ckeditor5/issues/12258). ([commit](https://github.com/ckeditor/ckeditor5/commit/1faeb268159b94d82bbf20f4318107fc6471bae3))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Rewriten the `ckeditor5-engine` package to TypeScript. Closes [#11724](https://github.com/ckeditor/ckeditor5/issues/11724). ([commit](https://github.com/ckeditor/ckeditor5/commit/dd14cd255a63dda5500c53ff7722e51f767ddebc))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Introduced a new way to apply mixins. Instead of using the `mix()` util, classes should extend the base created by `EmitterMixin()`, `ObservableMixin()` and `DomEmitterMixin()` or extend `Emitter` or `Observable` directly. Closes [#12077](https://github.com/ckeditor/ckeditor5/issues/12077). ([commit](https://github.com/ckeditor/ckeditor5/commit/c07fb79e1e0c62bea44787b43dba51d5a2d7b923))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added support for typed events in `EmitterMixin`. Closes [#12076](https://github.com/ckeditor/ckeditor5/issues/12076). ([commit](https://github.com/ckeditor/ckeditor5/commit/3605c9a46e1d8b222c496871201487042d601f92))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/7dfb504a3339fe287627bf422cae8c2a295303bf), [commit](https://github.com/ckeditor/ckeditor5/commit/a51f750a7dd63b3c987d338ac227b110ead1738e))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.0.1 => v35.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.0.1 => v35.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.0.1 => v35.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.0.1 => v35.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.0.1 => v35.1.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.0.1 => v35.1.0
</details>


## [35.0.1](https://github.com/ckeditor/ckeditor5/compare/v35.0.0...v35.0.1) (2022-08-03)

Due to network issues, while publishing the CKEditor 5 packages, we deployed an empty `@ckeditor/ckeditor5-utils` package. To fix the problem, we decided to publish a new release marked `35.0.1`.

Please read the changelog entries for the `35.0.0` version to learn about the latest CKEditor 5 release.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v35.0.0 => v35.0.1
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v35.0.0 => v35.0.1
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v35.0.0 => v35.0.1
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v35.0.0 => v35.0.1
</details>


## [35.0.0](https://github.com/ckeditor/ckeditor5/compare/v34.2.0...v35.0.0) (2022-07-29)

### Security fix

We are happy to announce the release of CKEditor 5 v35.0.0 that contains a security fix for the [Markdown GFM](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm), [HTML support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support) and [HTML embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed) packages. Even though this issue affects only a narrow group of integrators, an upgrade is highly recommended! You can read more details in the relevant [security advisory](https://github.com/ckeditor/ckeditor5/security/advisories/GHSA-42wq-rch8-6f6j) and [contact us](https://ckeditor.com/contact/) if you have more questions.

### Release highlights

This release introduces the following new features:

* Various accessibility improvements.
* The styles dropdown feature is now integrated with track changes.
* The [`@ckeditor/ckeditor5-utils`](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils) package is now written in TypeScript.
* We have updated and corrected translations. 39 languages are now fully covered by professional translators.

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v35.0.0-with-collaboration-and-typescript-migration/

Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-35.html) to learn more about these changes.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The source element is not updated automatically after the editor destroy.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DomConverter#viewToDom()` and `DomConverter#viewChildrenToDom()` parameter lists have changed (the 2nd parameter – the DOM document instance is no longer accepted).
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The `ImageInsertPanelView#dropdownView` property is no longer accessible. Use `editor.plugins.get( 'ImageInsertUI' ).dropdownView` instead to access the image insert dropdown instance. See [#11654](https://github.com/ckeditor/ckeditor5/issues/11654).
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Before, `preventDefault()` was called on the `mousedown` event to prevent the [`ButtonView`](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_buttonview-ButtonView.html) class from "stealing" the focus from the editing root. Starting this release, to improve the accessibility of the editor, all instances of the [`ButtonView`](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_buttonview-ButtonView.html) class (and its child classes) will automatically focus in DOM when clicked. It is recommended for features using buttons to manage the content to call `editor.editing.view.focus()` after the button was [executed](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_buttonview-ButtonView.html#event-execute) in order to bring the DOM focus back to the editing root to allow users type right away.

### Features

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Introduced the `updateSourceElementOnDestroy` configuration option. ([commit](https://github.com/ckeditor/ckeditor5/commit/fc4643291f2a195bf4928c2bd4550ed7b73d352c))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Support timestamp in embedded youtube videos. Closes [#12006](https://github.com/ckeditor/ckeditor5/issues/12006). ([commit](https://github.com/ckeditor/ckeditor5/commit/376227b86b2c1c7057b2e4053b6687c1a447f2c7)) Thanks to @Recursing!
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Enabled resuming an unsaved revision for integrations using Cloud Services editor bundle.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integration for the styles dropdown feature.

### Bug fixes

* **[ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox)**: Replaced the `CloudServicesCore` requirement in favor of the `CloudServices` plugin for CKBox. Closes [#12040](https://github.com/ckeditor/ckeditor5/issues/12040). ([commit](https://github.com/ckeditor/ckeditor5/commit/b3b2d792ea242d9d69d920a8f6c2d3d5dd802f73))
* **[editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon)**: The editing area of the editor should have a clear accessible label. Closes [#11836](https://github.com/ckeditor/ckeditor5/issues/11836). ([commit](https://github.com/ckeditor/ckeditor5/commit/8ee4ce986a7dc0c30a0f2376df250884c4255424))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor should not crash while making a selection after having a collapsed selection with styles applied. Closes [#12026](https://github.com/ckeditor/ckeditor5/issues/12026). ([commit](https://github.com/ckeditor/ckeditor5/commit/fe81aaa3a813086e5020764e34eeccb417f6a47b))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Allowed setting an accessible label in the `toWidgetEditable()` helper. Added missing labels for assistive technologies to image captions. Closes [#11837](https://github.com/ckeditor/ckeditor5/issues/11837). ([commit](https://github.com/ckeditor/ckeditor5/commit/be970526527e071d58d18447c95d262c05a2aa6e))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Link manual decorators should be properly down-casted on the document selection. Closes [#12046](https://github.com/ckeditor/ckeditor5/issues/12046). ([commit](https://github.com/ckeditor/ckeditor5/commit/0e7794bb16bf21357db8cc42b6a0791d186efb5e))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed a bug where custom plugins were filtered out from revision history preview if they required the track changes plugin.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added a proper label for color buttons in the table properties panel so that it is available for screen readers. Closes [#11895](https://github.com/ckeditor/ckeditor5/issues/11895). ([commit](https://github.com/ckeditor/ckeditor5/commit/6bff2da99214716e6e1ed30aa822c141bc376e74))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: A suggestion will be discarded from document data if the `TrackChangesAdapter#addSuggestion()` method has errored.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The default value of the `aria-pressed` DOM attribute of a [toggleable](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_button-Button.html#member-isToggleable) button should be `false` instead of `undefined`. Closes [#11115](https://github.com/ckeditor/ckeditor5/issues/11115). ([commit](https://github.com/ckeditor/ckeditor5/commit/31cf026541b8eafe025e35201ac4cf1051232b01))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Opening a dropdown should focus the first item (or the first active item) for easier navigation and accessibility. Closes [#11838](https://github.com/ckeditor/ckeditor5/issues/11838), [#2000](https://github.com/ckeditor/ckeditor5/issues/2000), [#11568](https://github.com/ckeditor/ckeditor5/issues/11568), [#3215](https://github.com/ckeditor/ckeditor5/issues/3215), [#5859](https://github.com/ckeditor/ckeditor5/issues/5859). ([commit](https://github.com/ckeditor/ckeditor5/commit/a95ad5c739fb78db258689172ba84385ed468a0c))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DomConverter` should use a separate DOM document instance in the data pipeline. ([commit](https://github.com/ckeditor/ckeditor5/commit/541708e8ff5c7dbb5904b61bd158cf528be05d36))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introducing the `ImageInsertViaUrl` plugin enabling insertion of images via URL without the requirement of the `UploadPlugin`. Closes [#11654](https://github.com/ckeditor/ckeditor5/issues/11654). ([commit](https://github.com/ckeditor/ckeditor5/commit/da475dbd3445978be5bd1c458de9bf2725dd459f))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: `StyleCommand#execute()` now expects to be passed an object with properties `styleName` and optional `forceValue` instead of a single string. ([commit](https://github.com/ckeditor/ckeditor5/commit/cf708bde5badfcac269d5d5da002b8324684516f))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The `utils` package is now written in TypeScript. ([commit](https://github.com/ckeditor/ckeditor5/commit/ff9c7f1e7d8e6963755f1cb68c3ce6b98b6359fb))
* Updated 38 translations to 100%. ([commit](https://github.com/ckeditor/ckeditor5/commit/a798cbe874c36ed5f5e0d1ee666aaa863c72ea53), [commit](https://github.com/ckeditor/ckeditor5/commit/929c14be4c8db1dd9b32fa8e44ed144c778b3ebc), [commit](https://github.com/ckeditor/ckeditor5/commit/f0a43801d55a348d71bf980e2c8dd1014af43cd6))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v34.2.0 => v35.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v34.2.0 => v35.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v34.2.0 => v35.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v34.2.0 => v35.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v34.2.0 => v35.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v34.2.0 => v35.0.0
</details>


## [34.2.0](https://github.com/ckeditor/ckeditor5/compare/v34.1.0...v34.2.0) (2022-06-27)

### Release highlights

We are happy to announce the release of CKEditor 5 v34.2.0.

This release introduces the following new features:

* A unsaved revision will now be resumed when the editor is re-initialized (instead of creating a new revision). **Note, that currently, this feature does not work for real-time editing integrations that use an editor bundle uploaded to Cloud Services.**
* Integrated the track changes feature with the code block and HTML embed features.
* Integrated CKEditor 5 with the CKBox service.

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v34.2.0-with-ckbox-resuming-unsaved-revisions-and-a-new-installation-walkthrough/

### Features

* **[ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox)**: Added a new package (`@ckeditor/ckeditor5-ckbox`), which integrates the CKBox service with CKEditor 5. ([commit](https://github.com/ckeditor/ckeditor5/commit/c88c8ca46404420cb6545d88d2b436c789851cca))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `annotations` property for the `WideSidebar`, `NarrowSidebar` and `InlineAnnotations` plugins. The property is an `AnnotationsCollection` instance which keeps all annotations added to the given UI.
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Custom elements should be preserved by the General HTML Support feature. Closes [#11432](https://github.com/ckeditor/ckeditor5/issues/11432). ([commit](https://github.com/ckeditor/ckeditor5/commit/efd6f84ddc1d78f18e88d21fd7fa3d4af334af6e))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Introduced the `cloudServices.connectionTimeout` and `cloudServices.requestTimeout` configuration options that allow for changing timeout values for connecting to Cloud Services and for handling a single request.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Unsaved revision will now be resumed when the editor is re-initialized (instead of creating a new revision). Introduced the `revisionHistory.resumeUnsavedRevision` configuration option that turns on and off this behavior (defaults to `true`).
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Added track changes integration for the code block and HTML embed features.

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The order of attributes should not get reversed while loading editor data. Closes [#11850](https://github.com/ckeditor/ckeditor5/issues/11850). ([commit](https://github.com/ckeditor/ckeditor5/commit/22bc8e6488d40377722837de6646a56930c28087))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Inline filler should not be removed while updating a text node. Closes [#11472](https://github.com/ckeditor/ckeditor5/issues/11472). ([commit](https://github.com/ckeditor/ckeditor5/commit/64e029df3d0c375c1fd4655f279297ff919ac9f2))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The view element `renderUnsafeAttributes` option should not be lost for an AttributeElements. Closes [#11879](https://github.com/ckeditor/ckeditor5/issues/11879). ([commit](https://github.com/ckeditor/ckeditor5/commit/2fd7f852f27d2b7cb4af0e05d8ab0bffe79f796a))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Whitespaces between block elements should not trigger auto-paragraphing. Closes [#11248](https://github.com/ckeditor/ckeditor5/issues/11248). ([commit](https://github.com/ckeditor/ckeditor5/commit/efd6f84ddc1d78f18e88d21fd7fa3d4af334af6e))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed long revision history loading time when `Context` is used.
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: The `formatHtml()` helper should not crash when a pathological `<iframe>` content is passed. Closes [#10698](https://github.com/ckeditor/ckeditor5/issues/10698). ([commit](https://github.com/ckeditor/ckeditor5/commit/4a599a84084046583b96f7d3d8b236123bfa79a0))
* **[toolbar](https://www.npmjs.com/package/@ckeditor/ckeditor5-toolbar)**: Added a toolbar button tooltip when focused improving accessibility for keyboard users. Closes [#5581](https://github.com/ckeditor/ckeditor5/issues/5581). ([commit](https://github.com/ckeditor/ckeditor5/commit/c79cea50bc9baecd03cfa6e00a9fb168a950118f))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The secondary button of the `SplitButtonView` component should display a tooltip while being hovered over by the user. Closes [#11833](https://github.com/ckeditor/ckeditor5/issues/11833). ([commit](https://github.com/ckeditor/ckeditor5/commit/f921c0645f228e788b26df04a87c5741ede83483))

### Other changes

* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: The `IndentCodeBlockCommand` and the `OutdentCodeBlockCommand` are now using `model.insertContent()` and `model.deleteContent()` for easier extendability. ([commit](https://github.com/ckeditor/ckeditor5/commit/dd6cf1cdb17486b3959fedacf2f68dd5e5349c0d))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Use `innerText` instead of `innerHTML` in view/filler. ([commit](https://github.com/ckeditor/ckeditor5/commit/416678903a72f8e02f3c0fd8bebc506267141c28))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Raised default timeout settings for connecting to Cloud Services (to 10 seconds) and for handling a single request (to 20 seconds).
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Added support for replacing editor data with revision data also for non-real-time editing integration.
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/e9a154ce0d73503b0452fa2ca1ca0b200c177d56), [commit](https://github.com/ckeditor/ckeditor5/commit/3015ff32c3ae591fd25441de03d3d3e25e6be3a3))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-ckbox](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckbox): v34.2.0

Releases containing new features:

* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v34.1.0 => v34.2.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v34.1.0 => v34.2.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v34.1.0 => v34.2.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v34.1.0 => v34.2.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v34.1.0 => v34.2.0
</details>


## [34.1.0](https://github.com/ckeditor/ckeditor5/compare/v34.0.0...v34.1.0) (2022-05-23)

### Release highlights

We are happy to announce the release of CKEditor 5 v34.1.0.

This release introduces the following new features:

* [Table column resize](https://github.com/ckeditor/ckeditor5/issues/3284)
* Support for the document storage for the Revision history feature

There were also a few bug fixes:

* [Suggestions and comments are no longer lost](https://github.com/ckeditor/ckeditor5/issues/11688) on elements with enabled GHS attributes

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v34.1.0-with-table-column-resize-feature-revision-history-enhancements-and-bugfixes/

### Cloud Services compatibility

⚠️ **Important message for CKEditor 5 Collaboration Server On-Premises users.**

The new version of CKEditor 5 real-time collaboration is not compatible with the current version of CKEditor 5 Collaboration Server On-Premises (`4.6.0`).

Please wait for the new release of the CKEditor 5 Collaboration Server On-Premises solution and update the backend service first, before updating the CKEditor 5 packages.

### Features

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Improved the `History` API. You can find  the changes summary in the related issue. Closes [#11226](https://github.com/ckeditor/ckeditor5/issues/11226). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e9636428186bd058577cef0704ad6b326e895d6))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Added support for the `type` attribute of the `<ul>` and `<ol>` elements in addition to the `list-style-type` style. Closes [#11615](https://github.com/ckeditor/ckeditor5/issues/11615). ([commit](https://github.com/ckeditor/ckeditor5/commit/a6c677fa403ad0f907bab5c56a0040bcc8c87abd))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Introduced better support for revision history when editor bundle is used. This greatly reduced the number of calls and revision data passed to Cloud Services.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added support for table column resizing, which allows to set the width of each column in a table using a resize handle. ([commit](https://github.com/ckeditor/ckeditor5/commit/38c6c378e11327e84be40230381a8713c12117d6))

### Bug fixes

* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: Redundant text nodes should be removed from `<pre>` on upcast to avoid breaking the code block. Closes [#11616](https://github.com/ckeditor/ckeditor5/issues/11616). ([commit](https://github.com/ckeditor/ckeditor5/commit/000e360098e36a7441e9a78eb4ee7c602accf429))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Attributes should not be set if a parent was converted into a collapsed range. Closes [#11000](https://github.com/ckeditor/ckeditor5/issues/11000). ([commit](https://github.com/ckeditor/ckeditor5/commit/8c109b505ddeab753625cd3585d58c229ee7e515))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToAttribute()` upcast helper should consume an element itself while consuming its attribute. See [#10800](https://github.com/ckeditor/ckeditor5/issues/10800). ([commit](https://github.com/ckeditor/ckeditor5/commit/b16a0a4675482c8a9de649f260f625b0ce3f1494))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Extracted upcasting attributes of the `figure` view element to separate converters for the `table`, `image` and `media` integrations. Closes [#11688](https://github.com/ckeditor/ckeditor5/issues/11688). ([commit](https://github.com/ckeditor/ckeditor5/commit/b5bd3e9141f0c221f66d8994777a4c1b939b3a05))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: The `<div>` elements should be upcast to container-like elements when there is a block among their descendants. Closes [#11513](https://github.com/ckeditor/ckeditor5/issues/11513). ([commit](https://github.com/ckeditor/ckeditor5/commit/f407a0f16283ca3974a1356fad8b93029a2923aa))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Inline elements handled by a native editor plugin should not be handled by the GHS. Closes [#10800](https://github.com/ckeditor/ckeditor5/issues/10800), [#10954](https://github.com/ckeditor/ckeditor5/issues/10954). ([commit](https://github.com/ckeditor/ckeditor5/commit/b16a0a4675482c8a9de649f260f625b0ce3f1494))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Unlinking should remove a link even if there were some additional attributes handled by the GHS. See [#10800](https://github.com/ckeditor/ckeditor5/issues/10800). ([commit](https://github.com/ckeditor/ckeditor5/commit/b16a0a4675482c8a9de649f260f625b0ce3f1494))
* **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: Fixes the interference between `TextPartLanguage` and `CodeBlock`. Closes [#11538](https://github.com/ckeditor/ckeditor5/issues/11538), [#11563](https://github.com/ckeditor/ckeditor5/issues/11563). ([commit](https://github.com/ckeditor/ckeditor5/commit/ae2b217733a69ba8cee8b6d689bdf09794304204))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: The mention UI should not show up when matching an existing mention following a white space. Closes [#11400](https://github.com/ckeditor/ckeditor5/issues/11400). ([commit](https://github.com/ckeditor/ckeditor5/commit/81a9c7cafca3e8dfd416e3b57b4aa024ef3e6814))
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: The `PaginationLookup` plugin should destroy parent class and stop listening to events from external emitters. Closes [#1148](https://github.com/cksource/ckeditor5-internal/issues/1148).
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixes pasting multiple lines from Google Docs into a code block. ([commit](https://github.com/ckeditor/ckeditor5/commit/3f48fbc00650f98f2671329671c0d19c40c8f756)) Thanks to [@skylerfenn](https://github.com/skylerfenn)!
* **[restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: Standard editing mode post-fixers will no longer create marker operations with invalid base versions. Closes [#11644](https://github.com/ckeditor/ckeditor5/issues/11644). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e9636428186bd058577cef0704ad6b326e895d6))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Incorrect HTML was generated from a revision if there was a space at the end of a block which lead to crashes when comparing multiple revisions.
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: The block style should be applied to all matching selected blocks. Closes [#11582](https://github.com/ckeditor/ckeditor5/issues/11582). ([commit](https://github.com/ckeditor/ckeditor5/commit/5026d51f8229b6cfbf7c3acecf36f060eda41712))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Inline style can be removed from an inline widget. Closes [#11584](https://github.com/ckeditor/ckeditor5/issues/11584). ([commit](https://github.com/ckeditor/ckeditor5/commit/5026d51f8229b6cfbf7c3acecf36f060eda41712))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Inline styles should not be enabled inside a code block. Closes [#11581](https://github.com/ckeditor/ckeditor5/issues/11581). ([commit](https://github.com/ckeditor/ckeditor5/commit/5026d51f8229b6cfbf7c3acecf36f060eda41712))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Container styles (for example, a block quote style) should be applied properly. Closes [#11576](https://github.com/ckeditor/ckeditor5/issues/11576). ([commit](https://github.com/ckeditor/ckeditor5/commit/5026d51f8229b6cfbf7c3acecf36f060eda41712))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: A grid with styles should render properly with two styles in a row. Closes [#11575](https://github.com/ckeditor/ckeditor5/issues/11575). ([commit](https://github.com/ckeditor/ckeditor5/commit/4ea053189cbc22fe362bab4bef7088059d85e1ef))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Exported some of the `engine.View` classes in `index.js`. ([commit](https://github.com/ckeditor/ckeditor5/commit/deea13117ecc9b131a34961b1a08e453e5bc1ba0))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Introduced `DataFilter#processViewAttributes()` that is helpful when integrating the GHS with a custom feature. Closes [#10827](https://github.com/ckeditor/ckeditor5/issues/10827). ([commit](https://github.com/ckeditor/ckeditor5/commit/8bb7f4bb5aaee234d1b36c790a4cc3e3a5add7f4))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Copying content from a single list item should not wrap it with a list in the clipboard. Closes [#11608](https://github.com/ckeditor/ckeditor5/issues/11608). ([commit](https://github.com/ckeditor/ckeditor5/commit/4159f23c158999b308853d9454a49e0e4c944135))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Revision dates will now be based on the server time instead of the local time.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: A revision date can now be updated on backend when the revision is saved using the revision history adapter. See the API reference for `RevisionHistoryAdapter#updateRevisions` to learn more.
* **[watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: Improved the `ContextWatchdog` queueing mechanism. Closes [#11664](https://github.com/ckeditor/ckeditor5/issues/11664). ([commit](https://github.com/ckeditor/ckeditor5/commit/250ad62ca7c1b84dbdf593312345f6642923a7b6))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/c7960053e9ff1e75b315403ec44090fb88e74d32), [commit](https://github.com/ckeditor/ckeditor5/commit/ba18070dfe963869a42a13fba6984dd7fbadfb9f))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Releases containing new features:

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v34.0.1 => v34.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v34.0.0 => v34.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v34.0.0 => v34.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v34.0.0 => v34.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v34.0.0 => v34.1.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v34.0.0 => v34.1.0
</details>


## [34.0.0](https://github.com/ckeditor/ckeditor5/compare/v33.0.0...v34.0.0) (2022-04-08)

### Release highlights

We are happy to announce the release of CKEditor 5 v34.0.0.

This release introduces the following new features:

* [Support for document lists](https://github.com/ckeditor/ckeditor5/issues/2973)
* [Support for the lock mechanism for the `Editor#isReadOnly` property](https://github.com/ckeditor/ckeditor5/issues/10496)
* [Replacement for the CKEditor 4's styles dropdown feature](https://github.com/ckeditor/ckeditor5/issues/5700)
* Revision history: efficiency improvements and added the DLL build
* [Upgrade to PostCSS 8](https://github.com/ckeditor/ckeditor5/issues/11460)

There were also a few bug fixes:

* Certain markup no longer [breaks the editor when using the GHS feature](https://github.com/ckeditor/ckeditor5/issues/10703)
* Block insertion annotations are now properly displayed even [if there is any annotation afterwards](https://github.com/ckeditor/ckeditor5/pull/11506)

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v34.0.0-with-redesigned-lists-new-styles-implementation-and-extended-dll-builds/

Please refer to the [Migration to v34.x](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-34.html) guide to learn more about these changes.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The `Editor#isReadOnly` property is now not editable directly. Starting this release, the property is controlled by `Editor#enableReadOnlyMode( lockId )` and `Editor#disableReadOnlyMode( lockId )`, which allow changing the `Editor#isReadOnly` state by more than one feature without collisions. See the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/updating/migration-to-34.html) to learn more.

* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: The new version of CKEditor 5 real-time collaboration works only with the new CKEditor 5 Cloud Services backend. If you use the CKEditor 5 Cloud Services On-Premise solution, please update the backend service if you decide to update the CKEditor 5 packages.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `isAllowedInsideAttributeElement` option has been removed, so the `AttributeElement` elements can wrap any view element (according to positions). Make sure that you are not wrapping any of the `ContainerElement` elements by accident by not checking the target in the converter. These would previously get wrapped by the `AttributeElement` element which would immediately be removed by the `ContainerElement` element within it so there would be no visible effect.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The handling of `Tab` and `Shift+Tab` keystrokes have been switched to the `'tab'` view document event across the project. If your integration uses `KeystrokeHandler` for `Tab` key handling, we recommend you migrate to the `'tab'` event to avoid unpredicted errors.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: If your integration uses the `Model#insertContent()` and `findOptimalInsertionRange()` methods to insert widgets into the content, we recommend you migrate your code to the `Model#insertObject()` method for best results. This is particularly relevant for compatibility with the document lists feature (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)).
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: The `$htmlSection`, `$htmlObjectBlock`, and `$htmlObjectInline` element types are no longer available for custom elements registered via the`registerBlockElement()` method to inherit from. Please use `$container`, `$blockObject`, and `$inlineObject` instead (see [#11197](https://github.com/ckeditor/ckeditor5/issues/11197)).

### Features

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Introduced the lock mechanism for the `Editor#isReadOnly` property. The read-only mode can now be separately enabled and disabled by multiple features, which allow for proper control without conflicts between features. Closes [#10496](https://github.com/ckeditor/ckeditor5/issues/10496). ([commit](https://github.com/ckeditor/ckeditor5/commit/b0234d94fe41d4a96397d3408994c26f56940221))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: `MultiCommand` now allows setting the priority (the order) of registered subcommands. Closes [#11083](https://github.com/ckeditor/ckeditor5/issues/11083). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the new `Model#insertObject()` method for inserting elements defined as objects by model schema (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the inheritable `$container`, `$blockObject`, and `$inlineObject` element types in the model `Schema` (see [#11197](https://github.com/ckeditor/ckeditor5/issues/11197)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `TabObserver` observer that allows listening to pressing down the `Tab` key in the specified context. ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the new `Schema#getAttributesWithProperty()` method that retrieves attributes from a node which has a given property (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the new `Schema#setAllowedAttributes()` method that validates whether attributes are allowed on a given element before setting them (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Changes to GHS model attributes will be reflected in the editing view (see [#5700](https://github.com/ckeditor/ckeditor5/issues/5700)). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc562455439f903bb655533f00652f69a2fa3d97))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added support for document list in the `GeneralHtmlSupport` feature. Closes [#11454](https://github.com/ckeditor/ckeditor5/issues/11454), [#11359](https://github.com/ckeditor/ckeditor5/issues/11359), [#11358](https://github.com/ckeditor/ckeditor5/issues/11358). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Introducing the document list feature (multiple blocks per list item). Closes [#2973](https://github.com/ckeditor/ckeditor5/issues/2973), [#10812](https://github.com/ckeditor/ckeditor5/issues/10812). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Introducing the document list properties feature (list styles, start index, reversed list). Closes [#11065](https://github.com/ckeditor/ckeditor5/issues/11065). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph)**: Added an optional `options.attributes` parameter to the `InsertParagraph` command that allows setting attributes on a created paragraph (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style)**: Implemented the configurable style feature with the style UI dropdown. Closes [#5700](https://github.com/ckeditor/ckeditor5/issues/5700). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc562455439f903bb655533f00652f69a2fa3d97))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Implemented a `.ck-reset_all-excluded` CSS class that excludes certain elements from CSS reset. Closes [#11451](https://github.com/ckeditor/ckeditor5/issues/11451). ([commit](https://github.com/ckeditor/ckeditor5/commit/8e3b902f54a5de3750c8e50d56e8196ac0d918d1))

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Marker changes sometimes did not trigger `change:data` event which resulted in errors in features using markers (for example, annotations not showing up in the sidebar). ([commit](https://github.com/ckeditor/ckeditor5/commit/59c0319922a0c91b2fc2045c88ad794d83f9f4a5))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: GHS should not convert already consumed inline elements (e.g. handled by other editor features). Closes [#11447](https://github.com/ckeditor/ckeditor5/issues/11447). ([commit](https://github.com/ckeditor/ckeditor5/commit/0fb6dc46327c685b64de7a1195c81ddbabc44f4c))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Prevent the `TypeError` error in the `mergeViewElementAttributes()` function. Closes [#10657](https://github.com/ckeditor/ckeditor5/issues/10657), [#11450](https://github.com/ckeditor/ckeditor5/issues/11450), [#11477](https://github.com/ckeditor/ckeditor5/issues/11477). ([commit](https://github.com/ckeditor/ckeditor5/commit/bc6e4d44c0e0e39eac2906c7c5042a5aaad4c59d))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Skip inline image upcast conversion inside not supported element. Closes [#10703](https://github.com/ckeditor/ckeditor5/issues/10703). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f6e48af6b7c819506258d10df8d0f26a952996d))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image upcast converter should consume the `[src]` attribute. Closes [#11530](https://github.com/ckeditor/ckeditor5/issues/11530). ([commit](https://github.com/ckeditor/ckeditor5/commit/64d069d50a8106fed63d72a30954bc413ed8147d))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The link decorators should be converted on block images only once (should not wrap block image with an additional link). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Soft enter (`Shift+Enter`) is no longer captured by the document list enter key listener, allowing to insert soft breaks in empty list items. Closes [#11539](https://github.com/ckeditor/ckeditor5/issues/11539). ([commit](https://github.com/ckeditor/ckeditor5/commit/fc5a9c29716231d9aee0808618d54ff3aaf15068))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The view list split converter should not fire if the change was already consumed. Closes [#11490](https://github.com/ckeditor/ckeditor5/issues/11490). ([commit](https://github.com/ckeditor/ckeditor5/commit/ab3e7771c1b33cf34aad2a0c8178fb53bb759e3b))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: List properties should remain the same after a paragraph following a list is toggled into a list item. Closes [#11408](https://github.com/ckeditor/ckeditor5/issues/11408). ([commit](https://github.com/ckeditor/ckeditor5/commit/b8da51dff2ae1a12d08906179b6c2b14339ac94c))
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: Fixed updating pagination lines after resizing the editing root ancestor.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Editor will not get stuck if the revision diff data could not be loaded due to an error when opening or using the revision viewer.

### Other changes

* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: The handling of `Tab` and `Shift+Tab` keystrokes switched to the `'tab'` view document event and now respects the event context. ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `Editor#isReadOnly` property is now marked as read-only. ([commit](https://github.com/ckeditor/ckeditor5/commit/b0234d94fe41d4a96397d3408994c26f56940221))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `Differ` change entries for `insert` and `remove` types are extended with a map of attributes that were set while inserting an element or that belonged to an element that got removed. ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DowncastHelpers` are passing an additional parameter to the creator functions (the `data` that provides more context to the element creator callback). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `isAllowedInsideAttributeElement` option was removed, from now on `AttributeElements` are allowed to wrap any view element. ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `ConversionApi` provided by the `UpcastDispatcher` was extended by an additional `keepEmptyElement()` method that marks an element that was created during splitting a model element that should not get removed on conversion even if it is empty. ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Improved `model.TreeWalker#next()` efficiency. See [ckeditor/ckeditor5#11463](https://github.com/ckeditor/ckeditor5/pull/11463). ([commit](https://github.com/ckeditor/ckeditor5/commit/23122e0662b155a3e783eda0a81ab2ea932c64fe))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Updated default schema definitions for various elements taking advantage of the `$container`, `$blockObject`, and `$inlineObject` elements in model schema (see [#11197](https://github.com/ckeditor/ckeditor5/issues/11197)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Added the optional `findOptimalPosition` parameter to the `insertMedia()` helper that allows for inserting `media` model element without breaking the content (see [#11198](https://github.com/ckeditor/ckeditor5/issues/11198)). ([commit](https://github.com/ckeditor/ckeditor5/commit/b53d2a4b49679b072f4ae781ac094e7e831cfb14))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Improved revision history performance for large documents in the following areas: editor initialization time, revision saving time and revision comparison time.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The `@ckeditor/ckeditor5-revision-history` package exposes the DLL build.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Exports `PlainTableOutput` plugin from the table package. Closes [#11516](https://github.com/ckeditor/ckeditor5/issues/11516). ([commit](https://github.com/ckeditor/ckeditor5/commit/a88be06284562c85311c9a288136f07e268aa92b))
* **[watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: Improved performance of the `getSubNodes()` utility of `Watchdog`. ([commit](https://github.com/ckeditor/ckeditor5/commit/ee63f3944b4610b2b6b65682fd480ee3bade8167))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/336b9d95d56544b0688c3d4954e41e062f54972b), [commit](https://github.com/ckeditor/ckeditor5/commit/ad308bd8505adbbf1c334b08d9f2809e33957c45))
* CKEditor 5 uses `PostCSS@8` now. Closes [#11460](https://github.com/ckeditor/ckeditor5/issues/11460). ([commit](https://github.com/ckeditor/ckeditor5/commit/4afb9b11b6c66f013c6818a265dca48ef94d3b69))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-style](https://www.npmjs.com/package/@ckeditor/ckeditor5-style): v34.0.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v33.0.0 => v34.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v33.0.0 => v34.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v33.0.0 => v34.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v33.0.0 => v34.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v33.0.0 => v34.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v33.0.0 => v34.0.0
</details>


## [33.0.0](https://github.com/ckeditor/ckeditor5/compare/v32.0.0...v33.0.0) (2022-03-07)

### Release highlights

We are happy to announce the release of CKEditor 5 v33.0.0.

This release introduces the following new features:

* [A new, completely redesigned reconversion system](https://github.com/ckeditor/ckeditor5/issues/10294).
* [Support for handling the `<style>` element in the General HTML Support feature](https://github.com/ckeditor/ckeditor5/issues/11104).
* [DLL-compatible package builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html) for [collaboration features](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/collaboration.html).
* [A solution for how to downcast a table to `table>caption`](https://github.com/ckeditor/ckeditor5/issues/10892).
* [Real-time collaboration support in revision history](https://ckeditor.com/ckeditor-5/revision-history/).

There were also a few bug fixes:

* [Removing complex emojis now works as expected](https://github.com/ckeditor/ckeditor5/issues/6504).
* [Preparing DLL package builds in the development mode (the `--dev` flag) no longer ends with an error](https://github.com/ckeditor/ckeditor5/issues/11170).
* [Clicking content that has a comment does not cause content data change (resulting with extra autosave)](https://github.com/ckeditor/ckeditor5/issues/9901).
* [The `<CKEditorContext>` React component now destroys properly](https://github.com/ckeditor/ckeditor5-react/issues/283).

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v33.0.0-with-improved-conversion-system-and-dll-builds-for-collaboration-features/

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Removed the `Differ#refreshItem()` method from the public API. Replaced by `EditingController#reconvertItem()` (see [#10659](https://github.com/ckeditor/ckeditor5/issues/10659)).
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The downcast dispatcher will throw an error if any of the model items were not consumed while converting. Read the `conversion-model-consumable-not-consumed` error documentation for more information.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DowncastDispatcher#conversionApi` property is no longer available. The instances of `DowncastConversionApi` are created at the start of conversion.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Support for the `triggerBy` option for downcast helpers was removed and replaced with the new `elementToStructure()` options.
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The `ListEditing`, `ListUI`, `ListStyleEditing`, `ListStyleUI`, `TodoListEditing`, `TodoListUI` plugins were moved to their dedicated subdirectories (`list`, `liststyle`, `todolist`).

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Image caption utilities were converted to the `ImageCaptionUtils` plugin.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The downcast converters of the table feature were rewritten with the use of `elementToStructure()` and the re-conversion mechanism. See [#10502](https://github.com/ckeditor/ckeditor5/issues/10502).
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table selection utilities were moved to the `TableUtils` plugin.
* `config.initialData` will now always be set, even if it is not passed in the editor configuration.

### Features

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DowncastWriter#createContainerElement()` method should accept a list of children so that bigger view structures can be created in one call. Closes [#10714](https://github.com/ckeditor/ckeditor5/issues/10714). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToElement()` downcast helper will log a console warning if multiple elements have been created. Closes [#10610](https://github.com/ckeditor/ckeditor5/issues/10610). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The downcast dispatcher will throw an error if any of the model items were not consumed while converting. Closes [#10377](https://github.com/ckeditor/ckeditor5/issues/10377). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `convertItem()`, `convertChildren()` and `convertAttributes()` methods in the downcast conversion API interface. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added support for reconversion in the `DowncastHelpers#elementToElement()` downcast helper. Closes [#10359](https://github.com/ckeditor/ckeditor5/issues/10359). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the `DowncastHelpers#elementToStructure()` downcast helper with reconversion support. Closes [#10358](https://github.com/ckeditor/ckeditor5/issues/10358). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: It is now possible to trigger a nested conversion while downcasting an element. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DeleteCommand` was changed to delete the whole multi-character emoji at once. Closes [#6504](https://github.com/ckeditor/ckeditor5/issues/6504). ([commit](https://github.com/ckeditor/ckeditor5/commit/7ab70396f68bd9e3ef0ff7cbc3d62ae143c38ec4))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `Marker#getData()`. ([commit](https://github.com/ckeditor/ckeditor5/commit/7e8766dc0d4654c33fed5f5edeb5e09e0138b1b7))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added the `<style>` element support in the General HTML Support feature. Closes [#11104](https://github.com/ckeditor/ckeditor5/issues/11104). ([commit](https://github.com/ckeditor/ckeditor5/commit/483bcf91af1334e510462ef0b4723a2df2a30881))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Introduced the `PlainTableOutput` plugin to override the default `figure>caption` markup in the data pipeline (it outputs the table as `table>caption`). Closes: [#10892](https://github.com/ckeditor/ckeditor5/issues/10892). ([commit](https://github.com/ckeditor/ckeditor5/commit/9379c5cb35ed29229d1e9beebf5cdad0a32e008e))

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Setting a marker to the same range it was will no longer trigger the `change:data` event. This will prevent unnecessary autosave callbacks. Closes [#9901](https://github.com/ckeditor/ckeditor5/issues/9901). ([commit](https://github.com/ckeditor/ckeditor5/commit/0a9e5a9c34a83324fec2242f2d5c86669c08ed02))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Prevent the removal of the `<script>` and `<style>` elements when they are the only content in the editor. Closes [#11247](https://github.com/ckeditor/ckeditor5/issues/11247). ([commit](https://github.com/ckeditor/ckeditor5/commit/68cbac385caa5f60a4b1a96dc2e077242ff50d6c))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Always create new instances of the default options for the `ImageStyle` plugin. Closes [#11328](https://github.com/ckeditor/ckeditor5/issues/11328). ([commit](https://github.com/ckeditor/ckeditor5/commit/7f7248df35fc7e57649b4a9e8fcfc4076547a300))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Prevent the plain table output converter from interfering with other features' caption converters. Closes [#11394](https://github.com/ckeditor/ckeditor5/issues/11394). ([commit](https://github.com/ckeditor/ckeditor5/commit/e102d21b9e58c464d5914f2bb556e9a7a98b947d))
* Fixed the _"Unknown option --dev"_ error when building DLL files with the development mode enabled. Closes [#11170](https://github.com/ckeditor/ckeditor5/issues/11170). ([commit](https://github.com/ckeditor/ckeditor5/commit/9078c76e6e38428f36151f1f67ddc78b96930a3f))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Implemented the `EditingController#reconvertMarker()` method to be used instead of `Writer#updateMarker()` for marker reconversion purposes. Implemented the `EditingController#reconvertItem()` method to replace `Differ#refreshItem()`. Closes [#10659](https://github.com/ckeditor/ckeditor5/issues/10659). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The conversion events for attribute and child nodes are fired by the lowest priority handler for the insert event instead of the `DowncastDispatcher` itself. Closes [#10376](https://github.com/ckeditor/ckeditor5/issues/10376). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Events are fired by the `DowncastDispatcher` even if they were previously consumed. It is the conversion handler's responsibility to check if it can be consumed or if it has already been consumed by other converters. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DowncastDispatcher#convert()` method was introduced as a replacement for the previously used `convertInsert()`. The new method not only handles the nodes conversion but also the markers. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `<style>` element will not interfere with the editing experience. See [#11104](https://github.com/ckeditor/ckeditor5/issues/11104). ([commit](https://github.com/ckeditor/ckeditor5/commit/483bcf91af1334e510462ef0b4723a2df2a30881))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Moved the utilities functions to plugins to make them available in DLLs. ([commit](https://github.com/ckeditor/ckeditor5/commit/8df284e9b22b3fca3b87e056e81486035308d3e6))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The `ckeditor5-list` package was restructured into subdirectories. Closes [#10811](https://github.com/ckeditor/ckeditor5/issues/10811). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The downcast conversion should consume the downcasted attributes. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Table downcast conversion was migrated to the `elementToStructure()` downcast helper. Closes [#10502](https://github.com/ckeditor/ckeditor5/issues/10502). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f17c59e678c39c80beed98fa9dd092ba95369c5))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/1824dce6d132c3118d70ddf02a80ed5d1e118371))
* `Editor.create()` will now set the `config.initialData` value based on the first parameter if `initialData` has not been set in the editor configuration. As a result, plugins can now easily read and modify the editor initial data. ([commit](https://github.com/ckeditor/ckeditor5/commit/66ea1af43163dacfb2ce353fc3a670535b6e5740))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v32.0.0 => v33.0.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v32.0.0 => v33.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v32.0.0 => v33.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v32.0.0 => v33.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v32.0.0 => v33.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v32.0.0 => v33.0.0
* [ckeditor5-collaboration](https://www.npmjs.com/package/ckeditor5-collaboration): v32.0.0 => v33.0.0
</details>


## [32.0.0](https://github.com/ckeditor/ckeditor5/compare/v31.1.0...v32.0.0) (2022-01-26)

### Release highlights

We are happy to announce the release of CKEditor 5 v32.0.0.

This release introduces the following new features:

* The environment was upgraded to use [webpack 5](https://github.com/ckeditor/ckeditor5/issues/10668) and [Node 14](https://github.com/ckeditor/ckeditor5/issues/10972).
* Introduced [support for the list `start` and `reversed` attributes](https://github.com/ckeditor/ckeditor5/issues/1032), including [when pasting from Word](https://github.com/ckeditor/ckeditor5/issues/11043).
* Added [support for autocomplete with space in the mention plugin](https://github.com/ckeditor/ckeditor5/issues/9741).
* Improved [handling of `<script>` elements in the General HTML support (GHS) feature](https://github.com/ckeditor/ckeditor5/issues/10891).

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v32.0.0-with-new-list-properties-support-for-the-script-tag-and-enhanced-mentions/

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `Batch#type` was deprecated. It will always return the `'default'` value and reading it will log a warning in the console. Use `Batch#isUndoable`, `Batch#isLocal`, `Batch#isUndo` and `Batch#isTyping` instead.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Multiple changes to `Revision` properties were introduced that impact revision history integrations. Introduced `#fromRevision` and `#toRevision` properties. Renamed `#data` to `#diffData`. The `#isLocked` property was removed. These changes have an impact on what data should be saved in your database and how the revision history plugin should be integrated. Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-32.html) and the [API documentation](https://ckeditor.com/docs/ckeditor5/latest/api/module_revision-history_revision-Revision.html) to learn more about these changes.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The `RevisionHistoryAdapter` interface has changed. Also, `RevisionTracker` no longer uses `RevisionHistoryAdapter#getRevisions()` to fetch revisions during the editor initialization. You should add revisions data in your integration plugin. Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-32.html) and the [documentation](https://ckeditor.com/docs/ckeditor5/latest/features/revision-history/revision-history-integration.html#adapter-integration) to learn how to update your revision history integration.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionTracker#updateRevision()` was removed while the `#update()` and `#saveRevision()` methods have been introduced instead. This may have an impact on your revision history integration (e.g. with autosave). Please refer to the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-32.html) and the [documentation](https://ckeditor.com/docs/ckeditor5/latest/features/revision-history/revision-history-integration.html#autosave-integration) to learn how to update your revision history integration.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: `Input#isInput()` was removed. Use `Batch#isTyping` instead.
* Upgraded the minimal versions of Node.js to `14.0.0` due to the end of LTS.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The string value for the `Batch` type and `Model#enqueueChange()` is now deprecated. Using a string value will log a warning in the console. Use an object value instead. For more information, refer to the API documentation.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionTracker#isLocked` was removed.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The flow for saving and updating a revision has changed. See the [documentation](https://ckeditor.com/docs/ckeditor5/latest/features/revision-history/revision-history-integration.html#how-revisions-are-updated-and-saved) to learn what it looks like after the changes.
* The previously named `#_getTemplate()` methods in `CommentThreadView`, `CommentView` and `SuggestionThreadView`  were renamed to `#getTemplate()`. These methods are used in annotations customization when changing the default templates.

### Features

* **[autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: `Autosave#save()` will now return a promise that is resolved when the autosave callback has finished. ([commit](https://github.com/ckeditor/ckeditor5/commit/3e2f1b3458c44dda3e86f326192135a9e1fa3042))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced `Annotation#refreshVisibility()` and `Annotations#refreshVisibility()` that refresh the visibility of the annotations based on the visibility of their target elements.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `Annotation#isVisible` observable property that allows controlling the visibility of the annotation.
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added support for the `<script>` elements. Closes [#10891](https://github.com/ckeditor/ckeditor5/issues/10891). ([commit](https://github.com/ckeditor/ckeditor5/commit/277a5919870e69c330337f13a7df92dd9999fbc3))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Implemented the numbered list properties UI. Closes [#10877](https://github.com/ckeditor/ckeditor5/issues/10877). ([commit](https://github.com/ckeditor/ckeditor5/commit/9be585f8b7d6d7ef504a48b101c4961137f3e8da))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Added support for reversed lists and list start index (`reversed` and `start` HTML attributes). Closes [#10673](https://github.com/ckeditor/ckeditor5/issues/10673). ([commit](https://github.com/ckeditor/ckeditor5/commit/d0806398ddeea527c9a858b70add8e4528fb502c))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: The mention plugin now allows searching mentions that include space characters. Closes [#9741](https://github.com/ckeditor/ckeditor5/issues/9741). ([commit](https://github.com/ckeditor/ckeditor5/commit/d95bc68459ccd4b580e19cfcc1b660d743f52b52))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Added support for start index in ordered lists. Closes [#11043](https://github.com/ckeditor/ckeditor5/issues/11043). ([commit](https://github.com/ckeditor/ckeditor5/commit/807b60f948a96da1d1b058230cfcef3251f67852))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced `Revision#fromVersion` and `Revision#toVersion`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced new methods in the `RevisionHistory` plugin: `#addRevisionData()`, `#getRevision()`, `#getRevisions()`.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced the `InputNumberView` class and the `createLabeledInputNumber()` helper for creating number inputs (see [#10877](https://github.com/ckeditor/ckeditor5/issues/10877)). ([commit](https://github.com/ckeditor/ckeditor5/commit/638ef662f630da3478bf4a5d2b94fe87c2e497b8))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced the `InputView` class for other inputs such as `InputTextView` to inherit from (see [#10877](https://github.com/ckeditor/ckeditor5/issues/10877)). ([commit](https://github.com/ckeditor/ckeditor5/commit/9be585f8b7d6d7ef504a48b101c4961137f3e8da))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Introduced the `isVisible()` helper to detect whether DOM elements are visible to the user in the DOM (see [#10877](https://github.com/ckeditor/ckeditor5/issues/10877)). ([commit](https://github.com/ckeditor/ckeditor5/commit/9be585f8b7d6d7ef504a48b101c4961137f3e8da))
* Replaced `Batch#type` with a set of flags: `Batch#isUndoable`, `Batch#isLocal`, `Batch#isUndo`, `Batch#isTyping` which better represent the batch type. The `Batch` constructor and `Model#enqueueChange()` now expect an object. Closes [#10967](https://github.com/ckeditor/ckeditor5/issues/10967). ([commit](https://github.com/ckeditor/ckeditor5/commit/83538a860d6d914d48790d8963ce0c0a5b54678e))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: DOM listeners will be detached when destroying annotation collections, which prevents memory leaks.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `HTMLDataProcessor#toView()` should preserve leading non-layout elements while loading partial HTML. Closes [#11110](https://github.com/ckeditor/ckeditor5/issues/11110). ([commit](https://github.com/ckeditor/ckeditor5/commit/b355feb3d0a0aea0f052a7c24fe8691f7fa2518e))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The list properties feature will no longer crash when removing content from the last list item which is next to a non-list element. Closes [#8642](https://github.com/ckeditor/ckeditor5/issues/8642). ([commit](https://github.com/ckeditor/ckeditor5/commit/8b69b9569c1525bedeed6932397dead9f7c41ff1))
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: The page number input view should not stretch. Used `InputNumberView` to render the page number input in `PageNavigatorView`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed a crash when a revision contained overlapping suggestions.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed a crash when content selected by triple-click was copied and pasted into the editor.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed a crash that was happening during real-time editing when one of the users used <kbd>Enter</kbd> inside a suggestion.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Fixed an editor crash when an unrecognized transformation was provided in the configuration (as a string). ([commit](https://github.com/ckeditor/ckeditor5/commit/83538a860d6d914d48790d8963ce0c0a5b54678e))
* **[watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: Prevented `EditorWatchdog` from crashing during the editor destruction process when one of the plugins tries to change the data at that moment. Closes [#10643](https://github.com/ckeditor/ckeditor5/issues/10643). ([commit](https://github.com/ckeditor/ckeditor5/commit/9151ef738c3ca766d093adddb99df1667c145379))

### Other changes

* **[autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: The `Autosave` plugin will now ignore changes coming from remote clients during real-time collaboration. Closes [#9233](https://github.com/ckeditor/ckeditor5/issues/9233). ([commit](https://github.com/ckeditor/ckeditor5/commit/3e2f1b3458c44dda3e86f326192135a9e1fa3042))
* **[build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: Enabled the `startIndex` and `reversed` list properties in the document build. Closes [#11037](https://github.com/ckeditor/ckeditor5/issues/11037). ([commit](https://github.com/ckeditor/ckeditor5/commit/99c818c7b9ddf62aa958b9d265de43e3c78b7e66))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Renamed `CommentThreadView#_getTemplate()` to `#getTemplate()`. Renamed `CommentView#_getTemplate()` to `#getTemplate()`.
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Renamed the `ListStyle` plugin to `ListProperties`. Closes [#10964](https://github.com/ckeditor/ckeditor5/issues/10964). ([commit](https://github.com/ckeditor/ckeditor5/commit/82ce2e9671b8ec98fb20f3ee647cca94ec421949))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Collaboration updates will now be sent with shorter delays after they are rejected. This should allow for a better user experience when multiple users are typing at the same time.
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: The `RealTimeCollaborationClient#offset` property is now private.
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: The real-time collaboration feature will now create batches with the `#isLocal` flag set to `false`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Renamed `Revision#data` to `Revision#diffData`. The `Revision#isLocked` property was removed.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The `RevisionHistoryAdapter` interface has changed. Removed `#getRevisions()`, `#updateRevision()` and `#addRevision()`. Added `#updateRevisions()`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The revision history UI will now be blocked if the editor is in read-only mode.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Added the `index` parameter in `RevisionRepository#addRevision()`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Removed `RevisionTracker#isLocked`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Removed `RevisionTracker#updateRevision()` and added `#update()` and `#saveRevision()` instead.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionTracker` no longer uses `RevisionHistoryAdapter#getRevisions()` to fetch revisions during the editor initialization.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: An error is now thrown when the revision history plugin configuration is missing.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionHistoryAdapter#getRevision()` and `#updateRevisions()` now receive the `#channelId` parameter.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Renamed `SuggestionThreadView#_getTemplate()` to `#getTemplate()`.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: The typing feature will now create batches with the `#isTyping` property set to `true`. ([commit](https://github.com/ckeditor/ckeditor5/commit/83538a860d6d914d48790d8963ce0c0a5b54678e))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: `FocusCycler` should skip elements that are invisible to the user (see [#10877](https://github.com/ckeditor/ckeditor5/issues/10877)). ([commit](https://github.com/ckeditor/ckeditor5/commit/9be585f8b7d6d7ef504a48b101c4961137f3e8da))
* **[undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo)**: The undo feature will now create batches with the `#isUndo` property set to `true`. ([commit](https://github.com/ckeditor/ckeditor5/commit/83538a860d6d914d48790d8963ce0c0a5b54678e))
* **[users](https://www.npmjs.com/package/@ckeditor/ckeditor5-users)**: The anonymous user will now be added to the `Users` plugin automatically when the editor initializes.
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/4465bcbc057fc2c87f7431ba588fe417609dec3b), [commit](https://github.com/ckeditor/ckeditor5/commit/e4b9c643dd035361df14ec503bb1bdcfa858a01a))
* Updated the required version of Node.js to 14. Closes [#10972](https://github.com/ckeditor/ckeditor5/issues/10972). ([commit](https://github.com/ckeditor/ckeditor5/commit/0537006c6bfb3a946a0293f318ecc67f4c18f51d))
* Project migration to webpack 5. Closes [#10668](https://github.com/ckeditor/ckeditor5/issues/10668). ([commit](https://github.com/ckeditor/ckeditor5/commit/d312ab630000f84f232ff2c372cdfc53e06b7f16))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v31.1.0 => v32.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v31.1.0 => v32.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v31.1.0 => v32.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v31.1.0 => v32.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v31.1.0 => v32.0.0
</details>


## [31.1.0](https://github.com/ckeditor/ckeditor5/compare/v31.0.0...v31.1.0) (2021-12-03)

### Release highlights

We are happy to announce the release of CKEditor 5 v31.1.0.

This release introduces the following new features:

* [Support for <kbd>Shift</kbd>+<kbd>Delete</kbd> on Windows to cut the selected content](https://github.com/ckeditor/ckeditor5/issues/9326).
* [Possibility to open a link with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+click or <kbd>Alt</kbd>+<kbd>Enter</kbd>](https://github.com/ckeditor/ckeditor5/issues/1381).
* [Mark the default output for features in the HTML output guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/features-html-output-overview.html).

There were also a few bug fixes:

* [Selection was sometimes not merged correctly](https://github.com/ckeditor/ckeditor5/issues/10628).
* [It was almost impossible to click certain buttons in the balloon toolbar (Safari, iOS)](https://github.com/ckeditor/ckeditor5/issues/7707).
* [The editor builder `defaultConfig.language` did not apply to `editor.locale`](https://github.com/ckeditor/ckeditor5/issues/8510).
* [Find and replace did not find whole words that are next to each other](https://github.com/ckeditor/ckeditor5/issues/10719).
* [Figure tag got duplicated when the General HTML Support configuration allows all](https://github.com/ckeditor/ckeditor5/issues/10279).

Read about release highlights in a dedicated blog post: https://ckeditor.com/blog/ckeditor-5-v31.1.0-with-enhanced-copy-and-paste-and-reconnection-handling/

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Changed `table` elements' attributes' names introduced by the `TablePropertiesEditing` plugin by prefixing them with `table` to be in line with other plugins' attributes naming. The affected attribute include: `borderStyle`, `borderColor`, `borderWidth`, `backgroundColor`, `alignment`, `width`, `height`. See [#9369](https://github.com/ckeditor/ckeditor5/issues/9369).
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Changed `tableCell` elements' attributes' names introduced by the `TableCellPropertiesEditing` plugin by prefixing them with `tableCell` to be in line with other plugins' attribute naming. The affected attributes include: `backgroundColor`, `padding`, `width`, `height`, `borderStyle`, `borderColor`, `borderWidth`, `verticalAlignment`, `horizontalAlignment`. See [#9369](https://github.com/ckeditor/ckeditor5/issues/9369).
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `upcastBorderStyles()` helper parameters were modified (added the `modelAttributes` param).

### Features

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `AnnotationsUIs#refilterAnnotations()` method which runs annotation UI filtering callback against all annotations and moves them to proper annotation UIs (or removes them).
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Added the possibility to open a link by <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+click or <kbd>Alt</kbd>+<kbd>Enter</kbd>. Closes [#1381](https://github.com/ckeditor/ckeditor5/issues/1381). ([commit](https://github.com/ckeditor/ckeditor5/commit/654410f9286222232bb38237516421e4d97fa9da))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Introduced color boxes for color-related suggestions.
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Introduced `env.isiOS` for detection of user agents running in iOS environments (see [#7707](https://github.com/ckeditor/ckeditor5/issues/7707)). ([commit](https://github.com/ckeditor/ckeditor5/commit/89b5315550e1dbcf26bc9cb4678931670b9bb52c))

### Bug fixes

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Support language configuration passed in `defaultConfig` option through editor's constructor. Closes [#8510](https://github.com/ckeditor/ckeditor5/issues/8510). ([commit](https://github.com/ckeditor/ckeditor5/commit/6c22bb509e299319cebec18eb980ce9ed079d905))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Merge intersecting ranges that are not adjacent to each other on ranges array. Closes [#10628](https://github.com/ckeditor/ckeditor5/issues/10628). ([commit](https://github.com/ckeditor/ckeditor5/commit/92565ab6656a1e71e9687a53fa549aaf514f46fd))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Replace functionality no longer replaces text when 'Replace with...' input is focused and user hits the <kbd>Enter</kbd> key but the search criteria changed. Closes [#10712](https://github.com/ckeditor/ckeditor5/issues/10712). ([commit](https://github.com/ckeditor/ckeditor5/commit/4bc96460753133d24c9cd660efd5b4418c320267))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Fixed adjacent whole words being missed by find and replace. Closes [#10719](https://github.com/ckeditor/ckeditor5/issues/10719). ([commit](https://github.com/ckeditor/ckeditor5/commit/5d466b59231fe59b9c0bcfbab3cd6acff90a94ba))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Manual decorators on the linked inline images should be preserved while loading editor content. Closes [#10828](https://github.com/ckeditor/ckeditor5/issues/10828). ([commit](https://github.com/ckeditor/ckeditor5/commit/6d0b8da4997a5e29c5c4a125c9c6e670f49e8af4))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The `<figure>` element should not get replicated while GHS is enabled. Closes [#10279](https://github.com/ckeditor/ckeditor5/issues/10279). ([commit](https://github.com/ckeditor/ckeditor5/commit/634d4241544a7278a085c820720c8abb35f426c3))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: The whole reconnection mechanism was improved. More reconnection scenarios are now handled without editor crashing or data loss. **Note: these changes require Collaboration Server On-Premises in version higher than `4.2.0`. Otherwise, the fix will not be applied.**
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Disabled alignment button on main editor toolbar for tables in order to have a more unified behavior. Closes [#9369](https://github.com/ckeditor/ckeditor5/issues/9369). ([commit](https://github.com/ckeditor/ckeditor5/commit/e28354821506cad4fb01d45e9adff3077a2843e2))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Creating document color suggestions no longer causes the editor to crash.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Changed the look and position of the `BalloonToolbar` in Safari on iOS to avoid clash with native text selection handles. Closes [#7707](https://github.com/ckeditor/ckeditor5/issues/7707). ([commit](https://github.com/ckeditor/ckeditor5/commit/89b5315550e1dbcf26bc9cb4678931670b9bb52c))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Fixed `DomEmitterMixin` to correctly manage listeners for different options (`useCapture` & `usePassive`) set for the same DOM node. Closes [#7830](https://github.com/ckeditor/ckeditor5/issues/7830). ([commit](https://github.com/ckeditor/ckeditor5/commit/fe1110631bb927dc216c619d90da0476e1752397))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Allowed unsafe view element attributes so they get rendered in the editing pipeline. Attribute names can be specified when creating elements using `DowncastWriter` (`DowncastWriter#createAttributeElement()`, `DowncastWriter#createContainerElement()`, etc.). ([commit](https://github.com/ckeditor/ckeditor5/commit/ecc18324f4c5fe3e5c12c46d1d127922734dee9c))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Changed suggestion description for a highlighted text fragment.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Added support for the <kbd>Shift</kbd>+<kbd>Delete</kbd> keystroke on Windows to cut the selected content. Closes [#9326](https://github.com/ckeditor/ckeditor5/issues/9326). ([commit](https://github.com/ckeditor/ckeditor5/commit/5a1a835fc136b0e1667084d63da55a6ac6e7080f))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/5066d1e519c545977e7f1609cb44994fc4a5ef3c))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v31.0.0 => v31.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v31.0.0 => v31.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v31.0.0 => v31.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v31.0.0 => v31.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v31.0.0 => v31.1.0
</details>


## [31.0.0](https://github.com/ckeditor/ckeditor5/compare/v30.0.0...v31.0.0) (2021-10-25)

### Release highlights

We are happy to announce the release of CKEditor 5 v31.0.0.

This release introduces the following new features:

* [Introduce the `Command#affectsData` property](https://github.com/ckeditor/ckeditor5/issues/10676) to indicate whether a given command should stay enabled in editor modes with restricted write permissions. This solves the frequently reported problems of the availability of some editor features, such as export to PDF or Word, select all or find, in such editor modes as read-only, comments-only or restricted editing.
* The mentions feature has gained the [ability to customize the max number of items in the list after typing the trigger character](https://github.com/ckeditor/ckeditor5/issues/10479).
* New [collaboration features samples](https://github.com/ckeditor/ckeditor5-collaboration-samples/) are available:
  * For the React integration that will implement the context feature, as well as the watchdog.
  * For comments outside the editor with offline comments.
* The [comment](https://github.com/ckeditor/ckeditor5/issues/10594) and [export to Word](https://github.com/ckeditor/ckeditor5/issues/10598) feature icons were improved.
* [Three <kbd>Enter</kbd> clicks at the end of a code block](https://github.com/ckeditor/ckeditor5/issues/6682) are now necessary to escape it.

There were also a few bug fixes:

* The [link](https://github.com/ckeditor/ckeditor5/issues/8814), mention, [inline image](https://github.com/ckeditor/ckeditor5/issues/9605), and comment marker cannot be selected by mouse drag if the link is at the edge of a block.
* A table balloon is no longer rendered in the [wrong place after unlinking text in table](https://github.com/ckeditor/ckeditor5/issues/6408).
* A nested widget selection handle is no longer [visible while the outer table cells are selected](https://github.com/ckeditor/ckeditor5/issues/9491).
* The HTML embed UI does now [correctly reflects the read-only state](https://github.com/ckeditor/ckeditor5/issues/10182).

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v31.0.0-with-enhanced-restricted-modes-handling-and-new-collaboration-samples/

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: The `InsertHtmlEmbedCommand` and `UpdateHtmlEmbedCommand` have been replaced by `HtmlEmbedCommand` which is now responsible for both tasks. The command can be executed via `editor.execute( 'htmlEmbed' )`. See the API reference for more information.

### Features

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Introduced the `Command#affectsData` flag to indicate whether a given command should stay enabled in editor modes with restricted write permissions (e.g. read-only mode). Closes [#10670](https://github.com/ckeditor/ckeditor5/issues/10670). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad66b93212c72135f8b784b8f92dbbe213608d47))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `DataController#get()` is now decorated and fires a `get` event on the method call. See [#10505](https://github.com/ckeditor/ckeditor5/issues/10505). ([commit](https://github.com/ckeditor/ckeditor5/commit/971763cbcb3ef5942068ab20302ed2355194bdee))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Added the configuration option for customizing the maximum number of items in the list after typing the trigger character. Closes [#10479](https://github.com/ckeditor/ckeditor5/issues/10479). ([commit](https://github.com/ckeditor/ckeditor5/commit/7274202834cc89cae14193397d3d343a8d7d5b64))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Introduced the `RealTimeCollaborationClient#serverHistory` property. See the API reference for more information.

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Features that do not change the content, should work properly in editor modes with restricted write permissions (e.g. read-only mode). See [ckeditor/ckeditor5#10670](https://github.com/ckeditor/ckeditor5/issues/10670).
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The comment data was not updated on remote clients after the local client edited the comment.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: DOM selection updates in `Renderer` when the selection is made using the mouse was blocked. Random glitching in Chrome when the user starts selection in a link (or a marker) at the beginning of the block was limited. Closes [#10562](https://github.com/ckeditor/ckeditor5/issues/10562). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad11de7551a0c8fff10adeb2117fb5743b9881f2))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Makes order of markers in downcast data pipeline consistent. Thanks [@bendemboski](https://github.com/bendemboski)! Closes [#10650](https://github.com/ckeditor/ckeditor5/issues/10650). ([commit](https://github.com/ckeditor/ckeditor5/commit/5cd38c061e0d853149747735b9627f1f50fc492b))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed a bug in the selection post-fixer (when the selection is stuck in a limit element that cannot contain text). Closes [#10487](https://github.com/ckeditor/ckeditor5/issues/10487). ([commit](https://github.com/ckeditor/ckeditor5/commit/ee98090cd8d46fe58821677d5a0a9f38c776078f))
* **[export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**: Features that do not change the content should work properly in editor modes with restricted write permissions (e.g. read-only mode). See [ckeditor/ckeditor5#10670](https://github.com/ckeditor/ckeditor5/issues/10670).
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: The `FindCommand` and `FindNextCommand` commands should work properly in editor modes with restricted write permissions (e.g. read-only mode). Closes [#10636](https://github.com/ckeditor/ckeditor5/issues/10636). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad66b93212c72135f8b784b8f92dbbe213608d47))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Do not replace find results removed by collaborators that landed in the `$graveyard` root. ([commit](https://github.com/ckeditor/ckeditor5/commit/a96e165b0ca6b39981400692ac5b0a86a28aef3e))
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: Embed buttons should reflect the read-only state of the editor and the HTML embed command. Closes [#10182](https://github.com/ckeditor/ckeditor5/issues/10182). ([commit](https://github.com/ckeditor/ckeditor5/commit/17aaadd2ee6de562e57e0336c347e32c27a29970))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Adds HTML support for all headings given in the configuration of the headings feature. Closes [#10539](https://github.com/ckeditor/ckeditor5/issues/10539). ([commit](https://github.com/ckeditor/ckeditor5/commit/64903114569cbc995c0fc57bdd2b13f402b1f978))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Th mention panel will now hide when the editor becomes read-only. Closes [#4645](https://github.com/ckeditor/ckeditor5/issues/4645). ([commit](https://github.com/ckeditor/ckeditor5/commit/96d423adbcd4e716b8666af41d02d3b7e79f2f17))
* **[restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: The feature should work properly in editor modes with restricted write permissions (e.g. read-only mode). Closes [#10634](https://github.com/ckeditor/ckeditor5/issues/10634). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad66b93212c72135f8b784b8f92dbbe213608d47))
* **[select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all)**: The `SelectAllCommand` command should work properly in editor modes with restricted write permissions (e.g. read-only mode). Closes [#10635](https://github.com/ckeditor/ckeditor5/issues/10635). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad66b93212c72135f8b784b8f92dbbe213608d47))
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: Calling `editor.getData()` while in the source editing mode should return the data from the source editor passed through the model. Closes [#10505](https://github.com/ckeditor/ckeditor5/issues/10505). ([commit](https://github.com/ckeditor/ckeditor5/commit/971763cbcb3ef5942068ab20302ed2355194bdee))
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: Improve source editing textarea field size and scrolling behaviour. Closes [#10422](https://github.com/ckeditor/ckeditor5/issues/10422). ([commit](https://github.com/ckeditor/ckeditor5/commit/3decb16dec6581a2c006576f46f7a30b4ab96535))
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: Safari browser uses monospace font for text in source editing mode. Closes [#10585](https://github.com/ckeditor/ckeditor5/issues/10585). ([commit](https://github.com/ckeditor/ckeditor5/commit/d30e516fb5a348f22be57375d7a8460d0f54fd07))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `SelectColumnCommand` and `SelectRowCommand` commands should work properly in editor modes with restricted write permissions (e.g. read-only mode). See [#10635](https://github.com/ckeditor/ckeditor5/issues/10635). ([commit](https://github.com/ckeditor/ckeditor5/commit/ad66b93212c72135f8b784b8f92dbbe213608d47))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Color dropdown buttons in the table properties form should not be misaligned in Safari. Closes [#10589](https://github.com/ckeditor/ckeditor5/issues/10589). ([commit](https://github.com/ckeditor/ckeditor5/commit/82dbfba48493573ab32829b64a36591d2965e357))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: A nested widget in a multi-cell table selection should not have the selection handle. Closes [#9491](https://github.com/ckeditor/ckeditor5/issues/9491). ([commit](https://github.com/ckeditor/ckeditor5/commit/80e520de904a0b7d7943f0c2d73244d9a608db68))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `ContextualBalloon` positioning should use the dynamic `editor.ui.viewportOffset` value instead of static `config.ui.viewportOffset`. Closes [#10597](https://github.com/ckeditor/ckeditor5/issues/10597). ([commit](https://github.com/ckeditor/ckeditor5/commit/6ab963cff6356adefef9f987bed7fe5edf4ac76d))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `InputTextView` class should update its `#isEmpty` property on every `#input` instead of `#change` to stay in sync. Closes [#10431](https://github.com/ckeditor/ckeditor5/issues/10431). ([commit](https://github.com/ckeditor/ckeditor5/commit/f5f65d3e93d136bfec3435678331b2c00cc74318))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Properly stringify objects containing circular references in the `CKEditorError` class. Closes [#4959](https://github.com/ckeditor/ckeditor5/issues/4959). ([commit](https://github.com/ckeditor/ckeditor5/commit/674114303fb7ad58ea8356e014db804e59e97d41)) Thanks to [@marcellofuschi](https://github.com/marcellofuschi).

### Other changes

* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: Makes three <kbd>Enter</kbd> clicks necessary at the end of a code block to escape it. Closes [#6682](https://github.com/ckeditor/ckeditor5/issues/6682). ([commit](https://github.com/ckeditor/ckeditor5/commit/ba7dedbd8ba21a9127a8451057232db72e41d964)) Thanks to [@marcellofuschi](https://github.com/marcellofuschi)!
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Allowed annotations not to belong to any UI (annotation will be hidden in such a case).
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Refined the comment icon for consistency with other icons in the project.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Implemented the [`DomConverter#setContentOf()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_domconverter-DomConverter.html#function-setContentOf) method to fill DOM elements with a filtered HTML source. ([commit](https://github.com/ckeditor/ckeditor5/commit/7bf8717f2f5b1a60ca53fbc5b62a9cbda13dc484))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Made properties of `XmlDataProcessor` and `HtmlDataProcessor` public to allow overriding e.g. the HTML writer. Closes [#10619](https://github.com/ckeditor/ckeditor5/issues/10619). ([commit](https://github.com/ckeditor/ckeditor5/commit/b097349f5063b4f9b4822419e2d5c6663dd48aa0))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced alternative rendering mode to `DomConverter`. ([commit](https://github.com/ckeditor/ckeditor5/commit/39d5cb676c89045fe80fa4a5425fac3d08280c72))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced flag for experimental rendering mode for the editing view. ([commit](https://github.com/ckeditor/ckeditor5/commit/13f788a4c20ecc46bd5ef6b4e37e5970f0573fd3))
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: Refined the Export to Word icon for better discoverability.
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Optimized the editing pipeline output of the [`createObjectView()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_html-support_converters.html#function-createObjectView) view factory function. ([commit](https://github.com/ckeditor/ckeditor5/commit/7bf8717f2f5b1a60ca53fbc5b62a9cbda13dc484))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Enable experimental rendering in tests. ([commit](https://github.com/ckeditor/ckeditor5/commit/13f788a4c20ecc46bd5ef6b4e37e5970f0573fd3))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Optimized the editing pipeline output of the [`Media#getViewElement()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_mediaregistry-Media.html#function-getViewElement) view factory method. ([commit](https://github.com/ckeditor/ckeditor5/commit/7bf8717f2f5b1a60ca53fbc5b62a9cbda13dc484))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/ee01cf567145f394bd7007196e832c15b408163d))
* Updated dependencies.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v30.0.0 => v31.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v30.0.0 => v31.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v30.0.0 => v31.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v30.0.0 => v31.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v30.0.0 => v31.0.0
</details>


## [30.0.0](https://github.com/ckeditor/ckeditor5/compare/v29.2.0...v30.0.0) (2021-09-27)

### Release highlights

We are happy to announce the release of CKEditor 5 v30.0.0.

This release introduces the following new features:

* [Allow reverting text transformations by pressing <kbd>Backspace</kbd>](https://github.com/ckeditor/ckeditor5/issues/10413).
* [Cut down the search time in the Find & replace feature](https://github.com/ckeditor/ckeditor5/issues/10302).

There were also a few bug fixes:

* Fixed [invalid cell property after pasting a table to the editor from Word](https://github.com/ckeditor/ckeditor5/issues/10383).
* [The table toolbar now respects the `viewportTopOffset` configuration](https://github.com/ckeditor/ckeditor5/issues/9892).
* Automatic text transformation: [the dates get no longer turn into fractions](https://github.com/ckeditor/ckeditor5/issues/9170).
* [The toolbar no longer loses focus](https://github.com/ckeditor/ckeditor5/issues/10420) after escaping from the find and replace dropdown.

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v30.0.0-with-better-handling-of-automated-actions-and-plugin-development-tool/

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* The `config.toolbar.viewportTopOffset` property was moved to `config.ui.viewportOffset` and it now accepts an object.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `Matcher` class is more strict in handling `Element`s provided to the `match()` and `matchAll()` methods. It will not accept other `Node`s now.
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: The public helper function `html-support/converters~disallowedAttributesConverter` has been removed due to a change in the approach to filtering disallowed elements and attributes.
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The `centeredBalloonPositionForLongWidgets()` helper was removed from widget utils. Use `BalloonPanelView.defaultPositions.viewportStickyNorth` instead. See [#9892](https://github.com/ckeditor/ckeditor5/issues/9892).
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: `toWidgetEditable()` will now set highlight handling for the editable element. If you used this method in conversion in your custom plugin it may affect your element styling when there is a marker on that element (e.g. a comment or a suggestion).

### Features

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Allowed reverting the automatic [Markdown-like formatting](https://ckeditor.com/docs/ckeditor5/latest/features/autoformat.html) by pressing <kbd>Backspace</kbd>. See [#10413](https://github.com/ckeditor/ckeditor5/issues/10413). ([commit](https://github.com/ckeditor/ckeditor5/commit/b46ae90ceac64662784a5a450190bf549b482a79))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added the General HTML Support integration for the image feature. Closes [#9916](https://github.com/ckeditor/ckeditor5/issues/9916). ([commit](https://github.com/ckeditor/ckeditor5/commit/68796d986c4a7eb1c1581e29d05a25cd24f20ce0))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Allowed using backspace to undo automatic the image insertion transformations. Closes [#10413](https://github.com/ckeditor/ckeditor5/issues/10413). ([commit](https://github.com/ckeditor/ckeditor5/commit/66073dd93b7666a91feb491550e06a438d80e1ec))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Introduced a new position type (`viewportStickyNorth`) in `BalloonPanelView.defaultPositions`. See [#9892](https://github.com/ckeditor/ckeditor5/issues/9892). ([commit](https://github.com/ckeditor/ckeditor5/commit/00c7cfd149a6f3637d1536e8be6dc6ed18bf1652))
* Introduced the `editor.ui.viewportOffset` property, which allows modifying the viewport's offset in runtime. This value is used by the editor e.g. to position its sticky toolbar and contextual balloons. Additionally, the `config.toolbar.viewportTopOffset` property was moved to `config.ui.viewportOffset` and it now accepts an object. Closes [#9672](https://github.com/ckeditor/ckeditor5/issues/9672). ([commit](https://github.com/ckeditor/ckeditor5/commit/f8297dfd04c40ac6638142cca0fc25ffd953288e))

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added system colors names from the CSS Color Module Level 3 so that pasting tables from MS Word works correctly. Closes [#10383](https://github.com/ckeditor/ckeditor5/issues/10383). ([commit](https://github.com/ckeditor/ckeditor5/commit/8961911324d1bae90175e4221cc0506e78da5796))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed the `Matcher` class handling global flag in the `RegExp`s patterns. Closes [#10282](https://github.com/ckeditor/ckeditor5/issues/10282). ([commit](https://github.com/ckeditor/ckeditor5/commit/3e9e357eeb950b955d3c739290bdd569d3d765d4))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: The toolbar should not lose focus after escaping from the find and replace dropdown. Closes [#10420](https://github.com/ckeditor/ckeditor5/issues/10420). ([commit](https://github.com/ckeditor/ckeditor5/commit/a5e0392d24d98091b05d419515071622f51b093c))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Improved the performance of the find feature by reducing the number of `model.change()` calls. Closes [#10302](https://github.com/ckeditor/ckeditor5/issues/10302). ([commit](https://github.com/ckeditor/ckeditor5/commit/8d425ed35cea7a1dcfb1792a7a3822b1e1dec875))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Attributes from a marker conversion descriptor will now be correctly added on view elements during marker downcast. Closes [#10425](https://github.com/ckeditor/ckeditor5/issues/10425). ([commit](https://github.com/ckeditor/ckeditor5/commit/7951f7994263bf73d47a5796a610fe82f05d9abe))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Fixed widget highlight in the revision comparison in some cases with nested edits added by different users.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Made reordering table rows and columns possible without breaking the view in tables with heading rows or heading columns. Closes [#10463](https://github.com/ckeditor/ckeditor5/issues/10463). ([commit](https://github.com/ckeditor/ckeditor5/commit/12a24f853286f6e44cead98b2bee6703ad6013a9))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Cancelling the table cell properties UI no longer results with a warning in the console. Closes [#6266](https://github.com/ckeditor/ckeditor5/issues/6266). ([commit](https://github.com/ckeditor/ckeditor5/commit/a312aaaff2b3feaef3ed0ba8bcad8ec3d0fa9b25))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Fixed handling of a non-collapsed selection inside a table cell. Closes [#10391](https://github.com/ckeditor/ckeditor5/issues/10391). ([commit](https://github.com/ckeditor/ckeditor5/commit/487d5444e72718725dbbf64b14af42dbd6b996a9))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed crash happening in some scenarios in track changes mode after an image element split a non-paragraph element.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed missing data-suggestion attributes on table cells and image captions.
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: Restricted mathematical text transformation, so that it requires no alphanumeric character before and after the fraction. Closes [#9170](https://github.com/ckeditor/ckeditor5/issues/9170). ([commit](https://github.com/ckeditor/ckeditor5/commit/e228a7e1ff024295ba090db553de2f3561845814))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The editor no longer crashes when a button has `withKeystroke` set to `true` but no `keystroke` property is provided. Closes [#9412](https://github.com/ckeditor/ckeditor5/issues/9412). ([commit](https://github.com/ckeditor/ckeditor5/commit/3e4cb49701928cec988cd40ba33747ee912747fd))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Fixed arrow keys navigation when there is an inline widget at the edge of a table cell. Closes [#9380](https://github.com/ckeditor/ckeditor5/issues/9380). ([commit](https://github.com/ckeditor/ckeditor5/commit/487d5444e72718725dbbf64b14af42dbd6b996a9))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `MarkerCollection#has()` method now also accepts an instance of a marker. Closes [#9985](https://github.com/ckeditor/ckeditor5/issues/9985). ([commit](https://github.com/ckeditor/ckeditor5/commit/bf3699f4824ca797c7e3a847e921eb99db9f4ad7))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Upcast images with or without the empty `src` attribute. Closes [#9238](https://github.com/ckeditor/ckeditor5/issues/9238). ([commit](https://github.com/ckeditor/ckeditor5/commit/50e457758592b8d10c737783762573f1290a9536))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Prevent leaving an unconsumed `figure` element after conversion. ([commit](https://github.com/ckeditor/ckeditor5/commit/68796d986c4a7eb1c1581e29d05a25cd24f20ce0))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Upcast linked images with or without the empty `src` attribute. See [#9238](https://github.com/ckeditor/ckeditor5/issues/9238). ([commit](https://github.com/ckeditor/ckeditor5/commit/50e457758592b8d10c737783762573f1290a9536))
* **[media](https://www.npmjs.com/package/@ckeditor/ckeditor5-media)**: The `figure` element should not be consumed if the media embed is unknown. ([commit](https://github.com/ckeditor/ckeditor5/commit/50e457758592b8d10c737783762573f1290a9536))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Prevent leaving an unconsumed `figure` element after conversion. ([commit](https://github.com/ckeditor/ckeditor5/commit/68796d986c4a7eb1c1581e29d05a25cd24f20ce0))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: `toWidgetEditable()` will now set the default highlight handling for the editable element. ([commit](https://github.com/ckeditor/ckeditor5/commit/7951f7994263bf73d47a5796a610fe82f05d9abe))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: `setHighlightHandling()` received default parameters for the highlight add and remove functions which handle classes and attributes. ([commit](https://github.com/ckeditor/ckeditor5/commit/7951f7994263bf73d47a5796a610fe82f05d9abe))
* The viewport offsets will be taken into consideration when calculating the position of contextual balloons (such as the table toolbar). Closes [#9892](https://github.com/ckeditor/ckeditor5/issues/9892). ([commit](https://github.com/ckeditor/ckeditor5/commit/00c7cfd149a6f3637d1536e8be6dc6ed18bf1652))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/673672080d81ff5b8936021a4723784a59823576), [commit](https://github.com/ckeditor/ckeditor5/commit/fb58634b7fd138297f55ac5424e6a26d9cca3cda))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v29.2.0 => v30.0.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v29.2.0 => v30.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v29.2.0 => v30.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v29.2.0 => v30.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v29.2.0 => v30.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v29.2.0 => v30.0.0
</details>


## [29.2.0](https://github.com/ckeditor/ckeditor5/compare/v29.1.0...v29.2.0) (2021-08-30)

### Release highlights

We are happy to announce the release of CKEditor 5 v29.2.0.

This release introduces several new features:

* [Redesigned find and replace panel](https://github.com/ckeditor/ckeditor5/issues/10229) and [a few improvements to the feature itself]((https://github.com/ckeditor/ckeditor5/issues?q=is%3Aissue+milestone%3A%22iteration+46%22+-label%3Atype%3Adocs+-label%3Atype%3Atask+sort%3Aupdated-desc+label%3Apackage%3Afind-and-replace)).
* The possibility to create a localized editor when using [DLL builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html).
* Improved performance when [pasting large images](https://github.com/ckeditor/ckeditor5/issues/10287).

There were also a few bug fixes:

* Switching to source editing no longer [scrolls to the end of the content](https://github.com/ckeditor/ckeditor5/issues/10180).
* The highlight feature [can now be used while typing](https://github.com/ckeditor/ckeditor5/issues/2616).
* Pasted HTML comments [are filtered out](https://github.com/ckeditor/ckeditor5/issues/10213).

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v29.2.0-with-redesigned-find-and-replace-and-localized-dll-builds/

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: The layout, styling, and view structure of the find and replace form have changed radically, which may affect integrations that either customized or extended this form (see [#10229](https://github.com/ckeditor/ckeditor5/issues/10229)).
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The revision data now includes a new property: `authorsIds`. This property needs to be handled (saved and loaded) similarly to other revision properties. For revisions that are already saved in your database, set this value to an array with one string, equal to the `creatorId` value (e.g. `["user1"]`). Check the updated [revision history integration guide](https://ckeditor.com/docs/ckeditor5/latest/features/revision-history/revision-history-integration.html) to see an example.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The documentation for revision history adapter has been updated. Please check the `RevisionHistoryAdapter#addRevision()` and `updateRevision()` documentation to make sure that you correctly handle all the data passed to these methods.

### Features

* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added the "cog" icon to the core icon set (see [#10229](https://github.com/ckeditor/ckeditor5/issues/10229)). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Made it possible to cycle find results by using <kbd>Enter</kbd> and <kbd>Shift</kbd>+<kbd>Enter</kbd> keystrokes. Closes [#10012](https://github.com/ckeditor/ckeditor5/issues/10012). ([commit](https://github.com/ckeditor/ckeditor5/commit/fe554b9a706e22cb91e19356ca461897af7e0e04))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added general HTML support integration for the media embed feature. Closes [#9918](https://github.com/ckeditor/ckeditor5/issues/9918). ([commit](https://github.com/ckeditor/ckeditor5/commit/ec4d39dc5daa10833d6690834f7aee4c0b734169))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: Keyboard shortcuts to accept mentions can be customized using the [`config.mention.commitKeys`](https://ckeditor.com/docs/ckeditor5/latest/api/module_mention_mention-MentionConfig.html#member-commitKeys) configuration option. Closes [#4665](https://github.com/ckeditor/ckeditor5/issues/4665). ([commit](https://github.com/ckeditor/ckeditor5/commit/9fa1052f5fed9111d9534047a573e9c311dc9516))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The `Comment#setAttribute()` and `Comment#removeAttribute()` methods will now correctly set the attribute value and fire the adapter call also for comments created by other users.
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Changing the search text should reset the results. Closes [#10304](https://github.com/ckeditor/ckeditor5/issues/10304). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Toggling search options should reset the results. Closes [#10021](https://github.com/ckeditor/ckeditor5/issues/10021). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: The find and replace form should be responsive. Closes [#10019](https://github.com/ckeditor/ckeditor5/issues/10019). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: The search term should be allowed to contain a trailing or leading space when searching "whole words only". Closes [#10131](https://github.com/ckeditor/ckeditor5/issues/10131). ([commit](https://github.com/ckeditor/ckeditor5/commit/fd9dfa7658e7ee3e968612274294baf224828326))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: All pasted HTML comments will now be filtered. Closes [#10213](https://github.com/ckeditor/ckeditor5/issues/10213). ([commit](https://github.com/ckeditor/ckeditor5/commit/59e23271a9ed32fb7bdc4eb51360b5e0f5d7b0ba))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Extended the schema definition for `$root` to allow storing a comment's content as the `$root` attribute. Closes [#10274](https://github.com/ckeditor/ckeditor5/issues/10274). ([commit](https://github.com/ckeditor/ckeditor5/commit/35b08a96f41423b1e1173af60c186fb0193c92cb))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Enabled multiple authors in one revision. Introduced the `authorsIds` property in the revision data.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Visual improvements to how nested changes are displayed.
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: The selection is now set to the beginning of the source editing view. Closes [#10180](https://github.com/ckeditor/ckeditor5/issues/10180). ([commit](https://github.com/ckeditor/ckeditor5/commit/1e5b03d8a91038dfcf4a7afc7a47f11cb7a27041))
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: The source editing feature will send a warning to the console when the restricted editing feature is loaded. Closes [#10228](https://github.com/ckeditor/ckeditor5/issues/10228). ([commit](https://github.com/ckeditor/ckeditor5/commit/42a31c423c1b770e7a25d3dbb546fc1327100779))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: The label of the labeled field should stay at the top when the field is disabled and not empty to not cover the field's text (see [#10229](https://github.com/ckeditor/ckeditor5/issues/10229)). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))

### Other changes

* **[ckeditor5](https://www.npmjs.com/package/ckeditor5)**: The `ckeditor5` package offers translation files for several core CKEditor 5 packages: `utils`, `core`, `engine`, `ui`, `clipboard`, `enter`, `paragraph`, `select-all`, `typing`, `undo`, `upload`, and `widget`, used in the DLL builds. ([commit](https://github.com/ckeditor/ckeditor5/commit/40574471b7b4aeaeb73b8b945fb3b38557eef19a))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `DataTransfer.files` property is not evaluated more than once. Closes [#10287](https://github.com/ckeditor/ckeditor5/issues/10287). ([commit](https://github.com/ckeditor/ckeditor5/commit/2bde3d069ead725d8fc2f6e7379da05523c29fde))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Raised comments character limit to 65000.
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Merged a duplicated translation context from `ckeditor5-ui` and `ckeditor5-find-and-replace` packages. Closes [#10400](https://github.com/ckeditor/ckeditor5/issues/10400). ([commit](https://github.com/ckeditor/ckeditor5/commit/f931085112d9f8cdeb731543a01729058c7e3ce6))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Moved the search result translation context to `ckeditor5-core`. Closes [#10400](https://github.com/ckeditor/ckeditor5/issues/10400). ([commit](https://github.com/ckeditor/ckeditor5/commit/f931085112d9f8cdeb731543a01729058c7e3ce6))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Visually revamped the find and replace form. Closes [#10229](https://github.com/ckeditor/ckeditor5/issues/10229). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Increased the contrast between selected and unselected find and replace results. Closes [#10242](https://github.com/ckeditor/ckeditor5/issues/10242). ([commit](https://github.com/ckeditor/ckeditor5/commit/f5a2c57aa7b2aeea5a01ad1e7c7bf0a9b9118078))
* **[highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight)**: Toggling highlight does not remove it when the caret is at the end of the highlighted range. Closes [#2616](https://github.com/ckeditor/ckeditor5/issues/2616). ([commit](https://github.com/ckeditor/ckeditor5/commit/d1a271d127777bb0f33f0e4e52222f0fbf21f6c2))
* **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: The "Remove language" option of text part language dropdown is now the first one in the list. Closes [#10338](https://github.com/ckeditor/ckeditor5/issues/10338). ([commit](https://github.com/ckeditor/ckeditor5/commit/e6cd6e487d6ca528d19734ac27b447003063ca5c))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Some CSS styling improvements for suggestions and changes highlights.
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: Moved the presentational find and replace form styles to the theme (see [#10229](https://github.com/ckeditor/ckeditor5/issues/10229)). ([commit](https://github.com/ckeditor/ckeditor5/commit/dc3160944d6d0c95469e982a47936d47aa1bbd64))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Moved the page label translation context to `ckeditor5-core`. Closes [#10400](https://github.com/ckeditor/ckeditor5/issues/10400). ([commit](https://github.com/ckeditor/ckeditor5/commit/f931085112d9f8cdeb731543a01729058c7e3ce6))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/d88cc7e93d4fbb0ad4f68943cff55d37532ec2cb), [commit](https://github.com/ckeditor/ckeditor5/commit/70bd66b567f19450717ed69ce999521e5c4aa26e))
* The content styles stylesheet for the guide will now be generated on-demand using the `{@exec...}` feature. Closes [#10299](https://github.com/ckeditor/ckeditor5/issues/10299). ([commit](https://github.com/ckeditor/ckeditor5/commit/18123a72726a2f9f052189b89ec58218603d26da))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v29.1.0 => v29.2.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v29.1.0 => v29.2.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v29.1.0 => v29.2.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v29.1.0 => v29.2.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v29.1.0 => v29.2.0
</details>


## [29.1.0](https://github.com/ckeditor/ckeditor5/compare/v29.0.0...v29.1.0) (2021-08-02)

### Release highlights

We are happy to announce the release of CKEditor 5 v29.1.0.

This release introduces several new features:

* The [content minimap](https://github.com/ckeditor/ckeditor5/issues/10079) feature which aids document navigation. [**Read more about the minimap**](https://ckeditor.com/blog/document-navigation-made-easy-previewing-the-content-minimap-in-ckeditor-5/).
* Support for [HTML comments](https://github.com/ckeditor/ckeditor5/issues/8822).
* Integration with the autosave feature in revision history.
* [Possibility to enforce tables to contain a header row by default](https://github.com/ckeditor/ckeditor5/issues/10039).
* Several improvements in the [find and replace](https://github.com/ckeditor/ckeditor5/issues/10024) feature.

There were also a few bug fixes:

* The code block added with autoformatting [will now remember the language](https://github.com/ckeditor/ckeditor5/issues/10005) of the previously inserted block.
* Problems with pasting lists from Word have been eliminated ([#9055](https://github.com/ckeditor/ckeditor5/issues/9055), [#9954](https://github.com/ckeditor/ckeditor5/issues/9954)).

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v29.1.0-with-content-minimap-html-comments-and-revision-history-autosave/.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: The preview content will not be centered anymore.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Several conversion helpers have been renamed and removed from the public API:
  * `viewFigureToModel() -> upcastImageFigure()`,
  * `srcsetAttributeConverter() -> downcastSrcsetAttribute()`,
  * `modelToViewAttributeConverter() -> downcastImageAttribute()`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionTracker#saveRevision()` was renamed to `RevisionTracker#updateRevision()`. This is to better reflect what the method actually does. Since revision locking was introduced, `saveRevision( { name: ... } )` calls should be replaced with `updateRevision( { name: ..., isLocked: true } )` calls.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The `Revision#name` property is now read-only. You need to use `Revision#setName()` instead.

### Features

* **[autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: Introduced the `Autosave#save()` function. Closes [#10215](https://github.com/ckeditor/ckeditor5/issues/10215). ([commit](https://github.com/ckeditor/ckeditor5/commit/7be280fbe0514ef9000ad13619bf43a17ce92302))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the new (`skipComments`) option in `DomConverter#domToView()` (`false` by default) to make it possible to decide whether HTML comments should be removed from the data. ([commit](https://github.com/ckeditor/ckeditor5/commit/023b4eacf29a57e653e1171c15019ae0b8b33f8b))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Introduced the HTML comment plugin. Closes [#8822](https://github.com/ckeditor/ckeditor5/issues/8822). ([commit](https://github.com/ckeditor/ckeditor5/commit/023b4eacf29a57e653e1171c15019ae0b8b33f8b))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added support for elements that can act both as a paragraph and a sectioning element depending on the content context. Closes [#10085](https://github.com/ckeditor/ckeditor5/issues/10085). ([commit](https://github.com/ckeditor/ckeditor5/commit/30a93834720bb391b23d54b6aa73c5babd5a89c7))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Added General HTML Support integration for the table feature. Closes [#9914](https://github.com/ckeditor/ckeditor5/issues/9914). ([commit](https://github.com/ckeditor/ckeditor5/commit/95416915e3bea9053356c38f4c9eccd95868855f))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Implemented the `<picture>` element support in the image feature. Closes [#9833](https://github.com/ckeditor/ckeditor5/issues/9833). ([commit](https://github.com/ckeditor/ckeditor5/commit/9a265d1cbb7f5c9e9f0750da24d7afcfb56d3474))
* **[minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap)**: Basic implementation of the content minimap feature. Closes [#10079](https://github.com/ckeditor/ckeditor5/issues/10079). ([commit](https://github.com/ckeditor/ckeditor5/commit/7bb5b2e05e0ecc05f106ab5dd2d39420920b01aa))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced the possibility to update a revision after it was created. Provided a way to integrate revision history with the autosave plugin. See the [revision history](https://ckeditor.com/docs/ckeditor5/latest/features/revision-history/revision-history.html) guide.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced the `Revision#setName()` function. `Revision#name` is now read-only.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Introduced several properties: `Revision#isLocked`, `Revision#lock()` and `RevisionTracker#isLocked`.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Introduced an editor configuration option allowing to set default headings for newly created tables. Closes [#10039](https://github.com/ckeditor/ckeditor5/issues/10039). ([commit](https://github.com/ckeditor/ckeditor5/commit/f2a838a80f821f40a9e24160f8e4e8a2d1ca096e))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Enabled export to Word in track changes mode.

### Bug fixes

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Autoformat will apply the previous language choice for the code block feature. Closes [#10005](https://github.com/ckeditor/ckeditor5/issues/10005). ([commit](https://github.com/ckeditor/ckeditor5/commit/cc3dd760c2b8150de6e954ea89c7f713c135847a))
* **[autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave)**: Autosave callback should not be called while the editor is initialized. Closes [#10214](https://github.com/ckeditor/ckeditor5/issues/10214). ([commit](https://github.com/ckeditor/ckeditor5/commit/7be280fbe0514ef9000ad13619bf43a17ce92302))
* **[build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: The editing area in the sample should have a solid white background. Closes [#10095](https://github.com/ckeditor/ckeditor5/issues/10095). ([commit](https://github.com/ckeditor/ckeditor5/commit/3d35544f3040bf0f022b014bd6d5bfb631c9739e))
* **[collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core)**: User initials for user names longer than two word will now be composed of the first letters of the first and last word of the name. This is better for names with a middle name or with a last name having a prefix.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: White spaces around inline object elements such as `<img>` or `<button>` should not be lost in the data. Closes [#10147](https://github.com/ckeditor/ckeditor5/issues/10147). ([commit](https://github.com/ckeditor/ckeditor5/commit/90c64dc98514e8b95a46639df7102b990ea8c22f))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Matcher should not match the style and class attributes with the object `attributes` pattern. Closes [#9813](https://github.com/ckeditor/ckeditor5/issues/9813). ([commit](https://github.com/ckeditor/ckeditor5/commit/287e04574d7b662d8d051cd12975e5ef871ff6df))
* **[find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace)**: Find and replace feature now works correctly with a multi-root editor. Closes [#10146](https://github.com/ckeditor/ckeditor5/issues/10146). ([commit](https://github.com/ckeditor/ckeditor5/commit/b7b31240ecd638cb97b9e6fa71e426fe255d1a5b))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Link decorators should use class and style properties instead of directly matching style and class HTML attributes. Closes [#9813](https://github.com/ckeditor/ckeditor5/issues/9813). ([commit](https://github.com/ckeditor/ckeditor5/commit/287e04574d7b662d8d051cd12975e5ef871ff6df))
* **[paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office)**: Fixed a crash when pasting lists from Word to the editor. Closes [#9055](https://github.com/ckeditor/ckeditor5/issues/9055), [#9954](https://github.com/ckeditor/ckeditor5/issues/9954). ([commit](https://github.com/ckeditor/ckeditor5/commit/2aec072956aef78ac7360e60f2be6db884e70d83))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The `Autosave` plugin now will be filtered by `RevisionHistory` plugin, so it will not be included in the revision history view editor instance as this caused errors.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Tables will be now correctly handled after a change in a table was undone.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Fixed model mappings in a table cell if a paragraph is bound to its parent. ([commit](https://github.com/ckeditor/ckeditor5/commit/023b4eacf29a57e653e1171c15019ae0b8b33f8b))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Fixed editor freezing when providing invalid `colspan` or `rowspan` attribute values. Closes [#10042](https://github.com/ckeditor/ckeditor5/issues/10042). ([commit](https://github.com/ckeditor/ckeditor5/commit/b03810496363212511768b698ec09e50c00698e8))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: The `Autosave` plugin will no longer cause editor crashes when used together with the `TrackChangesData` plugin.
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Remove references to and destroy resizers of widgets no longer in the document. Closes [#10156](https://github.com/ckeditor/ckeditor5/issues/10156). ([commit](https://github.com/ckeditor/ckeditor5/commit/f177ad1e1c2562d5ca93fb5aa6e24f3d10c3ae49))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The editor should not crash when a widget with a resizer is moved in the model document. Closes [#10266](https://github.com/ckeditor/ckeditor5/issues/10266). ([commit](https://github.com/ckeditor/ckeditor5/commit/01e830f140e212f81319a5b1ef10d3562d9f73aa))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `elementToMarker()` upcast helper is no longer marked as deprecated. ([commit](https://github.com/ckeditor/ckeditor5/commit/023b4eacf29a57e653e1171c15019ae0b8b33f8b))
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: Introduced the `config.exportWord.dataCallback` option to define a custom data provider for conversion. This brings support for multi-root editors.
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: The preview content for the HTML embed plugin will not be centered. Closes [#9486](https://github.com/ckeditor/ckeditor5/issues/9486). ([commit](https://github.com/ckeditor/ckeditor5/commit/8bfb0c2cdecb09688b852b0f88f6401cfdc881b1))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: `RevisionTracker#saveRevision()` was renamed to `RevisionTracker#updateRevision()`.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Revision will be updated (or an autosave callback will be fired) when the revision history view is opened. This replaces the temporary "Unsaved changes" revision.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Restoring an unnamed revision will now create a revision with a name containing the restored revision's date.
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/49689be964b307c3cc896031283b717f972408ec))
* The `ckeditor5-metadata.json` file will be published on npm along with the package's code. Closes [ckeditor/ckeditor5#10004](https://github.com/ckeditor/ckeditor5/issues/10004). ([commit](https://github.com/ckeditor/ckeditor5/commit/bbaf0b43785ba221d14668368865de2e247886f9))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-minimap](https://www.npmjs.com/package/@ckeditor/ckeditor5-minimap): v29.1.0

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v29.0.0 => v29.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v29.0.0 => v29.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v29.0.0 => v29.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v29.0.0 => v29.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v29.0.0 => v29.1.0
</details>


## [29.0.0](https://github.com/ckeditor/ckeditor5/compare/v28.0.0...v29.0.0) (2021-07-05)

### Release highlights

We are happy to announce the release of CKEditor 5 v29.0.0.

This release introduces several new features:

* Support for [inline images](https://github.com/ckeditor/ckeditor5/issues/2052) in the image feature, allowing to insert multiple images in a single content block.
* The [find and replace](https://github.com/ckeditor/ckeditor5/issues/1430) feature.
* The [source editing](https://github.com/ckeditor/ckeditor5/issues/9647) feature for classic editor with the ability to directly edit the HTML or Markdown content.
* [Remembering the language when creating a new code block](https://github.com/ckeditor/ckeditor5/issues/8722).
* The experimental [General HTML Support](https://github.com/ckeditor/ckeditor5/issues/9970) feature that allows enabling HTML features that are not explicitly supported by any other dedicated CKEditor 5 plugins.

There were also a few bug fixes:

* The remove format feature will not [reset the image size anymore](https://github.com/ckeditor/ckeditor5/issues/9684)
* Nested marker highlight will not [break the mouse text selection](https://github.com/ckeditor/ckeditor5/issues/9513)

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v29.0.0-with-boosted-images-find-and-replace-and-the-source-editing-feature/.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: The official preconfigured [decoupled document build](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document) now ships with the [`ImageResize`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imageresize-ImageResize.html) plugin enabled by default. Learn more about it in the [Migration to v.29.x guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-29.html).
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The `Image` plugin works as a glue for both the `ImageBlock` and `ImageInline` features now (previously it only supported block images). If you do not want inline images to be allowed, consider replacing the `Image` plugin with `ImageBlock` in your editor configuration. Otherwise, all images without the `<figure>` wrapper will be loaded into the editor content as inline images, which in some cases may affect content semantics and styling. Check the updated [image installation guide](https://ckeditor.com/docs/ckeditor5/latest/features/images/images-installation.html) for more details about this change.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The `ImageEditing` plugin is no longer standalone, as the majority of its logic was extracted to the `ImageBlockEditing` and `ImageInlineEditing` plugins. The logic remaining in the `ImageEditing` is common for both `ImageBlockEditing` and `ImageInlineEditing` plugins.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image caption is no longer displayed automatically when the user selects a block image. Instead, its presence is controlled using the `'toggleImageCaption'` toolbar button and a [`ToggleImageCaptionCommand`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagecaption_toggleimagecaptioncommand-ToggleImageCaptionCommand.html) for better integration with the [revamped image styles system](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-29.html#image-styles).
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The API of the image features has changed, please make sure to update your integrations.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The linked image indicator (icon) rendered as a `<span>` with the `.ck-link-image_icon` CSS class has been removed. To alter the look of the indicator (including the icon), please use the `figure.image > a::after` (for linked block images) and `a span.image-inline::after` (for linked inline images) CSS selectors instead.
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The [`srcsetAttributeConverter()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image_converters.html#function-srcsetAttributeConverter) and [`modelToViewAttributeConverter()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image_converters.html#function-modelToViewAttributeConverter) conversion helpers now require the `imageType` parameter.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The in-cell pseudo-paragraph used for data tables is no longer styled using the inline `style` attribute but a `.ck-table-bogus-paragraph` CSS class instead.
* Several plugins are not loaded automatically as dependencies of other plugins anymore. From now on, they need to be provided by the editor creator manually (via the `config.plugins` configuration option). Learn more about it in the [Migration to v.29.0.0 guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-29.html). This list includes:
  - The [`CKFinder`](https://ckeditor.com/docs/ckeditor5/latest/api/module_ckfinder_ckfinder-CKFinder.html) plugin is no longer automatically importing the [`Image`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image-Image.html) plugin as a dependency.
  - The [`EasyImage`](https://ckeditor.com/docs/ckeditor5/latest/api/module_easy-image_easyimage-EasyImage.html) plugin is no longer automatically importing the [`Image`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image-Image.html) plugin as a dependency.
* Several functions are no longer a part of the public API. This list includes:
  - `getSelectedImageWidget()`
  - `getViewImgFromWidget()`
  - `isImageAllowed()`
  - `isImage()`
  - `isImageWidget()`
  - `toImageWidget()`
  - `captionElementCreator()`
  - `isCaption()`
  - `checkSelectionOnObject()`
* Several functions or constants have been renamed. The list of changes includes:
  - The `getCaptionFromImage()` helper is now available as [`getCaptionFromImageModelElement()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagecaption_utils.html#function-getCaptionFromImageModelElement).
  - The `matchImageCaption()` helper is now available as [`matchImageCaptionViewElement()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagecaption_utils.html#function-matchImageCaptionViewElement).
  - The `defaultIcons` are now available as [`DEFAULT_ICONS`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagestyle_utils.html#constant-DEFAULT_ICONS).
  - The `defaultStyles` are now available as [`DEFAULT_OPTIONS`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagestyle_utils.html#constant-DEFAULT_OPTIONS).
  - The `findOptimalInsertionPosition()` helper is now `findOptimalInsertionRange()` and returns a [model range](https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_range-Range.html). Also, instead of searching for a position next to the currently selected block, it will now attempt to replace that block (see [#9102](https://github.com/ckeditor/ckeditor5/issues/9102)).
  - The `isImageAllowed()` helper is now available as [`isLinkableElement()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_link_utils.html#function-isLinkableElement).
  - Some helpers from the image utilities module (`@ckeditor/ckeditor5-image/src/image/utils.js`) have been moved to the [`ImageUtils` plugin](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imageutils-ImageUtils.html). The helpers are still accessible via the `editor.plugins.get( 'ImageUtils' )` namespace, for instance, `editor.plugins.get( 'ImageUtils' ).insertImage( ... )`.
* The API of several functions or modules has been changed. Refer to the documentation to learn more. This list of changes includes:
  - common [image converters](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_image_converters.html),
  - various [image caption utils](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imagecaption_utils.html),
  - the [`insertImage()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_image_imageutils-ImageUtils.html#function-insertImage) helper,
  - the [`insertMedia()`](https://ckeditor.com/docs/ckeditor5/latest/api/module_media-embed_utils.html#function-insertMedia) helper.
* The default user permissions have been changed. Now, by default, it is possible to remove other users' comment threads. This applies to non-real-time editing integrations and to real-time editing integrations using the writer role. This behavior can be changed using the `Permissions` plugin API (for non-real-time editing integrations) or by setting permissions for a given user in the user token (for integrations using CKEditor Cloud Services).

### Features

* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: When inserting a new code block, instead of applying the default language (the first in the dropdown view), the feature now re-uses the language of the last inserted code block. Closes [#8722](https://github.com/ckeditor/ckeditor5/issues/8722). ([commit](https://github.com/ckeditor/ckeditor5/commit/a95554244e9fc71af5aa9e53c6841f114c6d2483))
* **[collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core)**: Introduced the `Permissions` plugin. Now it is possible to manage the editor's level of access using permissions. See the [user roles and permissions](https://ckeditor.com/docs/cs/latest/developer-resources/security/roles.html) guide.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `CommentsRepository#isReadOnly()` method.
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Introduced the `CommentThread#isRemovable` property which is related to current permissions. By default, comment threads can now be removed by any user.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Improved engine view matcher with new pattern syntax allowing to match attribute keys using regular expressions. Unified the pattern syntax between attributes, styles, and classes. Closes [#9872](https://github.com/ckeditor/ckeditor5/issues/9872). ([commit](https://github.com/ckeditor/ckeditor5/commit/22fad3daaa7386da6a451e0dc60f4facf191bcaa))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the special `expand` option to the `StylesMap.getStyleNames()` and view `Element.getStyleNames()` methods allowing to expand shorthand style properties. ([commit](https://github.com/ckeditor/ckeditor5/commit/22fad3daaa7386da6a451e0dc60f4facf191bcaa))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `batchType` option in `editor.data.set()` which can be used to preserve the undo/redo steps and to add an additional item to the undo stack. Note that it will still replace the whole content and should not be used with real-time collaboration. ([commit](https://github.com/ckeditor/ckeditor5/commit/2b9ef7e7355d4fb18303aa857a4d6dbff5ff075f))
* **[html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support)**: Introduced the General HTML Support feature. Closes [#9970](https://github.com/ckeditor/ckeditor5/issues/9970). ([commit](https://github.com/ckeditor/ckeditor5/commit/a35db8593d099c609c7ce77450901016ea4aab38))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introduced support for inline images in the editor content. Available out–of–the–box in all ready–to–use editor builds, inline images can be uploaded, styled, resized, and linked and complement the already supported block images. See the [image feature overview guide](https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html) to see inline images in action. For more information about breaking changes, migration path, and tips, check out the [migration to v29.0.0](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-29.html) guide. ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: It should now be possible to define the dropdown menu as an object in the `config.image.toolbar` configuration. Closes [#9340](https://github.com/ckeditor/ckeditor5/issues/9340). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The feature functionality now covers both block and inline images. Closes [#8871](https://github.com/ckeditor/ckeditor5/issues/8871), [#9017](https://github.com/ckeditor/ckeditor5/issues/9017), [#9167](https://github.com/ckeditor/ckeditor5/issues/9167). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Enabled the Revision History feature in multi-root editors.
* **[source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing)**: Introduced the Source editing feature for the predefined classic editor build. Closes [#9647](https://github.com/ckeditor/ckeditor5/issues/9647). ([commit](https://github.com/ckeditor/ckeditor5/commit/2b9ef7e7355d4fb18303aa857a4d6dbff5ff075f))

### Bug fixes

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**:  All toolbars shall be hidden when the widget is dragged and shown back when the drag ends. Closes [#9566](https://github.com/ckeditor/ckeditor5/issues/9566). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: The code block feature should not allow for inserting inline widgets as its content. Closes [#9567](https://github.com/ckeditor/ckeditor5/issues/9567). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed the downcast conversion of collapsed markers at the conversion range boundary. Closes [#8485](https://github.com/ckeditor/ckeditor5/issues/8485). ([commit](https://github.com/ckeditor/ckeditor5/commit/91d61dd0cfd85416883218039f8c2480b36711b7))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added missing HTML block element names to the `DomConverter.blockElements` array. Closes [#9801](https://github.com/ckeditor/ckeditor5/issues/9801), [#7863](https://github.com/ckeditor/ckeditor5/issues/7863). ([commit](https://github.com/ckeditor/ckeditor5/commit/67b4c7d1f3724ae94fc15d1647ff793815fe1d1e))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Markers should not be split in view on the caret position. Closes [#9513](https://github.com/ckeditor/ckeditor5/issues/9513). ([commit](https://github.com/ckeditor/ckeditor5/commit/be066b41aeb598588d281ffb6448f9df87477f61))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `FocusObserver` should not force the view to render in random moments. See [#9513](https://github.com/ckeditor/ckeditor5/issues/9513). ([commit](https://github.com/ckeditor/ckeditor5/commit/be066b41aeb598588d281ffb6448f9df87477f61))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Disallowed inline images in the `caption` elements. Closes [#9794](https://github.com/ckeditor/ckeditor5/issues/9794). ([commit](https://github.com/ckeditor/ckeditor5/commit/d4afc64b03b1ce23bd391fe299b8d9ad4315e3fc))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image should not resize to 100% if the resize command was overridden (canceled). ([commit](https://github.com/ckeditor/ckeditor5/commit/1beed0357a8dd4c8bc05f44eb7108aab44685e51))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The side-aligned images should always have some `max-width` property to not take up the whole editor width. Closes [#9342](https://github.com/ckeditor/ckeditor5/issues/9342). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The floating block images, except for the `side` images, should be displayed side by side by default. Closes [#9183](https://github.com/ckeditor/ckeditor5/issues/9183). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: An image should never overflow the widget boundaries while changing its size. Closes [#9166](https://github.com/ckeditor/ckeditor5/issues/9166). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The size label should be displayed above the image if it does not fit inside. See [#9166](https://github.com/ckeditor/ckeditor5/issues/9166). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: An image caption placeholder text should not wrap or overflow. Closes [#9162](https://github.com/ckeditor/ckeditor5/issues/9162). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The link UI should be shown when clicking a linked inline widget. Closes [#9607](https://github.com/ckeditor/ckeditor5/issues/9607). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing)**: The editor will not crash when a restricted area marker is removed. Closes [#9650](https://github.com/ckeditor/ckeditor5/issues/9650). ([commit](https://github.com/ckeditor/ckeditor5/commit/f358e6d6faa66dce48d576cbd5fa4dfd15758bdb))
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: The highlights for suggestions created in earlier revisions are now properly shown.
* **[revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history)**: Revision history will no longer crash if the table plugin has not been added to the editor.
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Selected inline widgets wrapped in an attribute in the view should create a fake selection. Closes [#9524](https://github.com/ckeditor/ckeditor5/issues/9524), [#9521](https://github.com/ckeditor/ckeditor5/issues/9521). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))

### Other changes

* **[build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document)**: The editor document build now includes the `ImageResize` plugin. Closes [#9507](https://github.com/ckeditor/ckeditor5/issues/9507). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: The `Comment#isRemovable` property is now bound to `CommentThread#isRemovable`. `Comment#isRemovable` is set to `true` if the local user is the author, or if the comment thread is removable and the comment is the first comment in the thread.
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Added several new icons for new image styles (see [#8909](https://github.com/ckeditor/ckeditor5/issues/8909)). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image)**: Removed the `Image` plugin dependency from the `EasyImage` plugin. Closes [#9399](https://github.com/ckeditor/ckeditor5/issues/9399). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed parsing leading HTML comments by `HtmlDataProcessor.toView()`. Closes [#9861](https://github.com/ckeditor/ckeditor5/issues/9861). ([commit](https://github.com/ckeditor/ckeditor5/commit/12dc7ba19490f155d494209f1987814d24f80048))
* **[horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line)**: New widgets will replace the selected block instead of being added next to it on insertion (see [#9102](https://github.com/ckeditor/ckeditor5/issues/9102)). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The default image style is now called `block`, instead of `full`. Its label now reads "Centered image" and it is represented by the appropriate icon in the image toolbar. See [#9545](https://github.com/ckeditor/ckeditor5/issues/9545). ([commit](https://github.com/ckeditor/ckeditor5/commit/b5908e519b653fcfbd0c2a331e78d14167d4a81f))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Turned the image utilities module into an editor plugin to allow sharing utilities outside the package. See [#8871](https://github.com/ckeditor/ckeditor5/issues/8871). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image toolbar should be visible if the selection is placed inside an image caption. Closes [#9136](https://github.com/ckeditor/ckeditor5/issues/9136). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image caption should be controlled using the toolbar button and a command for a better integration with image styles. Closes [#8907](https://github.com/ckeditor/ckeditor5/issues/8907). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: Made collaboration features compatible with inline images.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added the `.ck-table-bogus-paragraph` CSS class to the in-cell pseudo-paragraph used for data tables for easier and safer styling. ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Added the `class` property to the `SplitButtonView` UI component. Closes [#8909](https://github.com/ckeditor/ckeditor5/issues/8909). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Safeguarded the way the `Widget` plugin sets the fake selection. Closes [#9580](https://github.com/ckeditor/ckeditor5/issues/9580). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Replaced the `findOptimalInsertionPosition()` helper with `findOptimalInsertionRange()` that will now attempt to replace selected blocks when inserting new widgets. Closes [#9102](https://github.com/ckeditor/ckeditor5/issues/9102). ([commit](https://github.com/ckeditor/ckeditor5/commit/4c228fb0549507f01d1f1ba4f9862817ac589279))
* Optimized icons. ([commit](https://github.com/ckeditor/ckeditor5/commit/4ce9cf22a439427f61d0f5cb319665823a2aecf0))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/196d308ade44197a7f3be68a7da897442ded55bc), [commit](https://github.com/ckeditor/ckeditor5/commit/225cfd3b12386f2df9328bc2391397adc19f286f))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-source-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-source-editing): v29.0.0

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v28.0.0 => v29.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-html-support](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-support): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v28.0.0 => v29.0.0

Other releases:

* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-find-and-replace](https://www.npmjs.com/package/@ckeditor/ckeditor5-find-and-replace): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v28.0.0 => v29.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v28.0.0 => v29.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v28.0.0 => v29.0.0
</details>


## [28.0.0](https://github.com/ckeditor/ckeditor5/compare/v27.1.0...v28.0.0) (2021-05-31)

### Release highlights

We are happy to announce the release of CKEditor 5 v28.0.0.

This release introduces several new features:

* The [Revision History](https://ckeditor.com/ckeditor-5/revision-history/) feature that allows the users to create, view and restore named content versions.
* The possibility to [add captions to tables](https://github.com/ckeditor/ckeditor5/issues/3204).
* The ability to specify [the default properties for tables and table cells](https://github.com/ckeditor/ckeditor5/issues/8502).
* The new `allowChildren` property for [the data schema item definition](https://github.com/ckeditor/ckeditor5/issues/9261).
* The export to PDF and export to Word features are now [enabled in the read-only mode](https://github.com/ckeditor/ckeditor5/issues/7567).
* The [plugin metadata](https://github.com/ckeditor/ckeditor5/issues/6642) and the [complete documentation of the HTML output of all editor features](https://github.com/ckeditor/ckeditor5/issues/9401).

There were also a few bug fixes:

* [Word can now properly open a file with nested tables exported from CKEditor 5](https://github.com/ckeditor/ckeditor5/issues/9474).
* [Pasting in the horizontal caret no longer replaces the widget](https://github.com/ckeditor/ckeditor5/issues/9477).
* [Correcting spelling in a list does not throw an error anymore](https://github.com/ckeditor/ckeditor5/issues/9325).
* [Toolbar navigation with the keyboard works in the right direction in a Right-to-Left text](https://github.com/ckeditor/ckeditor5/issues/5585).
* [The media embed feature now supports more URL schemes for Google Maps](https://github.com/ckeditor/ckeditor5/issues/2762).

Read more in the blog post: https://ckeditor.com/blog/revision-history-is-officially-live-ckeditor-5-v28.0.0-released/.

### MAJOR BREAKING CHANGES

**Note:** Check out the [Migration to CKEditor 5 v28.0.0](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-28.html) guide for more detailed information on how to upgrade to the current version.

* All the packages use multiple exports instead of one object in the `src/index.js` file. See the [list of affected packages](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-28.html#imports-from-index-files-of-non-dll-core-packages).

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Styles definitions for the `border:*` property produced by the styles processor will now be merged as a single `border:*` property if all its properties (width, style and color) for all edges (top, right, bottom, left) are the same.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `TablePropertiesView` and `TableCellPropertiesView` classes require an additional property in the object as the second constructor argument (`options.defaultTableProperties` for the table and `options.defaultTableCellProperties` for table cells).
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `upcastBorderStyles()` conversion helper requires a third argument called `defaultBorder`. The object defines the default border (`width`, `color`, `style`) properties.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The following conversion helpers: `upcastStyleToAttribute()`, `downcastAttributeToStyle()`, `downcastTableAttribute()` accept two arguments now (the conversion and the options objects). Previous usage: `conversionHelper( conversion, /* ... */ )` should be replaced with `conversionHelper( conversion, { /* ... */ } )`.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Values for the `borderColor`, `borderStyle`, `borderWidth`, and `padding` model attributes are unified (to values produced by the editor itself) when upcasting the table or table cells if all sides (top, right, bottom and left) have the same values. Previously, the `<table style="border: 1px solid #ff0">` element was upcasted to `<table borderStyle="{"top":"solid","right":"solid","bottom":"solid","left":"solid"}" borderColor="{...}" borderWidth="{...}">`. Now the object will be replaced with the string value: `<table borderStyle="solid" borderColor="#ff0" borderWidth="1px">`. The same structure is created when using the editor's toolbar. If border values are not identical, the object notation will be inserted into the model (as it is now).
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The following classes require the second argument called `defaultValue` which is the default value for the command:
  - `TableCellHorizontalAlignmentCommand`,
  - `TableCellVerticalAlignmentCommand`,
  - `TableCellBackgroundColorCommand`,
  - `TableCellBorderColorCommand`,
  - `TableCellBorderStyleCommand`,
  - `TableCellBorderWidthCommand`,
  - `TableCellHeightCommand`,
  - `TableCellPropertyCommand`,
  - `TableCellWidthCommand`,
  - `TableCellPaddingCommand`,
  - `TableAlignmentCommand`,
  - `TableBackgroundColorCommand`,
  - `TableBorderColorCommand`,
  - `TableBorderStyleCommand`,
  - `TableBorderWidthCommand`,
  - `TableHeightCommand`,
  - `TablePropertyCommand`,
  - `TableWidthCommand`.

### Features

* Introduced the [Revision History](https://ckeditor.com/blog/document-version-control-for-any-software-ckeditor-5-revision-history/) feature that allows the users to create, view and restore content versions.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `SchemaItemDefinition#allowChildren` property simplifying the defining of which other items are allowed inside this schema item definition. Closes [#9261](https://github.com/ckeditor/ckeditor5/issues/9261). ([commit](https://github.com/ckeditor/ckeditor5/commit/6a37ecc7b97095e82d165f16ced6843be8b6f565))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced the `'mouseover'` and `'mouseout'` events in the `MouseObserver` class. Closes [#9338](https://github.com/ckeditor/ckeditor5/issues/9338). ([commit](https://github.com/ckeditor/ckeditor5/commit/79454f872b26db6fafa56aa63dd5f4e5a4ec6477))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `StylesProcessor` reducer for the `border:*` CSS property was extended to be able to merge to the `border:*` property if all its properties (width, style and color) are specified. Otherwise, the `border-(width|style|color)` definition should be returned. Closes [#9490](https://github.com/ckeditor/ckeditor5/issues/9490). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e1328b670badc9d0abb8a56882d4158294b1386))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added support for table captions. Closes [#3204](https://github.com/ckeditor/ckeditor5/issues/3204). ([commit](https://github.com/ckeditor/ckeditor5/commit/b5427212077469cf50fdd196611ec6b5767daa99))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added support for the default table cell properties. Read more about it [in the table feature guide](https://ckeditor.com/docs/ckeditor5/latest/features/table.html#default-table-and-table-cell-styles). ([commit](https://github.com/ckeditor/ckeditor5/commit/37f1699760695c58b2da0a30fee1579a7a38236d))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added support for the default table properties. Read more about it [in the table feature guide](https://ckeditor.com/docs/ckeditor5/latest/features/table.html#default-table-and-table-cell-styles). Closes [#8502](https://github.com/ckeditor/ckeditor5/issues/8502), [#9219](https://github.com/ckeditor/ckeditor5/issues/9219). ([commit](https://github.com/ckeditor/ckeditor5/commit/efe5e5744c83b910c06b8b763ae177b617a33eb2))

### Bug fixes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Fixed comments marker conversion that would fail if the comment marker is in a model document fragment.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added checks for the upcast attribute-to-marker converter before changing the data and consuming view elements. Part of [#9779](https://github.com/ckeditor/ckeditor5/issues/9779). ([commit](https://github.com/ckeditor/ckeditor5/commit/8f51495fa5090262588cfded3982c73b71aa4b8b))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Updated `downcastwriter` to allow setting up attribute element's priority to `0`. Closes [#5797](https://github.com/ckeditor/ckeditor5/issues/5797). ([commit](https://github.com/ckeditor/ckeditor5/commit/7422073bfef2460ca1fb4ec297b5c018f553d7aa))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `model.deleteContent()` method should not exclude a block widget at the end of the deletion range. ([commit](https://github.com/ckeditor/ckeditor5/commit/56a307accc861484d0dd4b26f293437a8aa3ee83))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The conversion upcast `elementToAttribute()` and `attributeToAttribute()` functions should not call the `model.value()` callback if the element will not be converted. Closes [#9536](https://github.com/ckeditor/ckeditor5/issues/9536). ([commit](https://github.com/ckeditor/ckeditor5/commit/efe5e5744c83b910c06b8b763ae177b617a33eb2))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The renderer should not crash when removing multiple DOM nodes in the same render cycle. Closes [#9534](https://github.com/ckeditor/ckeditor5/issues/9534). ([commit](https://github.com/ckeditor/ckeditor5/commit/75ebb48d970a1ec112084d0c8247ba04bb20d7c2)). Thanks to [bendemboski](https://github.com/bendemboski)!
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: Allow rendering the `<script>` element inside the HTML preview. Closes [#8326](https://github.com/ckeditor/ckeditor5/issues/8326). ([commit](https://github.com/ckeditor/ckeditor5/commit/17cbd380cbbfd813f2d142dd7fca18e45eed5f1c))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: All text attributes starting their names with `link` will be removed when typing over a link or clicking at the end of the link. Closes [#8462](https://github.com/ckeditor/ckeditor5/issues/8462). ([commit](https://github.com/ckeditor/ckeditor5/commit/5a2fbb2e92e6d7cbeb9b1b4389a7b0969bd0c0b8))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Fixed a crash when applying a spell checker suggestion to a word inside a list item. Closes [#9325](https://github.com/ckeditor/ckeditor5/issues/9325). ([commit](https://github.com/ckeditor/ckeditor5/commit/7d3e0981df77a4422f4efdcefca0c587577fd0fa))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Added support for more Google Maps URL formats (`goo.gl/maps`, `maps.google.com`, `maps.app.goo.gl`). Closes [#2762](https://github.com/ckeditor/ckeditor5/issues/2762). ([commit](https://github.com/ckeditor/ckeditor5/commit/a5991c9017e1591bd0c165a02732b46967aea008))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed a crash happening in some scenarios when a block quote deletion suggestion was accepted.
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Fixed a crash with inline formatting suggestion in the content with a `<br>` tag.
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)** Fixed arrow handling with the toolbar focused in case of RTL language UI. Closes [#5585](https://github.com/ckeditor/ckeditor5/issues/5585). ([commit](https://github.com/ckeditor/ckeditor5/commit/2d2e34f5176935ad3003c6d1ab3f274baa85d8d9))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Pasting plain text while the widget fake caret is active should not remove the widget. Closes [#9477](https://github.com/ckeditor/ckeditor5/issues/9477). ([commit](https://github.com/ckeditor/ckeditor5/commit/9978a9ab11f86ec46c2c04ba8d63c73bd35d4f07))
* All non-DLL packages will re-export their modules instead of exporting the default object with these modules as the object entries. Closes [#9134](https://github.com/ckeditor/ckeditor5/issues/9134). ([commit](https://github.com/ckeditor/ckeditor5/commit/e010f382d158a0bd594d84457ddc665f480e2c53))

### Other changes

* **[comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments)**: Improved performance for handling a huge number of annotations.
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: In the marker-to-data conversion, attributes for marker boundaries will be used every time the marker starts or ends before or after the model element, instead of only where a text is not allowed by the model schema. Closes [#9622](https://github.com/ckeditor/ckeditor5/issues/9622). ([commit](https://github.com/ckeditor/ckeditor5/commit/36b685ce665431a7df31179e3b4e15f2fa4a81e4))
* **[export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**: The `exportPdf` command will not be disabled if the editor goes into read-only mode as it does not impact the data.
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: The `exportWord` command will not be disabled if the editor goes into read-only mode as it does not impact the data.
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Border definitions produced by the `TableProperties` and `TableCellProperties` features will be merged into a group if possible. Instead of producing the `border-(top|right|bottom|left):*` property, the `border:*` definition will be returned. The same applies to the table cell padding. See [#9490](https://github.com/ckeditor/ckeditor5/issues/9490). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e1328b670badc9d0abb8a56882d4158294b1386))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/92a03a9ddf66b6b22507396d4bc91e2a0e1f52cc), [commit](https://github.com/ckeditor/ckeditor5/commit/ed70b6f1165e075888572231ad4a2fdad58c23a0))
* Added plugin metadata to packages. Introducing new guides for the metadata and the present HTML output of the features. Closes [#6642](https://github.com/ckeditor/ckeditor5/issues/6642). ([commit](https://github.com/ckeditor/ckeditor5/commit/cad8a725b0e3b730f08fcf8368ec57d6f94156d2))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v27.1.0 => v28.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v27.1.0 => v28.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-revision-history](https://www.npmjs.com/package/@ckeditor/ckeditor5-revision-history): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v27.1.0 => v28.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v27.1.0 => v28.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v27.1.0 => v28.0.0
</details>


## [27.1.0](https://github.com/ckeditor/ckeditor5/compare/v27.0.0...v27.1.0) (2021-04-19)

### Release highlights

We are happy to announce the release of CKEditor 5 v27.1.0.

This release introduces some new features:

* Support for [nested tables](https://github.com/ckeditor/ckeditor5/issues/3232).
* Support for [nested block quotes](https://github.com/ckeditor/ckeditor5/issues/9210).
* Content with the [deprecated `align` attribute](https://github.com/ckeditor/ckeditor5/issues/9193) can now be loaded into the editor (but will be transformed to a modern format).

There were also a few bug fixes:

* The empty value in the configuration (`config.initialData`) will have [precedence over a non-empty DOM element when creating the editor](https://github.com/ckeditor/ckeditor5/issues/8974).
* [The watchdog feature does not import CKEditor 5 utilities](https://github.com/ckeditor/ckeditor5/issues/9315) to avoid code duplication in external framework integrations.
* [Dragging the entire table cell](https://github.com/ckeditor/ckeditor5/issues/9370) is no longer possible.
* [The selection will no longer get stuck in read-only mode](https://github.com/ckeditor/ckeditor5/issues/9372).
* [Attributes that have already been set are no longer overridden while setting attributes upon upcast conversion](https://github.com/ckeditor/ckeditor5/issues/8921), as this caused text styles to not be properly converted.

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v27.1.0-with-table-and-block-quote-nesting/.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Added the new `useFillerType()` method in the `DataProcessor` interface. Classes based on this interface should implement `useFillerType()` to avoid errors.
* **[upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload)**: The asynchronous `SimpleUploadAdapter#upload()` method resolves to an object with normalized data including the `urls` object, which was only returned before. This may affect all integrations depending on the `SimpleUploadAdapter` uploading mechanism.

### Features

* **[alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment)**: Added support for the deprecated `align` attribute. Closes [#9193](https://github.com/ckeditor/ckeditor5/issues/9193). ([commit](https://github.com/ckeditor/ckeditor5/commit/3c69604b2ed6b0c17bec666d66d6742bd711bca7))
* **[block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote)**: Added support for nested block quotes. Check the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-27.html#migration-to-ckeditor-5-v2710) if you want to disable this behavior and disallow nesting quotes. Closes [#9210](https://github.com/ckeditor/ckeditor5/issues/9210). ([commit](https://github.com/ckeditor/ckeditor5/commit/18de0e24681351d5ddcf7bdb605f066775369dcc))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced new "markedNbsp" block filler mode in `DomConverter`, in which `<span data-cke-filler="true">&nbsp;</span>` is inserted, to prevent leaking extra space characters into the data. ([commit](https://github.com/ckeditor/ckeditor5/commit/5217b3063db01fdebd46ebb6309ccf4ff21f7e03))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `useFillerType()` in `HtmlDataProcessor` and `XmlDataProcessor` to switch between using marked and regular `nbsp` block fillers. Closes [#9345](https://github.com/ckeditor/ckeditor5/issues/9345). ([commit](https://github.com/ckeditor/ckeditor5/commit/5217b3063db01fdebd46ebb6309ccf4ff21f7e03))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Enabled marker downcast for document fragments. Closes [#9460](https://github.com/ckeditor/ckeditor5/issues/9460). ([commit](https://github.com/ckeditor/ckeditor5/commit/5b99c75814efb1b0caadd0c765879c28f2671415))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introduced the `uploadComplete` event in `ImageUploadEditing` that allows customizing the image element (e.g. setting custom attributes) based on the data retrieved from the upload adapter. Closes [#5204](https://github.com/ckeditor/ckeditor5/issues/5204). ([commit](https://github.com/ckeditor/ckeditor5/commit/bf5b561425dd497a40b7ca6a074279823fb5a84e))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: Introduced the `config.mediaEmbed.elementName` to allow setting semantic element name. Closes [#9373](https://github.com/ckeditor/ckeditor5/issues/9373). ([commit](https://github.com/ckeditor/ckeditor5/commit/aefc6a29b189cb5d9366d6344ee450b01130f3d1))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: Added support for nested tables. Check the [migration guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-27.html#migration-to-ckeditor-5-v2710) if you want to disable this behavior and disallow nesting tables. Closes [#3232](https://github.com/ckeditor/ckeditor5/issues/3232). ([commit](https://github.com/ckeditor/ckeditor5/commit/e0eca47a42dc3813e2a02ba811cc56675334051c))
* **[upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload)**: The upload adapters' asynchronous `#upload()` method resolves to an object with additional properties along with the `urls` hash. See more in [#5204](https://github.com/ckeditor/ckeditor5/issues/5204). ([commit](https://github.com/ckeditor/ckeditor5/commit/bf5b561425dd497a40b7ca6a074279823fb5a84e))

### Bug fixes

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The selection was stuck and impossible to change in read-only mode. Closes [#9372](https://github.com/ckeditor/ckeditor5/issues/9372). ([commit](https://github.com/ckeditor/ckeditor5/commit/5735af2b6cd9fa8b41e9f09172c2440c1a4471af))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The nested editable element should not be dragged. Closes [#9370](https://github.com/ckeditor/ckeditor5/issues/9370). ([commit](https://github.com/ckeditor/ckeditor5/commit/5735af2b6cd9fa8b41e9f09172c2440c1a4471af))
* **[code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block)**: Markers created in or on code block element are now preserved after the document is loaded. Closes [#9402](https://github.com/ckeditor/ckeditor5/issues/9402). ([commit](https://github.com/ckeditor/ckeditor5/commit/2616f8b5240bc8966d0ec0cadcd4bf23ddd75431))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `MultiCommand.execute()` method prevents calling undefined commands. ([commit](https://github.com/ckeditor/ckeditor5/commit/e142d6d6342000421088703449231bb0f0b468de))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: While setting attributes upon upcast conversion, do not override attributes that have already been set. The correct behavior is to keep the attributes applied by the deepest nodes in the view tree as, in most cases, the deepest node will have precedence (e.g. an inline style applied by the deepest node). Closes [#8921](https://github.com/ckeditor/ckeditor5/issues/8921). ([commit](https://github.com/ckeditor/ckeditor5/commit/9a819feb6a27f45f8eabf66a3fa357386ccfa5fe))
* **[track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes)**: Accepting multiple "turn on/off list item" suggestions (created by multiple users) that should cause the same effect will have a correct result now.
* **[watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog)**: Removed imports from the `ckeditor5` package. Closes [#9315](https://github.com/ckeditor/ckeditor5/issues/9315). ([commit](https://github.com/ckeditor/ckeditor5/commit/c1fa757973bce0b150aefd22ddb5f16bc7e4814a))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: Hide the selection handler in the nested widget if the outer widget is hovered or selected. Closes [#9453](https://github.com/ckeditor/ckeditor5/issues/9453), [#8964](https://github.com/ckeditor/ckeditor5/issues/8964). ([commit](https://github.com/ckeditor/ckeditor5/commit/fbfe726136b4c0fa298de33db3fcccd93d1bb161))
* The editor was not initialized with the empty data for `config.initialData` set to an empty string. Closes [#8974](https://github.com/ckeditor/ckeditor5/issues/8974). ([commit](https://github.com/ckeditor/ckeditor5/commit/bce8267e16fccb25448b4c68acc3bf54336aa087))

### Other changes

* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: Introduced the `config.forceValue` option to `ListCommand` that forces turning list items on or off instead of toggling. ([commit](https://github.com/ckeditor/ckeditor5/commit/e16448576cdc40ff76fe19058bea2954bf536411))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/4a663d79fe065b251b873b2ff5c67697dc214cf6))
* **[real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration)**: The `Editor.create()` method will throw an error if the initial websocket connection cannot be established.

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v27.0.0 => v27.1.0

Releases containing new features:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v27.0.0 => v27.1.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v27.0.0 => v27.1.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v27.0.0 => v27.1.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v27.0.0 => v27.1.0
</details>


## [27.0.0](https://github.com/ckeditor/ckeditor5/compare/v26.0.0...v27.0.0) (2021-03-22)

### Release highlights

We are happy to announce the release of CKEditor 5 v27.0.0 that contains security fixes for multiple packages: `ckeditor5-engine`, `ckeditor5-font`, `ckeditor5-image`, `ckeditor5-list`, `ckeditor5-markdown-gfm`, `ckeditor5-media-embed`, `ckeditor5-paste-from-office`, `ckeditor5-widget`. Even though this is a low impact issue and only affects the victim's browser with no risk of data leakage, an upgrade is highly recommended! You can read more details in the relevant [security advisory](https://github.com/ckeditor/ckeditor5/security/advisories/GHSA-3rh3-wfr4-76mj) and [contact us](https://ckeditor.com/contact/) if you have more questions.

The CKEditor 5 team would like to thank Yeting Li for recognizing and reporting these vulnerabilities.

Starting from this version, collaboration features release notes will be included in the CKEditor 5 changelog. Changes for the previous releases are available on https://ckeditor.com/collaboration/changelog/.

This release introduces some new features:

* The new [text part language](https://ckeditor.com/docs/ckeditor5/latest/features/language.html) feature allows you to define the language for each passage of content written in multiple languages. This helps satisfy the WCAG Success Criterion 3.1.2 Language of Parts.
* Support for [drag and dropping of textual content and block objects](https://ckeditor.com/docs/ckeditor5/latest/features/pasting/drag-drop.html) (like images and tables) within the editor.
* Support for [dropping HTML content from outside of the editor](https://ckeditor.com/docs/ckeditor5/latest/features/pasting/drag-drop.html) into the editor.
* [Alignment can now be set using classes](https://github.com/ckeditor/ckeditor5/issues/8516).
* [Typing `[x]` will now insert a checked to-do list item](https://github.com/ckeditor/ckeditor5/issues/8877).
* Support for [bubbling of `view.Document` events](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/event-system.html#view-events-bubbling).

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v27.0.0-with-drag-and-drop-text-part-language-and-bubbling-events/.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

**Note:** Check out the [Migration to CKEditor 5 v27.0.0](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-27.html) guide for more detailed information on how to upgrade to this version.

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `inputTransformation` event is no longer fired by the `Clipboard` plugin. Now the `ClipboardPipeline` plugin is responsible for firing this event (see [#9128](https://github.com/ckeditor/ckeditor5/issues/9128)).
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `clipboardInput` and `inputTransformation` events should not be fired or stopped in the feature code. The `data.content` property should be assigned to override the default content instead. You can stop this event only if you want to completely disable pasting or dropping of some content. [Read more about the clipboard pipeline in the migration to v27.0.0 guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-27.html#clipboard-input-pipeline-integration). See [#9128](https://github.com/ckeditor/ckeditor5/issues/9128).
* Introduced bubbling of the `view.Document` events, similar to how bubbling works in the DOM. This allowed us to re-prioritize many listeners that previously had to rely on the `priority` property. However, it means that existing listeners that use priorities may now be executed at a wrong time. The listeners to such events should be reviewed in terms of when they should be executed (in what context/element/phase). [Read more about event bubbling in the migration to v27.0.0 guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-27.html#the-viewdocument-event-bubbling). See [#8640](https://github.com/ckeditor/ckeditor5/issues/8640).

### Features

* **[alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment)**: Introduced an option to use classes instead of inline styles. Closes [#8516](https://github.com/ckeditor/ckeditor5/issues/8516). ([commit](https://github.com/ckeditor/ckeditor5/commit/638543bd6d3f1e1c1ffc864e4d4007744fffc62c))
* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Typing `[x]` will insert a checked to-do list item. Closes [#8877](https://github.com/ckeditor/ckeditor5/issues/8877). ([commit](https://github.com/ckeditor/ckeditor5/commit/18be7dabaf62c763bd3272fc8467aec0ae94ac98))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: Implemented basic support for content drag and drop. Closes [#9128](https://github.com/ckeditor/ckeditor5/issues/9128). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The `contentInsertion` event is fired from `ClipboardPipeline` to enable customization of content insertion (see [#9128](https://github.com/ckeditor/ckeditor5/issues/9128)). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: Created the universal caption icon. Closes [#9196](https://github.com/ckeditor/ckeditor5/issues/9196). ([commit](https://github.com/ckeditor/ckeditor5/commit/6dce730c27db063c13c71d363458731cb57faac9))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced bubbling of the `view.Document` events, similar to how bubbling works in the DOM. Bubbling allows listening on a view event on a specific kind of element, hence simplifying code that needs to handle a specific event for only that element (e.g. `enter` in `blockquote` elements only). Read more in the [Event system deep-dive guide](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/deep-dive/event-system.html). Closes [#8640](https://github.com/ckeditor/ckeditor5/issues/8640). ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Introduced `ArrowKeysObserver`. See [#8640](https://github.com/ckeditor/ckeditor5/issues/8640). ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
* **[language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language)**: Added support for setting the text part language. Closes [#8989](https://github.com/ckeditor/ckeditor5/issues/8989).

### Bug fixes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `DataController#toView()` should have a default value for the `options` parameter. Closes [#9293](https://github.com/ckeditor/ckeditor5/issues/9293). ([commit](https://github.com/ckeditor/ckeditor5/commit/f77a3d57bddb96ae3280736f974cfd0b148611cb))
* **[highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight)** The remove highlight button now also gets disabled along with the main highlight command. Closes [#9174](https://github.com/ckeditor/ckeditor5/issues/9174). ([commit](https://github.com/ckeditor/ckeditor5/commit/04acdfec9e7ee4b38daa1ef372e201f535d960fc))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The `EmitterMixin#listenTo()` method is split into listener and emitter parts. The `ObservableMixin` decorated methods reverted to the original method while destroying an observable. ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))

### Other changes

* **[clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard)**: The paste as plain text feature was extracted to the dedicated `PastePlainText` plugin (see [#9128](https://github.com/ckeditor/ckeditor5/issues/9128)). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `mouseup` event is fired by the `MouseObserver` (see [#9128](https://github.com/ckeditor/ckeditor5/issues/9128)). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `mouseup` event is no longer fired by the `MouseEventsObserver` from the `@ckeditor/ckeditor5-table` package (now handled by `MouseObserver`) (see [#9128](https://github.com/ckeditor/ckeditor5/issues/9128)). ([commit](https://github.com/ckeditor/ckeditor5/commit/8461da5fd6d3e050b8fd15aecf4527a83d0899af))
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: The `TwoStepCaretMovement` feature is now using bubbling events. Closes [#7437](https://github.com/ckeditor/ckeditor5/issues/7437). ([commit](https://github.com/ckeditor/ckeditor5/commit/5527283324ad8bef5231acde0e49f9fc78df9c90))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added the `language.getLanguageDirection` helper function allowing to determine the text direction based on the language code. ([commit](https://github.com/ckeditor/ckeditor5/commit/9f1b10fc8efd61b4bf9f4234c8d8b84e705af9b6))
* Optimized icons. ([commit](https://github.com/ckeditor/ckeditor5/commit/358a653c18853f5bc4afba04da2ea3b883b5d1d6))
* Updated English translations for the text part language feature. ([commit](https://github.com/ckeditor/ckeditor5/commit/eaed55a23dccd44c2a37dac5d820940458170903))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

New packages:

* [@ckeditor/ckeditor5-language](https://www.npmjs.com/package/@ckeditor/ckeditor5-language): v27.0.0

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v26.0.0 => v27.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v26.0.0 => v27.0.0

Other releases:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-collaboration-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-collaboration-core): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-comments](https://www.npmjs.com/package/@ckeditor/ckeditor5-comments): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-operations-compressor](https://www.npmjs.com/package/@ckeditor/ckeditor5-operations-compressor): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-real-time-collaboration](https://www.npmjs.com/package/@ckeditor/ckeditor5-real-time-collaboration): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-track-changes](https://www.npmjs.com/package/@ckeditor/ckeditor5-track-changes): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v26.0.0 => v27.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v26.0.0 => v27.0.0
* [@ckeditor/letters](https://www.npmjs.com/package/@ckeditor/letters): v26.0.0 => v27.0.0
</details>


## [26.0.0](https://github.com/ckeditor/ckeditor5/compare/v25.0.0...v26.0.0) (2021-03-01)

### Release highlights

We are happy to announce the release of CKEditor 5 v26.0.0.

This release brings some new features:

* [It is now possible to add plugins to CKEditor 5 builds](https://github.com/ckeditor/ckeditor5/issues/8395). Read more in the [DLL builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html) guide.
* [The editor placeholder now behaves like a native input placeholder](https://github.com/ckeditor/ckeditor5/issues/8058).
* [It is now possible to style inline widgets (e.g. with bold)](https://github.com/ckeditor/ckeditor5/issues/1633).
* [The font feature now supports loading legacy `<font>` elements](https://github.com/ckeditor/ckeditor5/issues/8621).

There were also some important bug fixes and improvements:

* [Autoformat will no longer create a code block when typing in bulleted or numbered lists](https://github.com/ckeditor/ckeditor5/issues/8633).
* [Indent buttons order was reversed in all default build configurations](https://github.com/ckeditor/ckeditor5/issues/8884).
* [Copying a nested table pasted into the editor no longer crashes it](https://github.com/ckeditor/ckeditor5/issues/8917).
* [A period now sticks to the preceding word during word wrap](https://github.com/ckeditor/ckeditor5/issues/8852).
* [The <kbd>Ctrl</kbd> key is now translated to <kbd>Cmd</kbd> on macOS](https://github.com/ckeditor/ckeditor5/issues/5705) to avoid conflicts with some macOS keyboard shortcuts.

Read more in the blog post: https://ckeditor.com/blog/ckeditor-5-v26.0.0-with-extensible-builds-inline-widget-styling-and-annotations-guides/.

### Collaboration features

The CKEditor 5 Collaboration features changelog can be found here: https://ckeditor.com/collaboration/changelog.

### MAJOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

**Note:** Check out the [Migration to CKEditor 5 v26.0.0](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/migration/migration-to-26.html) guide for more detailed information on how to upgrade to this version.

* Several plugins are not loaded automatically as dependencies of other plugins anymore. From now on, they need to be provided by the editor creator manually (via `config.plugins`). This list includes:
  - The `CloudServicesUploadAdapter` plugin no longer loads `CloudServices`. Make sure to add `CloudServices` to the editor plugins when using the `CloudServicesUploadAdapter` or `EasyImage` features.
  - The `EasyImage` plugin no longer loads `Image` and `ImageUpload`. Make sure to add `Image` and `ImageUpload` to the editor plugins when using the `EasyImage` feature.
  - The `CKFinder` plugin no longer loads `CKFinderUploadAdapter`. The `CKFinderEditing` plugin no longer loads `ImageEditing` and `LinkEditing` features. Make sure to add `CKFinderUploadAdapter`, `Image`, and `Link` features to the editor plugins when using the `CKFinder` feature.
  - The `Title` plugin no longer loads `Paragraph`. Make sure to add `Paragraph` to the editor plugins when using the `Title` feature.
  - The `ListEditing` plugin no longer loads `Paragraph`. Make sure to add `Paragraph` to the editor plugins when using the `List` feature.
  - The `LinkImageEditing` plugin no longer loads `ImageEditing`. Make sure to add `Image` to the editor plugins when using the `LinkImage` feature.
  - The `LinkImageUI` plugin no longer loads `Image`. Make sure to add `Image` to the editor plugins when using the `LinkImage` feature.
  - The `ExportPdf` plugin no longer loads `CloudServices`. Make sure to add `CloudServices` to the editor plugins when using the `ExportPdf` feature.
  - The `ExportWord` plugin no longer loads `CloudServices`. Make sure to add `CloudServices` to the editor plugins when using the `ExportWord` feature.
* **[cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core)**: The package was merged into `@ckeditor/ckeditor5-cloud-services`. All classes that were available in the `@ckeditor/ckeditor-cloud-services-core` package were moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin that is located in `@ckeditor/ckeditor5-cloud-services`. See [#8811](https://github.com/ckeditor/ckeditor5/issues/8811).
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The following modules were moved (before → after):
  - `image/image/imageinsertcommand~ImageInsertCommand` → `image/image/insertimagecommand~InsertImageCommand`
  - `image/imageresize/imageresizecommand~ImageResizeCommand` → `image/imageresize/resizeimagecommand~ResizeImageCommand`
  - `image/imageupload/imageuploadcommand~ImageUploadCommand` → `image/imageupload/uploadimagecommand~UploadImageCommand`

* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac).
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The `list/todolistcheckedcommand~TodoListCheckCommand` module was moved to `list/checktodolistcommand~CheckTodoListCommand`.
* Keystrokes with the <kbd>Ctrl</kbd> modifier will not be handled on macOS unless the modifier is registered as a forced one (for example: `Ctrl!+A` will not be translated to `Cmd+A` on macOS).

### Features

* **[cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services)**: Created the `CloudServicesCore` plugin that provides the base API for communication with CKEditor Cloud Services. ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core)**: The `PluginCollection` class will allow requiring a plugin by name if it is provided in `config.plugins` or if it was already loaded. Closes [#2907](https://github.com/ckeditor/ckeditor5/issues/2907). ([commit](https://github.com/ckeditor/ckeditor5/commit/b278fde89d1eb635be7e4e3a57d8dba2bd0f98a6))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `ContainerElement` can be marked as `isAllowedInsideAttributeElement` in order to allow wrapping it with attribute elements. This is useful, for example, for inline widgets. Other element types (UI, Raw, Empty) have this flag on by default but it can be changed via `options.isAllowedInsideAttributeElement` to `false`. Read more in the `DowncastWriter#create*()` methods documentation. Closes [#1633](https://github.com/ckeditor/ckeditor5/issues/1633). ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Added support for the `<font>` element. Closes [#8621](https://github.com/ckeditor/ckeditor5/issues/8621). ([commit](https://github.com/ckeditor/ckeditor5/commit/0545fe6515f5454f7c7961ee2415c23366e2da08))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: Added the forced modifier key (`Ctrl!`) for keystrokes that should not be mapped to <kbd>Cmd</kbd> on macOS. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))

### Bug fixes

* **[build-*](https://www.npmjs.com/search?q=keywords%3Ackeditor5-build%20maintainer%3Ackeditor)**: Switched the order of indent buttons in the default build configuration to "outdent, indent". Closes [#8884](https://github.com/ckeditor/ckeditor5/issues/8884). ([commit](https://github.com/ckeditor/ckeditor5/commit/1e4217506c19fdceb6700b928d86cf464859c57c))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: `DowncastWriter` should handle `UIElements` consistently while wrapping with and inserting them into attribute elements. Closes [#8959](https://github.com/ckeditor/ckeditor5/issues/8959). ([commit](https://github.com/ckeditor/ckeditor5/commit/fcb166ea2bed00cb83eb1c226a6923a6de2e706e))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Words should not break on link boundaries. Closes [#8852](https://github.com/ckeditor/ckeditor5/issues/8852). ([commit](https://github.com/ckeditor/ckeditor5/commit/b67732d66525a814a591c6b185acbfb3b54c3792))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Undoing the deletion of merged paragraphs should result in the original tree. Closes [#8976](https://github.com/ckeditor/ckeditor5/issues/8976). ([commit](https://github.com/ckeditor/ckeditor5/commit/ecba70b44a0185bf5193da7bd77907bd981da74d))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Pasting formatted single-line text over a widget should not split it into multiple paragraphs. Closes [#8953](https://github.com/ckeditor/ckeditor5/issues/8953). ([commit](https://github.com/ckeditor/ckeditor5/commit/dfe803553789de8b162b0dd7fbfac4c419a9b806))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The editor placeholder should not disappear until typing started. Closes [#8689](https://github.com/ckeditor/ckeditor5/issues/8689). ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Fixed content is not restored on undo when multiple blocks and widgets were removed. Closes [#8870](https://github.com/ckeditor/ckeditor5/issues/8870). ([commit](https://github.com/ckeditor/ckeditor5/commit/385234a66ae0168bc57a36d7ec9f1e8f759e0b69))
* **[font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font)**: Fixed the `supportAllValues` configuration for the font size and font family features to work with nested elements (tables). Closes [#7965](https://github.com/ckeditor/ckeditor5/issues/7965). ([commit](https://github.com/ckeditor/ckeditor5/commit/768466c6e0e18b0f4c2230b1f66a2defb2496c50)). Thanks to [@dkrahn](https://github.com/dkrahn)!
* **[heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading)**: In the `Title` plugin, the body placeholder is visible even when the body section is focused. See [#8689](https://github.com/ckeditor/ckeditor5/issues/8689). ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image caption placeholder is now hidden when focused. See [#8689](https://github.com/ckeditor/ckeditor5/issues/8689). ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: The `Autolink` plugin will no longer automatically match domains that only have a `www` subdomain followed with a top level domain, e.g. `http://www.test`. Closes [#8050](https://github.com/ckeditor/ckeditor5/issues/8050). ([commit](https://github.com/ckeditor/ckeditor5/commit/2165447015f688b864a29e50a543e2411ecc9e11))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: IP addresses should be converted into links by the autolink feature while typing. Closes [#8881](https://github.com/ckeditor/ckeditor5/issues/8881). ([commit](https://github.com/ckeditor/ckeditor5/commit/5b85b86160d991f24f5ff46700e1ea90703c40bd))
* **[media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed)**: The `insertMediaEmbed` command should be disabled if any non-media object is selected (see [#8798](https://github.com/ckeditor/ckeditor5/issues/8798)). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The `insertTable` command should be disabled if any object is selected. Closes [#8798](https://github.com/ckeditor/ckeditor5/issues/8798). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
* **[utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils)**: The editor keystrokes are no longer conflicting on macOS. Closes [#5705](https://github.com/ckeditor/ckeditor5/issues/5705). ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* The editor will show the placeholder even when focused. See [#8689](https://github.com/ckeditor/ckeditor5/issues/8689). ([commit](https://github.com/ckeditor/ckeditor5/commit/8a276bdb4f09a74b4e67a4bfe4ddc3409edf84ef))

### Other changes

* Enabled creating builds that can be extended (with more plugins) without the need to recompile. This required splitting the project into the so-called DLL part and consumers of this DLL. Under the hood, the mechanism is based on [webpack DLLs](https://webpack.js.org/plugins/dll-plugin/). This is the first part of the required changes and it contains the necessary breaking changes (see the "MAJOR BREAKING CHANGES" section above). For more information, see the [DLL builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html) guide. Closes [[#8395](https://github.com/ckeditor/ckeditor5/issues/8395)](https://github.com/ckeditor/ckeditor5/issues/8395). ([commit](https://github.com/ckeditor/ckeditor5/commit/b278fde89d1eb635be7e4e3a57d8dba2bd0f98a6))
* **[cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core)**: All classes available in the `@ckeditor/ckeditor-cloud-services-core` package were moved to the `@ckeditor/ckeditor5-cloud-services` package. They should now be instantiated via factory methods on the `CloudServicesCore` plugin. Closes [#8811](https://github.com/ckeditor/ckeditor5/issues/8811). ([commit](https://github.com/ckeditor/ckeditor5/commit/959c1d6d56d43468f01afed6c27637a449f78515))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `KeyObserver` should provide information about `metaKey` being pressed. ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Add WebP format support to the inline pasting of images from source URLs. ([commit](https://github.com/ckeditor/ckeditor5/commit/48ad51d61e10473bab106c17d83b6e05188cd915))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Introduced the `Image.isImageWidget()` utility method. ([commit](https://github.com/ckeditor/ckeditor5/commit/b278fde89d1eb635be7e4e3a57d8dba2bd0f98a6))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The to-do list item toggle keystroke changed to <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (<kbd>Cmd</kbd>+<kbd>Enter</kbd> on Mac). ([commit](https://github.com/ckeditor/ckeditor5/commit/8dac3a98bb93cc6e1d0bfa8d2db8a5d9a6f89988))
* **[widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget)**: The `checkSelectionOnObject` function should be exported by the `@ckeditor/ckeditor5-widget` package (as `@ckeditor/ckeditor5-widget/src/utils`) (see [#8798](https://github.com/ckeditor/ckeditor5/issues/8798)). ([commit](https://github.com/ckeditor/ckeditor5/commit/428917601db732c6dfab48380eda2d8bbbfc7e19))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/aa272552fa06e2320f8b7d3c4e0079b187260b36))
* Unified button and command naming conventions. Old names are available as aliases. Read more about these changes in the [Code style](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/contributing/code-style.html#buttons-commands-and-plugins) guide. Closes [#8033](https://github.com/ckeditor/ckeditor5/issues/8033). ([commit](https://github.com/ckeditor/ckeditor5/commit/e0fcb17d404352133609aa6875d62e056261677f))

  Changes in toolbar buttons (before → after):
  - `imageUpload` → `uploadImage`
  - `imageResize` → `resizeImage`
  - `imageInsert` → `insertImage`
  - `imageResize:*` → `resizeImage:*`

  Changes in command names:
  - `imageInsert` → `insertImage`
  - `imageUpload` → `uploadImage`
  - `imageResize` → `resizeImage`
  - `forwardDelete` → `deleteForward`
  - `todoListCheck` → `checkTodoList`

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Major releases (contain major breaking changes):

* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v25.0.0 => v26.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v25.0.0 => v26.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v25.0.0 => v26.0.0

Other releases:

* [@ckeditor/ckeditor5-pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination): v25.0.0 => v26.0.0
</details>


## [25.0.0](https://github.com/ckeditor/ckeditor5/compare/v24.0.0...v25.0.0) (2021-01-25)

### Release highlights

We are happy to announce the release of CKEditor 5 v25.0.0 that contains a security fix for the [Markdown-GFM package](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm). Even though this is a low impact issue and only affects the victim’s browser with no risk of data leakage, an upgrade is highly recommended! You can read more details in the relevant [security advisory](https://github.com/ckeditor/ckeditor5/security/advisories/GHSA-hgmg-hhc8-g5wr) and [contact us](https://ckeditor.com/contact/) if you have more questions.

This release brings a few improvements and bug fixes:

* UX improvements to editing around the block boundaries ([#8137](https://github.com/ckeditor/ckeditor5/issues/8137), [#7636](https://github.com/ckeditor/ckeditor5/issues/7636)).
* [Formatting large content will not freeze the editor](https://github.com/ckeditor/ckeditor5/issues/8188).
* [Uploading Base64 images will no longer cause a CSP violation](https://github.com/ckeditor/ckeditor5/issues/7957).
* [Unlinking an image will not crash the editor anymore](https://github.com/ckeditor/ckeditor5/issues/8401).

Read more in the blog post: https://ckeditor.com/blog/CKEditor-5-v25.0.0-with-flexible-annotations-improved-text-blocks-handling-and-performance-fixes/

### Collaboration features

The CKEditor 5 Collaboration features changelog can be found here: https://ckeditor.com/collaboration/changelog.

### MINOR BREAKING CHANGES [ℹ️](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html#major-and-minor-breaking-changes)

* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Configuration passed to `ToolbarView.fillFromConfig()` will be stripped off of any leading, trailing, and duplicated separators (`'|'` and `'-'`).

### Features

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: The horizontal line can be inserted by typing `---` in an empty block. Closes [#5720](https://github.com/ckeditor/ckeditor5/issues/5720). ([commit](https://github.com/ckeditor/ckeditor5/commit/740327ed564a83a14bf95e61f9267c6296544522))
* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Square brackets should convert the current line to a to-do list item. Closes [#7518](https://github.com/ckeditor/ckeditor5/issues/7518). ([commit](https://github.com/ckeditor/ckeditor5/commit/9b7e7c9b4d12da8f591bec438a6fb7ccd296bfd0))
* **[block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote)**: The block quote should be split on the <kbd>Backspace</kbd> key press at the beginning of the block quote. Closes [#7636](https://github.com/ckeditor/ckeditor5/issues/7636). ([commit](https://github.com/ckeditor/ckeditor5/commit/2d9954c6634ba07293da85b292a0601b7947ef2c))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The new `DataController#htmlProcessor` property is initialized with the instance of the `HtmlDataProcessor` class and assigned to the `DataController#processor` property by default. ([commit](https://github.com/ckeditor/ckeditor5/commit/2025f40e525a122761e64bd05c4f6c7b2df75516))
* **[typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing)**: An empty block element at the beginning of the limit element should be converted to a paragraph on the <kbd>Backspace</kbd> key press. Closes [#8137](https://github.com/ckeditor/ckeditor5/issues/8137). ([commit](https://github.com/ckeditor/ckeditor5/commit/2d9954c6634ba07293da85b292a0601b7947ef2c))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Implemented additional [panel positions](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_dropdown_dropdownview-DropdownView.html#static-member-defaultPanelPositions) for the `DropdownView` class to address edge cases when the panel is cut due to small screen size (see [#7700](https://github.com/ckeditor/ckeditor5/issues/7700), [#8669](https://github.com/ckeditor/ckeditor5/issues/8669)). ([commit](https://github.com/ckeditor/ckeditor5/commit/52ce85b00374da9ad0b90e99f0746540a6631f55))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: Items baked into the editor bundles can now be removed from the toolbar by using `config.toolbar.removeItems`. Closes [#7945](https://github.com/ckeditor/ckeditor5/issues/7945). ([commit](https://github.com/ckeditor/ckeditor5/commit/1af9e7b8501f9d6e8db35c2f41cf8e4157aaee7c))

### Bug fixes

* **[autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat)**: Formatting will not be applied to `snake_case_scenarios` anymore. Closes [#2388](https://github.com/ckeditor/ckeditor5/issues/2388). ([commit](https://github.com/ckeditor/ckeditor5/commit/82d486d2cb6616c2e1d00b49ab993bbf24847749))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: The `setData()` helper in the dev-utils model should support the `batchType` option. Closes [#7947](https://github.com/ckeditor/ckeditor5/issues/7947). ([commit](https://github.com/ckeditor/ckeditor5/commit/6e40289d5db52f0b9be4b53474401b45b34423be))
* **[export-pdf](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-pdf)**: The command should use the proper token if executed without providing a token in the command options.
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: The command should use the proper token if executed without providing a token in the command options.
* **[horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line)**: The horizontal line feature should require the `Widget` plugin. Closes [#8825](https://github.com/ckeditor/ckeditor5/issues/8825). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f26d2b7f96eb495ae904a02799a6072cd77b22e))
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: Pasting an HTML embed widget from the clipboard will not clear its content anymore. Closes [#8789](https://github.com/ckeditor/ckeditor5/issues/8789). ([commit](https://github.com/ckeditor/ckeditor5/commit/2025f40e525a122761e64bd05c4f6c7b2df75516))
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: The HTML embed plugin should require the `Widget` plugin. Closes [#8720](https://github.com/ckeditor/ckeditor5/issues/8720). ([commit](https://github.com/ckeditor/ckeditor5/commit/8ef02e7a1543e1191b63488ba58b0281bdb8b1ee))
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: The save button should close the source mode even if there are no changes. Closes [#8560](https://github.com/ckeditor/ckeditor5/issues/8560). ([commit](https://github.com/ckeditor/ckeditor5/commit/5e26d5372e3d3d417c81aa98d1313f9a68f2f7ce))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: The image plugins can be loaded in any order without causing an error. Closes [#8270](https://github.com/ckeditor/ckeditor5/issues/8270). ([commit](https://github.com/ckeditor/ckeditor5/commit/1c7397db168f032181d562153535cab2a3ac6c66))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Allow pasting an image with a data URL scheme as the value of the `src` attribute if strict CSP rules are defined. Closes [#7957](https://github.com/ckeditor/ckeditor5/issues/7957). ([commit](https://github.com/ckeditor/ckeditor5/commit/f7a3948d954bb9ef064505e666d112ed5a4240a6))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: Fixed the image resizer for images with links. Closes [#8749](https://github.com/ckeditor/ckeditor5/issues/8749). ([commit](https://github.com/ckeditor/ckeditor5/commit/abd2c67f5779f82f057984771f5cd27b3fd95528))
* **[image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image)**: An empty image caption should be hidden if the editor is in read-only mode. Closes [#5168](https://github.com/ckeditor/ckeditor5/issues/5168). ([commit](https://github.com/ckeditor/ckeditor5/commit/cab40650f1e5649b518f0159ae97c4d7a470b55a))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Removing a link from an image should not throw an error when link decorators are also present. Closes [#8401](https://github.com/ckeditor/ckeditor5/issues/8401). ([commit](https://github.com/ckeditor/ckeditor5/commit/a26c6532e2090b47816961c8344b258d237f28d0))
* **[list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list)**: The `delete` event handler is now listening on a higher priority to avoid being intercepted by the block quote and widget handlers. Closes [#8706](https://github.com/ckeditor/ckeditor5/issues/8706). ([commit](https://github.com/ckeditor/ckeditor5/commit/2d9954c6634ba07293da85b292a0601b7947ef2c))
* **[pagination](https://www.npmjs.com/package/@ckeditor/ckeditor5-pagination)**: The pagination plugin should be disabled and a warning should be displayed if its configuration is missing.
* **[page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break)**: Dropping an image on the page break widget should not crash the editor. Closes [#8788](https://github.com/ckeditor/ckeditor5/issues/8788). ([commit](https://github.com/ckeditor/ckeditor5/commit/c9654e983bf41583f2bf09c1932752d86409507b))
* **[page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break)**: The page break feature should require the `Widget` plugin. Closes [#8825](https://github.com/ckeditor/ckeditor5/issues/8825). ([commit](https://github.com/ckeditor/ckeditor5/commit/9f26d2b7f96eb495ae904a02799a6072cd77b22e))
* **[special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters)**: The special characters dropdown should always fit into the viewport. Closes [#7700](https://github.com/ckeditor/ckeditor5/issues/7700), [#8669](https://github.com/ckeditor/ckeditor5/issues/8669). ([commit](https://github.com/ckeditor/ckeditor5/commit/52ce85b00374da9ad0b90e99f0746540a6631f55))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The contents of nested tables are no longer going through upcasting. Closes [#8393](https://github.com/ckeditor/ckeditor5/issues/8393). ([commit](https://github.com/ckeditor/ckeditor5/commit/270a6c3023a5126af61e37cfb2795a9caca13c85))
* **[table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table)**: The table properties balloon should always follow the table when the alignment changes. Closes [#6223](https://github.com/ckeditor/ckeditor5/issues/6223). ([commit](https://github.com/ckeditor/ckeditor5/commit/0fa28f34cd877c84b94c55e424c19e6a26e35dff))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: The HTML embed text in a disabled input in Safari on iOS should have the same color as in other browsers. Closes [#8320](https://github.com/ckeditor/ckeditor5/issues/8320). ([commit](https://github.com/ckeditor/ckeditor5/commit/521847caab1f8573e6b2e56e71c464e9cc392777))
* **[theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark)**: The dropdown button should not have an inner shadow in active state. Closes [#8699](https://github.com/ckeditor/ckeditor5/issues/8699). ([commit](https://github.com/ckeditor/ckeditor5/commit/395d954619afaf20c6f9f2caf2059490c9c62452))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The "Show more items" toolbar button tooltip should not overflow the editor. Closes [#8655](https://github.com/ckeditor/ckeditor5/issues/8655). ([commit](https://github.com/ckeditor/ckeditor5/commit/6175a207162f0355e446ef5dc59f1d1a03d4a7d2))
* **[ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui)**: The `'-'` (new line) divider should not be rendered when grouping is enabled. Closes [#8582](https://github.com/ckeditor/ckeditor5/issues/8582). ([commit](https://github.com/ckeditor/ckeditor5/commit/c5e54ced16b81a2b1c0768515883ee17f02d32ac))
* **[word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count)**: The word count feature should consider a string with a special character as a single word. Closes [#8078](https://github.com/ckeditor/ckeditor5/issues/8078). ([commit](https://github.com/ckeditor/ckeditor5/commit/c2183287394cee2249da8210cee73a64be916aae))

### Other changes

* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Optimized the `Model#insertContent()` function to use as few operations as possible to reduce the time needed to handle pasting large content into the editor. Closes [#8054](https://github.com/ckeditor/ckeditor5/issues/8054), [#715](https://github.com/ckeditor/ckeditor5/issues/715). ([commit](https://github.com/ckeditor/ckeditor5/commit/d97206cc1e423043e1cbe012a1b8f6b2083cc092))
* **[engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine)**: Improved performance of the `Differ#getChanges()` function. Closes [#8188](https://github.com/ckeditor/ckeditor5/issues/8188). ([commit](https://github.com/ckeditor/ckeditor5/commit/98644f6f78621e6160edf4d7afe73867a369dc2f))
* **[export-word](https://www.npmjs.com/package/@ckeditor/ckeditor5-export-word)**: The timezone option should be passed to the Export to Word converter.
* **[html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed)**: A placeholder should be displayed if the HTML snippet is not previewable or empty. Closes [#8435](https://github.com/ckeditor/ckeditor5/issues/8435). ([commit](https://github.com/ckeditor/ckeditor5/commit/a35881b12de63adf41529eb3c208fa26a2c170a7))
* **[link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link)**: Improved how the fake selection marker for the link UI is created. Closes [#8092](https://github.com/ckeditor/ckeditor5/issues/8092). ([commit](https://github.com/ckeditor/ckeditor5/commit/be55f919d3076602947019205538e6d1db86a8aa))
* **[mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention)**: The conversion API reference is no longer passed down to the attribute properties. Closes [#8370](https://github.com/ckeditor/ckeditor5/issues/8370). ([commit](https://github.com/ckeditor/ckeditor5/commit/eb160780717e88e28c5efe27b83c6440dbbed979))
* Updated translations. ([commit](https://github.com/ckeditor/ckeditor5/commit/068b10be37629fc819ef7e601691c0b597dfab51), [commit](https://github.com/ckeditor/ckeditor5/commit/c7d16b67fdb0a51f4e953aaa9e7a867b1d83fb2c))

### Released packages

Check out the [Versioning policy](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/versioning-policy.html) guide for more information.

<details>
<summary>Released packages (summary)</summary>

Minor releases (contain minor breaking changes):

* [@ckeditor/ckeditor5-ui](https://www.npmjs.com/package/@ckeditor/ckeditor5-ui): v24.0.0 => v25.0.0

Releases containing new features:

* [@ckeditor/ckeditor5-autoformat](https://www.npmjs.com/package/@ckeditor/ckeditor5-autoformat): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-block-quote](https://www.npmjs.com/package/@ckeditor/ckeditor5-block-quote): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-build-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-classic): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-clipboard](https://www.npmjs.com/package/@ckeditor/ckeditor5-clipboard): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-editor-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-balloon): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-editor-classic](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-classic): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-editor-decoupled](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-decoupled): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-editor-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-editor-inline): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-engine](https://www.npmjs.com/package/@ckeditor/ckeditor5-engine): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-horizontal-line](https://www.npmjs.com/package/@ckeditor/ckeditor5-horizontal-line): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-html-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-html-embed): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-list](https://www.npmjs.com/package/@ckeditor/ckeditor5-list): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-special-characters](https://www.npmjs.com/package/@ckeditor/ckeditor5-special-characters): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-theme-lark](https://www.npmjs.com/package/@ckeditor/ckeditor5-theme-lark): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-typing](https://www.npmjs.com/package/@ckeditor/ckeditor5-typing): v24.0.0 => v25.0.0

Other releases:

* [@ckeditor/ckeditor-cloud-services-core](https://www.npmjs.com/package/@ckeditor/ckeditor-cloud-services-core): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-adapter-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-adapter-ckfinder): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-alignment](https://www.npmjs.com/package/@ckeditor/ckeditor5-alignment): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-autosave](https://www.npmjs.com/package/@ckeditor/ckeditor5-autosave): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-basic-styles](https://www.npmjs.com/package/@ckeditor/ckeditor5-basic-styles): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-build-balloon](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-build-balloon-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-balloon-block): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-build-decoupled-document](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-decoupled-document): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-build-inline](https://www.npmjs.com/package/@ckeditor/ckeditor5-build-inline): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-ckfinder](https://www.npmjs.com/package/@ckeditor/ckeditor5-ckfinder): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-cloud-services](https://www.npmjs.com/package/@ckeditor/ckeditor5-cloud-services): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-code-block](https://www.npmjs.com/package/@ckeditor/ckeditor5-code-block): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-core](https://www.npmjs.com/package/@ckeditor/ckeditor5-core): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-easy-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-easy-image): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-enter](https://www.npmjs.com/package/@ckeditor/ckeditor5-enter): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-essentials](https://www.npmjs.com/package/@ckeditor/ckeditor5-essentials): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-font](https://www.npmjs.com/package/@ckeditor/ckeditor5-font): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-heading](https://www.npmjs.com/package/@ckeditor/ckeditor5-heading): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-highlight](https://www.npmjs.com/package/@ckeditor/ckeditor5-highlight): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-image](https://www.npmjs.com/package/@ckeditor/ckeditor5-image): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-indent](https://www.npmjs.com/package/@ckeditor/ckeditor5-indent): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-link](https://www.npmjs.com/package/@ckeditor/ckeditor5-link): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-markdown-gfm](https://www.npmjs.com/package/@ckeditor/ckeditor5-markdown-gfm): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-media-embed](https://www.npmjs.com/package/@ckeditor/ckeditor5-media-embed): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-mention](https://www.npmjs.com/package/@ckeditor/ckeditor5-mention): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-page-break](https://www.npmjs.com/package/@ckeditor/ckeditor5-page-break): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-paragraph](https://www.npmjs.com/package/@ckeditor/ckeditor5-paragraph): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-paste-from-office](https://www.npmjs.com/package/@ckeditor/ckeditor5-paste-from-office): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-remove-format](https://www.npmjs.com/package/@ckeditor/ckeditor5-remove-format): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-restricted-editing](https://www.npmjs.com/package/@ckeditor/ckeditor5-restricted-editing): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-select-all](https://www.npmjs.com/package/@ckeditor/ckeditor5-select-all): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-table](https://www.npmjs.com/package/@ckeditor/ckeditor5-table): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-undo](https://www.npmjs.com/package/@ckeditor/ckeditor5-undo): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-upload](https://www.npmjs.com/package/@ckeditor/ckeditor5-upload): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-utils](https://www.npmjs.com/package/@ckeditor/ckeditor5-utils): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-watchdog](https://www.npmjs.com/package/@ckeditor/ckeditor5-watchdog): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-widget](https://www.npmjs.com/package/@ckeditor/ckeditor5-widget): v24.0.0 => v25.0.0
* [@ckeditor/ckeditor5-word-count](https://www.npmjs.com/package/@ckeditor/ckeditor5-word-count): v24.0.0 => v25.0.0
</details>

---

The changelog contains entries for releases created since 2021. For browsing past releases, you can use [the Release page](https://github.com/ckeditor/ckeditor5/releases?q=created%3A%3C2021&expanded=true).
