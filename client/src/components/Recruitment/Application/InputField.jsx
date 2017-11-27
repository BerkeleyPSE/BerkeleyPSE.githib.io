// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

const InputField = ({
  input,
  label,
  placeholder,
  meta: { error, touched }
}) => {
  return (
    <div className={css(styles.inputContainer)}>
      <div className={css(styles.labelContainer)}>
        <label className={css(styles.label)}>{label}</label>
        {touched && <label className={css(styles.error)}>{error}</label>}
      </div>
      <input
        className={css(styles.input)}
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '20px 0'
  },

  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  label: {
    borderBottom: '1px solid #895FAD',
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.875em',
    margin: '5px 0',
    textTransform: 'uppercase'
  },

  input: {
    border: 'none',
    borderBottom: '2px solid #333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    outline: 'none',
    padding: '2px 3px',
    width: '300px',
    ':focus': {
      border: 'none',
      borderBottom: '2px solid #895FAD'
    }
  },

  error: {
    color: 'red',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.875em',
    margin: '5px 10px',
    textTransform: 'uppercase'
  }
});
