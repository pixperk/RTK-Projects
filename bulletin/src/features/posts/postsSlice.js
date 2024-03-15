import { createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id:'1', title:'Redux Tkt', content: "It's fun."},
    {id:'2', title:'React JS', content: "It's fun."},
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost(state, action){
            state.push(action.payload) //mutating the state only works under createSlice
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const {addPost} = postsSlice.actions
export default postsSlice.reducer