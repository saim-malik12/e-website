import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Colors from "../components/Colors";

const OurStore = () => {
    const[grid,setGrid]=useState(4)
   
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="ps-0">
                  <ul>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Leptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id=""
                          value="checkedValue"
                        />
                        Out Of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlForfor="floatingInput">From</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="to"
                      />
                      <label htmlForfor="floatingInput">to</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <Colors/>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id="color-1"
                          value="checkedValue"
                        />
                        S 92
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name=""
                          id="color-2"
                          value="checkedValue"
                        />
                        M 2
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Leptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tv
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      ></ReactStars>
                      <b>$300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="images/watch.jpg"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids Headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      ></ReactStars>
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* side bar ended */}
            {/* Products Pages started */}
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-item-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block">Sort By</p>
                    <select className="form-control form-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alfhabatically A to Z
                      </option>
                      <option value="title-descending">
                        Alfhabatically Z to A
                      </option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                      <option value="created-ascending">Date,old to new</option>
                      <option value="created-descending">
                        Date,new to olds
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                <p className="totalproducts mb-0">21 Products</p>
                <div className="d-flex gap-10 align-items-center grid">
         
                <img onClick={()=>{
                    setGrid(3)
                }} 
                className="d-block img-fluid" src="images/gr4.svg" alt="grid" />
                <img 
                 onClick={()=>{
                    setGrid(4)
                }} 
                className="d-block img-fluid" src="images/gr3.svg" alt="grid" />
                <img
                 onClick={()=>{
                    setGrid(6)
                }} 
                className="d-block img-fluid" src="images/gr2.svg" alt="grid" />
                <img
                 onClick={()=>{
                    setGrid(12)
                }} 
                className="d-block img-fluid" src="images/gr.svg" alt="grid" />
                </div>
              </div>
                </div>
              </div>
             <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid} />
                </div>
              
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
