import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin,BsGithub,BsInstagram, BsYoutube } from 'react-icons/bs'
import newsletter from "../assets/images/newsletter.png"

const Footer = () => {
  return (
   <>
   <footer className='py-3'>
    <div className="container-xxl align-items-center">
      <div className="row">
        <div className="col-5">
          <div className="footer-top-data d-flex gap-30 align-items-center">
            <img src={newsletter} alt="new letter" />
            <h2 className='mb-0 text-white'>Sign up for NewsLetter</h2>
          </div>
        </div>
        <div className="col-7">
        <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="your email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                 Subscribe
                </span>
              </div>
        </div>
      </div>
    </div>
   </footer>
   <footer  className='py-4'>
   <div className="container-xxl">
    <div className="row">
      <div className="col-4 ">
        <h5 className='text-white mb-4'>Contact Us</h5>
        <address className='text-white fs-6'>Hno:i8 islamabad street 4,pakistan</address>
        <a href="tel:+91 3139873749" className='mt-4 d-block mb-3 text-white'>+91 3139873749</a>
        <a href="Email:asimkhan321@gmail.com" className='mt-4 d-block mb-3 text-white'>asimkhan321@gmail.com</a>
        <div className="social-icons d-flex align-items-center gap-30">
          <a href="">
          <BsLinkedin className='text-white fs-4'/>
          </a>
          <a href="">
            <BsInstagram className='text-white fs-4'/>
          </a>
          <a href="">
            <BsGithub className='text-white fs-4'/>
          </a>
          <BsYoutube className='text-white fs-4'/>
        </div>
      </div>
      <div className="col-3">
      <h5  className='text-white mb-4'>Information</h5>
      <div className="footer-links d-flex flex-column">
        <Link to="/privacy-policy" className='text-white py-2 mb-1'>
        Privacy Policy
        </Link >
        <Link to="refund-policy" className='text-white py-2 mb-1'>
        Refund policy
        </Link>
        <Link to="shipping-policy" className='text-white py-2 mb-1'>
        Shipping policy
        </Link>
        <Link className='text-white py-2 mb-1'>
        Blogs
        </Link>
        <Link to="term-and-condition" className='text-white py-2 mb-1'>
         Terms and Conditions
        </Link>
       
      </div>
      </div>
      <div className="col-3">
      <h5  className='text-white mb-4'>Account</h5>
      <div className="footer-links d-flex flex-column">
        <Link className='text-white py-2 mb-1'>
        About us
        </Link >
        <Link className='text-white py-2 mb-1'>
        FAQs
        </Link>
        <Link className='text-white py-2 mb-1'>
        Contact Us
        </Link>
       
      </div>
      </div>
      <div className="col-2">
      <h5  className='text-white mb-4'>Quick Links</h5>
      <div className="footer-links d-flex flex-column">
        <Link className='text-white py-2 mb-1'>
        Leptops
        </Link >
        <Link className='text-white py-2 mb-1'>
        Headphones
        </Link>
        <Link className='text-white py-2 mb-1'>
        Tablests
        </Link>
        <Link className='text-white py-2 mb-1'>
        Watch
        </Link>
      </div>
      </div>
    </div>
   </div>
   </footer>
   <footer  className='py-3'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()};Powerd by Developers</p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer
