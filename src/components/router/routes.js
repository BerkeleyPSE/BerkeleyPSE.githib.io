/*** 
UC Berkeley Pi Sigma Epsilon -- Zeta Chi Chapter
This is the routes of the app. Static Pages go here and utilize the Components.
author: @rahrang, @berkeleypse
***/

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Router
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// Actions
import { MainActions } from '../../actions/main-actions';

// Page Components
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

// Other Components
import Navbar from '../reusable_components/Navbar';

// Page URLs
export const HOME = '/';
export const ABOUT = '/about';
export const CAREERS = '/careers';
export const SPONSOR = '/sponsor';
export const RECRUITMENT = '/recruitment';
export const WHYPSE = '/why-pse';
export const FAQS = '/faqs';
export const APPLICATION = '/app';
export const BROTHERS = '/brothers';
export const EXECUTIVES = '/eboard';
export const CONTACT = '/contact';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.routerContainer)}>
        <Navbar />
        <div className={css(styles.mainContainer)}>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route path={ABOUT} component={About} />
            <Route path={CAREERS} component={Careers} />
            <Route path={SPONSOR} component={Sponsor} />
            <Route path={RECRUITMENT} component={Recruitment} />
            <Route path={WHYPSE} component={WhyPSE} />
            <Route path={FAQS} component={FAQs} />
            <Route path={APPLICATION} component={Application} />
            <Route exact path={BROTHERS} component={Brotherhood} />
            <Route path={`${BROTHERS}/:name`} component={Brother} />
            <Route path={EXECUTIVES} component={Executives} />
            <Route path={CONTACT} component={Contact} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    main: state.main
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mainActions: bindActionCreators(MainActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
