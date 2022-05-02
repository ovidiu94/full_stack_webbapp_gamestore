import logo from "./logo.svg";
import "./App.css";
//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Orderspage from "./pages/Orderspage";
import Adminpage from "./pages/Adminpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/cart" exact component={Cartpage} />
        <Route path="/register" exact component={Registerpage} />
        <Route path="/login" exact component={Loginpage} />
        <Route path="/orders" exact component={Orderspage} />
        <Route path="/admin" component={Adminpage} />
      </BrowserRouter>
    </div>
    // <div className="App">

    //   <BrowserRouter>
    //     <Navbar />

    //       <Route exact path="/" element={<Homepage />}></Route>
    //       <Route exact path="/cart" element={<Cartpage />}></Route>
    //       <Route exact path="/register" element={<Registerpage />}></Route>
    //       <Route exact path="/login" element={<Loginpage/>}></Route>
    //       <Route exact path="/orders" element={<Orderspage/> }></Route>
    //       <Route path="/admin" element={<Adminpage/>}></Route>
    //   </BrowserRouter>

    // </div>
    // <div className="App">
    //<Route path="/:id"></Route>
    //   <BrowserRouter>
    //   <Navbar />
    //     <Routes>
    //       <Route path="/"  exact element={<Homepage/>} />
    //       <Route path="/cart" exact element={<Cartpage/>} />
    //       <Route path="/register" exact element={<Registerpage/>} />
    //       <Route path="/login" exact element={<Loginpage/>} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
