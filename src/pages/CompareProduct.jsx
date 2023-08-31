import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Colors from '../components/Colors';
const CompareProduct = () => {
  return (
    <>
     <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className='container'>
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'>
                                HONoR T1 7.0 1 GB RAM *GB ROM & Inch With Wi-Fi+3G Tablet 
                            </h5>
                            <h6 className='price mb-3'>$88</h6>
                        </div>
                        <div>
                            <div className='product-detail'>
                                <h5 className='brand'>Brands</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Type</h5>
                                <p>Watch</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Color</h5>
                               
                              <Colors/>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Size</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img className='position-absolute cross img-fluid' src="images/cross.svg" alt="" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'>
                                HONoR T1 7.0 1 GB RAM *GB ROM & Inch With Wi-Fi+3G Tablet 
                            </h5>
                            <h6 className='price mb-3'>$88</h6>
                        </div>
                        <div>
                            <div className='product-detail'>
                                <h5 className='brand'>Brands</h5>
                                <p>Havels</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Type</h5>
                                <p>Watch</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Color</h5>
                               
                              <Colors/>
                            </div>
                            <div className='product-detail'>
                                <h5 className='brand'>Size</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct
