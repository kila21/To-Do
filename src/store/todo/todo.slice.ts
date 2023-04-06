import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todoState.type";


const initialState: TodoState = {
    todos: []
}

const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        removeTodo: (state,action) => {
            const newTodos = state.todos.filter((value,index) => index !== action.payload)
            state.todos = newTodos
        },
        clearTodos: (state) => {
            state.todos = []
        }
    }
})

export const {addTodo, removeTodo, clearTodos} = ToDoSlice.actions

export default ToDoSlice.reducer