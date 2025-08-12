import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative overflow-hidden min-h-screen">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
