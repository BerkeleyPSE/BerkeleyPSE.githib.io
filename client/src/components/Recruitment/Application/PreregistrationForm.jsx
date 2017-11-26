// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { reduxForm, Field } from 'redux-form';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import InputField from './InputField';

class PreregistrationForm extends React.Component {
  renderFields() {
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
  }

  render() {
    return (
      <div className={css(formStyles.container, animations.fadeIn)}>
        <form onSubmit={this.props.handleSubmit(this.props.submitForm)}>
          {this.renderFields()}
          <button className={css(formStyles.submit)} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  let fields = ['name', 'email'];
  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Please enter your ${field}.`;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: 'preregistrationForm'
})(PreregistrationForm);

const formStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '15px 0'
  },

  submit: {
    backgroundColor: '#895FAD',
    border: 'none',
    borderRadius: '3px',
    color: '#FFF',
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1em',
    outline: 'none',
    padding: '7px 12px',
    textTransform: 'uppercase',
    ':hover': {
      opacity: '0.75'
    }
  }
});
