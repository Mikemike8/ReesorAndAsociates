import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'; // Path to your Tailwind CSS file

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
