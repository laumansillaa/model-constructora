import style from './styles/nav.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Navv = () => {

    return (
        <Navbar  variant="dark" expand="lg" className={style.contNav}>
          <Container className={style.container} >
            <Navbar.Brand as={Link} to='/'>Constructora</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav" className={style.cont}>
              <Nav 
                  style={{ maxHeight: '500px' }}
                  navbarScroll >
                  <Nav.Link as={Link} to='/'>INICIO</Nav.Link>
                  <Nav.Link as={Link} to="/service">SERVICIOS</Nav.Link>
                  <Nav.Link href="#pricing">PROYECTOS</Nav.Link>
                  <Nav.Link as={Link} to='/contact'>CONTACTO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navv;