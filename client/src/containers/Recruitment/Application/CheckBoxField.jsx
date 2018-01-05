// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { Field } from "redux-form";

const CheckBoxField = ({ label, options, name }) => {
  return (
    <div className={css(styles.checkboxContainer)}>
      <label className={css(styles.label)}>{label}</label>
      {options.map((opt, index) => {
        return (
          <Field
            key={opt.value}
            name={`${name}_${opt.value}`}
            option={opt}
            component={CheckButton}
          />
        );
      })}
    </div>
  );
};

const CheckButton = ({ input, option, name, meta: { error, touched } }) => {
  return (
    <div className={css(styles.checkboxButton)}>
      <label className={css(styles.optLabel)}>
        <input
          className={css(styles.checkbox)}
          name={name}
          type="checkbox"
          {...input} // this must be over 'value'
          value={option.value}
        />
        {option.label}
      </label>
    </div>
  );
};

export default CheckBoxField;

const styles = StyleSheet.create({
  checkboxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "center",
    margin: "20px 0"
  },

  label: {
    borderBottom: "1px solid #895FAD",
    color: "#333",
    fontFamily: "Lato, sans-serif",
    fontSize: "1em",
    letterSpacing: "0.0125em",
    margin: "5px 0",
    wordSpacing: "0.025em"
  },

  checkboxButton: {
    margin: "3px 0"
  },

  optLabel: {
    color: "#333",
    fontFamily: "Lato, sans-serif"
  },

  checkbox: {
    fontFamily: "Open Sans, sans-serif",
    outline: "none",
    margin: "0 10px",
    padding: "2px 3px"
  }
});
