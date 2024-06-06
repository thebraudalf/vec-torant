import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

export default function Team({showCondition=true,subTeam=true}) {
  return (
    <div>
      {showCondition && <Navbar prop='Team'/>}

        {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
            <h1 className="mb-5">Our Master Crew</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="src/assets/img/team-4.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Alexander Smith</h5>
                <small>Founder & CEO</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="src/assets/img/chef.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Michael Wilson</h5>
                <small>Manager (Vacation)</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="src/assets/img/team-3.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Daniel Smith</h5>
                <small>Manager (Restaurant)</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="src/assets/img/depositphotos_174777760-stock-photo-handsome-bodyguard-listening-message-security1.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Benjamin Johnson</h5>
                <small>Security Arrangement</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            {subTeam && 
            <>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="img/team-2.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="img/team-3.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="img/team-4.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src="img/team-1.jpg" alt="Team Member" />
                </div>
                <h5 className="mb-0">Full Name</h5>
                <small>Designation</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></Link>
                </div>
              </div>
            </div>
            </>
}
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

        {showCondition && <Footer/>}
    </div>
  )
}
