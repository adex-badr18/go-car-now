import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './server';

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Nav />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/cars' element={<Cars />} />
                        <Route path='/cars/:id' element={<CarDetail />} />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
