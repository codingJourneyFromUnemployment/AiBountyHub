'use client'

import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css"
import ImageUploader from "quill-image-uploader";
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";


Quill.register("modules/imageUploader", ImageUploader);

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
})

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.textInput = React.createRef();
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleSubmit() {
    const editor = this.reactQuillRef.getEditor();
    this.setState({
      editorHtml: editor
    });
  }
  modules = {
    // #3 Add "image" to the toolbar
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image"],
      ["clean"]
    ],
    // # 4 Add module and upload function
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=334ecea9ec1213784db5cb9a14dac265",
            {
              method: "POST",
              body: formData
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      }
    }
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "imageBlot" // #5 Optinal if using custom formats
  ];

  render() {
    return (
      <div className="flex flex-col items-center absolute top-32 w-full h-full space-y-20">
        <ReactQuill
          onChange={this.handleChange}
          theme="snow"
          className="h-1/3 w-2/3 md:max-w-3xl md:h-1/2"
          modules={this.modules}
          formats={this.formats}
          placeholder="Write your needs here..."
          value={this.state.editorHtml}
        />
        <div className="flex flex-col space-y-4 items-center justify-center w-2/3 md:flex-row md:items-end md:justify-end md:space-x-6 md:mr-12 md:max-w-3xl">
          <div className="cursor-pointer text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
            cancel
          </div>
          <div className="cursor-pointer  btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-24">
            submit
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor

