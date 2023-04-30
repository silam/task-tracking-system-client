import { createSlice } from "@reduxjs/toolkit";
import { retrieveTasks } from "../taskController";

const slice = createSlice({
    name: 'task',
    initialState: {

    },
    reducers: {
        getTasks:(state)=>{
            retrieveTasks()
        },
        createTasks:(state, action)=>{
             
        },
        updateTasks: (state, action)=>{
        },
        makeComplete:(state, action)=>{
        }
    }
})

export default slice.reducer;
export const {getTasks, createTasks, updateTasks, makeComplete} = slice.actions;