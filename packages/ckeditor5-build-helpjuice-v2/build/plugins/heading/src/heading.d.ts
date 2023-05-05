/**
 * The headings feature.
 *
 * For a detailed overview, check the {@glink features/headings Headings feature documentation}
 * and the {@glink api/heading package page}.
 *
 * This is a "glue" plugin which loads the {@link module:heading/headingediting~HeadingEditing heading editing feature}
 * and {@link module:heading/headingui~HeadingUI heading UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Heading {
    /**
     * @inheritDoc
     */
    static get requires(): (typeof HeadingEditing | typeof HeadingUI)[];
    /**
     * @inheritDoc
     */
    static get pluginName(): string;
}
/**
 * :heading/heading~HeadingOption
 */
export type module = {
    /**
     * Name of the model element to convert.
     */
    model: string;
    /**
     * Definition of a view element to convert from/to.
     */
    view: any;
    /**
     * The user-readable title of the option.
     */
    title: string;
    /**
     * The class which will be added to the dropdown item representing this option.
     */
    class: string;
    /**
     * Icon used by {@link module :heading/headingbuttonsui~HeadingButtonsUI}. It can be omitted when using
     * the default configuration.
     */
    icon?: string | undefined;
};
import HeadingEditing from "./headingediting";
import HeadingUI from "./headingui";
