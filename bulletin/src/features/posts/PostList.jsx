import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => {

            return (
                <article key={post.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-700">{post.content.substring(0, 100)}</p>
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
