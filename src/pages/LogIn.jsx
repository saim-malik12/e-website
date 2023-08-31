import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <Meta title={"Log In"} />
      <BreadCrumb title="Log In" />
      <div className="container"><div className="login wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Log In</h3>
              <form action="" className="d-flex flex-column gap-15">
              
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                
                <div>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
               
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">Login</button>
                  <Link to="/signup" className=" signup button">Sign Up</Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div></div>
      
    </>
  );
};

export default LogIn;
