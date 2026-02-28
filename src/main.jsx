import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './estilos/reset.css'
import './estilos/globals.css'
import App from './App.jsx'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);