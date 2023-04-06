import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';

import Auth from './components/auth/Auth';
import ToDo from './components/todo/ToDo';

import './index.css'

const store = configureStore({
  reducer: {
    
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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


