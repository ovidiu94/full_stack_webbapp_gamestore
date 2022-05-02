import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGames } from "../actions/gameActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState('');
  const [category, setcategory] = useState('all');

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-100"
            placeholder="search games"
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="action">Action</option>
            <option value="strategy">Strategy</option>
            <option value="survival">Survival</option>
          </select>
        </div>
        <div className="col-md-3">
          <button
            className="btn w-100 mt-2"
            onClick={() => {
              dispatch(filterGames(searchkey, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
