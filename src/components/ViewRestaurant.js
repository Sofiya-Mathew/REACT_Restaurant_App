import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image} from 'react-bootstrap'
import RestOperation from './RestOperation';
import Reviews from './Reviews';
import '../Styels/viewrestaurant.css'

const ViewRestaurant = () => {
    const param=useParams()
    console.log(param.id);
        //to hold value
        const [allrestaurants,setRestaurants]=useState([])
        //function to call  API to get all restuarant item from json
        const getRestaurant=async()=>{
           await fetch('/restaurants.json')
           .then((data)=>{
          data.json()
          .then((result)=>{
            setRestaurants(result.restaurants) //to covert array of obj to array
          })
           })
        }
        console.log(allrestaurants);
        useEffect(()=>{
            getRestaurant()
        },[])

        const viewrest=allrestaurants.find(item=>item.id==param.id)
        console.log(viewrest);

  return (
    <>
    {
        viewrest?
        (
        <Row className='rows'>
      <Col style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Image src={viewrest.photograph} fluid style={{width:'100%',height:'70vh',objectFit:'cover',margin:"20px 30px"}}/>
      </Col>
      <Col style={{width:"100%",margin:"10px 20px"}}>
      <div className='scroll-bg'>
        <div className='scroll-div'>
         <div className='scroll-object'>
         <h5 style={{fontWeight:"500"}}>{viewrest.name}</h5>
         <h5 style={{fontWeight:"500"}}>{viewrest.neighborhood}</h5>
      <h5 style={{fontWeight:"500"}}>{viewrest.address}</h5>
      <h5 style={{fontWeight:"500"}}>{viewrest.cuisine_type}</h5>
        <RestOperation operate={viewrest.operating_hours}/>
        <Reviews review={viewrest.reviews}/>
         </div>
        </div>
      </div>     
      </Col>
  </Row>
    ):'null'

}
    </>
  )
}

export default ViewRestaurant