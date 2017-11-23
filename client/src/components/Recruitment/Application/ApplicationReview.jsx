// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../../stylesheets/Animations.js';
import { APP_FIELDS } from './ApplicationFields';
import { AppActions } from '../../../actions/app-actions';

const ApplicationReview = ({ onCancel, formValues }) => {
  const reviewFields = (
    <div>
      {APP_FIELDS.map((field, index) => {
        return (
          <div key={field.name} className={css(styles.field)}>
            <label className={css(styles.label)}>{field.label}</label>
            <p className={css(styles.value)}>{formValues[field.name]}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={css(styles.reviewContainer, animations.fadeIn)}>
      {reviewFields}
      <button className={css(styles.submit)} onClick={onCancel}>
        Go Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.applicationForm.values
  };
}

export default connect(mapStateToProps, AppActions)(
  withRouter(ApplicationReview)
);

const styles = StyleSheet.create({
  reviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
    margin: '15px 0',
    maxWidth: '800px',
    width: '80%'
  },

  field: {
    margin: '15px 0'
  },

  label: {
    borderBottom: '1px solid #895FAD',
    color: '#333',
    fontFamily: 'Lato, sans-serif',
    fontSize: '0.875em',
    margin: '5px 0',
    textTransform: 'uppercase'
  },

  value: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    margin: '2.5px 0'
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
