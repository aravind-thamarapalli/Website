import React from "react";
import { useLocation } from "react-router-dom";
import BlurText from "./BlurText";
import ShinyText from "./ShinyText";
import Stack from "./Stack";
import CountUp from "./CountUp";
import Domain from "../domains.json";
import "./Verticle.css";

const Verticle = () => {
  const data = useLocation();
  const itemName = data.state?.item?.name; // Ensure safe access to item name

  const verticle = Domain.domains.find((domain) => domain.name === itemName); // Find the matching domain

  if (!verticle) {
    return <h1 className="domain-not-found">Domain not found</h1>;
  }

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

      <div className="verticle-1">
        <div className="verticle-11">
          <h2 className="team-title">Team</h2>
          <h3 className="team-lead">
            Lead:{" "}
            <ShinyText
              text={verticle.lead}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h3>
          <h3 className="team-co-leads">
            Co-Leads:{" "}
            <span>
              {verticle.co_leads.length > 0
                ? verticle.co_leads.map((coLead, idx) => (
                    <React.Fragment key={idx}>
                      <ShinyText
                        text={coLead}
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                      {idx < verticle.co_leads.length - 1 && ", "}
                    </React.Fragment>
                  ))
                : "None"}
            </span>
          </h3>
        </div>

        <div className="events-section">
          <h2 className="events-title">Events</h2>
          <div className="events-list">
            {verticle.events.map((event, idx) => (
              <div key={idx} className="event-item">
                <h3 className="event-name">
                  <ShinyText
                    text={event.name}
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </h3>
                <p className="event-date">{event.date}</p>
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
                  <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 400, height: 200 }}
                    cardsData={images[idx]} // Pass the corrected images array
                    className="event-images"
                  />
                ) : (
                  <p className="no-images">No images available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verticle;
