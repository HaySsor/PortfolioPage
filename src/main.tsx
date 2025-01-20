import { createRoot } from 'react-dom/client'
import {  RouterProvider } from "react-router";
import './index.css'
import { router } from './router/router.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
