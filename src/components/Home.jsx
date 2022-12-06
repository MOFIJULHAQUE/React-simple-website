import React from "react";
import imgaa from "../assets/1__2_-removebg-preview.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

import "../styles/home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Kaameng.</h1>
          <p>Degital Service Provider </p>
          {/* <img src={imgaa} alt="img" height="100px" /> */}
        </main>
      </div>

      <div className="home2">
        <img src={imgaa} alt="tiger_image" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            error labore reprehenderit iure eius? Ut natus voluptatum maxime
            facilis dignissimos.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae culpa architecto sit magnam quasi iste dolore adipisci
            rerum quae. Nulla, quia facilis? Labore, ipsam molestias dolorem rem
            molestiae est eos earum. Ipsa voluptatem tempore pariatur dolor
            culpa magni repellendus. Tenetur molestiae repudiandae deleniti esse
            eligendi ullam, voluptatum, vitae inventore pariatur alias numquam
            dolores ipsa error velit soluta, praesentium non tempora? Fuga,
            quibusdam. Architecto, distinctio ut quo ipsam sequi perferendis
            vero molestias aliquam recusandae suscipit magni provident quasi ab
            sit assumenda aperiam laboriosam maxime inventore eos magnam soluta
            facere. Minus labore a accusamus, aperiam veritatis ratione saepe
            incidunt obcaecati sed molestiae.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div className="inside_home4">
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
