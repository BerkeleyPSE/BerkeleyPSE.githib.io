import InputField from "../input_components/InputField";
import TextAreaField from "../input_components/TextAreaField";

export const APP_FIELDS = [
  {
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Oski Bear",
    component: InputField,
    errorMsg: "Please provide your name."
  },
  {
    label: "Berkeley Email",
    type: "email",
    name: "email",
    placeholder: "oski@berkeley.edu",
    component: InputField,
    errorMsg: "Please provide your Berkeley email."
  },
  {
    label: "Phone",
    type: "phone",
    name: "phone",
    placeholder: "(123) 456-7890",
    component: InputField,
    errorMsg: "Please provide your phone number."
  },
  {
    label: "Year",
    type: "radio",
    name: "year",
    options: ["Freshman", "Sophomore", "Junior", "Junior Transfer", "Senior"],
    errorMsg: "Please provide your current year."
  },
  {
    label: "Major(s)",
    type: "text",
    name: "major",
    placeholder: "Intended and/or Declared",
    component: InputField,
    errorMsg: "Please provide your major."
  },
  {
    label: "Minor(s)",
    type: "text",
    name: "minor",
    placeholder: "",
    component: InputField,
    errorMsg: 'Please provide your minor. "N/A" if you do not have a minor.'
  },
  {
    label: "List your current commitments (both on and off campus).",
    type: "text",
    name: "commitments",
    placeholder: "",
    component: TextAreaField,
    errorMsg: "Please fill out this question."
  },
  {
    label: "What would you do with a free weekend in Berkeley?",
    type: "text",
    name: "free_weekend",
    placeholder: "",
    component: TextAreaField,
    errorMsg: "Please fill out this question."
  },
  {
    label:
      "Are you available January 26, 2018 from 7pm-9pm for an Invite-Only Event?",
    type: "radio",
    name: "invite_only",
    options: ["Yes", "No"],
    errorMsg: "Please fill out this question."
  },
  {
    label: "State your preferred time slot for an interview.",
    type: "radio",
    name: "interview1",
    options: [
      "Saturday (1/27) -- 9AM-12PM",
      "Saturday (1/27) -- 12PM-3PM",
      "Saturday (1/27) -- 3PM-6PM",
      "I cannot make any of these times. I will email berkeleypse.recruiting to reschedule."
    ],
    errorMsg: "Please fill out this question."
  },
  {
    label: "State your secondary time slot for an interview.",
    type: "radio",
    name: "interview2",
    options: [
      "Saturday (1/27) -- 9AM-12PM",
      "Saturday (1/27) -- 12PM-3PM",
      "Saturday (1/27) -- 3PM-6PM",
      "I cannot make any of these times."
    ],
    errorMsg: "Please fill out this question."
  },
  {
    label:
      "Are you available every Monday from 7:30-10pm for Prospective Member Training?",
    type: "radio",
    name: "pmt_availability",
    options: ["Yes", "No"],
    errorMsg: "Please fill out this question."
  },
  {
    label: "How did you hear about us?",
    type: "radio",
    name: "hear",
    options: [
      "Flyering on Sproul",
      "Friend",
      "Social Media",
      "Website",
      "Other"
    ],
    errorMsg: "Please fill out this question."
  },
  {
    label:
      "Is there any addition information you would like us to consider when reviewing your application?",
    type: "text",
    name: "additional_information",
    placeholder: "",
    component: TextAreaField,
    errorMsg: "Please fill out this question."
  }
];
