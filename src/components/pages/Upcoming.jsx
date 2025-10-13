import styled from 'styled-components';
import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const Upcoming = () => {
    return (
        <StyledWrapper>
            <div className="upcoming">
                <h1>Upcoming Events</h1>
                <div className="events">
                    <SimpleBarReact style={{ maxWidth: '100%', overflowX: 'auto' }}>
                        <div className="event-container">
                            {[...Array(10)].map((_, index) => (
                                <div className="card" key={index}>
                                    <div className="title">
                                        <h1>Upcoming</h1>
                                    </div>
                                    <div className="desc">
                                        <img src="https://source.unsplash.com/400x300/?event" alt="Event" />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                        <a href="#">Know more</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SimpleBarReact>
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    .upcoming {
        font-family: "Outfit", serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .events {
        width: 90%; 
        height: 550px; 
        overflow-x: auto;
        border: 1px solid #22668A;
        border-radius: 20px;
        padding: 10px;
        display: flex;
        align-items: center;
    }

    .upcoming h1 {
        color: white;
        text-align: center;
        font-size: 48px;
    }

    .event-container {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        align-items: center;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 350px;
        
    }

    .title {
        color: white;
        text-align: center;
        height: 2rem;
        width: 180px;   
        z-index: 1;
    }

    .title h1 {
        background-color: #22668A;
        border-radius: 25px;
        font-size: 24px;
        padding: 8px;
    }

    .desc {
        padding: 0 16px;
        width: 345px;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: white;
        background: rgba(97, 199, 245, 0.1); 
        border-radius: 10px;
        border: 1px solid  #22668A;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        z-index: -1;
    }

    .desc p {
        font-size: 18px;
    }

    .desc img {
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
        margin-top: 16px;
    }

    .desc a {
        text-decoration: none;
        color: white;
        background-color: #22668A;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 18px;
        margin-top: 8px;
    }

    .simplebar-scrollbar::before {
        background-color: #58B4DD;
    }
`;

export default Upcoming;
