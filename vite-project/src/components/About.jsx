import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import img from "../assets/img/88f18ce59ec1735607f46caa91c9a0fa.jpg";

export default function About({ showCondition = true, teamShow = true }) {
  return (
    <div className="container-xxl bg-white p-0">
      {showCondition && <Navbar prop="About" img={img} />}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container-fluid">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 h-100 object-fit-cover wow zoomIn"
                    data-wow-delay="0.1s"
                    src={
                      "/src/assets/img/peter-thomas-qXbueROjM9I-unsplash.jpg"
                    }
                    alt="About 1"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src="src/assets/img/about-4.jpg"
                    alt="About 2"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 h-75 object-fit-cover wow zoomIn"
                    data-wow-delay="0.5s"
                    src="src/assets/img/download1.png"
                    alt="About 3"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 h-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={
                      "src/assets/img/premium_photo-1668916513964-fa8e252bafaf-transformed.jpeg"
                    }
                    alt="About 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                Vec-torant
              </h1>
              <p className="mb-4">
                Welcome to Vectorant! We offer exceptional dining with Link variety
                of delicious meals, available for dine-in and online orders.
              </p>
              <p className="mb-4">
                Additionally, we create personalized vacation packages
                for your desires. We
                ensure top-notch experiences. At Vectorant, we make your dining
                and travel dreams come true.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      id="counter"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      id="counter"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Team Start */}
      {teamShow && (
        <div className="container-xxl pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                Team Members
              </h5>
              <h1 className="mb-5">Our Master Crew</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img
                      className="img-fluid"
                      src="img/team-1.jpg"
                      alt="Team Member 1"
                    />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img
                      className="img-fluid"
                      src="img/team-2.jpg"
                      alt="Team Member 2"
                    />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img
                      className="img-fluid"
                      src="img/team-3.jpg"
                      alt="Team Member 3"
                    />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img
                      className="img-fluid"
                      src="img/team-4.jpg"
                      alt="Team Member 4"
                    />
                  </div>
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Team End */}

      {showCondition && <Footer />}
    </div>
  );
}
