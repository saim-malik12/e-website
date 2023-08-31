import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
// import {AiOutLineHome} from "react-icons/ai";
 import { BiHome, BiInfoCircle, BiLogoGmail, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper p-5 home-wrraper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.99053570366!2d72.75643850500924!3d33.61625093649514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692853199977!5m2!1sen!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        type="text"
                        placeholder="comments"
                        className="w-100 form-control"
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title  mb-4s">Get in touch with us</h3>
                </div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex align-items-center gap-15">
                    {/* <AiOutLineHome className="fs-5" />  */}
                    <BiHome/>
                    <address className="mb-0">Hno : 277 I8 ,Islamabd</address>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                     <BiPhoneCall className="fs-5" /> 
                    <a href="tel:0313-9873749">0313-9873749</a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                     <BiLogoGmail className="fs-5"/>
                    <a href="mailto:asimkhan321@gmail.com">asimkhan321@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex align-items-center gap-15">
                  <BiInfoCircle className="fs-5" />
                   <p className="mb-0">Monday - Friday 8Am to 8Pm</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
