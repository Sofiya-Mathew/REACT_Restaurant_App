import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           Pizza Hut
          </Navbar.Brand>
        </Container>
      </Navbar>
  </div>
  )
}

export default Header