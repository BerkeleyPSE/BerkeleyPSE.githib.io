// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className={css(styles.inputContainer)}>
      <label className={css(styles.label)}>{label}</label>
      {touched && error}
      <input
        className={css(styles.input)}
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
  }
});
