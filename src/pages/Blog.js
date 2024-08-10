import React from 'react'
import img1 from "../img/user.jpg"
import img2 from "../img/blog-1.jpg"
import img3 from "../img/blog-2.jpg"
import img4 from "../img/blog-3.jpg"
function Blog() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                    <h1 className="display-5">Latest Articles From Painting Blog</h1>
                    <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                </div>
                <div className="row g-3">
                    <div className="col-xl-4 col-lg-6">
                        <div className="blog-item bg-primary">
                            <img className="img-fluid w-100" src={img2} alt="" />
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
                                        src={img1}
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
                            <img className="img-fluid w-100" src={img3} alt="" />
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
                                        src={img1}
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
                            <img className="img-fluid w-100" src={img4} alt="" />
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
                                        src={img1}
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
                </div>
            </div>
        </div>
    )
}

export default Blog