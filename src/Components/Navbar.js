import React, {Component} from "react";
import {Container, Navbar as NBar} from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return <NBar bg="primary" variant="light" expand="lg" sticky="top">
            <Container>
                <NBar.Brand href="#home">Robert Parker</NBar.Brand>
            </Container>
        </NBar>
    }
}

export default Navbar;