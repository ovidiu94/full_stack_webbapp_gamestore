export const addToCart = (game, quantity, platform) => (dispatch, getState) => {
  var cartItem = {
    name: game.name,
    _id: game._id,
    image: game.image,
    platform: platform,
    quantity: Number(quantity),
    prices: game.prices,
    price: game.prices[0][platform] * quantity,
  };
  if(cartItem.quantity>10){
      alert("You can't add more than 10 quantities ")
  }
  else{
      if(cartItem.quantity<1){
        dispatch({ type: "DELETE_FROM_CART", payload: game });
      }
      else{
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    
  }
 
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (game) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: game });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
