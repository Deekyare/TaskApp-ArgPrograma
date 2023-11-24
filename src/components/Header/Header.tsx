import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/img/metro_task_11258.png"
import {
  BsGear,
  BsPencilSquare,
  BsBookmarkCheck,
  BsTextLeft,
} from "react-icons/bs";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logoImg}
            className="logo"
            alt="logo"
          />
          Tareas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between contenedor"
        >
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/add-task")}>
              <i className="bi bi-plus"></i> Agregar tareas
            </Nav.Link>
            <NavDropdown
              title="Estados"
              id="basic-nav-dropdown"
              className="estados"
            >
              <NavDropdown.Item onClick={() => navigate("/?status=PORHACER")}>
                Por hacer <BsTextLeft />
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => navigate("/?status=ENPRODUCCION")}
              >
                En producción <BsGear />
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/?status=PORTESTEAR")}>
                Por testear <BsPencilSquare />
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/?status=COMPLETADA")}>
                Completada <BsBookmarkCheck />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-md-none">
            <ul className="navbar-nav me-auto-mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="perfil">
                  Perfil
                </a>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
