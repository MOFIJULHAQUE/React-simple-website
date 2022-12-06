import React from "react";

import "../styles/footer.scss"

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h1>Kaameng.</h1>
          <p>@all right reserved</p>
        </div>

        <div>
          <h5>Follow us</h5>
          <div>
            <a href="httpa://www.youtube.com" target={"blank"}>
              YouTube
            </a>
            <a href="httpa://www.instagram.com" target={"blank"}>
              Instagram
            </a>
            <a href="httpa://www.github.com" target={"blank"}>
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
