import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

export default function Games({ game }) {
  const [quantity, setquantity] = useState(1);
  const [platform, setplatform] = useState("PC");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addToCart(game, quantity, platform));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded" key={game._id}>
    
      <div onClick={handleShow}>
        <h1>{game.name}</h1>
        <img
          src={game.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <p>Platforms:</p>
          <select
            className="form-select"
            value={platform}
            onChange={(e) => {
              setplatform(e.target.value);
            }}
          >
            {game.platforms.map((platform) => {
              return <option value={platform}>{platform}</option>;
            })}
          </select>
        </div>

        <div className="m-1 w-100">
          <p>Quantity:</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: {game.prices[0][platform] * quantity} GBP/-
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn" onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{game.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={game.image}
            className="img-fluid"
            style={{ height: "400px" }}
          />
          <p>{game.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
