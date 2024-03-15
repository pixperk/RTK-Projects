import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0' , name:'Kshitij Mishra'},
    {id: '1' , name:'Kazuma Mamizuka'}
]

const usersSlice = createSlice({
    name : 'users',
    initialState, 
    reducers:{}
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer