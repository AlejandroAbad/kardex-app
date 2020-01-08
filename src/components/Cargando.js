import React from 'react';
import { Row, Spinner, Col } from "react-bootstrap"


const Cargando = (props) => {

    let color = props.color || 'primary';
    let texto = props.texto || 'Cargando ...';

    return (
        <div>
            <Row >
                <Col className="d-flex justify-content-center">
                    <Spinner animation="grow" variant={color} size="xl" />
                </Col>
            </Row>
            <Row >
                <Col className="d-flex justify-content-center">
                    <h3>{texto}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default Cargando;
