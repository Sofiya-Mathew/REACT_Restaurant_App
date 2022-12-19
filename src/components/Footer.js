import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Footer = () => {
  return (
    <div>

    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
About Us
Contactless delivery
Nutrition
        </Card.Text>
        <Button variant="primary">Give us feedback</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than thirty minutes. *T&C Apply.
Hurry up and place your order now!</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer