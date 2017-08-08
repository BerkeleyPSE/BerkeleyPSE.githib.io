/*** 
UC Berkeley Pi Sigma Epsilon -- Zeta Chi Chapter
This is the routes of the app. Static Pages go here and utilize the Components.
author: @rahrang, @berkeleypse
***/

// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// Redux
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route } from 'react-router-dom';

// Actions
// import { MainActions } from '../../actions/main-actions';

// Local Page Components
import Home from '../Home';
import About from '../About/About';
import Careers from '../About/Careers';
import Sponsor from '../About/Sponsor';
import Recruitment from '../Recruitment/Recruitment';
import WhyPSE from '../Recruitment/WhyPSE';
import FAQs from '../Recruitment/FAQs';
import Application from '../Recruitment/Application';
import Brotherhood from '../Brothers/Brotherhood';
import Brother from '../Brothers/Brother';
import Executives from '../Brothers/Executives';
import Contact from '../Contact';
import Error404 from '../Error404';

// Other Local Components
import Navbar from '../reusable_components/Navbar/Navbar';
import Footer from '../reusable_components/Footer/Footer';

// Page URLs
import {
  HOME_PATH,
  ABOUT_PATH,
  CAREERS_PATH,
  SPONSOR_PATH,
  RECRUITMENT_PATH,
  WHYPSE_PATH,
  FAQS_PATH,
  APPLICATION_PATH,
  BROTHERS_PATH,
  EXECUTIVES_PATH,
  CONTACT_PATH
} from '../reusable_components/Navbar/navbar_constants.jsx';

export default class Routes extends React.Component {
  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <Navbar />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={HOME_PATH} component={Home} />
            <Route path={ABOUT_PATH} component={About} />
            <Route path={CAREERS_PATH} component={Careers} />
            <Route path={SPONSOR_PATH} component={Sponsor} />
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
  }
}

const styles = StyleSheet.create({});

// const mapStateToProps = state => {
//   return {
//     main: state.main
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     mainActions: bindActionCreators(MainActions, dispatch)
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Routes);
