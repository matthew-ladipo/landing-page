import img1 from "./image/features-img-2.png";
 
 
 
 const section = () => {
    return ( 
        <>
      <section className="about-me" id="about">
        <div className="container">
          <div className="about-me-container">
            <div className="about-me-content">
              <h1> All In One SEO Tool Need To Grow Your Business Rapidly</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, ex nisi quae quis ipsam, suscipit tenetur rem
                deserunt officiis numquam ut eligendi odio. Exercitationem qui
                molestias mollitia aliquid commodi laudantium?
                <br />
                <buttons className="btn"> Hover me</buttons>{" "}
                <button className="button">Subscribe</button>
              </p>
            </div>
            <div className="about-me-img">
              <img src={img1} alt="Ladipo Matthew" />
            </div>
          </div>
        </div>
      </section>
    </>
     );
}
 
export default section;
