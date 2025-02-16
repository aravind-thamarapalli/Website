import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import "./Event.css";

const Event = () => {
  const items = [
    { content: "CYBER-HIVE", event_id : 3 },
    { content: "OUTPUT UNVIELED", event_id : 4 },
    { content: "PYMIND", event_id : 5 },
    { content: "CRYPTO-COUNTDOWN", event_id : 6 },
    { content: "GET-GIT-GO", event_id : 7 },
    { content: "MASTER THE CODE", event_id : 8 },
    { content: "CYBER-HIVE", event_id : 3 },
    { content: "OUTPUT UNVIELED", event_id : 4 },
    { content: "PYMIND", event_id : 5 },
    { content: "CRYPTO-COUNTDOWN", event_id : 6 },
    { content: "GET-GIT-GO", event_id : 7 },
    { content: "MASTER THE CODE", event_id : 8 }
];

  return (
    <div className="events-page">
      <h1 className="event-title">Events</h1>
      <div style={{ height: "500px", positon: "relative" }}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.2}
          autoplayDirection="down"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Event;
