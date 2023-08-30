import axios from "axios"

async function getAllPosts() {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/cruip/cruip-dummy/main/community-posts.json')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

getAllPosts().then(posts => {
  console.log(posts)
})