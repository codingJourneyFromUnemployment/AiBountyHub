'use client'

import React, { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import imageUploadHandler from "@/utils/imageuploadhandler";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function TextEditor() {
  const [editorHtml, setEditorHtml] = useState("");
  const reactQuillRef = useRef(null);

  useEffect(() => {
      const Quill = require('react-quill').Quill;
      const ImageUploader = require('quill-image-uploader').default;
      Quill.register("modules/imageUploader", ImageUploader);
    }, []);

  const handleChange = (html) => {
    setEditorHtml(html);
  }

  const handleSubmit = () => {
    if (reactQuillRef.current) {
      const editor = reactQuillRef.current.getEditor();
      setEditorHtml(editor);
    }
  }

  const modules = {
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
    imageUploader: {
      upload: imageUploadHandler
    }
  };

  const formats = [
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
    "imageBlot"
  ];

  return (
    <div className="flex flex-col items-center absolute top-32 w-full h-full">
      <input
        className="w-2/3 mt-0 mb-2 rounded border-white bg-editor_background md:max-w-3xl"
        type="text"
        placeholder="Post Title"
      />
      <ReactQuill
        onChange={handleChange}
        theme="snow"
        className="h-1/3 w-2/3 mb-20 md:mb-12 md:max-w-3xl md:h-1/2"
        modules={modules}
        formats={formats}
        placeholder="Write your needs here..."
        value={editorHtml}
        ref={reactQuillRef}
      />
      <div className="flex flex-col space-y-4 items-center justify-center w-2/3 mt-6 md:flex-row md:items-end md:justify-end md:space-x-6 md:mr-12 md:max-w-3xl">
        <div className="cursor-pointer text-sm font-medium text-slate-400 hover:text-slate-200 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">
          cancel
        </div>
        <div className="cursor-pointer  btn-sm text-white bg-indigo-500 hover:bg-indigo-600 w-24">
          submit
        </div>
      </div>
    </div>
  );
}

export default TextEditor;