import styled from 'styled-components';
import image from '../assets/inauguration.jpg';
const About = () => {
    return (
        <StyledWrapper>
            <div className="aboutus">
                <img src={image} alt="Inaugration" />
                <section className='text-part'>
                    <h1 className="title">About Us</h1>
                    <p className='about'>AsCI (Association of Computer Intellects) is the official Computer Science club of GVPCE(A). We bring together tech enthusiasts to learn, innovate, and grow through workshops, hackathons, and events. Our mission is to bridge academics and real-world applications, fostering skills, collaboration, and creativity in the field of technology. Join us to explore, connect, and build the future!</p>
                </section>
            </div>
        </StyledWrapper>
        
    );
}

const StyledWrapper = styled.div`
    .aboutus{
        width: 1064px;
        height: 526px;
        padding: 2px 48px;
        color: white;
        font-family: "Outfit", serif;
        font-weight: 700;
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        gap: 36px;
        align-items: center;
        border: 1px solid #22668A;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        transition: all 0.4s ease-in-out;
        @media (max-width: 1024px){
            height: fit-content;
            width: max-content;
            padding: 24px 24px;
            gap: 0px;
            flex-direction: column;

        }
    }
    .aboutus:hover{
        transform: scale(1.02);
        box-shadow: 0 2px 10px rgba(100, 184, 230, 0.5);
    }
    .text-part{
        display: flex;
        flex-direction: column;
        align-items: start;
        flex-grow: 1;

        @media (max-width: 768px){
        height: fit-content;
        }
    }
    .title{
        font-size: 64px;
        height: 12px;

        @media (max-width: 768px){
            font-size: 48px;
        }
    }
    .about{
        height: 360px;
        width: 524px;
        text-align: left;
        font-size: 22px;
        line-height: 36px;
        flex-grow: 1;
        @media (max-width: 768px){
        font-size: 18px;
        height: 234px;
        }
    }
    .image{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        height: 320px;
        width: 516px;
        object-fit: cover;
        border-radius: 20px;
        
    }

`;

export default About;