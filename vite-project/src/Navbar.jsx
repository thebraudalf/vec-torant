import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

export default function Navbar({prop="Home",img="src/assets/img/clay-banks-AZDyU1hXtCE-unsplash.jpg"}) {
  return (
    <div>
       {/* Navbar & Hero Start */}
       <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <Link href="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Vectorant</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0 pe-4">
                <Link to={"/"} className="nav-item nav-link active">Home</Link>
                <Link to={"/about"} className="nav-item nav-link">About</Link>
                <Link to={"/services"} className="nav-item nav-link">Service</Link>
                <Link to={"/menu"} className="nav-item nav-link">Menu</Link>
                <div className="nav-item dropdown">
                  <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                  <div className="dropdown-menu m-0">
                    <Link to={"/booking"} className="dropdown-item">Booking</Link>
                    <Link to={"/team"} className="dropdown-item">Our Team</Link>
                    <Link to={"/testimonial"} className="dropdown-item">Testimonial</Link>
                  </div>
                </div>
                <Link to={"/contact"} className="nav-item nav-link">Contact</Link>
              </div>
              <Link href="/" className="btn btn-primary py-2 px-4">Book A Table</Link>
            </div>
          </nav>
  
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">{prop}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">{prop}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* Navbar & Hero End */}
    </div>
  )
}

Navbar.propTypes = {
  prop: PropTypes.string,
  img: PropTypes.string,
};
