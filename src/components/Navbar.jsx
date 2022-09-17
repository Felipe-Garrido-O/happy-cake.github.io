import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom";

export const Navigation = () => {
  return (
    <>
    <Navbar bg="warning" variant="warning">
      <Container className="justify-content-start">
        <Navbar.Brand>Happy Cake</Navbar.Brand>
        <Link to="/" className="text-white ms-3 text-decoration-none">Home</Link>
        <Link to="/Contacto" className="text-white ms-3 text-decoration-none">Contacto</Link>
        <Link to="*" className="text-white ms-3 text-decoration-none"></Link>
     </Container>
    </Navbar>
  </>
  );
}
export default Navigation;
