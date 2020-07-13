import React from 'react';
import './App.scss';
import {Container, Row, Col} from 'react-bootstrap'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero />
        </React.Fragment>
    );
}

export default App;
