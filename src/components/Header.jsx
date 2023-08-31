import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import cart from "../assets/images/cart.svg"
import wishlist from "../assets/images//wishlist.svg"
import user from "../assets/images/user.svg"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container xxl">
          <div className="row" style={{ display: "flex" }}>
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shopping over $100 and free return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                {" "}
                Hotline:
                <a className="text-white" href="phone:+92 313 9873749">
                  +92 313 9873749
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div class="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Ak Brothers</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br />
                      Wishlist
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>

                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-buttom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-buttom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="menu" />
                      <span> Show Categories</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-cneter gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
