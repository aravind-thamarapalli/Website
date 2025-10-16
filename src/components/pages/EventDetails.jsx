import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import events from "../../events.json";
import "./EventDetails.css";
import { ShinyText, CountUp } from "../ui";
import { useRef } from "react";
import { VariableProximity, Carousel, ScrollVelocity } from "../animations";
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

  // Prepare images for carousel
  const carouselImages = event.images
    ? Object.keys(event.images)
        .filter((key) => event.images[key])
        .map((key, idx) => ({
          id: idx + 1,
          img: event.images[key],
        }))
    : [];

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
          {carouselImages.length > 0 ? (
            <Carousel images={carouselImages} autoPlayInterval={5000} />
          ) : (
            <p className="no-images">No images available</p>
          )}
        </div>
      </div>
      <div className="event-footer">
        <ScrollVelocity texts={[`* done by ${event.domain}`]} className="custom-scroll-text" />
      </div>
    </div>
  );
};

export default EventDetails;
