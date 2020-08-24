import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'

class Copyright  extends Component {
    render() {
        const date = new Date();
        const year = date.getFullYear();
        return <section className="copyright">
            <Container>
                <Row>
                    <Col>
                        <small>
                            &copy; {year} All rights reserved
                        </small>
                    </Col>
                </Row>
            </Container>
        </section>
    }
}

export default Copyright;