import React from "react";

// node modules
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "../../../components/ContainerStyles";
import { APP_FIELDS } from "./application_fields";
import RadioField from "../input_components/RadioField";

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

// PropTypes

ApplicationForm.propTypes = {
  submitApp: PropTypes.func.isRequired
};
