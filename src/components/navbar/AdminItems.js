import { Link } from 'react-router-dom';
function AdminItems() {
    return(
        <>
        <Link to="/productsAdmin" className="nav-link">Lista productos</Link>
        <Link to={"/addProduct"} className="nav-link">Agregar producto</Link>
        <Link to={"/reportSale"} className="nav-link">Lista ventas</Link>
        </>

    )
}
export default AdminItems;
