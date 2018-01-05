// React
import React from "react";

// NPM Modules
import { StyleSheet, css } from "aphrodite";
import { reduxForm, Field } from "redux-form";

// Local Helper Files & Components
import { animations } from "../../../stylesheets/Animations";
import { APP_FIELDS } from "./ApplicationFields";
import RadioField from "./RadioField";

const ApplicationForm = props => {
  const renderFields = () => {
    return (
      <div id="fields-container">
        {APP_FIELDS.map((field, index) => {
          switch (field.type) {
            case "radio":
              return <RadioField {...field} key={`${index}_${field.name}`} />;
            default:
              return <Field {...field} key={`${index}_${field.name}`} />;
          }
        })}
      </div>
    );
  };

  return (
    <div className={css(formStyles.container, animations.fadeIn)}>
      <form onSubmit={props.handleSubmit(props.submitApp)}>
        {renderFields()}
        <button className={css(formStyles.review)} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};
  APP_FIELDS.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = field.errorMsg;
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "applicationForm",
  destroyOnUnmount: false
})(ApplicationForm);

const formStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    justifyContent: "center",
    margin: "15px 0"
  },

  review: {
    backgroundColor: "#895FAD",
    border: "none",
    borderRadius: "3px",
    color: "#FFF",
    cursor: "pointer",
    fontFamily: "Lato, sans-serif",
    fontSize: "1em",
    outline: "none",
    padding: "7px 12px",
    textTransform: "uppercase",
    ":hover": {
      opacity: "0.75"
    }
  }
});
