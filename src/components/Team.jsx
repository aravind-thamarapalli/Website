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
              <img src="src/assets/photos/hod.png" alt="hod-cse" className="hod" />
          </div>
          <div className="faculty-cont">
            <img src="src/assets/photos/Ajay.jpg" alt="faculty-1" className="faculty" />
            <img src="src/assets/photos/durgarao.jpg" alt="faculty-2" className="faculty" />
          </div>
          <div className="faculty-cont">
            <img src="src/assets/photos/seetalakshmi.jpg" alt="faculty-3" className="faculty" />
            <img src="src/assets/photos/leteefa.jpg" alt="faculty-4" className="faculty" />
          </div>
          <div className="faculty-cont">
            <img src="src/assets/photos/rithvik.jpeg" alt="faculty-5" className="faculty" />
            <img src="src/assets/photos/mahalakshmi.jpg" alt="faculty-6" className="faculty" />
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
