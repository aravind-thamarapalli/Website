import React from "react";
import ScrollVelocity from "./Scrollvelocity.jsx";
import CircularGallery from './CircularGallery'
import "./Team.css";

const Team = () => {
  return (
    <>
      <div className="team">
        <h2 className="team-head">MEET OUR TEAM</h2>
        <div className="team-faculty-cont">
          <div className="hod-cont">
            <h1>Faculty In support</h1>
            <div className="hod">
              <img src="src\assets\faculty\faculty1.jpg" alt="hod-cse" />
            </div>
          </div>
          <div className="faculty-cont">
            <div className="faculty">
              <img src="" alt="faculty-1" />
            </div>
            <div className="faculty">
              <img src="" alt="faculty-2" />
            </div>
          </div>
          <div className="faculty-cont">
            <div className="faculty">
              <img src="" alt="faculty-3" />
            </div>
            <div className="faculty">
              <img src="" alt="faculty-4" />
            </div>
          </div>
          <div className="faculty-cont">
            <div className="faculty">
              <img src="" alt="faculty-5" />
            </div>
            <div className="faculty">
              <img src="" alt="faculty-6" />
            </div>
          </div>
        </div>
      </div>
        <div className="student-scroll">
          <ScrollVelocity texts={["Board •"]} className="custom-scroll-text" />
        </div>
        <div className="students-team">
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      </div>
    </>
  );
};

export default Team;
