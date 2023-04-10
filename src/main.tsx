import React from 'react'
import ReactDOM from 'react-dom/client'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Auth from './components/Auth/auth';
import ToDo from './components/todo/toDo';


import './index.css'
import authReducer from './store/auth/auth.slice';
import todoReducer from './store/todo/todo.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// const router = createBrowserRouter([
//   {path: '/', element: <Auth />},
//   {path: '/ToDo', element: <ToDo />}
// ])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <Router>
      <Routes>
        <Route path='/' element={<Auth />}/>
        <Route path= '/ToDo' element={<ToDo />} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
)


