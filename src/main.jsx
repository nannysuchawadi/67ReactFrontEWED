import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//simport './index.css'
import App from './OApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
