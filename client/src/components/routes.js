/*** 
UC Berkeley Pi Sigma Epsilon -- Zeta Chi Chapter
This is the routes of the app. Static Pages go here and utilize the Components.
author: @rahrang, @berkeleypse
***/

// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Switch, Route } from 'react-router-dom';

// Local Page Components
import Home from './Home';
import About from './About/About';
import Careers from './About/Careers';
import Recruitment from './Recruitment/Recruitment';
import WhyPSE from './Recruitment/WhyPSE';
import FAQs from './Recruitment/FAQs/FAQs';
import Application from './Recruitment/Application/Application.jsx';
import Brotherhood from './Brothers/Brotherhood';
import Brother from './Brothers/Brother';
import Executives from './Brothers/Executives';
import Contact from './Contact';
import Error404 from './Error404';

// Other Local Components
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import AppBanner from './reusable_components/AppBanner.jsx';

// Page URLs
import {
  HOME_PATH,
  ABOUT_PATH,
  CAREERS_PATH,
  RECRUITMENT_PATH,
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH,
  EXECUTIVES_PATH,
  CONTACT_PATH
} from './Navbar/navbar_constants.jsx';

const Routes = props => {
  return (
    <div id="router-container">
      <Navbar />
      <AppBanner />
      <div className={css(styles.mainContainer)}>
        <Switch>
          <Route exact path={HOME_PATH} component={Home} />
          <Route path={ABOUT_PATH} component={About} />
          <Route path={CAREERS_PATH} component={Careers} />
          <Route path={RECRUITMENT_PATH} component={Recruitment} />
          <Route path={WHYPSE_PATH} component={WhyPSE} />
          <Route path={FAQS_PATH} component={FAQs} />
          <Route path={APPLICATION_PATH} component={Application} />
          <Route exact path={BROTHERS_PATH} component={Brotherhood} />
          <Route path={`${BROTHERS_PATH}/:name`} component={Brother} />
          <Route path={EXECUTIVES_PATH} component={Executives} />
          <Route path={CONTACT_PATH} component={Contact} />
          <Route component={Error404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default Routes;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: `calc(100vh - 118px)`
  }
});
