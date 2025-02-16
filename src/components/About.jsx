import styled from "styled-components";
import image from "../assets/inauguration.jpg";

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
  padding: 2rem;
  
  .aboutus {
    width: 100%;
    max-width: 1064px;
    padding: 2rem;
    color: white;
    font-family: "Outfit", serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    border: 1px solid #22668a;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.4s ease-in-out;
    
    
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 1.5rem;
      text-align: center;
    }
  }

  .aboutus:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 10px rgba(100, 184, 230, 0.5);
  }

  .text-part {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;

    @media (max-width: 1024px) {
      align-items: center;
      text-align: center;
    }
  }

  .title {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .about {
    max-width: 524px;
    font-size: 1.25rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.4;
    }
  }

  img {
    width: 100%;
    max-width: 516px;
    height: auto;
    object-fit: cover;
    border-radius: 20px;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
`;

export default About;
