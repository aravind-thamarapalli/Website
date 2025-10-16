import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BlurText, ShinyText, CountUp } from "../ui";
import { Carousel } from "../animations";
import Domain from "../../domains.json";
import "./Verticle.css";

const Verticle = () => {
  const data = useLocation();
  const itemName = data.state?.item?.name; // Ensure safe access to item name
  const [openEventIndex, setOpenEventIndex] = useState(null);

  const verticle = Domain.domains.find((domain) => domain.name === itemName); // Find the matching domain

  if (!verticle) {
    return <h1 className="domain-not-found">Domain not found</h1>;
  }

  const toggleEvent = (index) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  // Extract images correctly
  const images = verticle.events.map((event) =>
    event.images
      ? Object.keys(event.images)
          .filter((key) => event.images[key]) // Filter out empty values
          .map((key, idx) => ({
            id: idx + 1,
            img: event.images[key],
          }))
      : []
  );

  console.log("Extracted Images:", images); // Debugging log
  console.log("Images length per event:", images.map(img => img.length));

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="verticle">
      <BlurText
        text={verticle.name}
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="verticle-title"
      />
      <p className="verticle-description">{verticle.description}</p>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-header">
          <h2 className="team-title">Team</h2>
        </div>
        <div className="team-images">
          {verticle.lead_image && (
            <div className="team-member">
              <img 
                src={verticle.lead_image} 
                alt={verticle.lead}
                className="team-member-image"
              />
              <ShinyText
                text={verticle.lead}
                disabled={false}
                speed={3}
                className="team-member-name"
              />
              <p className="team-member-role">Lead</p>
            </div>
          )}
          {verticle.co_leads_images && verticle.co_leads_images.map((image, idx) => (
            <div key={idx} className="team-member">
              <img 
                src={image} 
                alt={verticle.co_leads[idx]}
                className="team-member-image"
              />
              <ShinyText
                text={verticle.co_leads[idx]}
                disabled={false}
                speed={3}
                className="team-member-name"
              />
              <p className="team-member-role">Co-Lead</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h2 className="events-title">Events</h2>
        <div className="events-list">
          {verticle.events.map((event, idx) => (
            <div key={idx} className={`event-item ${openEventIndex === idx ? 'event-item-open' : ''}`}>
              <div className="event-header" onClick={() => toggleEvent(idx)}>
                <div className="event-header-content">
                  <h3 className="event-name">
                    <ShinyText
                      text={event.name}
                      disabled={false}
                      speed={3}
                      className="custom-class"
                    />
                  </h3>
                  <p className="event-date">{event.date}</p>
                </div>
                <div className="event-toggle-icon">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={openEventIndex === idx ? 'icon-rotated' : ''}
                  >
                    <path 
                      d="M6 9L12 15L18 9" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              
              <div className={`event-content ${openEventIndex === idx ? 'event-content-open' : ''}`}>
                <p className="event-description">{event.description}</p>
                <p className="event-participants">
                  Participants:{" "}
                  <CountUp
                    from={0}
                    to={event.participants}
                    separator=","
                    direction="up"
                    duration={1}
                    className=" event-participants-count"
                  />
                </p>
                {images[idx] && images[idx].length > 0 ? (
                  <Carousel
                    images={images[idx]}
                    autoPlayInterval={5000}
                  />
                ) : (
                  <p className="no-images">No images available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Verticle;
