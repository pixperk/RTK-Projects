import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice';

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    };

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, text: editText }));
        setEditId(null);
        setEditText('');

       

    };

    return (
        <div className="mt-5 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
            <h1 className="text-3xl text-center font-bold text-white mb-4">Todos</h1>
            <h2 className='mb-4 font-bold text-center text-white'>{formattedDate}</h2> {/* Display today's date and day */}
            <ul className="w-full max-w-md">
                {todos.map(todo => (
                    <li
                        className="bg-gray-800 shadow-md rounded-lg overflow-hidden mb-4 flex items-center justify-between px-6 py-4 border border-white border-solid hover:shadow-xl"
                        key={todo.id}
                    >
                        {editId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="flex-grow border border-gray-300 rounded-md py-1 px-2 mr-2 bg-gray-700 text-white neon-input"
                                />
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none neon-button"
                                >
                                    Update
                                </button>
                            </>
                        ) : (
                            <>
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="mr-3"
                                        checked={todo.completed}
                                        onChange={() => handleToggleTodo(todo.id)}
                                    />
                                    <span className={todo.completed ? 'line-through text-gray-500' : 'text-gray-200'}>
                                        {todo.text}
                                    </span>
                                </label>
                                <div>
                                    <button
                                        onClick={() => handleEdit(todo.id, todo.text)}
                                        className="text-gray-200 mr-2 neon-text"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none neon-button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
