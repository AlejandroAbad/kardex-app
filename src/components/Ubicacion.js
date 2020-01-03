import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Articulo = (props) => {

    let line = props.data;
    let articulo = line.articulo;
    return (
        <Row className='Row'>
            <Col className="Cell Ubicacion"     lg={2} md={6}>
                <b>Estante:</b> {line.estante}<br />
                <b>Bandeja:</b> {line.bandeja}<br />
                <b>Posición:</b> {line.posicion}
            </Col>

            <Col className="Cell Formato"       lg={3} md={6}>
                <b>Formato: </b> {line.formato.modelo} ({line.formato.ancho} x {line.formato.profundidad}) <br/>
                <b>Tipo: </b> {line.tipo}
            </Col>

            { articulo ?
                <Col className="Cell Articulo"  lg={6}>
                    
                    <b>{articulo.cn}</b> <br className="d-sm-none"/> {articulo.name} <br />
                    <b>Stock: </b>{articulo.stock}<br />
                    <b>Cad: </b>{articulo.caducidad}<br />
                    <b>Lote: </b>{articulo.lote}<br />
                    <b>Caja: </b>{articulo.caja.modelo} ({articulo.caja.ancho} x {articulo.caja.profundidad})
                </Col>
                :
                <Col className="Cell Articulo"  lg={6}>
                    <i>Ubicación vacía</i>
                </Col>
            }
        </Row>
    )
}




export default Articulo;