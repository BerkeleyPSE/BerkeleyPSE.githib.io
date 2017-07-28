// PAGE URLs
export const HOME_PATH = '/';
export const ABOUT_PATH = '/about';
export const CAREERS_PATH = '/careers';
export const SPONSOR_PATH = '/sponsor';
export const RECRUITMENT_PATH = '/recruitment';
export const WHYPSE_PATH = '/why-pse';
export const FAQS_PATH = '/faqs';
export const APPLICATION_PATH = '/app';
export const BROTHERS_PATH = '/brothers';
export const EXECUTIVES_PATH = '/eboard';
export const CONTACT_PATH = '/contact';

export const navbar_constants = [
  {
    header: 'About',
    headerLink: ABOUT_PATH,
    pages: [
      {
        page: 'About Us',
        pageLink: ABOUT_PATH
      },
      {
        page: 'Careers',
        pageLink: CAREERS_PATH
      },
      {
        page: 'Sponsors',
        pageLink: SPONSOR_PATH
      }
    ]
  },
  {
    header: 'Recruitment',
    headerLink: RECRUITMENT_PATH,
    pages: [
      {
        page: 'Information',
        pageLink: RECRUITMENT_PATH
      },
      {
        page: 'Why PSE?',
        pageLink: WHYPSE_PATH
      },
      {
        page: 'FAQs',
        pageLink: FAQS_PATH
      },
      {
        page: 'Application',
        pageLink: APPLICATION_PATH
      }
    ]
  },
  {
    header: 'Brotherhood',
    headerLink: BROTHERS_PATH,
    pages: [
      {
        page: 'Brothers',
        pageLink: BROTHERS_PATH
      },
      {
        page: 'Executives',
        pageLink: EXECUTIVES_PATH
      }
    ]
  },
  {
    header: 'Contact',
    headerLink: CONTACT_PATH,
    pages: []
  }
];
