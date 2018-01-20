const HOME_PATH = "/";
const ABOUT_PATH = "/about";
const CAREERS_PATH = "/careers";
const RECRUITMENT_PATH = "/recruitment";
const WHYPSE_PATH = "/why-pse";
const FAQS_PATH = "/faqs";
const APPLICATION_PATH = "/app";
const BROTHERS_PATH = "/brothers";
const EXECUTIVES_PATH = "/eboard";
const CONTACT_PATH = "/contact";

const NAVBAR_MAP = {
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH,
  EXECUTIVES_PATH,
  CONTACT_PATH
};

const NAVBAR_INFO = [
  {
    header: "About",
    headerLink: ABOUT_PATH,
    pages: [
      {
        page: "About Us",
        pageLink: ABOUT_PATH
      },
      {
        page: "Careers",
        pageLink: CAREERS_PATH
      }
    ]
  },
  {
    header: "Recruitment",
    headerLink: RECRUITMENT_PATH,
    pages: [
      {
        page: "Schedule",
        pageLink: RECRUITMENT_PATH
      },
      {
        page: "Why PSE?",
        pageLink: WHYPSE_PATH
      },
      {
        page: "FAQs",
        pageLink: FAQS_PATH
      },
      {
        page: "Application",
        pageLink: APPLICATION_PATH
      }
    ]
  },
  {
    header: "Brotherhood",
    headerLink: BROTHERS_PATH,
    pages: [
      {
        page: "Brothers",
        pageLink: BROTHERS_PATH
      },
      {
        page: "Executives",
        pageLink: EXECUTIVES_PATH
      }
    ]
  },
  {
    header: "Contact",
    headerLink: CONTACT_PATH,
    pages: []
  }
];

export {
  HOME_PATH,
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH,
  EXECUTIVES_PATH,
  CONTACT_PATH,
  NAVBAR_MAP,
  NAVBAR_INFO
};
