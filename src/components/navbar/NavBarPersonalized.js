import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import ClientItems from "./ClientItems";
import AdminItems from "./AdminItems";
import { Link } from "react-router-dom";
function BasicExample(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={props.src}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            EmprendimientoTIC
          </Navbar.Brand>
        </Link>

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          console.log(props)
          {props.isAdmin=== true ? (
            <AdminItems></AdminItems>
          ) : (
            <ClientItems></ClientItems>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
