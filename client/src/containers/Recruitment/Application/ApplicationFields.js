import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

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
    label: "What interests you about marketing and business?",
    type: "text",
    name: "interests",
    placeholder: "",
    component: TextAreaField,
    errorMsg: "Please fill out this question."
  },
  {
    label:
      "Describe a marketing campaign or advertisement from anywhere in the world that has stood out to you in the past. Why were you drawn to it? Include an article/video link to the campaign.",
    type: "text",
    name: "campaign",
    placeholder: "",
    component: TextAreaField,
    errorMsg: "Please fill out this question."
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
    label: "State your preferred time slot for an interview.",
    type: "radio",
    name: "interview1",
    options: [
      "Saturday (9/9) -- 9am-12pm",
      "Saturday (9/9) -- 12pm-3pm",
      "Saturday (9/9) -- 3pm-6pm",
      "Sunday (9/10) -- 9am-12pm",
      "Sunday (9/10) -- 12pm-3pm",
      "Sunday (9/10) -- 3pm-6pm",
      "I cannot make any of these times. I will email berkeleypse.recruiting to reschedule."
    ],
    errorMsg: "Please fill out this question."
  },
  {
    label: "State your secondary time slot for an interview.",
    type: "radio",
    name: "interview2",
    options: [
      "Saturday (9/9) -- 9am-12pm",
      "Saturday (9/9) -- 12pm-3pm",
      "Saturday (9/9) -- 3pm-6pm",
      "Sunday (9/10) -- 9am-12pm",
      "Sunday (9/10) -- 12pm-3pm",
      "Sunday (9/10) -- 3pm-6pm",
      "I cannot make any of these times. I will email berkeleypse.recruiting to reschedule."
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
  }
];
