// todoSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load todos from local storage
const loadTodosFromLocalStorage = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error loading todos from local storage:", error);
    return [];
  }
};

// Save todos to local storage
const saveTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to local storage:", error);
  }
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      saveTodosToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find(todo => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
        saveTodosToLocalStorage(state.todos);
      }
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todoToToggle = state.todos.find(todo => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
        saveTodosToLocalStorage(state.todos);
      }
    }
  }
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
