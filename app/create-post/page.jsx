'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import TextEditor from "@/components/text-editor" 

function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const router = useRouter()

  return (
    <TextEditor content={content} setContent={setContent}/>
  )
}


export default CreatePost