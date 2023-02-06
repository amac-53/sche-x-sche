import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';


const SendBotton = (props) => {
    return (
        <Container className="mt-3 mb-5">
            <Row className="justify-content-sm-center">
                <Col sm="auto">
                    <Button onClick={props.checkInput} variant="success" type="submit">
                        確定する
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default SendBotton