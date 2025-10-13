import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import events from "../../events.json";
import "./EventDetails.css";
import { ShinyText, CountUp } from "../ui";
import { useRef } from "react";
import { VariableProximity, Stepper, Step, ScrollVelocity } from "../animations";
import { FaArrowLeft } from "react-icons/fa";

const EventDetails = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const eventId = data.state?.item?.event_id;
  const event = events.events.find((event) => event.event_id === eventId);
  const containerRef = useRef(null);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <FaArrowLeft />
      </button>
      <div className="event-details">
        <div className="event-details-1">
          <ShinyText
            text={event.event_name}
            disabled={false}
            speed={3}
            className="event-name"
          />
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={event.description}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
          <p className="event-date">{event.date}</p>
          <p className="event-venue">
            <span className="venue-icon">📍</span> {event.venue}
          </p>
          <p className="event-participants">
            Participants{" "}
            <CountUp
              from={0}
              to={event.participants}
              separator=","
              direction="up"
              duration={1}
              className=" event-participant-count"
            />
          </p>
        </div>
        <div className="event-details-2">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <img
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center -70px",
                  borderRadius: "15px",
                  marginTop: "1em",
                }}
                src={event.images.image1}
              />
            </Step>
            <Step>
              <img
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center -70px",
                  borderRadius: "15px",
                  marginTop: "1em",
                }}
                src={event.images.image2}
              />
            </Step>
            <Step>
              <img
                style={{
                  height: "300px",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center -70px",
                  borderRadius: "15px",
                  marginTop: "1em",
                }}
                src={event.images.image3}
              />
            </Step>
          </Stepper>
        </div>
      </div>
      <div className="event-footer">
        <ScrollVelocity texts={[`done by ${event.domain}`]} className="custom-scroll-text" />
      </div>
    </div>
  );
};

export default EventDetails;
