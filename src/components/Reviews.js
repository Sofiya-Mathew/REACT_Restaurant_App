import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Reviews = ({review}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    click to see reviews
  </Button>
  <Collapse in={open}>
    <div id="example-collapse-text">
      {
        review.map((item)=>(
          <>
          <p>{item.name}
          <span>{item.date}</span></p>
          <h5>Rating : {item.rating}</h5>
          <h6>{item.comments}</h6>
          </>
        ))
      }
    </div>
  </Collapse>
  </div>
  )
}

export default Reviews