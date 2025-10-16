import React from "react";
import { ScrollVelocity, CircularGallery, ChromaGrid } from '../animations';
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
    url: "https://www.linkedin.com/in/lavanya-bethina/"
  },
  {
    image: "src/assets/photos/aravind.jpg",
    title: "Aravind",
    subtitle: "VICE PRESIDENT",
    handle: "@aravind",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://linkedin.com/in/aravind-tham"
  },
  {
    image: "src/assets/photos/fathima.jpg",
    title: "Fathima",
    subtitle: "SECRETARY",
    handle: "@fathima",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    url: "https://www.linkedin.com/in/tatheer-fathima-5ba16b275/"
  },
  {
    image: "src/assets/photos/laxmi.jpg",
    title: "Laxmi",
    subtitle: "TREASURER",
    handle: "@laxmi",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://www.linkedin.com/in/laxmikandivalasa/"
  },
  {
    image: "src/assets/photos/moenuddin.jpg",
    title: "Moenuddin",
    subtitle: "BLOCKCHAIN LEAD",
    handle: "@moenuddin",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://www.linkedin.com/in/mohammad-moeenuddin-558846226/"
  },
  {
    image: "src/assets/photos/asmitha.jpg",
    title: "Asmitha",
    subtitle: "CLOUD LEAD",
    handle: "@asmitha",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://www.linkedin.com/in/ashmitha-yenimireddy-617581290/"
  },
  {
    image: "src/assets/photos/prasanna.jpg",
    title: "Prasanna",
    subtitle: "CP LEAD",
    handle: "@prasanna",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "https://www.linkedin.com/in/sai-prasanna-kotipatruni-307533254/"
  },
  {
    image: "src/assets/photos/vamsi.jpg",
    title: "Vamsidhar Reddy",
    subtitle: "CYBER SECURITY LEAD",
    handle: "@vamsi",
    borderColor: "#0EA5E9",
    gradient: "linear-gradient(145deg, #0EA5E9, #000)",
    url: "https://www.linkedin.com/in/venkata-vamsidhar-reddy-gajjala-a3409725a/"
  },
  {
    image: "src/assets/photos/navyasri.jpg",
    title: "Navya Sri",
    subtitle: "DATA ANALYTICS LEAD",
    handle: "@navyasri",
    borderColor: "#A855F7",
    gradient: "linear-gradient(145deg, #A855F7, #000)",
    url: "https://www.linkedin.com/in/navyasri-rajanala-43049b277/"
  },
  {
    image: "src/assets/photos/lakshmiraj.jpg",
    title: "Lakshmi Raj",
    subtitle: "DSA LEAD",
    handle: "@lakshmiraj",
    borderColor: "#F97316",
    gradient: "linear-gradient(145deg, #F97316, #000)",
    url: "https://www.linkedin.com/in/lakshmirajvagu/"
  },
  {
    image: "src/assets/photos/poojitha.jpg",
    title: "Poojitha",
    subtitle: "NETWORKING LEAD",
    handle: "@poojitha",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(145deg, #14B8A6, #000)",
    url: "https://www.linkedin.com/in/sarvamangala-poojitha-115742262/"
  },
  {
    image: "src/assets/photos/varma.jpg",
    title: "Varma",
    subtitle: "WEB DEVELOPMENT LEAD",
    handle: "@varma",
    borderColor: "#2563EB",
    gradient: "linear-gradient(145deg, #2563EB, #000)",
    url: "https://www.linkedin.com/in/varma-sagi-89a024253/"
  },
  {
    image: "src/assets/photos/yamini.jpg",
    title: "Yamini",
    subtitle: "DESIGNING LEAD",
    handle: "@yamini",
    borderColor: "#D946EF",
    gradient: "linear-gradient(145deg, #D946EF, #000)",
    url: "https://www.linkedin.com/in/yamini-reddipilli/"
  },
  {
    image: "src/assets/photos/suvarna.jpg",
    title: "Suvarna",
    subtitle: "DOCUMENTATION LEAD",
    handle: "@suvarna",
    borderColor: "#F43F5E",
    gradient: "linear-gradient(145deg, #F43F5E, #000)",
    url: "https://www.linkedin.com/in/sarada-suvarna-tekumalla-107400254/"
  },
  {
    image: "src/assets/photos/harisai.jpg",
    title: "Hari Sai",
    subtitle: "SOCIAL MEDIA HANDLER",
    handle: "@harisai",
    borderColor: "#0D9488",
    gradient: "linear-gradient(145deg, #0D9488, #000)",
    url: "https://www.linkedin.com/in/harisai-surishetti/"
  },
  {
    image: "src/assets/photos/kushal.jpg",
    title: "Kushal Sai",
    subtitle: "DISCIPLINE LEAD",
    handle: "@kushal",
    borderColor: "#9333EA",
    gradient: "linear-gradient(145deg, #9333EA, #000)",
    url: "https://www.linkedin.com/in/kushal-sai2118/"
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
    url: "https://www.linkedin.com/in/gurucvrao/"
  },
  {
    image: "src/assets/photos/KBMadhuri.jpg",
    title: "Dr. K.B.Madhuri",
    subtitle: "Professor & Dean, School of CSE, IT & CA",
    handle: "@kbmadhuri",
    borderColor: "#eadb33ff",
    gradient: "linear-gradient(145deg, #eadb33ff, #000)",
    // url: "https://www.linkedin.com/in/example/"
  },
  {
    image: "src/assets/photos/Ajay.jpg",
    title: "Ajay Kumar",
    subtitle: "Associate Professor",
    handle: "@ajay",
    borderColor: "#ea8533ff",
    gradient: "linear-gradient(145deg, #ea8533ff, #000)",
    // url: "https://example.com/ajay"
  },
  {
    image: "src/assets/photos/seetalakshmi.jpg",
    title: "Sathee Lakshmi",
    subtitle: "Assistant Professor",
    handle: "@satheelakshmi",
    borderColor: "#ea3367ff",
    gradient: "linear-gradient(145deg, #ea3367ff, #000)",
    // url: "https://example.com/seethalakshmi"
  },
  {
    image: "src/assets/photos/leteefa.jpg",
    title: "Lateefa", 
    subtitle: "Assistant Professor",
    handle: "@lateefa",
    borderColor: "#33eab0ff",
    gradient: "linear-gradient(145deg, #33eab0ff, #000)",
    // url: "https://example.com/lateefa"
  }
]


  return (
    <>
      <div className="team">
        <h2 className="team-head">MEET OUR TEAM</h2>
        <div style={{ 
          minHeight: '420px', 
          height: 'auto',
          overflow: 'hidden',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <div style={{ 
            width: '100%',
            transformOrigin: 'center'
          }}>
            <ChromaGrid 
              items={faculty}
              columns={5}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
      <div className="student-scroll">
        <ScrollVelocity texts={[" Board (2024-25) •"]} className="custom-scroll-text" />
      </div>
      <div className="students-team">
        {/* <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div> */}
        <div style={{ height: '1700px', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            columns={4}
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
