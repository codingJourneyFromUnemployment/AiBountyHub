'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import TextEditor from "@/components/text-editor"
import Header from '@/components/ui/header'

function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  const router = useRouter()

  return (
    <>
      <Header />
      <TextEditor 
        content={content} 
        setContent={setContent} 
        />
    </>
  )
}


export default CreatePost