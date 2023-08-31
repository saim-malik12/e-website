import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
            <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div className="ps-0">
                  <ul>
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Leptop</li>
                  </ul>
                </div>
           s   </div>
            </div>
            <div className="col-9">
                <div className="row">
                    <div className="col-6 mb-3">
                    <BlogCard/>
                    </div>
                    <div className="col-6 mb-3">
                    <BlogCard/>
                    </div>
                    <div className="col-6 mb-3">
                    <BlogCard/>
                    </div>
                    <div className="col-6 mb-3">
                    <BlogCard/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
