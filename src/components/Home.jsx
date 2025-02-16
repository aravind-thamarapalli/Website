import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'
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
                <h1>#
                    <Typewriter
                        words={['Think', 'Code', 'Achieve']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
            </div>
            <div className="home-club-name">
                <h1><span>As</span>sociation of</h1>
                <h1><span>C</span>omputer</h1>
                <h1><span>I</span>ntellects</h1>
            </div>
            <button>Know us</button>
        </div>
        <div className="home-r">
            <img src="src\assets\main-bg.png" alt="main-bg" />
        </div>
      </div>
    </>
  )
}

export default Home
