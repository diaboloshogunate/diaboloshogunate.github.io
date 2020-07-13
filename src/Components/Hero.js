import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'

class Hero extends Component {
    render() {
        return <section className={"hero"}>
            <Container className={"d-flex align-items-center"}>
                <Row>
                    <Col>
                        <h1>Unity and React Developer</h1>
                        <p>With over 10 years of experience building everything <br/> from WordPress websites to Unity games.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    }
}

export default Hero;