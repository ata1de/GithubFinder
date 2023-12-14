import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routers/Home.tsx'
import Repos from './routers/Repos.tsx'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/repos/:username',
        element: <Repos />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
