import {R_SUCCESS,R_FAILURE} from '../constants/constants'

export const restaurantReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return {
                restaurantList:action.payload
            }
            case R_FAILURE:
              return {
                restaurantList:action.error
              }
              default:
                return state
    }
}