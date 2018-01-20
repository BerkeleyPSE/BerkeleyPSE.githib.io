import React from "react";

// node modules
import styled from "styled-components";
import { Field } from "redux-form";

// components
import { ColumnContainer } from "../../../components/ContainerStyles";

const RadioField = ({ label, options, name }) => {
  return (
    <RadioContainer>
      <Label>{label}</Label>
      {options.map((opt, index) => {
        return (
          <Field
            key={opt}
            index={index}
            name={name}
            option={opt}
            component={RadioButton}
          />
        );
      })}
    </RadioContainer>
  );
};

const RadioButton = ({ input, option, index, meta: { touched, error } }) => {
  return (
    <RadioButtonContainer>
      <OptionLabel>
        <Radio
          type="radio"
          {...input} // this must be over the value prop, else the name won't be defined
          value={option}
        />
        {option}
      </OptionLabel>
      {index === 0 && touched && <ErrorLabel>{error}</ErrorLabel>}
    </RadioButtonContainer>
  );
};

export default RadioField;

const RadioContainer = ColumnContainer.extend`
  align-items: baseline;
  margin: 1.25rem 0;
`;

const Label = styled.label`
  border-bottom: 1px solid #895fad;
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 0.875rem;
  letter-spacing: 0.0125rem;
  margin: 0.3125rem 0;
  word-spacing: 0.025rem;
  text-transform: uppercase;
`;

const RadioButtonContainer = styled.div`
  margin: 0.25rem 0;
`;

const OptionLabel = Label.extend`
  border-bottom: none;
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  text-transform: none;
`;

const Radio = styled.input`
  outline: none;
  margin: 0 0.625rem;
  padding: 0.25rem;
`;

const ErrorLabel = Label.extend`
  border-bottom: none;
  color: red;
  margin: 0.3125rem 0.625rem;
`;
