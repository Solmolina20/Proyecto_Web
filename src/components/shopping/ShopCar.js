import { Button, Container, Table } from "react-bootstrap";
import { ShopContext, Context } from "../../App";
import React, { useContext } from "react";
export function ShopCar() {
  const carritoCompra = useContext(ShopContext);
  const productos = useContext(Context);
  let total = 0;
  return (
    <Container className="my-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            carritoCompra.map((producto)=>{
              total += producto.price * producto.cantidad; 
              return (
              <tr key={producto.id}>
                <td><img src={producto.images[0]}
                     className="img-fluid mx-auto d-block"
                     alt={producto.category}
                     style={{ minHeight: "100px", maxHeight: "100px", objectFit: "cover" }}/></td>
                <td>{producto.title}</td>
                <td>${producto.price}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.price * producto.cantidad}</td>
              </tr>)
            })
          }
        </tbody>
      </Table>
      <div className="d-flex flex-row justify-content-between">
      <h3 className="fs-6 w-75 text-end">Total a pagar: </h3>
      <h3 className="fs-6 fst-italic w-25 text-end">${total}</h3>
      </div>
      <div className="d-flex flex-row-reverse my-3">
        <Button onClick={()=>{Checkout(carritoCompra,productos)}} disabled={carritoCompra.length <= 0} >CheckOut</Button>
      </div>
    </Container>
  );
}

function Checkout(carritoCompra, productos){
  carritoCompra.forEach(element => {
    const productoIndex = productos.findIndex((value)=>value.id === element.id);
    if(productoIndex !== -1){
      productos[productoIndex].stock = productos[productoIndex].stock - element.cantidad;
      console.log("Producto: " + element.title + " quedan : " + productos[productoIndex].stock + " en Stock")
    }
  }); 
}
