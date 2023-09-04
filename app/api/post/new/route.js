import { NextResponse } from "next/server";
import { connectToAtlas } from "@/utils/database";
import Post from "@/models/post";
import User from "@/models/user";

export async function POST (req, res) {
  const { title, content, account } = await req.json();

  try {
    await connectToAtlas();
    const user = await User.findOne({ walletAddress: account });
    const newPost = new Post({
      title,
      content,
      votes: 0,
      createdAt: Date.now(),
      replies: [],
      author: user._id,
    });
    await newPost.save();
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error creating post", { status: 500 })
  }
}