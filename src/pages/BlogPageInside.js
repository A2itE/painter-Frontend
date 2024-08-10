import React from 'react'
import blog from "../img/blog-1.jpg"
import blog2 from "../img/blog-2.jpg"
import blog3 from "../img/blog-3.jpg"
import user from "../img/user.jpg"
import { Link } from 'react-router-dom'

function BlogPageInside() {
    return (
        <>
            <div
                className="container-fluid bg-primary py-5 bg-hero"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">Latest Blog</h1>
                            <div className="pt-2">
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                                >
                                    Home
                                </a>
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                                >
                                    Blog
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Latest Articles From Painting Blog</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog2} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog3} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog2} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog3} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog3} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="blog-item bg-primary">
                                <img className="img-fluid w-100" src={blog2} alt="" />
                                <div className="d-flex align-items-center">
                                    <div
                                        className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                                        style={{ width: 60, height: 100 }}
                                    >
                                        <i className="fa fa-calendar-alt text-primary mb-2" />
                                        <p className="m-0 text-white">Jan 01</p>
                                        <small className="text-white">2045</small>
                                    </div>
                                    <a className="h4 m-0 text-truncate me-4" href="">
                                        Dolor clita vero elitr sea stet dolor justo diam
                                    </a>
                                </div>
                                <div className="d-flex justify-content-between border-top border-secondary p-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle me-2"
                                            src={user}
                                            width={30}
                                            height={30}
                                            alt=""
                                        />
                                        <small className="text-uppercase">John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ms-3">
                                            <i className="fa fa-eye text-secondary me-2" />
                                            12345
                                        </small>
                                        <small className="ms-3">
                                            <i className="fa fa-comment text-secondary me-2" />
                                            123
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <a
                                href=""
                                className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
                            >
                                Load More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid bg-primary bg-call-to-action py-5"
                style={{ marginTop: 90 }}
            >
                <div className="container py-5">
                    <div className="row g-0 justify-content-start">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-4">Do You Have Any Project?</h1>
                            <p className="fs-4 fw-normal">
                                Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                                dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                                tempor diam tempor erat dolor rebum sit ipsum.
                            </p>
                            <Link to={"/contactPageInside"} className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                                Contact Us

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPageInside