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
import CheckBoxField from './CheckBoxField';

class ApplicationForm extends React.Component {
  renderFields() {
    return (
      <div id="fields-container">
        {FIELDS.map((field, index) => {
          switch (field.type) {
            case 'radio':
              return <RadioField {...field} key={`${index}_${field.name}`} />;
            case 'checkbox':
              return (
                <CheckBoxField {...field} key={`${index}_${field.name}`} />
              );
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
  },
  {
    label: 'State your preferred time slot for an interview.',
    type: 'checkbox',
    name: 'interview',
    options: [
      {
        label: 'Saturday (9/9) -- 9am-12pm',
        value: 'sat_9/9_9-12'
      },
      {
        label: 'Saturday (9/9) -- 12pm-3pm',
        value: 'sat_9/9_12-3'
      },
      {
        label: 'Saturday (9/9) -- 3pm-6pm',
        value: 'sat_9/9_3-6'
      },
      {
        label: 'Sunday (9/10) -- 9am-12pm',
        value: 'sun_9/10_9-12'
      },
      {
        label: 'Sunday (9/10) -- 12pm-3pm',
        value: 'sun_9/10_12-3'
      },
      {
        label: 'Sunday (9/10) -- 3pm-6pm',
        value: 'sun_9/10_3-6'
      },
      {
        label:
          'I cannot make any of these times. I will email berkeleypse.recruiting to reschedule.',
        value: 'no_times'
      }
    ]
  },
  {
    label:
      'Are you available every Monday from 7:30-10pm for Prospective Member Training?',
    type: 'radio',
    name: 'PMT_availability',
    options: ['Yes', 'No']
  }
];
