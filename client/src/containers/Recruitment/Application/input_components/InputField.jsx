import React from "react";

// node modules
import styled from "styled-components";
import PropTypes from "prop-types";

// components
import {
  ColumnContainer,
  RowContainer
} from "../../../components/ContainerStyles";

const InputField = ({
  input,
  label,
  placeholder,
  meta: { error, touched }
}) => {
  return (
    <InputContainer>
      <RowContainer>
        <Label>{label}</Label>
        {touched && <ErrorLabel>{error}</ErrorLabel>}
      </RowContainer>
      <Input placeholder={placeholder} {...input} />
    </InputContainer>
  );
};

export default InputField;

const InputContainer = ColumnContainer.extend`
  align-items: baseline;
  margin: 1.25rem 0;
`;

const Label = styled.label`
  border-bottom: 1px solid #895fad;
  color: #333;
  font-family: Lato, sans-serif;
  font-size: 0.875rem;
  margin: 0.3125rem 0;
  text-transform: uppercase;
`;

const ErrorLabel = Label.extend`
  border-bottom: none;
  color: red;
  margin: 0.3125rem 0.625rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #333;
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  outline: none;
  padding: 0.125rem;
  width: 300px;

  &:focus {
    border: none;
    border-bottom: 2px solid #895fad;
  }
`;

// PropTypes

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  touched: PropTypes.bool
};
