import React from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export const Contacto = () => {
  return (
    <Container>
    <h2 className="mb-4">Contactanos</h2>
    <Form>
    <Form.Group classname="mb-3">
     <Form.Label>
     Ingresa tu consulta:
    <Form.Control type="text" name="email" placeholder='Email' />
     </Form.Label>
    </Form.Group>
    <Form.Group classname="mb-3">
    <Form.Control classname="" type="text" name='informacion' placeholder='Ingrese Texto' />
    </Form.Group>
    <Button Classname="" bg="warning" variant="warning" type='submit'>Enviar</Button>
   </Form>
   </Container>
  );
}
export default Contacto;