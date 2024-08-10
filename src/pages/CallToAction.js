import React from 'react'
import { Link } from 'react-router-dom'

function CallToAction() {
    return (
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
    )
}

export default CallToAction