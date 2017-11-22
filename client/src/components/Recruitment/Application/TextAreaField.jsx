// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div className={css(styles.textareaContainer)}>
      <label className={css(styles.label)}>{label}</label>
      {touched && <label className={css(styles.error)}>{error}</label>}
      <textarea
        className={css(styles.textarea)}
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  textareaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '20px 0',
    width: '80%',
    maxWidth: '800px'
  },

  label: {
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1em',
    letterSpacing: '0.0125em',
    margin: '5px 0',
    wordSpacing: '0.025em'
  },

  textarea: {
    border: '2px solid #333',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.875em',
    outline: 'none',
    padding: '2px 3px',
    height: '100px',
    width: '100%',
    resize: 'none',
    ':focus': {
      border: '2px solid #895FAD'
    }
  },

  error: {
    color: 'red',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.875em',
    margin: '5px 0',
    textTransform: 'uppercase'
  }
});
