import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      {/* Navigation Bar */}
      <div className="text-center py-3 px-5">
        {/* Navigation Bar logo to link the all the pages */}
        <Navbar.Brand className="ms-left" href="/">FakeStore E-Shopping</Navbar.Brand>
      </div>
      {/* Button for using class to display the hamburger menu , and using the span this will be the diplay the hamburger icon */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Navigation link class using the navigation to the all the pages */}
        <Nav className="ms-auto p-3 px-5">
          <Nav.Link as={NavLink} to="/" activeclassname="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeclassname="active">Product List</Nav.Link>
          <Nav.Link as={NavLink} to="/addproduct" activeclassname="active">Add Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;