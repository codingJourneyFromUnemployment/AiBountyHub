import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title:{
    type: String,
    required: [true, 'Title is required!'],
  },
  content:{
    type: String,
    required: [true, 'Content is required!'],
  },
  likes:{
    type: Number,
    default: 0,
  },
})