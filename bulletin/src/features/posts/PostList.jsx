import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost, updatePost } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

function PostList() {
    const posts = useSelector(state => state.posts);

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const handleEdit = (id, title, content) => {
        setEditId(id);
        setEditTitle(title);
        setEditContent(content);
    };

    const handleUpdate = (id) => {
        dispatch(updatePost({ id, title: editTitle, content: editContent }));
        setEditId(null);
        setEditTitle('');
        setEditContent('');
    };

    return (
        <div className="container mx-auto px-4">
            {orderedPosts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    {editId === post.id ? (
                        <>
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                className="border rounded-lg px-4 py-2 w-full mb-4"
                                placeholder="Enter title"
                            />
                            <textarea
                                value={editContent}
                                onChange={(e) => setEditContent(e.target.value)}
                                className="border rounded-lg px-4 py-2 w-full mb-4 h-40"
                                placeholder="Enter content"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={() => handleUpdate(post.id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => setEditId(null)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-700 text-lg mb-2">{post.content}</p>
                            <div className="flex justify-between mb-4">
                                <PostAuthor userId={post.userId} />
                                <TimeAgo timestamp={post.date} />
                            </div>
                            <ReactionButtons post={post} />
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => handleEdit(post.id, post.title, post.content)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => dispatch(deletePost(post.id))}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default PostList;
