import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image} from 'react-bootstrap'
import RestOperation from './RestOperation';
import Reviews from './Reviews';


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
            <Row>
                <Col>
                <Image src={viewrest.photograph} fluid style={{width:'100%',height:'70vh',objectFit:'cover'}}/>
                </Col>
                <Col>
                <h3>Name:{viewrest.name}</h3>
                <h4>Neighbourhood:{viewrest.neighborhood}</h4>
                <h4>Address:{viewrest.address}</h4>
                <h5>Cuisine type:{viewrest.cuisine_type}</h5>
                 <RestOperation operate={viewrest.operating_hours}/>
                 <Reviews review={viewrest.reviews}/>
                </Col>
            </Row>
        ):'null'

    }
    </>
  )
}

export default ViewRestaurant