import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';

import Ubicacion from 'components/Ubicacion';
import Cargando from 'components/Cargando';
import 'components/kardex.scss';
import FiltroUbicaciones from 'components/FiltroUbicaciones';
import ExcelUbicaciones from './TablaUbicaciones.Descargar';



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


    let lineas = []
    let ubucacionesExcel = []
    const formatosCaja = {}
    const tiposUbicacion = {}


    stock.forEach((e, index) => {

        if (!formatosCaja[e.formato.modelo]) {
            formatosCaja[e.formato.modelo] = e.formato;
            formatosCaja[e.formato.modelo].count = 1
        } else {
            formatosCaja[e.formato.modelo].count++;
        }

        if (!tiposUbicacion[e.tipo]) {
            tiposUbicacion[e.tipo] = e.tipo;
        }


        if (
            (!filtros.formatoCaja || filtros.formatoCaja === e.formato.modelo) &&
            (!filtros.tipoUbicacion || filtros.tipoUbicacion === e.tipo)) {
            lineas.push(<Ubicacion data={e} key={index} />);
        }

        ubucacionesExcel.push({
            id_ubicacion: e.id,
            estante: e.estante,
            bandeja: e.bandeja,
            posicion: e.posicion,
            offset: e.offset,
            tipo_ubicacion: e.tipo,
            ancho_ubicacion: e.formato.ancho,
            profundidad_ubicacion: e.formato.profundidad,
            arti_cn: e.articulo?.cn ?? '',
            arti_name: e.articulo?.name ?? '',
            arti_stock: e.articulo?.stock ?? '',
            arti_caducidad: e.articulo?.caducidad ?? '',
            arti_lote: e.articulo?.lote ?? '',
            arti_caja_ancho: e.articulo?.caja?.ancho ?? '',
            arti_caja_profundidad: e.articulo?.caja?.profundidad ?? ''
        })
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
                <div className="float-right"><small><ExcelUbicaciones ubicaciones={ubucacionesExcel} /></small></div>
            </h1>
            <hr />
            {lineas}
        </Container>
    )



}


export default TablaUbicaciones;
