import React from 'react';
import ReactExport from "react-data-export";
import { Button } from 'react-bootstrap';
import { GoDesktopDownload } from 'react-icons/go';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


const ExcelUbicaciones = ({ubicaciones}) => {

    let d = new Date()
    let dateString = (d.getDate() + '').padStart(2, '0') + '-' + ((d.getMonth() + 1) + '').padStart(2, '0') + '-' + d.getFullYear() + ' ' + (d.getHours() + '').padStart(2, '0') + '-' + (d.getMinutes() + '').padStart(2, '0') + '-' + (d.getSeconds() + '').padStart(2, '0')

    return (
        <ExcelFile filename={`ubicaciones-kardex-${dateString}`} element={<Button variant='primary'><GoDesktopDownload size={20} className="mb-1 mr-3" />Descargar  Excel</Button>}>
            <ExcelSheet data={ubicaciones} name="Ubicaciones" >
                <ExcelColumn label="ID" value="id_ubicacion" />
                <ExcelColumn label="ESTANTERIA" value="estante" />
                <ExcelColumn label="BANDEJA" value="bandeja" />
                <ExcelColumn label="POSICION" value="posicion" />
                <ExcelColumn label="OFFSET" value="offset" />

                <ExcelColumn label="TIPO" value="tipo_ubicacion" />

                <ExcelColumn label="ANCHO" value="ancho_ubicacion" />
                <ExcelColumn label="PROFUNDIDAD" value="profundidad_ubicacion" />


                <ExcelColumn label="ARTICULO" value="arti_cn" />
                <ExcelColumn label="NOMBRE" value="arti_name" />
                <ExcelColumn label="CANTIDAD" value="arti_stock" />
                <ExcelColumn label="CADUCIDAD ARTICULO" value="arti_caducidad" />
                <ExcelColumn label="LOTE ARTICULO" value="arti_lote" />
                <ExcelColumn label="ANCHO ARTICULO" value="arti_caja_ancho" />
                <ExcelColumn label="PROFUNDIDAD ARTICULO" value="arti_caja_profundidad" />

            </ExcelSheet>
        </ExcelFile>
    )


}


export default ExcelUbicaciones;
