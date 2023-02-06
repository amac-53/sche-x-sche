import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppHeader = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row className="justify-content-sm-center">
                <Col sm="auto">
                    <h1 className="text-success">
                        sche x sche
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <Col sm="auto">
                    <div className="fs-5 text-success">
                        はじめての人たちでも予定を合わせられるアプリです <br />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AppHeader