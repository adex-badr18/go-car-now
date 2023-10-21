import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <BrowserRouter>
                <Nav />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='about' element={<About />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}

export default App
