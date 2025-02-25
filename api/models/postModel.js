import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  image: {
    url: {
      type: String,
    },
    public_id: {
      type: String,
    },
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export const Post = mongoose.model("Post", postSchema);
