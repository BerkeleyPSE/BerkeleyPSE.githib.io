import React from "react";

// node modules
import { StyleSheet, css } from "aphrodite";
import styled from "styled-components";

// components
import { animations } from "../../../stylesheets/Animations.js";
import { faq_constants } from "./faq_constants.js";
import AccordionItem from "../../components/AccordionItem.jsx";
import { PageHeader } from "../../components/HeaderStyles";

const FAQs = props => {
  document.title = "FAQs - Pi Sigma Epsilon | Zeta Chi Chapter";

  const faqs = faq_constants.map((item, index) => {
    if (item.question && item.answer) {
      return (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div id="faqs-container">
      <Header>Frequently Asked Questions</Header>
      <AccordionItemsContainer>{faqs}</AccordionItemsContainer>
    </div>
  );
};

export default FAQs;

const AccordionItemsContainer = styled.div`
  margin: auto;
  padding: 1.25rem 0;
  width: 100%;
`;

const Header = PageHeader.extend`
  font-size: 3rem;
  margin: 0.5rem 0;
`;
