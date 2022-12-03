import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { PockemonContextProvider } from './store/PockemonContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PockemonContextProvider>
      <CssBaseline />
      <App />
    </PockemonContextProvider>
  </React.StrictMode>
);

reportWebVitals();
