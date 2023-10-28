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
import HostLogin from './pages/HostLogin';
import HostLayout from './components/HostLayout';
import HostCars from './pages/Host/HostCars';
import HostCarDetail from './pages/Host/HostCarDetail/HostCarDetail';
import HostCarDetailLayout from './components/HostCarDetailLayout';
import HostCarDetailPrice from './pages/Host/HostCarDetail/HostCarDetailPrice';
import HostCarDetailPhotos from './pages/Host/HostCarDetail/HostCarDetailPhotos';
import PageNotFound from './pages/PageNotFound';
import AuthRequiredLayout from './components/AuthRequiredLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='cars' element={<Cars />} />
                    <Route path='cars/:id' element={<CarDetail />} />

                    <Route path='hostlogin' element={<HostLogin />} />

                    <Route element={<AuthRequiredLayout />}>
                        <Route path='host' element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path='income' element={<Income />} />
                            <Route path='reviews' element={<Reviews />} />
                            <Route path='cars' element={<HostCars />} />
                            <Route path='cars/:id' element={<HostCarDetailLayout />}>
                                <Route index element={<HostCarDetail />} />
                                <Route path='price' element={<HostCarDetailPrice />} />
                                <Route path='photos' element={<HostCarDetailPhotos />} />
                            </Route>
                        </Route>
                    </Route>
                    
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
