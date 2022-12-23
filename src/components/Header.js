import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Navbar bg="" variant="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="/" style={{border:"none"}}>
            <img
              alt=""
              src={logo}
              width="70"
              height="65"
              className="d-inline-block"
            />{' '}
           Find Restaurant
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
              style={{backgroundColor:"rgba(12, 11, 11, 0.418)",caretColor:"white",color:"white"}}
            />
            <Button style={{backgroundColor:"rgba(113, 107, 107, 0.45)"}}  variant="outline-light">Search</Button>
          </Form>

        </Container>
      </Navbar>
  </div>
  )
}

export default Header