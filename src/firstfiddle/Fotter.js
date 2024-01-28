import React from 'react'
import { Link } from 'react-router-dom'

function Fotter() {
  return (
    <>
      <footer>
        <div className="container-fluid mt-5 mb-5 pt-5 pb-5">
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7 text-center">
                  <img src="https://firstfiddleweb.netlify.app/image/logo-01.webp" alt="" />
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            <div className="col-md-7">
              <h1>CONTACT <span style={{ color: '#fbae1d' }}>US</span></h1>
              <p>
                First Fiddle Restaurants, the pioneers of casual and experiential
                dining, has been changing the industry for the better for over 20
                years.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h3 style={{ color: '#fbae1d' }}>Address</h3>
                  <p>
                    S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                    Park, New Delhi, Delhi 110017
                  </p>
                  <div className="row">
                    <div className="col-md-12" style={{ fontSize: '42px' }}>
                      <Link to="/">
                        <i className="fa-brands fa-linkedin" style={{ color: '#fbae1d' }}></i>
                      </Link>
                      <Link to="/">
                        <i className="fa-brands fa-square-twitter" style={{ color: '#fbae1d' }}></i>
                      </Link>
                      <Link to="/">
                        <i className="fa-brands fa-instagram" style={{ color: '#fbae1d' }}></i>
                      </Link>
                      <Link to="/">
                        <i className="fa-brands fa-facebook" style={{ color: '#fbae1d' }}></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3 style={{ color: '#fbae1d' }}>Enquiry</h3>
                  <p>Email: customercare@firstfiddle.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Fotter