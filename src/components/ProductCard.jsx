import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodCompare from "../assets/images/prodCompare.svg"
import wish from "../assets/images/wish.svg"
// import wishlist from "../assets/wishlist.svg"
import watch from "../assets/images/watch.jpg"
import watc from "../assets/images/watc.jpg"
import addcart from "../assets/images/add-cart.svg"
import view from "../assets/images/view.svg"


const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
    {/* here we use gr its means that i create my own instead of col for css */}
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=
       {
          location.pathname === "/"
            ? "/product/1" // Replace "1" with the actual product ID
            : location.pathname === "/product/:id"
            ? "/product/2" // Replace "2" with another product ID
            : "/:id"
        }
         className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img className="img-fluid" src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              jids headphones bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              //  onChange={ratingChanged}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            {/* in this i want to display the description in only col-12 so thats why i use this piece of coed */}
             <p className={`description ${grid===12 ? "d-block":"d-none"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus?</p>
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodCompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link
        to=  
        {
          location.pathname === "/"
            ? "/product/1" // Replace "1" with the actual product ID
            : location.pathname === "/product/:id"
            ? "/product/2" // Replace "2" with another product ID
            : "/:id"
        }
        // {`
        // ${
        //   location.pathname=="/"
        //   ? "/product/:id"
        //   : location.pathname=="/product/:id"
        //   ? "/product/:id"
        //   :"/:id"
        // }`}
        className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img className="img-fluid" src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              jids headphones bulk 10 pack multi coloured for students
            </h5>
            <ReactStars
              count={5}
              //  onChange={ratingChanged}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
 <p className={`description ${grid===12 ? "d-block":"d-none"}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus?</p>
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodCompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
