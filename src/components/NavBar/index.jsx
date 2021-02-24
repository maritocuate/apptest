import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'

function NavBar(props) {
     return (
          <div className="container">
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Link to='/'><Navbar.Brand>MQ Resto</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                         <Nav.Link href="#home">Menu</Nav.Link>
                         <Nav.Link href="#gallery">Gallery</Nav.Link>
                         <NavDropdown title="Our Menu" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Burguers</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Milanesas</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Ice Cream</NavDropdown.Item>
                         </NavDropdown>
                         <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                         <Link to="/cart"><CartWidget /></Link>
                    </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </div>
     );
}

export default NavBar;