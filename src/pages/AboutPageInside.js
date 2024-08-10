import React from 'react'
import img from "../img/about-1.jpg"
import img2 from "../img/about-2.jpg"
import { Link } from 'react-router-dom'
function AboutPageInside() {
    return (
        <>
            <div
                className="container-fluid bg-primary py-5 bg-hero"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">About Us</h1>
                            <div className="pt-2">
                                <Link to={"/"} className="btn btn-secondary rounded-pill py-2 px-4 mx-2">
                                    Home

                                </Link>
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                                >
                                    About Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row gx-0 mb-3 mb-lg-0">
                        <div className="col-lg-6 my-lg-5 py-lg-5">
                            <div className="about-start bg-primary p-5">
                                <h1 className="display-5 mb-4">Welcome To Painter</h1>
                                <p>
                                    Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et,
                                    tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem
                                    et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                                    tempor magna dolore erat amet{" "}
                                </p>
                                <Link to={"/contactPageInside"} className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                                    Contact Us

                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100"
                                    src={img}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row gx-0">
                        <div className="col-lg-6" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100"
                                    src={img2}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 my-lg-5 py-lg-5">
                            <div className="about-end bg-primary p-5">
                                <h1 className="display-5 mb-4">Why Choose Us?</h1>
                                <p>
                                    Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et,
                                    tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem
                                    et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                                    tempor magna dolore erat amet{" "}
                                </p>
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
                                >
                                    Get A Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid bg-primary bg-quote py-5"
                style={{ margin: "90px 0" }}
            >
                <div className="container py-5">
                    <div className="row g-0 justify-content-start">
                        <div className="col-lg-6">
                            <div className="bg-white text-center p-5">
                                <h1 className="mb-4">Get A Quote</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Name"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-light border-0 py-3"
                                                rows={2}
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Get A Quote
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Dedicated Team Members</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                <div className="team-text">
                                    <div className="team-social">
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                    <div className="mt-auto mb-3">
                                        <h4 className="mb-1">Full Name</h4>
                                        <span className="text-uppercase">Designation</span>
                                    </div>
                                </div>
                            </div>
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

export default AboutPageInside