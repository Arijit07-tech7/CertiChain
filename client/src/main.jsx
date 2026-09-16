import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/dashboard.css';
import './styles/certificate.css';
import './styles/animations.css';
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
