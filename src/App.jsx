import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars/Cars';
import CarDetail from './pages/Cars/CarDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='cars' element={<Cars />} />
                    <Route path='cars/:id' element={<CarDetail />} />
                    <Route path='host' element={<HostLayout />}>
                        <Route path='host' element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
