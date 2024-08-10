import React from 'react'
import AboutStart2 from './AboutStart2'
import Services from './Services'
import Quote from './Quote'
import Team from './Team'
import Testimonials from './Testimonials'
import Blog from './Blog'
import CallToAction from './CallToAction'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div
                className="container-fluid bg-primary py-5 bg-hero"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">
                                We Bring Your Home To Lively Colors
                            </h1>
                            <p className="fs-4 text-dark mb-4">
                                Nonumy diam dolores est ipsum diam amet lorem clita clita sit eirmod
                                duo clita dolore dolor ut diam diam justo sed est
                            </p>
                            <div className="pt-2">
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2"
                                >
                                    Get A Quote
                                </a>
                                <Link to={"/contactPageInside"} className="btn btn-outline-secondary rounded-pill py-md-3 px-md-5 mx-2">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutStart2 />
            <Services />
            <Quote />
            <Team />
            <Testimonials />
            <Blog />
            <CallToAction />
        </>
    )
}

export default Home