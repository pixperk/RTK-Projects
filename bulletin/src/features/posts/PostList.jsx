import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllPosts, deletePost, updatePost } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId));
    };

    const handleUpdatePost = (postId, title, content) => {
        dispatch(updatePost({ id: postId, title, content }));
    };

    const renderedPosts = orderedPosts.map(post => {

            return (
                <article key={post.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-700 text-xl">{post.content.substring(0,100)}</p>
                    <p className='text-sm'><PostAuthor userId={post.userId}/>
                    <TimeAgo timestamp={post.date}/></p>
                    <ReactionButtons post={post}/>
                    <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    <button onClick={() => handleUpdatePost(post.id, 'Updated Title', 'Updated Content')}>Update</button>
                </article>
            );
       
    });

    return (
        <div className="bg-gradient-to-br from-indigo-200 to-blue-100 min-h-screen">
            <div className="container mx-auto px-4">
                <section className="pt-12 pb-8">
                    <h2 className="text-4xl font-bold text-blue-900 mb-8">Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {renderedPosts}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PostList;
