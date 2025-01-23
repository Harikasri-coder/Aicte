import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Billing from './components/Billing';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/billing" element={<Billing />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
