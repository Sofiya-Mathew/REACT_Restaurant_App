import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import Cards from './Cards.js'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantListAction } from '../Actions/restaurantListAction.js';
import { useDispatch, useSelector } from 'react-redux';

const Restaurantlist = () => {
    //to hold value
    const [allrestaurants,setRestaurants]=useState([])
    // //function to call  API to get all restuarant item from json
    // const getRestaurant=async()=>{
    //    await fetch('/restaurants.json')
    //    .then((data)=>{
    //   data.json()
    //   .then((result)=>{
    //     setRestaurants(result.restaurants) //to covert array of obj to array
    //   })
    //    })
    // }
    // console.log(allrestaurants);

    const dispatch=useDispatch()
    const result=useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
    useEffect(()=>{
      dispatch(RestaurantListAction())
        // getRestaurant()
    },[])
  return (
    <Row style={{margin:'20px 20px'}}>
      {
        restaurantList.map(item=>(
          <Col sm={6} md={6} lg={4} xl={3} style={{margin:'20px 0'}}>
       <Cards restaurant={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurantlist