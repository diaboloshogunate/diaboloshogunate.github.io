import React from 'react';
import './App.scss';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Testimonials from "./Components/Testimonials";
import Skills from "./Components/Skills";
import Copyright from "./Components/Copyright";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
            <Testimonials/>
            <Gallery/>
            <Skills/>
            {/*blog*/}
            {/*newletter*/}
            <Contact/>
            <Copyright/>
        </React.Fragment>
    );
}

export default App;
