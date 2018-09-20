import React from 'react';
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
const Font = ReactQuill.Quill.import('formats/font'); // <<<< ReactQuill exports it
Font.whitelist = ['roboto', 'jean', 'comic', 'tyler', 'elvish'] ; // allow ONLY these fonts and the default
ReactQuill.Quill.register(Font, true);

/*
 * Custom toolbar component including insertStar button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
    </select>
  </div>
);

/*
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div className="text-editor">

        <ReactQuill
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
          theme={"snow"}
        />
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
 var toolbarOptions = [

   [{ 'font': ["roboto", "jean", "comic", "tyler", "elvish"]},
   { 'header': [1, 2, 3, 4, 5, 6, false] }, { 'color': [] }],


   ['bold', 'italic', 'underline', 'strike','code-block'],
   [{ 'list': 'checked' }, { 'list': 'bullet' }, { 'list': 'ordered'}],
   ['link', 'image', 'video'],
   [{ 'align': [] }],

   [{ 'indent': '+1' }, { 'indent': '-1'}],          // outdent/indent
   ['clean']                                         // remove formatting button
 ];

Editor.modules = {
  toolbar: {
    container: toolbarOptions,
  }
};




export default Editor;
