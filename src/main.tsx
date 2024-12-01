import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fanta.css'
import App from './App.jsx'

const rootElement=document.getElementById('root');

if(rootElement){
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}else{
  console.log('Root element not found');
}
