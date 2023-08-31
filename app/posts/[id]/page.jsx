'use client'

import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import PostImage from '@/public/images/post-image.jpg'
import comments from '@/components/comments'



function SinglePost( { params } ) {
  const [posts, setPosts] = useState([])

  async function getAllPosts() {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/cruip/cruip-dummy/main/community-posts.json')
      setPosts(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return(
    <div>
      Hello World!
    </div>
  )
}

export default SinglePost