import React from "react";
// aimport { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Custominput from "../components/Custominput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="container">
        {" "}
        <div className="login wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <Custominput type="name" name="text" placeholder="Name" />
                  <Custominput  type="email"
                      name="email"
                      placeholder="email" />
                  <Custominput type="tel"
                      name="mobile"
                      
                      placeholder="Mobile Number" />
                  <Custominput  type="password"
                      name="password"
                     
                      placeholder="Password" />
                  <div></div>
                  <div>
                  </div>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
