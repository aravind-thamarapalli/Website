import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import TiltedCard from './TiltedCard';
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-bg">
        <img src="src\assets\logo.png" alt="home-bg" />
      </div>
      <div className="home-container">
        <div className="home-l">
          <div className="home-motto">
            <h1>
              #
              <Typewriter
                words={["Think", "Code", "Achieve"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className="home-club-name">
            <h1>
              <span>As</span>sociation of
            </h1>
            <h1>
              <span>C</span>omputer
            </h1>
            <h1>
              <span>I</span>ntellects
            </h1>
          </div>
          <button>Know us</button>
        </div>
        <div className="home-r">
          <TiltedCard
            imageSrc="src\assets\main-bg.png"
            altText="AsCI"
            captionText="AsCI is always Cool " 
            containerHeight="500px"
            containerWidth="600px"
            imageHeight="500px"
            imageWidth="600px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Assocation of Computer Intellects</p>
            }
          />{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
