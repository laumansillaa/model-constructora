import style from './styles/nav.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const Navv = () => {

    return (
        <Navbar  variant="dark" expand="lg" className={style.contNav}>
          <Container className={style.container} >
            <Navbar.Brand as={Link} to='/'>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" id='menu'/>
            <Navbar.Collapse id="responsive-navbar-nav" className={style.cont}>
              <Nav 
                  style={{ maxHeight: '500px' }}
                  navbarScroll >
                  <Nav.Link as={Link} to='/' >INICIO</Nav.Link>
                  <Nav.Link as={Link} to="/service">SERVICIOS</Nav.Link>
                  <Nav.Link href="#pricing">PROYECTOS</Nav.Link>
                  {/* <NavDropdown title="PROYECTOS" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Ver todos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Solicitar entrevista
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Enviar documentos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Otra accion
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link as={Link} to='/contact'>CONTACTO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navv;