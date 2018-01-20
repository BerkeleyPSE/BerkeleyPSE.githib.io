import React from "react";

// components
import HoverCard from "../components/HoverCard.jsx";
import {
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH
} from "../Navbar/navbar_constants";
import { RowContainer } from "../components/ContainerStyles";

// constants
const HOVER_CARD_ITEMS = [
  {
    header: "Why PSE?",
    description: "What sets us apart.",
    link: WHYPSE_PATH
  },
  {
    header: "FAQs",
    description: "What you should know.",
    link: FAQS_PATH
  },
  {
    header: "Application",
    description: "How to join us.",
    link: APPLICATION_PATH
  }
];

const Recruitment = props => {
  document.title = "Recruitment - Pi Sigma Epsilon | Zeta Chi Chapter";

  const hoverCards = HOVER_CARD_ITEMS.map((item, index) => {
    return <HoverCard key={index} {...item} />;
  });

  return (
    <div id="recruitment-container">
      <div id="timeline-container">
        {/* Timeline URL: https://docs.google.com/spreadsheets/d/1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY */}
        <iframe
          title="Fall 2017 Recruitment Timeline"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C54v0HU7JkbkaS4DSj8aFWsu6g9McOwI6AXb7jnraJY&font=Default&lang=en&initial_zoom=2&height=100%"
          width="100%"
          height="650px"
          frameBorder="0"
        />
      </div>
      <HoverCardContainer>{hoverCards}</HoverCardContainer>
    </div>
  );
};

export default Recruitment;

const HoverCardContainer = RowContainer.extend`
  padding: 2.5rem;
`;
