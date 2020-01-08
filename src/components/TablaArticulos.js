import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';


import Articulo from 'components/Articulo';
import Cargando from 'components/Cargando';
import 'components/kardex.scss';

const TablaArticulos = (props) => {

    const [stock, setStock] = useState(null);
    const [error, setError] = useState(null);
    const [currentBaseUrl, setCurrentBaseUrl] = useState(null);

    if (currentBaseUrl !== props.baseUrl) {
        setStock(null);
        setError(null);
        setCurrentBaseUrl(props.baseUrl);
    }


    const fetchData = () => {
        if (stock != null || error != null) return;
        fetch(currentBaseUrl + '/stock', { method: "GET" })
            .then(response => response.json())
            .then(response => setStock(response))
            .catch(error => {console.log(error); setError(error)});
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
            <Cargando texto="Cargando artículos ..." />
        )
    }

    let lineas = [];
    stock.forEach( (element, index) => {
        lineas.push(<Articulo data={element} key={index} />);
    });

    if (lineas.length === 0) {
        lineas = (<Alert variant='warning'>
            <h4>No se encontraron resultados</h4>
            <p>Pruebe a cambiar los filtros de búsqueda</p>
        </Alert>);
    }

    return (
        <Container className="TablaArticulos">
            <h1>Lista de artículos</h1>
            <hr/>
            {lineas}
        </Container>
    )



}


export default TablaArticulos;
