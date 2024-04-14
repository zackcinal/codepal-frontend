import React from "react";
import "./Footer.css";
import "../../assets/abdoul.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerMainPage">
      <div className="contact-us-container">
        <div>
          <h3 className="contact-us">Contact Us</h3>
          <label>Send an Email</label>
          <div className="input-for-contact">
            <input
              type="text"
              name="username"
              placeholder="Write us..."
              required
            />
            <button className="email-button">SEND</button>
          </div>
        </div>
      </div>
      <div>
        <div className="about-us">
          <a href="https://github.com/zackcinal/codepal-frontend">
            <img
              src="https://pngimg.com/uploads/github/github_PNG63.png"
              alt="github-logo"
              className="logo"
            />
          </a>
          <Link to="/help">
            <p>About Us</p>
          </Link>
        </div>
      </div>
      <div class="custom-shape-divider-top-1713049588">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Footer;

{
  /* </div>
      <h3 className="footerTitle">{` < About Us />`}</h3>
      <div className="footerCreators">
        <a href="https://github.com/arehmanlatif1" target="_blank">
          <div className="creatorProfile">
            <div className="creatorProfilePicture" id="abdoul"></div>
            <div>
              ABDOUL
              <br />
              REHMAN
            </div>
          </div>
        </a>
        <a href="https://devportfolioant.netlify.app/" target="_blank">
          <div className="creatorProfile">
            <div className="creatorProfilePicture" id="antonio"></div>
            <div>
              ANTONIO
              <br />
              FELIX
            </div>
          </div>
        </a>
        <a href="https://www.cesariparrea.com" target="_blank">
          <div className="creatorProfile">
            <div className="creatorProfilePicture" id="cesar"></div>
            <div>
              CESAR
              <br />
              IPARREA
            </div>
          </div>
        </a>
        <a href="https://www.zackcinal.com" target="_blank">
          <div className="creatorProfile">
            <div className="creatorProfilePicture" id="zack"></div>
            <div>
              ZACK
              <br />
              CINAL
            </div>
          </div>
        </a> */
}
