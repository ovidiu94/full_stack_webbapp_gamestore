import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {editGame, getGameById } from "../actions/gameActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";

export default function Editgame({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [pcprice, setpcprice] = useState();
  const [ps4price, setps4price] = useState();
  const [ps5price, setps5price] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getgamebyidstate = useSelector((state) => state.getGameByIdReducer);

  const { game, error, loading } = getgamebyidstate;
  const editgamestate = useSelector((state)=> state.editGameReducer)
  const {editloading , editerror, editsuccess} = editgamestate;

  useEffect(() => {

    if(game){

        if(game._id==match.params.gameid){
            setname(game.name)
            setdescription(game.description)
            setcategory(game.category)
            setpcprice(game.prices[0]['PC'])
            setps4price(game.prices[0]['PS4'])
            setps5price(game.prices[0]['PS5'])
            setimage(game.image)
        }
        else{
            dispatch(getGameById(match.params.gameid));
        }
        
    }
    else{
        dispatch(getGameById(match.params.gameid)); 
    }
    
  }, [game , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedgame = {
      _id : match.params.gameid,
      name,
      image,
      description,
      category,
      prices: {
        PC: pcprice,
        PS4: ps4price,
        PS5: ps5price,
      },
    };
    dispatch (editGame(editedgame));
  }
  return (
    <div>
      <h1>Edit Game</h1>
      <h1>Game Id = {match.params.gameid}</h1>

      <div className="text-start">
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Game details edited successfully'/>)}
        {editloading && (<Loading />)}
        

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
            Edit Game
          </button>
        </form>
      </div>
    </div>
  );
}
