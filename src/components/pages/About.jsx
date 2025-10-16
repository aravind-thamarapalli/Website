import styled from "styled-components";
import image from "../../assets/inauguration.jpg";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text">
          <h1 className="heading">About <span>AsCI</span></h1>
          <div className="line"></div>
          <p className="para">
            <strong>AsCI (Association of Computer Intellects)</strong> is the official
            Computer Science club of <strong>GVPCE(A)</strong>. We are a
            community of passionate innovators, coders, and learners who believe in
            making technology practical and inspiring.
          </p>

          <p className="para">
            Our journey is built around <em>innovation</em>, <em>collaboration</em>,
            and <em>learning by doing</em> — through hackathons, workshops, and
            seminars that blend creativity with technical excellence.
          </p>

          <p className="para end">
            At AsCI, we don't just talk tech — we <strong>live it</strong>. 🚀
          </p>
        </div>

        <div className="imageBox">
          <img src={image} alt="AsCI Inauguration" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: white;
  min-height: 100vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Outfit", sans-serif;
  overflow: hidden;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 4rem;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  .text {
    flex: 1;
    animation: fadeInUp 0.8s ease-out;

    .heading {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      line-height: 1.1;

      span {
        background: linear-gradient(90deg, #64b8e6, #00eaff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .line {
      width: 70px;
      height: 4px;
      background: linear-gradient(90deg, #64b8e6, transparent);
      border-radius: 2px;
      margin: 1.2rem 0 2rem;
    }

    .para {
      color: rgba(255, 255, 255, 0.85);
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      text-align: justify;

      em {
        color: #64b8e6;
        font-style: normal;
        font-weight: 500;
      }

      strong {
        color: #fff;
      }

      &.end {
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 2rem;
        text-align: left;

        @media (max-width: 1024px) {
          text-align: center;
        }
      }
    }
  }

  .imageBox {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    perspective: 1000px;

    img {
      width: 100%;
      max-width: 480px;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
      border: 1.5px solid rgba(100, 184, 230, 0.4);
      transform: rotateY(0deg) rotateX(0deg);
      transition: all 0.6s ease;

      &:hover {
        transform: rotateY(5deg) rotateX(3deg) scale(1.03);
        box-shadow: 0 25px 60px rgba(100, 184, 230, 0.3);
        border-color: rgba(100, 184, 230, 0.7);
      }

      @media (max-width: 1024px) {
        max-width: 90%;
        transform: none;
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default About;
