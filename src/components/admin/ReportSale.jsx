import DatePicker from 'react-date-picker';
import React, {useContext, useState} from "react";
import {SalesContext} from "../../App";
import Container from "react-bootstrap/Container";

export function ReportSale() {
    const sales = useContext(SalesContext);
    const [dateInit, onChangeInit] = useState(new Date());
    const [dateEnd, onChangeEnd] = useState(new Date());
    return (
        <Container className="my-3">
            <h1>Generar Reporte</h1>
            <div className={"row-cols-6"}>
                <h3>Fecha inicial</h3>
                <DatePicker onChange={onChangeInit} value={dateInit}/>
                <h3>Fecha Final</h3>
                <DatePicker onChange={onChangeEnd} value={dateEnd}/>
            </div>


            <table className="table caption-top">
                <caption>Reporte de ventas</caption>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">total venta</th>
                    <th scope="col">cliente</th>
                    <th scope="col">fecha</th>
                    <th scope="col">numero de guia</th>
                </tr>
                </thead>
                <tbody>
                {
                    sales.filter(sale => {
                        let date = new Date(sale.registered);
                        console.log(date)
                        return (date >= dateInit && date <= dateEnd);
                    }).map(valueSale => <tr>
                        <th scope="row">{valueSale._id}</th>
                        <td>{valueSale.total}</td>
                        <td>{valueSale.client}</td>
                        <td>{valueSale.registered}</td>
                        <td>{valueSale.guid}</td>
                    </tr>)
                }     </tbody>
            </table>
        </Container>
    )
}

