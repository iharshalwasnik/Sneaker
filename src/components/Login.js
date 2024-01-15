import React from 'react'
import {Container, Row, Form ,Button, Col} from 'react-bootstrap'
import './styles/Login.css'

function Login() {
  return (
    <div>
      <section className='Login'>
      <Container>
      <Row className='py-4'>
        
      </Row>
        <Row className='py-4 m-auto'>
         <Col>
         <Form className='LoginForm'>
          <h4 className='py-3 text-center' style={{color:'black'}}>LOGIN</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
         </Col>
        </Row>
      </Container>
     </section>
    </div>
    
  )
}

export default Login
