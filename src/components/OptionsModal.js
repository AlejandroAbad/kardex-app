import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import useInput from 'util/useInput';

function OptionsModal(props) {

    const { baseUrl: a, onAccept: b, ...rest } = props;

    const { value: baseUrl, bind: bindBaseUrl, reset: resetBaseUrl } = useInput(props.baseUrl);

    const onCancel = () => {
        resetBaseUrl();
        props.onCancel();
    }


    const onAccept = () => {
        let values = {
            baseUrl
        }
        props.onAccept(values);
    }

    return (
        <Modal {...rest} backdrop='static' size="lg" aria-labelledby="contained-modal-title-vcenter" centered keyboard={false} className="OptionsModal" >
            <Modal.Header closeButton={false} >
                <Modal.Title id="contained-modal-title-vcenter">
                    Configuración
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUrl">
                        <Form.Label>URL del servicio</Form.Label>
                        <Form.Control type="text" placeholder="Url"{...bindBaseUrl} />
                        <Form.Text className="text-muted">Url base del servicio API Kardex.</Form.Text>
                    </Form.Group>
                </Form>                    
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onAccept}>Aceptar</Button>
                <Button variant="dark" onClick={onCancel}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default OptionsModal;