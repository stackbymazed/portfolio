import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router";
import { router } from './router/router.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Waves from './animation/Waves.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="relative overflow-hidden min-h-screen">
      <Waves
        lineColor="#ffddcc"
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="-z-10"
      />
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
