import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Ubicacion from './Ubicacion';
import Cargando from './Cargando';
import './kardex.scss';

const TablaUbicaciones = (props) => {

    const [stock, setStock] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = () => {
        if (stock != null || error != null) return;
        fetch('https://cpd25.hefame.es:8123/ubicaciones', { method: "GET", charset: 'latin1' })
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
            <Cargando texto="Cargando ubicaciones ..." color="success" />
        )
    }


    const lineas = [];
    stock.forEach((element, index) => {
        lineas.push(<Ubicacion data={element} key={index} />);
    });


    return (
        <Container className="TablaUbicaciones">
            {lineas}
        </Container>
    )



}


export default TablaUbicaciones;
