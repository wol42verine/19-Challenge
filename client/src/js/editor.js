import { getDb, putDb } from './database';
import { header } from './header';

export default class {
  constructor() {
    const localData = localStorage.getItem('content');

    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#editor'), {
      value: localData || '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    this.loadContent();

    this.editor.on('change', () => {
      const content = this.editor.getValue();
      putDb(content);
      localStorage.setItem('content', content);
    });

    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
    });
  }

  async loadContent() {
    try {
      const data = await getDb();
      const content = data.length ? data[0].value : localStorage.getItem('content') || header;
      this.editor.setValue(content);
    } catch (error) {
      console.error('Error loading content:', error);
      const fallbackContent = localStorage.getItem('content') || header;
      this.editor.setValue(fallbackContent);
    }
  }
}