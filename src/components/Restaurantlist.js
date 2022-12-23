import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import Cards from './Cards.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantListAction.js';
import { useDispatch, useSelector } from 'react-redux';
import "../Styels/restaurantlist.css"
import Image from 'react-bootstrap/Image'

const Restaurantlist = () => {
    //to hold value
    const [allrestaurants,setRestaurants]=useState([])
    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
    useEffect(()=>{
      dispatch(RestaurantListAction())
        // getRestaurant()
    },[])
  return (
    <>
    <div className='imgContainer'>
      <div className='bgImg'>
    <Image  className='fluid image' style={{width:"100vw",height:"70vh",objectFit:"cover"}} />
    </div>
    <div className='textContainer'>
      <p className='heading text-pop-up-top '>FIND THE BEST RESTAURANTS!</p>
    </div>
    </div>
    <>
    <Row style={{margin:'20px 20px'}}>
      <div className='container'>
      </div>
      {
        restaurantList.map(item=>(
          <Col sm={6} md={6} lg={4} xl={3} style={{margin:'20px 0'}}>
       <Cards restaurant={item}/>
          </Col>
        ))
      }
    </Row>
    </>
    </>
  )
}

export default Restaurantlist