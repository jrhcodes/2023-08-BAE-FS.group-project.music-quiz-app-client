import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.tsx'
import './index.css'
import reportWebVitals from './reportWebVitals.ts';

// const authClientId: string = process.env.REACT_APP_CLIENT_ID = "";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
)

// To start measuring performance in app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
