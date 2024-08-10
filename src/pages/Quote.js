import React from 'react'

function Quote() {
    return (
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
    )
}

export default Quote