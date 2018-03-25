const BASE_URL = "/api";

module.exports = {
  // application endpoints (appRoutes)
  CREATE_APP: `${BASE_URL}/app/create`,

  // brother endpoints (brotherRoutes)
  GET_BROTHERS: `${BASE_URL}/brother`,
  GET_ACTIVE_BROTHER: `${BASE_URL}/brother/:key`,
  GET_BROTHER_INFO: `${BASE_URL}/brother/info/:key`,

  // fulltime endpoints (fulltimeRoutes)
  GET_FULLTIMES: `${BASE_URL}/fulltime`,

  // internship endpoints (internshipRoutes)
  GET_INTERNSHIPS: `${BASE_URL}/internship`,

  // registration form endpoints (regfromRoutes)
  CREATE_REGFORM: `${BASE_URL}/regform/create`
};
