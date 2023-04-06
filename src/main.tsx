import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';

import Auth from './components/auth/Auth';
import ToDo from './components/todo/ToDo';

import './index.css'
import authReducer from './store/auth/auth.slice';
import todoReducer from './store/todo/todo.slice'
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


const router = createBrowserRouter([
  {path: '/', element: <Auth />},
  {path: '/ToDo', element: <ToDo />}
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)


