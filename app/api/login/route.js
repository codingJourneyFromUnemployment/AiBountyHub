import { connectToAtlas } from "@/utils/database";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST (req, res) {
  const { account } = await req.json();
  try{
    await connectToAtlas();
    const user = await User.findOne({ walletAddress: account });
    if(user){
      return NextResponse.json("This user already exists", { status: 200 })
    } else {
      const newUser = new User({
        walletAddress: account
      });
      await newUser.save();
      return NextResponse.json("User created", { status: 200 })
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error("error creating user", { status: 500 })
  }
} 