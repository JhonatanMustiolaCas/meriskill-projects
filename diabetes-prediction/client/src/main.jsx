import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css';
import Layout from './components/Layout';
import Index from './pages/Index';
import Prediction from './pages/Prediction';
import { predictionAction } from './actions/predictionAction';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/prediction",
        element: <Prediction />,
        action: predictionAction
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
