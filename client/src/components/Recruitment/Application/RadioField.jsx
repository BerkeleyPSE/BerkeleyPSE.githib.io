// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Field } from 'redux-form';

export default ({ label, options, name }) => {
  return (
    <div className={css(styles.radioContainer)}>
      <label className={css(styles.label)}>{label}</label>
      {options.map((opt, index) => {
        return (
          <Field key={opt} name={name} option={opt} component={RadioButton} />
        );
      })}
    </div>
  );
};

const RadioButton = ({ input, option }) => {
  return (
    <div className={css(styles.radioButton)}>
      <label className={css(styles.optLabel)}>
        <input
          className={css(styles.radio)}
          type="radio"
          {...input} // this must be over value, else the name won't be defined
          value={option}
        />
        {option}
      </label>
    </div>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '20px 0'
  },

  label: {
    borderBottom: '1px solid #895FAD',
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1em',
    letterSpacing: '0.0125em',
    margin: '5px 0',
    wordSpacing: '0.025em'
  },

  radioButton: {
    margin: '3px 0'
  },

  optLabel: {
    color: '#333',
    fontFamily: 'Lato, sans-serif'
  },

  radio: {
    fontFamily: 'Open Sans, sans-serif',
    outline: 'none',
    margin: '0 10px',
    padding: '2px 3px'
  }
});
