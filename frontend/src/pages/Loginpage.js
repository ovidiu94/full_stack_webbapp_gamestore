import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error"
import Loading from '../components/Loading'

export default function Loginpage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector(state=>state.loginUserReducer)
  const {loading, error}= loginstate
  const dispatch = useDispatch();

  useEffect(() => {
      if(localStorage.getItem('currentUser')){
        window.location.href='/'
      }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<Loading/> )}
          {error && (<Error error="Invalid Credentials !"/>)}

          <div>
            <input
              required
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <input
              required
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
            <button onClick={login} className="btn mt-4 mb-3">
              Login
            </button>
            <br></br>
            <a style={{color: 'black'}} href="/register" className="mt-2">Click Here To Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}
