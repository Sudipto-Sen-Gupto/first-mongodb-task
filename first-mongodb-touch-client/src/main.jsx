import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Userdetail from './Userdetail.jsx'
import Update from './Update.jsx'

const router=createBrowserRouter([{
  path:'/',
  Component:App
},
{
  path:'/user/:id',
  loader:({params})=>fetch(`http://localhost:3000/user/${params.id}`),
  Component:Userdetail
},
{
  path:'/update/:id',
  loader:({params})=>fetch(`http://localhost:3000/user/${params.id}`),
  Component:Update
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
