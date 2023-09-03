import axios from "axios";

async function imageUploadHandler(file) {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      formData
    );

    if (res.data && res.data.data && res.data.data.url) {
      return res.data.data.url;
    } else {
      throw new Error("Unexpected response format from the server");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Upload failed"); 
  }
}

export default imageUploadHandler;