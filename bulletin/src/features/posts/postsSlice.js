import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Redux Tkt', content: "It's fun." },
    { id: '2', title: 'React JS', content: "It's fun." },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                const { id, title, content, userId } = action.payload;
                state.push({ id, title, content, userId });
            },
            prepare: (title, content, userId) => ({
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
            })
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
