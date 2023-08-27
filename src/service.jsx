import "./Service.css";
import web from './image/web.jpg'
import we2 from './image/we2.jpg'
import web3 from './image/web3.jpg'
import seo from './image/seo.png'
import ppc from './image/ppc.jpg'
import app from './image/app.jpg'





const service = () => {
  return (
    <>
    <p>
     <h2>What Solutions We Provide</h2>
  <br /> <h4>our service</h4>
     </p>
      <div className="all-cards">
       
        <div class="card">
          <div class="card-details">
            <div className="service-image">
            <img src={web} alt="" />
            </div>
            <p class="text-title">Web Design</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
          <div className="service-image">
            <img src={we2} alt="" />
            </div>
            <p class="text-title">Social Media Marketing</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
          <div className="service-image">
            <img src={web3} alt="" />
            </div>
            <p class="text-title">Email Marketing</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
      </div>

      <div className="second-cards">
        <div class="card">
          <div class="card-details">
          <div className="service-image">
            <img src={seo} alt="" />
            </div>
            <p class="text-title">SEO Optimization</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
          <div className="service-image">
            <img src={ppc} alt="" />
            </div>
            <p class="text-title">PPC Advertising</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
          <div className="service-image">
            <img src={app} alt="" />
            </div>
            <p class="text-title">App Development</p>
            <p class="text-body">
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>

        
      </div>
    </>
  );
};

export default service;
