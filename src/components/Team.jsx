import React from "react";
import ScrollVelocity from "./Scrollvelocity.jsx";
import CircularGallery from './CircularGallery'
import ChromaGrid from './ChromaGrid'

import "./Team.css";

const Team = () => {

const items = [
  {
    image: "src/assets/photos/lavanya.jpg",
    title: "Lavanya",
    subtitle: "PRESIDENT",
    handle: "@lavanya",
    borderColor: "#FF6B6B",
    gradient: "linear-gradient(145deg, #FF6B6B, #000)",
    url: "https://example.com/lavanya"
  },
  {
    image: "src/assets/photos/aravind.jpg",
    title: "Aravind",
    subtitle: "VICE PRESIDENT",
    handle: "@aravind",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://example.com/aravind"
  },
  {
    image: "src/assets/photos/fathima.jpg",
    title: "Fathima",
    subtitle: "SECRETARY",
    handle: "@fathima",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    url: "https://example.com/fathima"
  },
  {
    image: "src/assets/photos/laxmi.jpg",
    title: "Laxmi",
    subtitle: "TREASURER",
    handle: "@laxmi",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://example.com/laxmi"
  },
  {
    image: "src/assets/photos/moenuddin.jpg",
    title: "Moenuddin",
    subtitle: "BLOCKCHAIN LEAD",
    handle: "@moenuddin",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://example.com/moenuddin"
  },
  {
    image: "src/assets/photos/asmitha.jpg",
    title: "Asmitha",
    subtitle: "CLOUD LEAD",
    handle: "@asmitha",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://example.com/asmitha"
  },
  {
    image: "src/assets/photos/prasanna.jpg",
    title: "Prasanna",
    subtitle: "CP LEAD",
    handle: "@prasanna",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://example.com/prasanna"
  },
  {
    image: "src/assets/photos/vamsi.jpg",
    title: "Vamsi",
    subtitle: "CYBER SECURITY LEAD",
    handle: "@vamsi",
    borderColor: "#0EA5E9",
    gradient: "linear-gradient(145deg, #0EA5E9, #000)",
    url: "https://example.com/vamsi"
  },
  {
    image: "src/assets/photos/navyasri.jpg",
    title: "Navya Sri",
    subtitle: "DATA ANALYTICS LEAD",
    handle: "@navyasri",
    borderColor: "#A855F7",
    gradient: "linear-gradient(145deg, #A855F7, #000)",
    url: "https://example.com/navyasri"
  },
  {
    image: "src/assets/photos/lakshmiraj.jpg",
    title: "Lakshmi Raj",
    subtitle: "DSA LEAD",
    handle: "@lakshmiraj",
    borderColor: "#F97316",
    gradient: "linear-gradient(145deg, #F97316, #000)",
    url: "https://example.com/lakshmiraj"
  },
  {
    image: "src/assets/photos/poojitha.jpg",
    title: "Poojitha",
    subtitle: "NETWORKING LEAD",
    handle: "@poojitha",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(145deg, #14B8A6, #000)",
    url: "https://example.com/poojitha"
  },
  {
    image: "src/assets/photos/varma.jpg",
    title: "Varma",
    subtitle: "WEB DEVELOPMENT LEAD",
    handle: "@varma",
    borderColor: "#2563EB",
    gradient: "linear-gradient(145deg, #2563EB, #000)",
    url: "https://example.com/varma"
  },
  {
    image: "src/assets/photos/yamini.jpg",
    title: "Yamini",
    subtitle: "DESIGNING LEAD",
    handle: "@yamini",
    borderColor: "#D946EF",
    gradient: "linear-gradient(145deg, #D946EF, #000)",
    url: "https://example.com/yamini"
  },
  {
    image: "src/assets/photos/suvarna.jpg",
    title: "Suvarna",
    subtitle: "DOCUMENTATION LEAD",
    handle: "@suvarna",
    borderColor: "#F43F5E",
    gradient: "linear-gradient(145deg, #F43F5E, #000)",
    url: "https://example.com/suvarna"
  },
  {
    image: "src/assets/photos/harisai.jpg",
    title: "Hari Sai",
    subtitle: "SOCIAL MEDIA HANDLER",
    handle: "@harisai",
    borderColor: "#0D9488",
    gradient: "linear-gradient(145deg, #0D9488, #000)",
    url: "https://example.com/harisai"
  },
  {
    image: "src/assets/photos/kushal.jpg",
    title: "Kushal",
    subtitle: "DISCIPLINE LEAD",
    handle: "@kushal",
    borderColor: "#9333EA",
    gradient: "linear-gradient(145deg, #9333EA, #000)",
    url: "https://example.com/kushal"
  }
];

const faculty = [
  {
    image: "src/assets/photos/hod.png",
    title: "Dr. C.V. Guru Rao",
    subtitle: "Head of Dept",
    handle: "@cvgururao",
    borderColor: "#5533eaff",
    gradient: "linear-gradient(145deg, #5533eaff, #000)",
    url: "https://example.com/cvgururao"
  },
  {
    image: "src/assets/photos/Ajay.jpg",
    title: "Ajay Kumar",
    subtitle: "Associate Professor",
    handle: "@ajay",
    borderColor: "#ea8533ff",
    gradient: "linear-gradient(145deg, #ea8533ff, #000)",
    url: "https://example.com/ajay"
  },
  {
    image: "src/assets/photos/seetalakshmi.jpg",
    title: "Sathee Lakshmi",
    subtitle: "Assistant Professor",
    handle: "@seethalakshmi",
    borderColor: "#ea3367ff",
    gradient: "linear-gradient(145deg, #ea3367ff, #000)",
    url: "https://example.com/seethalakshmi"
  },
  {
    image: "src/assets/photos/leteefa.jpg",
    title: "Lateefa", 
    subtitle: "Assistant Professor",
    handle: "@lateefa",
    borderColor: "#33eab0ff",
    gradient: "linear-gradient(145deg, #33eab0ff, #000)",
    url: "https://example.com/lateefa"
  }
]


  return (
    <>
      <div className="team">
        <h2 className="team-head">MEET OUR TEAM</h2>
        <div style={{ height: '400px', position: 'relative' }}>
          <ChromaGrid 
            items={faculty}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
      <div className="student-scroll">
        <ScrollVelocity texts={["Board •"]} className="custom-scroll-text" />
      </div>
      <div className="students-team">
        {/* <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div> */}
        <div style={{ height: '1700px', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </>
  );
};

export default Team;
