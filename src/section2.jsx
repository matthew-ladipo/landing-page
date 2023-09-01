import React,{useEffect} from "react";
import img from "./image/hero.png";
import imge from "./image/newsletter.png";
import imga from "./image/giphy-1.gif";
import "aos/dist/aos.css"
import Aos from 'aos'



const section2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000});
 }, []);
  return (
    <>
      <section2 className="about">
        <div className="contain">
          <div className="about-contain">
            <div className="about-me-content" data-aos="fade-up">
              <h1> The best SEO solution with 10 years of experience</h1>
              <p>
                Lorem ipsum dolor, site amet consectetur adipisicing elit.
                Laudantium, ex nisi quae quis ipsam, suscipit tenetur rem
                deserunt officiis numquam ut eligendi odio.
                <br />
                <buttons className="btn">Explore</buttons>{" "}
                <button className="buttons">
                  <a href="#" target="_blank" className="icon-link">
                    <i className="fab fa-facebook"></i>
                  </a>
                </button>
                <button className="buttons">
                  <a href="#" target="_blank" className="icon-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </button>
                <button className="buttons">
                  <a href="#" target="_blank" className="icon-link">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </button>
                <button className="buttons">
                  <a href="#" target="_blank" className="icon-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </button>
              </p>
            </div>
            <div className="about-img" data-aos="fade-left">
              <img src={img} alt="hero" />
            </div>
          </div>
        </div>
      </section2>
      <p className="text-part">
        <div className="text-edit" >
          <div className="about-imgtext" data-aos="fade-left">
            <img src={imge} alt="search" />
          </div>

          <br />
          <div className="form-control" data-aos="fade-up">
            <h2>"Ready to get started And Let your opinion Be heard"</h2>
            <label for="msg">Message:</label>

            <textarea name="Message" id="msg" cols="10" rows="10"></textarea>
            <button className="submit"> submit</button>
          </div>
        </div>
      </p>
    </>
  );
};

export default section2;
