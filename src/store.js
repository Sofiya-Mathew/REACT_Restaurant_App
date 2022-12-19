import {combineReducers,applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { restaurantReducer } from './Reducers/restaurantReducer'

//to generate middleware

const reducers=combineReducers({
restaurantReducer:restaurantReducer
//key:function
})

const middleware=[thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store