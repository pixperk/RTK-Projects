import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "./postsSlice";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const onSavePostClick = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-indigo-200 to-blue-100  shadow-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">New Post</h2>
      <form onSubmit={onSavePostClick}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="postTitle"
          >
            Title:
          </label>
          <input
            className="border rounded-lg px-4 py-2 w-full"
            type="text"
            id="postTitle"
            name="postTitle"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="postContent"
          >
            Content:
          </label>
          <textarea
            className="border rounded-lg px-4 py-2 w-full h-32"
            id="postContent"
            required
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
