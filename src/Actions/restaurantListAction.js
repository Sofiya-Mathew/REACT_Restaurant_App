import axios from "axios";
import { useDispatch } from "react-redux";
import {R_SUCCESS,R_FAILURE} from '../constants/constants'

export const RestaurantListAction=()=>async(dispatch)=>{

  try {
   const result= await axios('./restaurants.json')
   console.log(result.data.restaurants);
     dispatch({
      type:R_SUCCESS,
      payload:result.data.restaurants
     })
  } catch (error) {
     dispatchEvent({
      type:R_FAILURE,
      error:error
     })
  }

}