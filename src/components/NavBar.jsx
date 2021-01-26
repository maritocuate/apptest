import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar(props) {
     return (
          <div style={{height:'100vh'}} className="container d-flex justify-content-center flex-column">
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Marito Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#gallery">Gallery</Nav.Link>
                         <NavDropdown title="Our Menu" id="collasible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Burguers</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">Milanesas</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Ice Cream</NavDropdown.Item>
                         </NavDropdown>
                         <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                         <Nav.Link href="https://maritoq.com">@marioquiroga</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </div>
     );
}

export default NavBar;