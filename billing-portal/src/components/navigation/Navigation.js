import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Form, FormControl } from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg" className="mb-3">
            {/* <Navbar.Brand> <Link to="/"> Bimal Shop </Link></Navbar.Brand> */}
            <Navbar.Brand href="/">  Bimal Shop </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/vendor">Vendor</Nav.Link>
                    <NavDropdown title="Bills" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/bills">Normal Bills</NavDropdown.Item>
                        <NavDropdown.Item href="/panbills">Pan Bills</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/allbills">All Bills</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/product">Product</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation