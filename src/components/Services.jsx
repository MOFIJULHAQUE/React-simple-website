import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img from "../assets/img.jpg";
import img1 from "../assets/imgg.jpg";
import img2 from "../assets/1 (1).jpg";
import img3 from "../assets/1 (10).jpg";
import img4 from "../assets/1 (2).jpg";
import img5 from "../assets/1 (3).jpg";
import img6 from "../assets/1 (4).jpg";
import img7 from "../assets/1 (5).jpg";
import img8 from "../assets/1 (6).jpg";
import img9 from "../assets/1 (7).jpg";
import img10 from "../assets/1 (8).jpg";

const Services = () => {
  return (
    <>
      <div>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={1000}
          showThumbs={false}
        >
          <div>
            <img src={img} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum dolor sit amet.</p>
          </div>

          <div>
            <img src={img1} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img2} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img3} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img4} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img5} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img6} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img7} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img8} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img9} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>

          <div>
            <img src={img10} alt="img" height="1200px" />
            <p className="legend">Lorem ipsum </p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
