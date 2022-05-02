import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../actions/gameActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Game from "../components/Game";
//import games from "../gamesdata";
export default function Homepage() {
  const dispatch = useDispatch();
  const gamesstate = useSelector((state)=>state.getAllGamesReducer)
  const { games, error, loading } = gamesstate;

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  return (
    <div>
    <Filter/>
      <div className="row justify-content-center">     
        {loading ? (
          <Loading/>
        ) : error ? (
          <Error error='Something went wrong!'/>
        ) : (
          games.map(game => {
            return (
              <div className="col-md-3 m-3 align-items-stretch d-flex" key={game._id}>
                <div>
                  <Game game={game} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
