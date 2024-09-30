import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/style.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './Home';
import About from './about/About';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='gallery' element={<Gallery/>} />
            <Route path='contact' element={<Contact/>} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <>
            <Nav/>
            <RouterProvider router={router} />
            <Footer/>
        </>
    </React.StrictMode>
);