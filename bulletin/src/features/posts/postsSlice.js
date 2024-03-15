import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Redux Tkt",
    content: "It's fun.",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "React JS",
    content: "It's fun.",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      addPost: {
        reducer: (state, action) => {
          state.push(action.payload);
        },
        prepare: (title, content, userId) => ({
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        }),
      },
      reactionAdded(state, action) {
        const { postId, reaction } = action.payload;
        const existingPost = state.find((post) => post.id === postId);
        if (existingPost) {
          existingPost.reactions[reaction]++;
        }
      },
      deletePost(state, action) {
        const postId = action.payload;
        return state.filter((post) => post.id !== postId);
      },
      updatePost(state, action) {
        const { id, title, content } = action.payload;
        const existingPost = state.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.content = content;
        }
      },
    },
  });
  
  export const { addPost, reactionAdded, deletePost, updatePost } = postsSlice.actions;
  export default postsSlice.reducer;
  

export const selectAllPosts = (state) => state.posts;


