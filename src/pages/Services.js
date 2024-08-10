import React from 'react'

function Services() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                    <h1 className="display-5">Professional Painting Services</h1>
                    <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                </div>
                <div className="row gy-4 gx-3">
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-paint-brush" />
                                </div>
                            </div>
                            <h3 className="mt-5">Regular Painting</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-paint-roller" />
                                </div>
                            </div>
                            <h3 className="mt-5">Wall Painting</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-brush" />
                                </div>
                            </div>
                            <h3 className="mt-5">Floor Coating</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-eraser" />
                                </div>
                            </div>
                            <h3 className="mt-5">Graffiti Removal</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-spray-can" />
                                </div>
                            </div>
                            <h3 className="mt-5">Mildew Removal</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pt-5">
                        <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                            <div className="service-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-city" />
                                </div>
                            </div>
                            <h3 className="mt-5">Window Washing</h3>
                            <a className="btn shadow-none text-secondary" href="">
                                View Detail
                                <i className="bi bi-arrow-right ms-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services