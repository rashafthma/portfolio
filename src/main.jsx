import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS for responsive grid and utilities
import 'bootstrap/dist/css/bootstrap.min.css'
// Import our custom dark futuristic styling
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
