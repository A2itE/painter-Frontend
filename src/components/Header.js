import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

function Header() {
  const location = useLocation();
  const navigate = useNavigate()

  const getData = Cookies.get("userData");
  const userData = getData ? JSON.parse(getData) : null;

  const getLinkClass = (...paths) => {
    return paths.includes(location.pathname) ? 'nav-item nav-link active' : 'nav-item nav-link';
  };

  const handleLogout = () => {
    Cookies.remove("userData")
    window.location.reload()
    navigate("/")
  }

  return (
    <>
      <div className="container-fluid bg-primary d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark py-2 pe-3 border-end border-white" href="">
                  <i className="bi bi-telephone text-secondary me-2" />
                  {userData !== null ? userData?.mobile : "989898989898"}
                </a>
                <a className="text-dark py-2 px-3" href="">
                  <i className="bi bi-envelope text-secondary me-2" />
                  {userData !== null ? userData?.email : "testing@gmail.com"}
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body py-2 px-3 border-end border-white" href="">
                  <i className="bi bi-facebook text-secondary me-2" />
                </a>
                <a className="text-body py-2 px-3 border-end border-white" href="">
                  <i className="bi bi-twitter text-secondary me-2" />
                </a>
                <a className="text-body py-2 px-3 border-end border-white" href="">
                  <i className="bi bi-linkedin text-secondary me-2" />
                </a>
                <a className="text-body py-2 px-3 border-end border-white" href="">
                  <i className="bi bi-instagram text-secondary me-2" />
                </a>
                <a className="text-body py-2 ps-3" href="">
                  <i className="bi bi-youtube text-secondary me-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-paint-roller text-secondary me-3" />
              Painter
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary">
              <Link to={"/"} className={getLinkClass('/')}>
                Home
              </Link>
              <Link to={"/aboutPageInside"} className={getLinkClass('/aboutPageInside')}>
                About
              </Link>
              {userData?.role !== 0 ? "" : <Link to={"/dashboard"} className={getLinkClass('/dashboard')}>
                Dashboard
              </Link>}


              <Link to={"/contactPageInside"} className={getLinkClass('/contactPageInside')}>
                Contact
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Login
                </a>
                <div className="dropdown-menu m-0">

                  <Link to={"/login"} className="dropdown-item">
                    Login
                  </Link>              
                  { userData !== null ? "" : <Link to={"/adminLogin"} className="dropdown-item">
                    Admin Login
                  </Link>}
                  <button onClick={handleLogout} className="dropdown-item">
                    Logout
                  </button>
                </div>
              </div>
              {userData == null ? "" : <>
                <Link to={"/serviceInsidePage"} className={getLinkClass('/serviceInsidePage')}>
                  Service
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link to={"/blogPageInside"} className="dropdown-item">
                      Blog Grid
                    </Link>
                    <Link to={"/blogDetail"} className="dropdown-item">
                      Blog Detail
                    </Link>
                  </div>
                </div>
              </>}

            </div>
            <div className="d-none d-lg-flex align-items-center ps-4">
              <i className="fa fa-2x fa-mobile-alt text-secondary me-3" />
              <div>
                <h5 className="text-primary mb-1">
                  <small>Call Now</small>
                </h5>
                <h6 className="text-light m-0">+012 345 6789</h6>
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  )
}

export default Header