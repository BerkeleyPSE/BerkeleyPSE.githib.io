import React from "react";

// node modules
import isUndefined from "lodash/isUndefined";
import PropTypes from "prop-types";

// components
import ApplicationForm from "./ApplicationForm";
import { ColumnContainer } from "../../../components/ContainerStyles";
import { PageHeader } from "../../../components/HeaderStyles";
import { ParaText } from "../../../components/TextStyles";

const Application = props => {
  let { appReducer, submitApp } = props;
  return (
    <ColumnContainer id="recruitment-application">
      <PageHeader>Spring 2018 Application</PageHeader>
      <Text>
        Please answer all questions. The deadline is January 25th, 2018 at 5pm.
        Good luck!
      </Text>
      {!isUndefined(appReducer.appSubmitSuccess) ? (
        appReducer.appSubmitSuccess ? (
          <SubmissionText>
            Your application was submitted successfully. We'll notify you about
            the next steps on the night of January 25th. Thanks!
          </SubmissionText>
        ) : (
          <SubmissionText>
            Something went wrong with your application submission. Please
            refresh this page and try again.
          </SubmissionText>
        )
      ) : (
        <ApplicationForm submitApp={submitApp} appReducer={appReducer} />
      )}
    </ColumnContainer>
  );
};

export default Application;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: center;
`;

const SubmissionText = Text.extend`
  border-top: 3px solid #895fad;
  padding: 1rem 0;
`;

// PropTypes

Application.propTypes = {
  appReducer: PropTypes.object.isRequired,
  submitApp: PropTypes.func.isRequired
};
