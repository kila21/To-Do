import { createSlice } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todoState.type";
import { Todo } from "../../types/todo.type";


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
            console.log('clicked')
            const newTodos = state.todos.filter((value,index) => index !== action.payload)
            state.todos = newTodos
        },

        clearTodos: (state) => {
            state.todos = []
        },

        activeClasses: (state, action) => {
            const newArray = state.todos.map((item: Todo,index: number) => {
                if(index === action.payload) {
                    return {...item, isSelected: !item.isSelected}
                }
                return item

            })
            state.todos = newArray
        }
    }
})

export const {addTodo, removeTodo, clearTodos, activeClasses} = ToDoSlice.actions

export default ToDoSlice.reducer