import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>

      {loading && (<Loading/>)}
      {error && (<Error error='Something went wrong'>{error}</Error>)}
      {success && (<Success success='Your Order Placed Successfully'/>)}

      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Kq2Z8A9BaFGzPyR6KVZsehmF7Cymn6z0y9I9dhAlMqvTdlMoQnqtOlRUwWbZeaugUsULnB9zcsXsf5OfTbVExmJ00TW3Ra1l8"
        currency="GBP"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}
