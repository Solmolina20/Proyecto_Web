import React, {useContext} from "react";
import {Context} from "../../App";
import Container from "react-bootstrap/Container";


export function ProductList() {
    const productos = useContext(Context);
    return (
        <Container className="my-3">
            <table className="table caption-top">
                <caption>Lista de productos</caption>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">imagen</th>
                    <th scope="col">acciones</th>
                </tr>
                </thead>
                <tbody>
                {productos.map(value =>
                    <tr>
                        <th scope="row">{value.id}</th>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.brand}</td>
                        <td>{value.price}</td>
                        <td>{value.stock}</td>
                        <td><img
                            src={value.images[0]}
                            className="img-fluid mx-auto d-block"
                            alt={value.category}
                            style={{minHeight: "100px", maxHeight: "100px", objectFit: "cover"}}
                        /></td>
                        <td>
                            <div className="row">
                            <button type="button" className="btn btn-primary m-1">Editar</button>
                            <button type="button" className="btn btn-danger m-1">Eliminar</button>
                            </div>
                        </td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </Container>
    );
}
