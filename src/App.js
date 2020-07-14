import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <Testimonials/>
        </React.Fragment>
    );
}

export default App;
