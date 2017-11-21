// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Field } from 'redux-form';

export default ({ label, options, name }) => {
  // console.log(props);
  // return (<div/>);
  return (
    <div className={css(styles.radioContainer)}>
      <label className={css(styles.label)}>{label}</label>
      {options.map((opt, index) => {
        return (
          <label key={opt}>
            <Field name={name} type="radio" value={opt} component="input" />
            {opt}
          </label>
        );
      })}
    </div>
  );
};

const RadioButton = props => {
  console.log(props);
};

const styles = StyleSheet.create({
  radioContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '15px 0'
  },

  label: {
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1em',
    letterSpacing: '0.0125em',
    margin: '5px 0',
    wordSpacing: '0.025em'
  },

  radio: {
    border: '2px solid #333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.875em',
    outline: 'none',
    padding: '2px 3px',
    ':focus': {
      border: '2px solid #895FAD'
    }
  }
});
