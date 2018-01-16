import React from "react";

// node modules
import styled from "styled-components";

// components
import { PageHeader } from "../components/HeaderStyles";
import { ParaText } from "../components/TextStyles";

export default class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    let { isOpen } = this.state;

    return (
      <AccordionContainer>
        <HeaderContainer
          isOpen={isOpen}
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <Header>{this.props.question}</Header>
          {isOpen ? (
            <Chevron className="fa fa-chevron-up" aria-hidden="true" />
          ) : (
            <Chevron className="fa fa-chevron-down" aria-hidden="true" />
          )}
        </HeaderContainer>
        <BodyContainer isOpen={isOpen}>
          <Answer alt>{this.props.answer}</Answer>
        </BodyContainer>
      </AccordionContainer>
    );
  }
}

const AccordionContainer = styled.div`
  margin: 0.3125rem auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const HeaderContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;

  background-color: ${props => (props.isOpen ? "#895fad" : "#fff")};
  border: ${props => (props.isOpen ? "2px solid #895fad" : "2px solid #333")};
  color: ${props => (props.isOpen ? "#fff" : "#333")};
`;

const Header = PageHeader.extend`
  color: inherit;
  font-size: 1.25rem;
  letter-spacing: 0.035rem;
  margin: 0 auto 0 1.25rem;
  padding: 0;
`;

const Chevron = styled.i`
  font-size: 1rem;
  margin: 0 1.25rem 0 auto;
  padding: 0 0.625rem;
`;

const BodyContainer = styled.div`
  background-color: #333;
  border-top: 5px solid #fff;

  display: ${props => !props.isOpen && "none"};
`;

const Answer = ParaText.extend`
  line-height: 1.5rem;
  margin: 0;
  padding: 1.25rem 3.75rem;
`;
