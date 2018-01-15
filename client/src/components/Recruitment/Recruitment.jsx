// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";

// Local Helper Files & Components
import { animations } from "../../stylesheets/Animations.js";
import HoverCard from "../reusable_components/HoverCard.jsx";
import {
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH
} from "../Navbar/navbar_constants.jsx";

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
    return (
      <HoverCard
        key={index}
        link={item.link}
        header={item.header}
        description={item.description}
      />
    );
  });

  return (
    <div className={css(animations.fadeIn) + " recruitment-container"}>
      <div className="timeline-container">
        {/* Timeline URL: https://docs.google.com/spreadsheets/d/1Zr01Q2fci0Z1Hd1oCGPz8M_gtnIv6Prr_0AjKqNiqjE/ */}
        <iframe
          title="Fall 2017 Recruitment Timeline"
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Zr01Q2fci0Z1Hd1oCGPz8M_gtnIv6Prr_0AjKqNiqjE&font=Default&lang=en&initial_zoom=2&height=100%"
          width="100%"
          height="650px"
          frameBorder="0"
        />
      </div>
      <div className={css(styles.hoverCardContainer)}>{hoverCards}</div>
    </div>
  );
};

export default Recruitment;

const styles = StyleSheet.create({
  hoverCardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    }
  }
});
