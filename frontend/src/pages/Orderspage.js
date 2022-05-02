import React , {useSate, useEffect} from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { getUserOrdersById } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Orderspage() {

    const dispatch = useDispatch()
    const ordersstate = useSelector(state=>state.getUserOrdersByIdReducer)
    const {orders , error , loading} = ordersstate

    useEffect(() => {

        dispatch(getUserOrdersById())
    }, [])

  return (
    <div>
      <h2 style={{fontSize: '35px'}}>My Orders</h2>
      <hr style={{visibility: 'hidden'}}/>
      <div className="row justify-content-center">
          {loading && (<Loading/>)}
          {error && (<Error error='Something went wrong'>{error}</Error>)}
          {orders && orders.map(order=>{
              return <div className="col-md-8 m-2 p-1" style={{backgroundColor: 'lightblue'}}>

                  <div className="flex-container">
                        <div className='text-start w-100 m-1'>
                            <h2 style={{fontSize:'25px'}}>Items</h2>
                            <hr style={{visibility: 'hidden'}}/>
                            {order.orderItems.map(item=>{
                                return <div>
                                    <p>{item.name} [{item.platform}] * {item.quantity} ={item.price}</p>
                                </div>
                            })}
                        </div>
                        <div className='text-start w-100 m-1'>
                            <h2 style={{fontSize:'25px'}}>Address</h2>
                            <hr style={{visibility: 'hidden'}}/>
                            <p>Street : {order.shippingAddress.street}</p>
                            <p>City : {order.shippingAddress.city}</p>
                            <p>Country : {order.shippingAddress.country}</p>
                            <p>Postcode : {order.shippingAddress.postcode}</p>
                        </div>
                        <div className='text-start w-100 m-1'>
                            <h2 style={{fontSize:'25px'}}>Order info</h2>
                            <hr style={{visibility: 'hidden'}}/>
                            <p>Order Amount : {order.orderAmount}</p>
                            <p>Date : {order.createdAt.substring(0,10)}</p>
                            <p>Transaction Id : {order.transactionId}</p>
                            <p>Order Id : {order._id}</p>   
                        </div>
                  </div>
              </div>
          })}
      </div>
    </div>
  )
}
