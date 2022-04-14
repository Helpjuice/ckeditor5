import InsertUploadUI from './insertuploadui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import "./styles.css";

export default class InsertUpload extends Plugin {
	static get requires() {
		return [InsertUploadUI];
	}
}
