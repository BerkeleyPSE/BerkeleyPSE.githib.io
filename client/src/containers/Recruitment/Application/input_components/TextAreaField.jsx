import React from "react";

// node modules
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import { ColumnContainer } from "../../../components/ContainerStyles";

const TextAreaField = ({
  input,
  label,
  placeholder,
  meta: { error, touched }
}) => {
  return (
    <TextAreaContainer>
      <Label>{label}</Label>
      {touched && <ErrorLabel>{error}</ErrorLabel>}
      <TextArea placeholder={placeholder} {...input} />
    </TextAreaContainer>
  );
};

export default TextAreaField;

const TextAreaContainer = ColumnContainer.extend`
  align-items: baseline;
  margin: 1.25rem 0;
  width: 80%;
  max-width: 800px;
`;

const Label = styled.label`
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 1rem;
  margin: 0.3125rem 0;
  letter-spacing: 0.0125rem;
  margin: 0.3125rem 0 0.125rem;
  word-spacing: 0.025rem;
`;

const ErrorLabel = Label.extend`
  color: red;
  font-size: 0.9rem;
  margin: 0.3125rem 0;
  text-transform: uppercase;
`;

const TextArea = styled.textarea`
  border: 2px solid #333;
  font-family: Open Sans, sans-serif;
  font-size: 0.9rem;
  outline: none;
  padding: 0.125rem;
  height: 100px;
  width: 100%;
  resize: none;

  &:focus {
    border: 2px solid #895fad;
  }
`;

// PropTypes

TextAreaField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  touched: PropTypes.bool
};
