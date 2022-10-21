import React from 'react'
import HouseDetails from './HouseDetails/HouseDetails'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/houses/:name" element={<HouseDetails />} />
                <Route path="/" element={null} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes