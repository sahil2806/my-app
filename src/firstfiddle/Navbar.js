import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75" alt="" className="weblogo" />
                        <img src="	https://firstfiddleweb.netlify.app/image/logo-for-mobile.png" alt="" className="moblogo" />
                    </Link>
                    {/* mobile menu */}
                    <button className="navbar-toggler" data-bs-target="#a" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="a">
                        <ul className="navbar-nav text-center ms-auto">
                            <li><Link to="/" className="nav-link">Home</Link></li>
                            <li><Link to="/about" className="nav-link">About</Link></li>
                            <li><Link to="brand" className="nav-link">Brand</Link></li>
                            <li><Link to="ourteam" className="nav-link">Our Team</Link></li>
                            <li><Link to="pressrelease" className="nav-link">Prease Release</Link></li>
                            <li><Link to="contactus" className="nav-link">Contact Us</Link></li>
                            <li><Link to="careers" className="nav-link">CAREERS</Link></li>
                        </ul>
                    </div>

                </div>
                {/* container-fluid end  */}
            </nav>

              
          

 










        </>
    )
}

export default Navbar