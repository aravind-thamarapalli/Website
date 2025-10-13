import styled from "styled-components";
import image from "../../assets/inauguration.jpg";

const About = () => {
  return (
    <StyledWrapper>
      <div className="aboutus">
        <img src={image} alt="Inauguration" />
        <section className="text-part">
          <h1 className="title">About Us</h1>
          <p className="about">
            AsCI (Association of Computer Intellects) is the official Computer
            Science club of GVPCE(A). We bring together tech enthusiasts to
            learn, innovate, and grow through workshops, hackathons, and events.
            Our mission is to bridge academics and real-world applications,
            fostering skills, collaboration, and creativity in the field of
            technology. Join us to explore, connect, and build the future!
          </p>
        </section>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  min-height: 80vh;
  position: relative;
  overflow: hidden;

  /* Animated background effect */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(34, 102, 138, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
    z-index: 0;
  }

  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
  
  .aboutus {
    width: 100%;
    max-width: 1200px;
    padding: 3rem;
    color: white;
    font-family: "Outfit", serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: center;
    background: rgba(0, 32, 50, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(34, 102, 138, 0.5);
    border-radius: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 
                0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    overflow: hidden;

    /* Glow effect on hover */
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(100, 184, 230, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.5s ease;
      pointer-events: none;
    }
    
    
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 2rem;
      text-align: center;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      padding: 1.5rem;
      border-radius: 20px;
    }
  }

  .aboutus:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px rgba(34, 102, 138, 0.4), 
                0 0 0 1px rgba(100, 184, 230, 0.3) inset;
    border-color: rgba(100, 184, 230, 0.6);

    &::after {
      opacity: 1;
    }
  }

  .text-part {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    animation: fadeInRight 0.8s ease-out;

    @media (max-width: 1024px) {
      align-items: center;
      text-align: center;
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .title {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #64b8e6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -1px;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #64b8e6, transparent);
      border-radius: 2px;
    }

    @media (max-width: 1024px) {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .about {
    max-width: 540px;
    font-size: 1.15rem;
    line-height: 1.8;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify;
    
    @media (max-width: 1024px) {
      text-align: center;
      max-width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  img {
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInLeft 0.8s ease-out;
    border: 2px solid rgba(100, 184, 230, 0.3);
    position: relative;

    &:hover {
      transform: scale(1.05) rotate(1deg);
      box-shadow: 0 16px 56px rgba(100, 184, 230, 0.3);
      border-color: rgba(100, 184, 230, 0.6);
    }

    @media (max-width: 1024px) {
      max-width: 100%;
    }

    @media (max-width: 768px) {
      max-width: 90%;
      border-radius: 16px;
    }
  }
`;

export default About;
