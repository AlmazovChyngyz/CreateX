import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Suspense } from 'react';
import "./components/fonts/Montserrat/stylesheet.css"
import "./components/fonts/Ubun/stylesheet.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <App></App>
            </Suspense>
        </BrowserRouter>
    // </Provider>
);


