import React from "react";

// node modules
import isUndefined from "lodash/isUndefined";

// components
import PreregistrationForm from "./PreregistrationForm";
import { ColumnContainer } from "../../../components/ContainerStyles";
import { PageHeader } from "../../../components/HeaderStyles";
import { ParaText } from "../../../components/TextStyles";

const Preregistration = props => {
  let { appReducer, submitForm } = props;
  return (
    <ColumnContainer id="preregistration-form">
      <PageHeader>Spring 2018 Pre-Registration</PageHeader>
      <Text>
        Our Spring 2018 Application will open after our Meet the Chapter event,
        Saturday (1/20) night, 7pm in the ASUC Student Union Tilden Room.
        <br />
        If you would like notifications for our recruitment events in the
        meantime, please enter your name and email below.
      </Text>
      {!isUndefined(appReducer.formSubmitSuccess) ? (
        appReducer.formSubmitSuccess ? (
          <SubmissionText>
            Your information was submitted successfully. We'll notify you when
            our recruitment calendar is released. Thanks!
          </SubmissionText>
        ) : (
          <SubmissionText>
            Something went wrong with your submission. Please refresh this page
            and try again.
          </SubmissionText>
        )
      ) : (
        <PreregistrationForm submitForm={submitForm} />
      )}
    </ColumnContainer>
  );
};

export default Preregistration;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;

const SubmissionText = Text.extend`
  border-top: 3px solid #895fad;
  padding: 1rem 0;
`;
