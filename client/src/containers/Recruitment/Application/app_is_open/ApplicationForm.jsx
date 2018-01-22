import React from "react";

// node modules
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "../../../components/ContainerStyles";
import { APP_FIELDS } from "./application_fields";
import RadioField from "../input_components/RadioField";
import { ParaText } from "../../../components/TextStyles";

const ApplicationForm = props => {
  const renderFields = () => {
    return (
      <div id="fields-container">
        {APP_FIELDS.map((field, index) => {
          switch (field.type) {
            case "radio":
              return <RadioField {...field} key={`${index}_${field.name}`} />;
            default:
              return <Field {...field} key={`${index}_${field.name}`} />;
          }
        })}
        <br />
        <Text>
          Please email the following items to the Director of Recruiting (<a href="berkeleypse.recruiting@berkeley.edu">
            berkeleypse.recruiting@berkeley.edu
          </a>). Please note that your application will be considered INCOMPLETE
          until you do so.
          <ol>
            <li>Resume (in PDF format)</li>
            <li>
              Cover Letter (in PDF format) Please include the following
              information (in 500 words or less):
            </li>
            <ol type="a">
              <li>Why do you want to join PSE?</li>
              <li>What will you contribute to PSE?</li>
              <li>
                What do you expect to gain from PSE? How will you incorporate
                this into your future?
              </li>
            </ol>
            <li>
              Unofficial Transcript with your name (Screenshot via CalCentral
              Academics)
            </li>
            <li>Additional Transcript (applicable to Transfer students)</li>
            <li>Class Schedule (Screenshot via CalCentral Schedule Planner)</li>
            <li>Recent Headshot</li>
          </ol>
        </Text>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  };

  return (
    <FormContainer>
      <form onSubmit={props.handleSubmit(props.submitApp)}>
        {renderFields()}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

function validate(values) {
  const errors = {};
  APP_FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = field.errorMsg;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "applicationForm",
  destroyOnUnmount: false
})(ApplicationForm);

const FormContainer = ColumnContainer.extend`
  align-items: baseline;
  margin: 1rem 0;
`;

const SubmitButton = styled.button`
  background-color: #895fad;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-family: Lato, sans-serif;
  font-size: 0.9rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;

  &:hover {
    opacity: 0.75;
  }
`;

const Text = ParaText.extend`
  font-size: 1rem;
  text-align: left;
`;

// PropTypes

ApplicationForm.propTypes = {
  submitApp: PropTypes.func.isRequired
};
