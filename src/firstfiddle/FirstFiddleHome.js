import React from 'react';

function FirstFiddleHome() {
  return (
    <>
      <img src="https://firstfiddleweb.netlify.app/image/slider1boot.jpg" className="w-100 img123" alt=""/>

      <div className="container mt-4">
        <h2 className="text-center a">Welcome to <b>first fiddle</b></h2>
        <br />
        <div className="row">
          <div className="col-md-7">
            <p className="b">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim unde
              debitis ea amet, error incidunt nulla. Officia, praesentium delectus
              magni vero perspiciatis, quaerat velit mollitia nesciunt labore
              ullam consequatur nobis? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim unde debitis ea amet, error incidunt nulla.
              Officia, praesentium delectus magni vero perspiciatis, quaerat velit
              mollitia nesciunt labore ullam consequatur nobis? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Enim unde debitis ea amet,
              error incidunt nulla. Officia, praesentium delectus magni vero
              perspiciatis, quaerat velit mollitia nesciunt labore ullam
              consequatur nobis?
            </p>
            <center>
              <button className="btn btn-warning btn-lg mt-5">Read more..</button>
            </center>
          </div>

          <div className="col-md-5 text-center">
            <img
              src="https://www.firstfiddle.in/_next/image?url=%2Fimages%2Fabout%2FAbout1.jpg&w=640&q=75"
              alt=""
              className="img123"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid banner mt-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h1 className="c">VISIT OUR WEBSITE</h1>
            <p className="d">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sit voluptates quis tenetur deserunt quia vel officia, est
              repudiandae laborum blanditiis facere ullam, provident perspiciatis
              animi exercitationem ratione eum nam?
            </p>
            <button className="btn btn-warning mt-3 mb-5">Read more...</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '68px' }}>
        <h1 className="text-center">EXPLORE OUR BRANDS</h1>
        <div className="row">
          <div className="col-md-3 mb-3">
            <img
              src="https://firstfiddleweb.netlify.app/image/ffpic3.jpg"
              className="w-100 shadow-lg rounded" alt=""
            />
          </div>
          <div className="col-md-3 mb-3">
            <img
              src="https://firstfiddleweb.netlify.app/image/ffpic1.jpg"
              className="w-100 shadow-lg  rounded" alt=""
            />
          </div>
          <div className="col-md-3 mb-3">
            <img
              src="https://firstfiddleweb.netlify.app/image/ffpic2.jpg"
              className="w-100 shadow-lg rounded" alt=""
            />
          </div>
          <div className="col-md-3 mb-3">
            <img
              src="https://firstfiddleweb.netlify.app/image/ffpic4.jpg"
              className="w-100 shadow-lg rounded" alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstFiddleHome;
