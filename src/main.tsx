import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import StoreProvider from './app/store/index.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
);
