const BASE_URL = "/api";

export default {
  // application endpoints (appRoutes)
  CREATE_APP: `${BASE_URL}/app/create`,

  // brother endpoints (brotherRoutes)
  GET_BROTHERS: `${BASE_URL}/brother`,

  // fulltime endpoints (fulltimeRoutes)
  GET_FULLTIMES: `${BASE_URL}/fulltime`,

  // internship endpoints (internshipRoutes)
  GET_INTERNSHIPS: `${BASE_URL}/internship`,

  // registration form endpoints (regfromRoutes)
  CREATE_REGFORM: `${BASE_URL}/regform/create`
};
