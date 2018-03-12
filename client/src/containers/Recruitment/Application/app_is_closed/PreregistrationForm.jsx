import React from "react";

// node modules
import styled from "styled-components";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "../../../components/ContainerStyles";
import InputField from "../input_components/InputField";

const PreregistrationForm = props => {
  const renderFields = () => {
    return (
      <div>
        <Field
          label="Name"
          type="text"
          name="name"
          placeholder="Oski Bear"
          component={InputField}
        />
        <Field
          label="Email"
          type="email"
          name="email"
          placeholder="oski@berkeley.edu"
          component={InputField}
        />
      </div>
    );
  };

  return (
    <FormContainer>
      <form onSubmit={props.handleSubmit(props.submitForm)}>
        {renderFields()}
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

function validate(values) {
  const errors = {};
  let fields = ["name", "email"];
  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please enter your ${field}.`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "preregistrationForm"
})(PreregistrationForm);

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
  transition: all 0.25s ease;

  &:hover {
    opacity: 0.75;
  }
`;

// PropTypes

PreregistrationForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};
