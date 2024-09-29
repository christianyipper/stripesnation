import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/style.css';
import Nav from './components/Nav'
import Home from './Home';
import About from './about/About';
import Gallery from './gallery/Gallery';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='gallery' element={<Gallery />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <Nav />
            <RouterProvider router={router} />
        </>
    </React.StrictMode>
);