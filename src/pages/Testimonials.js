
import React from 'react';
import img from "../img/testimonial-1.jpg";
import img2 from "../img/testimonial-2.jpg";

function Testimonials() {
    return (
        <div
            className="container-fluid bg-primary bg-testimonial py-5"
            style={{ margin: "90px 0" }}
        >
            <div className="container py-5">
                <div className="row g-0 justify-content-end">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-4">Testimonials</h1>
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-item">
                                        <p className="fs-4 fw-normal">
                                            <i className="fa fa-quote-left text-secondary me-3" />
                                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                                            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                            et tempor diam tempor erat dolor rebum sit ipsum.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="img-fluid p-1 bg-secondary"
                                                src={img}
                                                alt=""
                                            />
                                            <div className="ps-3">
                                                <h3>Client Name</h3>
                                                <span className="text-uppercase">Profession</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-item">
                                        <p className="fs-4 fw-normal">
                                            <i className="fa fa-quote-left text-secondary me-3" />
                                            Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                                            dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
                                            et tempor diam tempor erat dolor rebum sit ipsum.
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="img-fluid p-1 bg-secondary"
                                                src={img2}
                                                alt=""
                                            />
                                            <div className="ps-3">
                                                <h3>Client Name</h3>
                                                <span className="text-uppercase">Profession</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev custom-prev" style={{ alignItems: "flex-end" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" style={{ backgroundColor: "black" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next custom-next" style={{ alignItems: "flex-end" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" style={{ backgroundColor: "black" }} aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;

