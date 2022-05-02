import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-primary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            GoldenGames
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i style={{color:'black'}} className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             { currentUser ? (
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser)}}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
             ) :(
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
             )}

             <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartstate.cartItems.length}
                </a>
              </li>
              
              { currentUser && currentUser.isAdmin? (
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Panel
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/admin/userslist">
                      User List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admin/gameslist">
                      Game List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admin/addgame">
                      Add New Game
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admin/orderslist">
                      Order List
                    </a>
                  </li>
                </ul>
              </div>
             ) :(
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  
                </a>
              </li>
             )}

             
            
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
