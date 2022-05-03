import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGame, getAllGames } from "../actions/gameActions";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Gameslist() {
  const dispatch = useDispatch();
  const gamesstate = useSelector((state) => state.getAllGamesReducer);
  const { games, error, loading } = gamesstate;
  useEffect(() => {
    dispatch(getAllGames());
  }, []);
  return (
    <div>
      <h2>Games List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-hover table-bordered ">
        <thead className="thead table-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {games &&
            games.map((game) => {
              return (
                <tr>
                  <td>{game.name}</td>
                  <td>
                    PC : {game.prices[0]["PC"]}
                    <br />
                    PS4 : {game.prices[0]["PS4"]}
                    <br />
                    PS5 : {game.prices[0]["PS5"]}
                  </td>
                  <td>{game.category}</td>
                  <td>
                    <i className="fa fa-trash m-3" onClick={()=>{dispatch(deleteGame(game._id))}}></i>
                    <Link to={`/admin/editgame/${game._id}`}><i className="fa fa-edit m-3"></i></Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
