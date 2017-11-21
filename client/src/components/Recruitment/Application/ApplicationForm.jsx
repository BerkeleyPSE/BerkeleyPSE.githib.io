// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { reduxForm, Field } from 'redux-form';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import RadioField from './RadioField';

class ApplicationForm extends React.Component {
  renderFields() {
    return (
      <div>
        {FIELDS.map((field, index) => {
          switch (field.type) {
            case 'radio':
              return <RadioField {...field} key={`${index}_${field.name}`} />;
            default:
              return <Field {...field} key={`${index}_${field.name}`} />;
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <div className={css(formStyles.container, animations.fadeIn)}>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className={css(formStyles.submit)} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'applicationForm'
})(ApplicationForm);

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
    padding: '7px 12px',
    textTransform: 'uppercase',
    ':hover': {
      opacity: '0.75'
    }
  }
});

const FIELDS = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Oski Bear',
    component: InputField
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'oski@berkeley.edu',
    component: InputField
  },
  {
    label: 'Phone',
    type: 'phone',
    name: 'phone',
    placeholder: '(123) 456-7890',
    component: InputField
  },
  {
    label: 'Year',
    type: 'radio',
    name: 'year',
    options: ['Freshman', 'Sophomore', 'Junior', 'Junior Transfer', 'Senior']
  },
  {
    label: 'Major(s)',
    type: 'text',
    name: 'major',
    placeholder: 'Intended and/or Declared',
    component: InputField
  },
  {
    label: 'Minor(s)',
    type: 'text',
    name: 'minor',
    placeholder: '',
    component: InputField
  },
  {
    label: 'What interests you about marketing and business?',
    type: 'text',
    name: 'interests',
    placeholder: '',
    component: TextAreaField
  },
  {
    label:
      'Describe a marketing campaign or advertisement from anywhere in the world that has stood out to you in the past. Why were you drawn to it? Include an article/video link to the campaign.',
    type: 'text',
    name: 'campaign',
    placeholder: '',
    component: TextAreaField
  },
  {
    label: 'List your current commitments (both on and off campus).',
    type: 'text',
    name: 'commitments',
    placeholder: '',
    component: TextAreaField
  }
];
