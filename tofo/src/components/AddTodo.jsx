import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return; // Prevent adding empty todos
        dispatch(addTodo(input));
        setInput('');
    };

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col items-center mt-8">
            <input
                type="text"
                className="w-full max-w-md bg-transparent text-neon-blue placeholder-neon-blue border-b-2 border-neon-blue focus:outline-purple focus:border-neon-green py-2 px-4 mb-4 transition-all duration-300"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white font-bold py-2 px-6 rounded-full focus:outline-1 hover:text-slate-300 transition-all duration-300"
                style={{backgroundImage: 'linear-gradient(to right, #673AB7, #2196F3)'}}
            >
                Add Todo
            </button>
        </form>
    );
}

export default AddTodo;
