import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Kshitij Mishra' },
    { id: '1', name: 'Kazuma Mamizuka' },
    { id: '2', name: 'John Doe' },
    { id: '3', name: 'Jane Smith' },
    { id: '4', name: 'Alice Johnson' },
    { id: '5', name: 'Bob Williams' },
    { id: '6', name: 'Emily Brown' },
    { id: '7', name: 'Michael Davis' },
    { id: '8', name: 'Olivia Wilson' },
    { id: '9', name: 'William Jones' },
    { id: '10', name: 'Sophia Martinez' },
    { id: '11', name: 'Alexander Taylor' },
    { id: '12', name: 'Ava Anderson' },
    { id: '13', name: 'James Thomas' },
    { id: '14', name: 'Charlotte White' },
    { id: '15', name: 'Daniel Martinez' },
    { id: '16', name: 'Ella Garcia' },
    { id: '17', name: 'Benjamin Brown' },
    { id: '18', name: 'Mia Harris' },
    { id: '19', name: 'Jacob Clark' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
