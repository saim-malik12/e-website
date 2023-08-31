import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../assets/images/watch.jpg";
const CheckOut = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="chechout-left-data">
                <h3 className="website-name">Ak E-shop</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price" aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active">Shipping</li>
                    &nbsp;/
                    <li className="breadcrumb-item total-price" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details"></p>{" "}
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  className="d-flex flex-wrap gap-15 justify-content-between"
                  action=""
                >
                  <div className="w-100">
                    <select className="form-control" name="" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control w-100"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <input
                      className="form-control w-100"
                      type="text"
                      placeholder="Apartment,Suite etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control "
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select className="form-control" name="" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Zip Code"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link className="text-dark" to="/cart">
                        <BiArrowBack className="me-2" />
                        Return To Cart
                      </Link>
                      <Link className="button" to="/cart">
                        Continue To Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-botton py-4">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-75 mb-2 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span 
                      style={{top:"-10px",right:"2px"}}
                      className="badge bg-secondary text-white rounded-circle p-2 ">1</span>
                      <img className="img-fluid" src={watch} alt="" />
                    </div>
                    <div>
                      <h5 className="title">asdf</h5>
                      <p className="total-price">s / #djshaj</p>
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <h5 total>$100</h5>
                   
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center align-nav-item">
                  <p className="total" >Sub total</p>
                  <p className="total-price">asd</p>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center align-nav-item">
                  <p total>Shipping</p>
                  <p total-price>asd</p>
                </div>
              </div>
              <div className="d-flex justify-content-between border-top py-4 align-items-center align-nav-item">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
