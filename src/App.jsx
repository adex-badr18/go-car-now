import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './server';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/cars' element={<Cars />} />
                    <Route path='/cars/:id' element={<CarDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
