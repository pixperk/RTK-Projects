// EditPost.js
import React, { useState } from 'react';

const EditPost = ({ postId, currentTitle, currentContent, onUpdate, onCancel }) => {
  const [updatedTitle, setUpdatedTitle] = useState(currentTitle);
  const [updatedContent, setUpdatedContent] = useState(currentContent);

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedTitle, updatedContent);
  };

  return (
    <div>
      <h3>Edit Post</h3>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={updatedTitle} onChange={handleTitleChange} />
        <label>Content:</label>
        <textarea value={updatedContent} onChange={handleContentChange} />
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditPost;
