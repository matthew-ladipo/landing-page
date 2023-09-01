import React, {useEffect} from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import "./footer.css";
// import BackTotop from "./backTotop";

const footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
 }, []);
  return (
    <>
      <footer className="all-footers" data-aos="fade-buttom" >
        <div>
          <div>
            <div className="foots">
              <h3>About Us</h3>
              <a href="#">Story</a>
              <a href="#">Clients</a>
              <a href="#">Testimonials</a>
            </div>
            <div className="foots">
              <h3>Services</h3>
              <a href="#">Marketing</a>
              <a href="#">Consulting</a>
              <a href="#">Development</a>
              <a href="#">Design</a>
            </div>
            <div className="foots">
              <h3>Contact Us</h3>
              <a href="#">United States</a>
              <a href="#">United Kingdom</a>
              <a href="#">Australia</a>
              <a href="#">Support</a>
            </div>
            <div className="social">
              <h3>Social Media</h3>
              <br />
              <div className="socialbtns">
                <ul>
                  <li>
                    <a href="#" className="online">
                    <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="online">
                    <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="online">
                    <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="online">
                    <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="online">
                    <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="copyright">
							<li>&copy; landing-page.</li>  <li>matthewladipo</li>
						</ul>

            </div>
          </div>
        </div>
        {/*  <BackTotop></BackTotop>  */}
      </footer>
     
    </>
  );
};

export default footer;
