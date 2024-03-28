import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
    chai: '🍵'
};

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const handleReactionClick = (reaction) => {
        dispatch(reactionAdded({ postId: post.id, reaction }));
    };

    return (
        <div className="flex space-x-2">
            {Object.entries(reactionEmoji).map(([name, emoji]) => (
                <button
                    key={name}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                    onClick={() => handleReactionClick(name)}
                >
                    <span className="mr-1">{emoji}</span>
                    <span className="text-xs bg-gray-200 rounded-full px-2 py-1">
                        {post.reactions[name]}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default ReactionButtons;
