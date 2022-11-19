import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/navbar/NavBarPersonalized.js";
import logo from "./particl.svg";
import { Route, Routes } from "react-router-dom";
import { ShopCar } from "./components/shopping/ShopCar";
import React from "react";
import { Container } from "react-bootstrap";
import { CardProducto } from "./components/products/CardProducto";
import {ProductList} from "./components/admin/ProductList";
import {AddProduct} from "./components/admin/AddProduct";
import {ReportSale} from "./components/admin/ReportSale";
import salesJson from "../src/services/sales.json";
import {getAllProducts} from "./services/ProductsService";

const productList = getAllProducts();
export const Context = React.createContext([]);
export var ShopContext = React.createContext([]);
export var SalesContext = React.createContext(salesJson.sales);


function App() {
  return (
    <Context.Provider value={productList}>
      <div className="App">
        <MyNavBar src={logo} isAdmin={true} ></MyNavBar>
        <Routes>
          <Route
            path="/"
            element={<ProductoListComponent></ProductoListComponent>}
          ></Route>
          <Route path="/shopping" element={<ShopCar></ShopCar>}></Route>
          <Route path="/productsAdmin" element={<ProductList></ProductList>}></Route>
          <Route path="/addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="/reportSale" element={<ReportSale></ReportSale>}></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export function ProductoListComponent() {
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <Container>
            <div className="row">
              {value.map((product) => {
                return (
                  <CardProducto
                    producto={product}
                    key={product.id}
                  ></CardProducto>
                );
              })}
            </div>
          </Container>
        );
      }}
    </Context.Consumer>
  );
}

export default App;
