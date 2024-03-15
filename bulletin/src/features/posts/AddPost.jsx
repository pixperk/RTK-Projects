import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const onSavePostClick = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  return (
    <section className="w-full bg-gradient-to-br from-indigo-200 to-blue-100 shadow-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">New Post</h2>
      <form onSubmit={onSavePostClick}>
        <div className="mb-4">
          <label
            htmlFor="postAuthor"
            className="block text-gray-700 font-bold mb-2"
          >
            Author:
          </label>
          <select
            value={userId}
            id="postAuthor"
            onChange={(e) => setUserId(e.target.value)}
            className="border rounded-lg px-4 py-2 w-48" // Adjust the width here
          >
            <option value="">Select</option>
            {userOptions}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="postTitle"
            className="block text-gray-700 font-bold mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postContent"
            className="block text-gray-700 font-bold mb-2"
          >
            Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            !canSave && 'opacity-50 cursor-not-allowed' // Apply opacity and cursor styles when disabled
          }`}
          disabled={!canSave}
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
