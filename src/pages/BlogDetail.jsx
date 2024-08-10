import React from 'react'
import blog from "../img/blog-1.jpg"
import blog2 from "../img/blog-2.jpg"
import blog3 from "../img/blog-3.jpg"
import user from "../img/user.jpg"

function BlogDetail() {
    return (
        <>
            <div
                className="container-fluid bg-primary py-5 bg-hero"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">Blog Detail</h1>
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
                                    Blog Detail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-6">
                <div className="container py-5">
                    <div className="row g-3">
                        <div className="col-lg-8">
                            <div className="mb-5">
                                <img className="img-fluid w-100 mb-5" src={blog2} alt="" />
                                <h1 className="mb-4">
                                    Diam dolor duo ipsum clita sed lorem tempor. Clita kasd diam justo
                                    diam lorem sed amet sed rebum eos.
                                </h1>
                                <p>
                                    Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                                    ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
                                    rebum et lorem magna kasd, stet amet magna accusam consetetur
                                    eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
                                    Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                                    nonumy, gubergren sit stet no diam kasd vero.
                                </p>
                                <p>
                                    Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                                    aliquyam dolores vero stet consetetur elitr takimata rebum
                                    sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                                    sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                                    sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                    clita lorem sit vero amet amet est dolor elitr, stet et no diam
                                    sit. Dolor erat justo dolore sit invidunt.
                                </p>
                                <p>
                                    Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                                    voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
                                    kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
                                    Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
                                    labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
                                    kasd, takimata ea nonumy elitr sadipscing gubergren erat.
                                    Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                    voluptua diam dolores at sadipscing stet. Clita dolor amet dolor
                                    ipsum vero ea ea eos.
                                </p>
                            </div>
                            <div className="mb-5">
                                <h3 className="mb-4">3 Comments</h3>
                                <div className="d-flex mb-4">
                                    <img
                                        src={user}
                                        className="img-fluid"
                                        style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ps-3">
                                        <h6>
                                            <a href="">John Doe</a>{" "}
                                            <small>
                                                <i>01 Jan 2045</i>
                                            </small>
                                        </h6>
                                        <p>
                                            Diam amet duo labore stet elitr invidunt ea clita ipsum
                                            voluptua, tempor labore accusam ipsum et no at. Kasd diam
                                            tempor rebum magna dolores sed eirmod
                                        </p>
                                        <button className="btn btn-sm btn-secondary rounded-pill px-3">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <img
                                        src={user}
                                        className="img-fluid"
                                        style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ps-3">
                                        <h6>
                                            <a href="">John Doe</a>{" "}
                                            <small>
                                                <i>01 Jan 2045</i>
                                            </small>
                                        </h6>
                                        <p>
                                            Diam amet duo labore stet elitr invidunt ea clita ipsum
                                            voluptua, tempor labore accusam ipsum et no at. Kasd diam
                                            tempor rebum magna dolores sed eirmod
                                        </p>
                                        <button className="btn btn-sm btn-secondary rounded-pill px-3">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex ms-5 mb-4">
                                    <img
                                        src={user}
                                        className="img-fluid"
                                        style={{ width: 45, height: 45 }}
                                    />
                                    <div className="ps-3">
                                        <h6>
                                            <a href="">John Doe</a>{" "}
                                            <small>
                                                <i>01 Jan 2045</i>
                                            </small>
                                        </h6>
                                        <p>
                                            Diam amet duo labore stet elitr invidunt ea clita ipsum
                                            voluptua, tempor labore accusam ipsum et no at. Kasd diam
                                            tempor rebum magna dolores sed eirmod
                                        </p>
                                        <button className="btn btn-sm btn-secondary rounded-pill px-3">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary p-5">
                                <h3 className="mb-4">Leave a comment</h3>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control bg-white border-0"
                                                placeholder="Your Name"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control bg-white border-0"
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                className="form-control bg-white border-0"
                                                placeholder="Website"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-white border-0"
                                                rows={5}
                                                placeholder="Comment"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-secondary w-100 py-3"
                                                type="submit"
                                            >
                                                Leave Your Comment
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-5">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control p-3"
                                        placeholder="Keyword"
                                    />
                                    <button className="btn btn-primary px-4">
                                        <i className="fa fa-search" />
                                    </button>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h3 className="mb-4">Categories</h3>
                                <div className="d-flex flex-column justify-content-start bg-primary p-4">
                                    <a className="h5 mb-4" href="#">
                                        <i className="fa fa-angle-right me-2" />
                                        Web Design
                                    </a>
                                    <a className="h5 mb-4" href="#">
                                        <i className="fa fa-angle-right me-2" />
                                        Web Development
                                    </a>
                                    <a className="h5 mb-4" href="#">
                                        <i className="fa fa-angle-right me-2" />
                                        Web Development
                                    </a>
                                    <a className="h5 mb-4" href="#">
                                        <i className="fa fa-angle-right me-2" />
                                        Keyword Research
                                    </a>
                                    <a className="h5 mb-0" href="#">
                                        <i className="fa fa-angle-right me-2" />
                                        Email Marketing
                                    </a>
                                </div>
                            </div>
                            <div className="mb-5">
                                <h3 className="mb-4">Recent Post</h3>
                                <div className="bg-primary p-4">
                                    <div className="d-flex mb-3">
                                        <img
                                            className="img-fluid"
                                            src={blog}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img
                                            className="img-fluid"
                                            src={blog2}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img
                                            className="img-fluid"
                                            src={blog3}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img
                                            className="img-fluid"
                                            src={blog}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <img
                                            className="img-fluid"
                                            src={blog2}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                    <div className="d-flex">
                                        <img
                                            className="img-fluid"
                                            src={blog3}
                                            style={{ width: 100, height: 100, objectFit: "cover" }}
                                            alt=""
                                        />
                                        <a
                                            href=""
                                            className="h5 d-flex align-items-center bg-white px-3 mb-0"
                                        >
                                            Lorem ipsum dolor sit amet consec adipis
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <img src={blog} alt="" className="img-fluid" />
                            </div>
                            <div className="mb-5">
                                <h3 className="mb-4">Tag Cloud</h3>
                                <div className="d-flex flex-wrap m-n1">
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Design
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Development
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Marketing
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        SEO
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Writing
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Consulting
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Design
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Development
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Marketing
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        SEO
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Writing
                                    </a>
                                    <a
                                        href=""
                                        className="btn btn-outline-secondary rounded-pill px-3 m-1"
                                    >
                                        Consulting
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-4">Plain Text</h3>
                                <div className="bg-primary text-center" style={{ padding: 30 }}>
                                    <p>
                                        Vero sea et accusam justo dolor accusam lorem consetetur,
                                        dolores sit amet sit dolor clita kasd justo, diam accusam no sea
                                        ut tempor magna takimata, amet sit et diam dolor ipsum amet diam
                                    </p>
                                    <a href="" className="btn btn-secondary rounded-pill py-2 px-4">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail