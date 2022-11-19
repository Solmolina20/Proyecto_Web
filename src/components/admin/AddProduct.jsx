import {useContext, useState} from "react";
import {Context} from "../../App";
import Container from "react-bootstrap/Container";

export function AddProduct() {
    const productos = useContext(Context);
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        setInputs(values => ({...values, [event.target.name] : event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("se ha agregado el producto \nNombre del producto: "+inputs.title+" \nDescripción del producto: "+ inputs.description+
            " \nMarca del producto: "+ inputs.brand +" \nPrecio del producto: "+ inputs.price+" \nStock del producto: "+ inputs.stock);
        productos.push(inputs)
        setInputs({})
    }

    return (
        <Container>
            <h1 className={"p-4 m-auto text-center"}>Ingrese el producto</h1>
            <form onSubmit={handleSubmit}>
                <div className={"mb-4"}>
                    <label className="form-label">Nombre del producto </label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={inputs.title || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className={"mb-4"}>
                    <label className="form-label">Descripción del producto: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />

                </div>
                <div className={"mb-4"}>
                    <label className="form-label">Marca del producto: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="brand"
                        value={inputs.brand || ""}
                        onChange={handleChange}
                    />

                </div>
                <div className={"mb-4"}>
                    <label className="form-label">Precio del producto: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={inputs.price || ""}
                        onChange={handleChange}
                    />

                </div>
                <div className={"mb-4"}>
                    <label className="form-label">Stock del producto: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="stock"
                        value={inputs.stock || ""}
                        onChange={handleChange}
                    />

                </div>
                <div className={"mb-4"}>
                    <label className="form-label">Imagen del producto: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="images"
                        value={inputs.images || ""}
                        onChange={handleChange}
                    />

                </div>
                <input className="btn btn-primary" type="submit"/>
            </form>
        </Container>
    )
}
