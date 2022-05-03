import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Switch, Link} from "react-router-dom";
import Addgame from "./Addgame";
import Editgame from "./Editgame";
import Gameslist from "./Gameslist";
import Orderslist from "./Orderslist";
import Userslist from "./Userslist";

export default function Adminpage() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={'/admin/userslist'} style={{color: 'white'}}>Users List</Link>
            </li>
            <li>
            <Link to={'/admin/gameslist'} style={{color: 'white'}}>Games List</Link>
            </li>
            <li>
            <Link to={'/admin/addgame'} style={{color: 'white'}}>Add New Game</Link>
            </li>
            <li>
            <Link to={'/admin/orderslist'} style={{color: 'white'}}>Orders List</Link>
            </li>

            
          </ul>
          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/gameslist" component={Gameslist} exact />
            <Route path="/admin/addgame" component={Addgame} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/editgame/:gameid" component={Editgame} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}
