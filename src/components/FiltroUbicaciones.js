import React, { useState } from 'react';
import { FiFilter, FiBox } from 'react-icons/fi';
import { GiResize } from 'react-icons/gi';

import { Button, Modal,Form } from 'react-bootstrap';

const FiltroUbicaciones = (props) => {

    let numFiltros = 0;
    for (var key in props.filtros) {
        if (props.filtros[key]) {
            numFiltros ++;
        }
    }

    const [optionsModalShow, setOptionsModalShow] = useState(false);



    const commitFiltros = (filtros) => {
        setOptionsModalShow(false);
        props.onUpdate(filtros);
    }


    let style = numFiltros ? "link" : "none";
    return (
        <span>
            <Button className="BotonFiltro" variant={style} size="lg" onClick={() => { setOptionsModalShow(true) } }>
                <FiFilter />
                {numFiltros > 0 && 
                    <span className="badge badge-danger ContadorFiltros">{numFiltros}</span>
                }
                
            </Button>
            <ModalFiltroUbicaciones 
                show={optionsModalShow} 
                onCommit={commitFiltros} 
                filtros={props.filtros} 
                formatosCaja={props.formatosCaja} 
                tiposUbicacion={props.tiposUbicacion} />
        </span>
    );


}


const ModalFiltroUbicaciones = (props) => {

    const { onCommit: a, filtros: b, formatosCaja: c, tiposUbicacion: d, ...rest} = props;
    const [inputValues, setInputValues] = useState(
        { formatoCaja: '' }
    );

    const handleOnChange = event => {
        const { id, value } = event.target;
        let newValues = { ...inputValues, [id]: value };
        setInputValues(newValues);
    };

    const commitAndClose = () => {
        props.onCommit(inputValues);
    }

    let index = 0;
    let optionsFormatosCaja = [(<option key={index++} value="">- Todos -</option>)];
    for (var formatoCaja in props.formatosCaja) {
        formatoCaja = props.formatosCaja[formatoCaja];
        optionsFormatosCaja.push(<option key={index++} value={formatoCaja.modelo}>{formatoCaja.modelo} &raquo; ({formatoCaja.ancho}mm x {formatoCaja.profundidad}mm) &raquo; {formatoCaja.count} ubicaciones</option>)
    }


    index = 0;
    let optionsTiposUbicacion = [(<option key={index++} value="">- Todos -</option>)];
    for (var tipoUbicacion in props.tiposUbicacion) {
        tipoUbicacion = props.tiposUbicacion[tipoUbicacion];
        optionsTiposUbicacion.push(<option key={index++} value={tipoUbicacion}>{tipoUbicacion}</option>)
    }

    return (
        <Modal {...rest} onHide={commitAndClose} backdrop keyboard centered size="lg" aria-labelledby="contained-modal-filto-ubicaciones" className="ModalFiltroUbicaciones" >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-filto-ubicaciones">
                    Filtros
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="formatoCaja">
                        <Form.Label><GiResize /> Formato de caja</Form.Label>
                        <Form.Control as="select" defaultValue={props.filtros.formatoCaja} onBlur={handleOnChange}>
                            {optionsFormatosCaja}
                        </Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Form.Group controlId="tipoUbicacion">
                        <Form.Label><FiBox /> Tipo de ubicación</Form.Label>
                        <Form.Control as="select" defaultValue={props.filtros.tipoUbicacion} onBlur={handleOnChange}>
                            {optionsTiposUbicacion}
                        </Form.Control>
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="m-auto" variant="primary" onClick={commitAndClose}><FiFilter /> Aplicar filtros</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FiltroUbicaciones;