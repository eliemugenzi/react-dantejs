import React, { Component } from 'react';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Dante from 'Dante2';

export default class DraftEditor extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
  }

  componentWillMount = () => {
   
  }

  render() {
    return (
      <div
        style={{
          margin:'20px 10%'
        }}
      >
        {/* <CKEditor
          editor={ClassicEditor}
          data='<p>Hello world</p>'
          onInit={editor => console.log('Editor is ready')}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            this.setState({
              input:data
            })
          }}
        /> */}
        <Dante
          onChange={(editor) => {
            console.log('Onchange is working...');
          }}
        body_placeholder={'Your story'}
        />
      </div>
      
    )
  }
}