import React, {Component} from "react";
import {Container, Nav, Navbar as NBar} from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return <NBar bg="primary" variant="light" expand="lg" sticky="top">
            <Container>
                <NBar.Brand href="#home">Robert Parker</NBar.Brand>
                <NBar.Toggle aria-controls="basic-navbar-nav"/>
                <NBar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </NBar.Collapse>
            </Container>
        </NBar>
    }
}

export default Navbar;