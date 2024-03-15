import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);

    return (
        <span className="text-sm font-italic text-gray-600">
            {author ? ` - ${author.name}` : ' - Anonymous'}
        </span>
    );
};

export default PostAuthor;
