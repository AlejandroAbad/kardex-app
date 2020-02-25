import React from 'react';
import ReactExport from "react-data-export";
import { Button } from 'react-bootstrap';
import { GoDesktopDownload } from 'react-icons/go';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExcelArticulos = ({articulos}) => {

    let d = new Date()
    let dateString = (d.getDate() + '').padStart(2, '0') + '-' + ((d.getMonth() + 1) + '').padStart(2, '0') + '-' + d.getFullYear() + ' ' + (d.getHours() + '').padStart(2, '0') + '-' + (d.getMinutes() + '').padStart(2, '0') + '-' + (d.getSeconds() + '').padStart(2, '0')

    return (
        <ExcelFile filename={`articulos-kardex-${dateString}`} element={<Button variant='primary'><GoDesktopDownload size={20} className="mb-1 mr-3" />Descargar  Excel</Button>}>
            <ExcelSheet data={articulos} name="Artículos" >
                <ExcelColumn label="CN" value="cn" />
                <ExcelColumn label="NOMBRE" value="name" />
                <ExcelColumn label="EAN" value="ean" />
                <ExcelColumn label="CANTIDAD" value="stock" />
                <ExcelColumn label="CADUCIDAD" value="caducidad" />
                <ExcelColumn label="LOTE" value="lote" />
                <ExcelColumn label="ANCHO CAJA" value="ancho_caja" />
                <ExcelColumn label="PROFUNDIDAD CAJA" value="profundidad_caja" />
                <ExcelColumn label="ID UBICACION" value="id_ubicacion" />
                <ExcelColumn label="ESTANTERIA" value="estanteria" />
                <ExcelColumn label="BANDEJA" value="bandeja" />
                <ExcelColumn label="POSICION" value="posicion" />
            </ExcelSheet>
        </ExcelFile>
    )



}


export default ExcelArticulos;
