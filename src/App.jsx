import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className='container'>
            <Nav />

            <BrowserRouter>
                <Routes>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
