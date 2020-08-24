import React, {Component} from "react";
import {Row, Col, Modal, Button} from 'react-bootstrap'

import Lanternal from '../Images/portfolio/lanternal.png';
import WetMyPlants from '../Images/portfolio/wet-my-plants.png';
import Fractured from '../Images/portfolio/fractured-souls.jpg';
import MustRest from '../Images/portfolio/i-must-rest.png';
import Catastrophic from '../Images/portfolio/catastraphic-wars.png';

import Makeupmag from '../Images/portfolio/makeupmag.png';
import Siggy from '../Images/portfolio/siggy.png';
import Pocketkey from '../Images/portfolio/pocketkey.png';
import Bush from '../Images/portfolio/bush-cooking.png';
import Hangry from '../Images/portfolio/hangrykits.png';

import Cloudian from '../Images/portfolio/cloudian.png';
import Seattle from '../Images/portfolio/seattlecityclub.png';
import FirstMove from '../Images/portfolio/firstmove.png';
import Nova from '../Images/portfolio/novacasework.png';
import Kamanski from '../Images/portfolio/kamanski.png';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { showConstructionModal: false, showInternalModal: false }
    }
    render() {
        const handleConstructionClose = () => this.setState({showConstructionModal: false});
        const handleConstructionShow = () => this.setState({showConstructionModal: true});
        const handleInternalClose = () => this.setState({showInternalModal: false});
        const handleInternalShow = () => this.setState({showInternalModal: true});
        return <section className={"gallery"}>
            <Modal show={this.state.showConstructionModal} onHide={handleConstructionClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Currently under construction</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please check again soon</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleConstructionClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={this.state.showInternalModal} onHide={handleInternalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Internal network only</Modal.Title>
                </Modal.Header>
                <Modal.Body><a href="mailto:diaboloshogunate@gmail.com">Email</a> me if you would like to learn more about my work on this project</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleInternalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row noGutters>
                <Col xs={12} lg={6}>
                    <a href="https://pfarnach.itch.io/lanternal" target={"_blank"}>
                        <img src={Lanternal} alt="Main character of lanternel holding her staff and a lantern"/>
                    </a>
                </Col>
                <Col xs={12} lg={6}>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://jkyuusai.itch.io/i-wet-my-plants" target={"_blank"}>
                                <img src={WetMyPlants} alt="Raincloud with text I wet my plants" />
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="https://diaboloshogun.itch.io/catastrophic-wars" target={"_blank"}>
                                <img src={Catastrophic} alt="Title screen with text catastrophic wars"/>
                            </a>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://diaboloshogun.itch.io/fractured-soul" target={"_blank"}>
                                <img src={Fractured} alt="Title screen with text fractured souls"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="https://diaboloshogun.itch.io/i-must-rest" target={"_blank"}>
                                <img src={MustRest} alt="Main character standing in a cave next to a radio "/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row noGutters>
                <Col xs={12} lg={{order: 2, span: 6}}>
                    <a onClick={handleConstructionShow}>
                        <img src={Siggy} alt="Signup form for Siggy" />
                    </a>
                </Col>
                <Col xs={12} lg={6}>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://bushcooking.com/" target={"_blank"}>
                                <img src={Bush} alt="Homepage of bush cooking"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="https://hangrykits.com/" target={"_blank"}>
                                <img src={Hangry} alt="Homepage of hangry kits"/>
                            </a>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://makeupmag.com/pro/" target={"_blank"}>
                                <img src={Makeupmag} alt="Screenshot of advanced form dashboard with results"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="http://pocketkey.com/" target={"_blank"}>
                                <img src={Pocketkey} alt="Example graph showing bank and color votes based on form submissions"/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row noGutters>
                <Col xs={12} lg={6}>
                    <a onClick={handleInternalShow}>
                        <img src={Cloudian} alt="Splash screen for cloudian university app"/>
                    </a>
                </Col>
                <Col xs={12} lg={6}>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://seattlecityclub.org/" target={"_blank"}>
                                <img src={Seattle} alt="Screenshot of seattle city clubs homepage"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="https://firstmovechess.org/" target={"_blank"}>
                                <img src={FirstMove} alt="Screenshot of first move chess organizations homepage"/>
                            </a>
                        </Col>
                    </Row>
                    <Row noGutters>
                        <Col xs={12} sm={6}>
                            <a href="https://novacasework.com/" target={"_blank"}>
                                <img src={Nova} alt="Screenshot of Nova caseworks homepage"/>
                            </a>
                        </Col>
                        <Col xs={12} sm={6}>
                            <a href="https://kamanskiconstruction.com/" target={"_blank"}>
                                <img src={Kamanski} alt="Screenshot of Kamanskis homepage"/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    }
}

export default Gallery;