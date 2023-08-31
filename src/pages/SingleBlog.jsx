import React from "react";
import Meta from "../components/Meta";
import {HiOutlineArrowLeft} from "react-icons/hi"
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import blog from "../assets/images/blog-1.jpg"
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/blog"><HiOutlineArrowLeft className="fs-5"/>
                    Go BAck to Bologs</Link>
                <h3 className="title">
                  A Beautifull Sunday Morning Renaissance
                </h3>
                <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                  pariatur nobis unde ipsam magni aperiam consequatur dolorum
                  cupiditate iste officiis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
