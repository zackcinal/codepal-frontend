import React from "react";
import "./AboutUs.css";
import Cesar from "../../assets/cesar.png";
import abdul from "../../assets/abdoul.png";
import antonio from "../../assets/antonio.png";
import zack from "../../assets/zack.png";
function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-in">
          <h1 className="about-title">𝓬𝓸𝓭𝓮.𝓹𝓪𝓵 𝓭𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻</h1>
        </div>

        <div classname="devContainer">
          <div className="about-dev">
            <img className="team-image" src={abdul} alt="developer" />
            <h3>Abdul Rehman</h3>

            <p>
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-left-icon.png"
                />
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem eos deserunt rerum quas vel blanditiis quod praesentium
              nam harum quaerat fuga ratione perspiciatis totam excepturi eaque
              cupiditate, et ipsa.
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-right-icon.png"
                />
              </a>
            </p>

            <div className="about-icon">
              <p>
                <a href="https://github.com/arehmanlatif1">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                  />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/abdulrehmanlatif1/">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="about-dev">
            <img className="team-image" src={antonio} alt="ar" />
            <h3>Antonio Felix</h3>

            <p>
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-left-icon.png"
                />
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem eos deserunt rerum quas vel blanditiis quod praesentium
              nam harum quaerat fuga ratione perspiciatis totam excepturi eaque
              cupiditate, et ipsa.
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-right-icon.png"
                />
              </a>
            </p>

            <div className="about-icon">
              <p>
                <a href="https://github.com/afelixj89">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                  />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/antonio-felix00/">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="about-dev">
            <img className="team-image" src={zack} alt="ar" />
            <h3>Zack Cinal</h3>

            <p>
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-left-icon.png"
                />
              </a>
              Hello! I'm Zack. Thank you for visiting our website. I hope you
              can find a developer who can create a website that meets your
              expectations. If you're a developer, happy coding!
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-right-icon.png"
                />
              </a>
            </p>

            <div className="about-icon">
              <p>
                <a href="https://github.com/zackcinal">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                  />
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/zack-cinal/">
                  <img
                    className="icon"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png"
                  />
                </a>
              </p>
            </div>
          </div>

          <div className="about-dev">
            <img className="team-image" src={Cesar} alt="developer" />
            <h3>Cesar Iparrea</h3>

            <p className="editP">
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-left-icon.png"
                />
              </a>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              voluptatem eos deserunt rerum quas vel blanditiis quod praesentium
              nam harum quaerat fuga ratione perspiciatis totam excepturi eaque
              cupiditate, et ipsa.
              <a>
                <img
                  className="paragraph"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/quote-right-icon.png"
                />
              </a>
            </p>

            <div className="iconMainContainer">
              <div className="about-icon">
                <p>
                  <a href="https://github.com/CIparrea">
                    <img
                      className="icon"
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"
                    />
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/cesariparrea/">
                    <img
                      className="icon"
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
