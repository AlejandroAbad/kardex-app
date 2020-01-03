import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


import Articulo from './Articulo';
import Cargando from './Cargando';
import './kardex.scss';

const TablaArticulos = (props) => {

    const [stock, setStock] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        if (stock != null || error != null) return;
        fetch('https://cpd25.hefame.es:8123/stock', { method: "GET" })
            .then(response => response.json())
            .then(response =>
                setStock(response)
            )
            .catch(error =>
                setError(error)
            );
    }

    useEffect(fetchData);


    if (error) {
        return (
            <div>
                <h1>Error</h1>
                <pre>{JSON.stringify(error)}</pre>
            </div>
        );
    }

    if (!stock || stock.length === 0) {
        return (
            <Cargando texto="Cargando artículos ..." />
        )
    }

    const lineas = [];
    stock.forEach( (element, index) => {
        lineas.push(<Articulo data={element} key={index} />);
    });


    return (
        <Container className="TablaArticulos">
            {lineas}
        </Container>
    )



}


export default TablaArticulos;
