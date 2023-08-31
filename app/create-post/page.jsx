'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const router = useRouter()

  return (
    <div className="flex flex-col items-center absolute top-32 w-full h-full space-y-16">
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent} 
        className="h-1/3 w-2/3 md:max-w-xl"/>
        <div className="flex items-end justify-end w-2/3 space-x-6 mr-12 md:max-w-xl">
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


export default CreatePost