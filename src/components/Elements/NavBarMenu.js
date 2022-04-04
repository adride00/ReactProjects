import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const NavBarMenu = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-item nav-link" to="/admin/routerBasic/">Home</Link>
      <Link className="nav-item nav-link" to="/admin/routerBasic/about">About</Link>
      <Link className="nav-item nav-link" to="/admin/routerBasic/login">Login</Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}
