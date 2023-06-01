import React from "react";
import Wood from "../../assets/images/wood-1.png";
import "../../styles/pages/_index.scss";

const Hero = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className="hero" id="hero">
      <div className="left-hero">
        <h6>The Best Wood For Customer</h6>
        <h1>Specialty Wood Production</h1>
        <p>
          We proudly introduce our brand, Wood Craft, a company specializing in
          wood and furniture. We are a center of creativity and high quality in
          producing unique and captivating wooden products.
        </p>
        <button type="submit" onClick={handleClick}>
          Order now
        </button>
      </div>

      <div className="right-hero">
        <figure>
          <img src={Wood} alt="hero-content-1" className="hero-image" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
