import React from "react";

// node modules
import styled from "styled-components";
import isUndefined from "lodash/isUndefined";

// components
import ApplicationForm from "./ApplicationForm";
import { ColumnContainer } from "../../../components/ContainerStyles";
import { PageHeader } from "../../../components/HeaderStyles";
import { ParaText } from "../../../components/TextStyles";

const Application = props => {
  let { appReducer, submitApp } = props;
  return (
    <ColumnContainer>
      <PageHeader>Spring 2018 Application</PageHeader>
      <ParaText>
        Please fill out all fields.
        <br />
        The deadline is January 25th, 2018 at 12pm noon. Good luck!
      </ParaText>
      {!isUndefined(appReducer.appSubmitSuccess) ? (
        appReducer.formSubmitSuccess === true ? (
          <ParaText>
            Your application was submitted successfully. We'll notify you about
            the next steps on the night of January 25th. Thanks!
          </ParaText>
        ) : (
          <ParaText>
            Something went wrong with your application submission. Please
            refresh this page and try again.
          </ParaText>
        )
      ) : (
        <ApplicationForm submitApp={submitApp} appReducer={appReducer} />
      )}
    </ColumnContainer>
  );
};

export default Application;
