import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../assets/images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      className="img-fluid"
                      src={watch}
                      alt="product-image"
                    />
                  </div>
                  <div className="w-75">
                    <p>abc</p>
                    <p>Size:</p>
                    <p>Color:ghi</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input form-control type="number" min={1} max={10} />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="d-flex jutify-content-between">
              <div className="col-12 py-2 mt-4">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                    <h4>Suv Total : $1000 </h4>
                    <p>Taxes and Shipping calculated at chechout</p>
                    <Link to="/checkout" className="button">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
