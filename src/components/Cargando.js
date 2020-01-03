import React from 'react';
import { Card, Row, Spinner, Col } from "react-bootstrap"


const Cargando = (props) => {

    let color = props.color || 'primary';
    let texto = props.texto || 'Cargando ...';

    return (
        <Card>
            <Card.Body>
                <Row >
                    <Col className="d-flex justify-content-center">
                        <Spinner animation="grow" variant={color} size="xl"/>
                    </Col>
                </Row>
                <Row >
                    <Col className="d-flex justify-content-center">
                        <h3>{texto}</h3>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Cargando;
