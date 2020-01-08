import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';

import Ubicacion from 'components/Ubicacion';
import Cargando from 'components/Cargando';
import 'components/kardex.scss';
import FiltroUbicaciones from 'components/FiltroUbicaciones';



const TablaUbicaciones = (props) => {

    const [stock, setStock] = useState(null);
    const [error, setError] = useState(null);
    const [filtros, setFiltros] = useState({});
    const [currentBaseUrl, setCurrentBaseUrl] = useState(null);


    if (currentBaseUrl !== props.baseUrl) {
        setStock(null);
        setError(null);
        setCurrentBaseUrl(props.baseUrl);
    }


    const fetchData = () => {
        if (stock != null || error != null) return;
        fetch(currentBaseUrl + '/ubicaciones', { method: "GET", charset: 'latin1' })
            .then(response => response.json())
            .then(response => setStock(response))
            .catch(error => setError(error));
    }

    useEffect(fetchData);


    if (error) {
        return (
            <Alert variant='danger'>
                <h4>Error</h4>
                <pre>{JSON.stringify(error)}</pre>
            </Alert>
        );
    }

    if (!stock || stock.length === 0) {
        return (
            <Cargando texto="Cargando ubicaciones ..." color="success" />
        )
    }


    let lineas = [];
    const formatosCaja = {};
    const tiposUbicacion = {};

    stock.forEach((element, index) => {

        if (!formatosCaja[element.formato.modelo]) {
            formatosCaja[element.formato.modelo] = element.formato;
            formatosCaja[element.formato.modelo].count = 1
        } else {
            formatosCaja[element.formato.modelo].count ++;
        }

        if (!tiposUbicacion[element.tipo]) {
            tiposUbicacion[element.tipo] = element.tipo;
        }


        if (
            (!filtros.formatoCaja || filtros.formatoCaja === element.formato.modelo) &&
            (!filtros.tipoUbicacion || filtros.tipoUbicacion === element.tipo))
        {
            lineas.push(<Ubicacion data={element} key={index} />);
        }
    });

    if (lineas.length === 0) {
        lineas = (<Alert variant='warning'>
            <h4>No se encontraron resultados</h4>
            <p>Pruebe a cambiar los filtros de búsqueda</p>
        </Alert>);
    }

    return (
        
        <Container className="TablaUbicaciones">
            <h1>
                Lista de ubicaciones
                <FiltroUbicaciones onUpdate={setFiltros} filtros={filtros} formatosCaja={formatosCaja} tiposUbicacion={tiposUbicacion} />
            </h1>
            <hr />
            {lineas}
        </Container>
    )



}


export default TablaUbicaciones;
