import React from "react";
import { InfiniteScroll } from "../animations";
import "./Event.css";

const Event = () => {
  const items = [
  { content: "1. Inauguration", event_id: 1 },
  { content: "2. LOLgorithms", event_id: 2 },
  { content: "3. Mindware", event_id: 3 },
  { content: "4. Cyber Hive", event_id: 4 },
  { content: "5. Output Unveiled", event_id: 5 },
  { content: "6. PyMind", event_id: 6 },
  { content: "7. Crypto Countdown: Final Block of 2024", event_id: 7 },
  { content: "8. GET GIT GO – Master Version Control", event_id: 8 },
  { content: "9. Master The Code", event_id: 9 },
  { content: "10. Skill Over Knowledge – Thriving in the AI Era", event_id: 10 },
  { content: "11. Android Dev Sprint", event_id: 11 },
  { content: "12. Catch The Phish", event_id: 12 },
  { content: "13. Byte the Byte", event_id: 13 },
  { content: "14. DataSprint - Crack the data, Win the sprint", event_id: 14 },
  { content: "15. UI Forge", event_id: 15 },
  { content: "16. Explore the Cloud", event_id: 16 },
  { content: "17. Decode the World of Cybersecurity", event_id: 17 }
];


  return (
    <div className="events-page">
      <h1 className="event-title">Events</h1>
      <div style={{ height: "100vh", positon: "relative" }}>
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
