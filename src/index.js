import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import './stylesheets/style.css';

import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './Home';
import About from './about/About';
import Gallery from './gallery/Gallery';
import Connect from './connect/Connect';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='gallery' element={<Gallery/>} />
            <Route path='connect' element={<Connect/>} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <>
                <Nav/>
                <RouterProvider router={router} />
                <Footer/>
            </>
        </HelmetProvider>
    </React.StrictMode>
);