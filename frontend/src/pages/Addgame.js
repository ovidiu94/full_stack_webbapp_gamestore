import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGame } from "../actions/gameActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Addgame() {
  const [name, setname] = useState('');
  const [pcprice, setpcprice] = useState();
  const [ps4price, setps4price] = useState();
  const [ps5price, setps5price] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [category, setcategory] = useState('');

  const dispatch = useDispatch();
  const addgamestate = useSelector(state=>state.addGameReducer);
  const { success, error, loading } = addgamestate;

  function formHandler(e) {
    e.preventDefault();

    const game = {
      name,
      image,
      description,
      category,
      prices: {
        PC: pcprice,
        PS4: ps4price,
        PS5: ps5price
      },
    };
    console.log(game);
    dispatch(addGame(game));
  }
  return (
    <div>
      <div className="text-start">
        <h1>Add Game</h1>

        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {success && <Success success="New Game added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="pc platform price"
            value={pcprice}
            onChange={(e) => {
              setpcprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="ps4 platform price"
            value={ps4price}
            onChange={(e) => {
              setps4price(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="ps5 platform price"
            value={ps5price}
            onChange={(e) => {
              setps5price(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />

          <button className="btn mt-3" type="submit">
            Add Game
          </button>
        </form>
      </div>
    </div>
  );
}
