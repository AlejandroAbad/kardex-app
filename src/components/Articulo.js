import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Articulo = (props) => {

    let line = props.data;
    return (
        <Row className='Row'>
            <Col className="Cell Articulo" lg={4}>
                <b>{line.id}</b><br className="d-none d-lg-inline-block" /> {line.name}
            </Col>
            <Col className="Cell Stock" lg={2} md={3} sm={6}>
                <b>Stock</b>: {line.stock}
            </Col>

            <Col className="Cell Caducidad" lg={2} md={3} sm={6}>
                <b>Cad: </b>{line.expireDate}<br />
                <b>Lote: </b>{line.lot}
            </Col>
            <Col className="Cell Ubicacion" lg={2} md={3} sm={6}>
                <b>Ubicación:</b><br className="d-none d-sm-inline-block" /> {line.ubicacion.estanteria} / {line.ubicacion.bandeja} / {line.ubicacion.posicion}
            </Col>
            <Col className="Cell Caja" lg={2} md={3} sm={6}>
                <b>Caja: </b>{line.caja.modelo}<br className="d-none d-sm-inline-block" /> ({line.caja.ancho} x {line.caja.profundidad})</Col>
        </Row>
    )
}




export default Articulo;