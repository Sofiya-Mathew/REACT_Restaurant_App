import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({restaurant}) => {
  return (
    <Link to={`viewrestaurant/${restaurant.id}`} style={{textDecoration:'none',color:'white'}}>
        <Card >
      <Card.Img variant="top" src={restaurant.photograph} style={{height:'300px',objectFit:'cover'}}/>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cards