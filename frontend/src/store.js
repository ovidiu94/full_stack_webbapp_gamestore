import {combineReducers} from 'redux'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from '@redux-devtools/extension'
import {getAllGamesReducer, addGameReducer, getGameByIdReducer, editGameReducer} from './reducers/gameReducers'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducer'
import { placeOrderReducer , getUserOrdersByIdReducer, getAllOrdersReducer} from './reducers/orderReducer';



const finalReducer= combineReducers({
    getAllGamesReducer : getAllGamesReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersByIdReducer : getUserOrdersByIdReducer,
    addGameReducer : addGameReducer,
    getGameByIdReducer : getGameByIdReducer,
    editGameReducer : editGameReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState= {
    cartReducer : {
       cartItems : cartItems
   },
   loginUserReducer :{
       currentUser : currentUser
   }
}

const composeEnhancers= composeWithDevTools({})

const store = createStore(finalReducer, initialState , composeEnhancers(applyMiddleware(thunk)))

export default store