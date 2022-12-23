import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Reviews = ({review}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button style={{margin:"10px 0px",fontWeight:"300"}}
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    Rating and Reviews
  </Button>
  <Collapse in={open}>
    <div id="example-collapse-text">
      {
        review.map((item)=>(
          <>
          <div style={{paddingTop:"15px"}}>
          <p style={{marginBottom:'2px',padding:"2px 2px",fontSize:"13px"}}>{item.name}
          <span style={{padding:"2px 5px",fontSize:"10px"}}>{item.date}</span></p>
          </div>
          <h5 style={{fontWeight:"400"}}>{item.rating} ratings</h5>
          <div>
          <p style={{margin:'2px 0px',padding:"2px 2px",fontSize:"15px",opacity:".8",fontWeight:'200'}}>{item.comments}</p>
          </div>
          </>
        ))
      }
    </div>
  </Collapse>
  </div>
  )
}

export default Reviews