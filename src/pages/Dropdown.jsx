import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown() {
    return (
        <div>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown button
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                        <Link to={"/userTable"} className="dropdown-item active" style={{backgroundColor:"brown"}}>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contactusTable"} className="dropdown-item active" >
                            Contact Us
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Dropdown