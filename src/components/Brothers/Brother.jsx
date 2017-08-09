// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import {
  brotherInfo,
  brotherList,
  executiveList
} from './brotherhood_constants';
import { PageHandler } from './PageHandler.jsx';

export default class Brother extends React.Component {
  render() {
    var brother = this.props.match.params.name;
    var bro = brotherInfo[brother];
    var broIndex = brotherList.indexOf(brother);

    return (
      <div className={css(styles.brotherContainer, animations.fadeIn)}>
        <div className={css(styles.profileContainer)}>
          <div className={css(styles.imageContainer, animations.slideInLeft)}>
            <img
              className={css(styles.image)}
              src={'../' + bro.img}
              alt={bro.name}
            />
          </div>

          <div className={css(styles.broInfo)}>
            <PageHandler
              index={broIndex}
              brotherList={brotherList}
              brotherInfo={brotherInfo}
            />
            <div className={css(styles.broHeader)}>
              <h1 className={css(styles.name)}>
                {bro.name}
              </h1>
              <h2 className={css(styles.position)}>
                {bro.position}
              </h2>
            </div>
            <div className={css(styles.broBody)}>
              <div className={css(styles.broTable)} />
              <div className={css(styles.broBio)}>
                <p className={css(styles.bio)}>
                  {bro.bio}
                </p>
              </div>
              <div className={css(styles.broMedia)}>
                <Link
                  to={bro.linkedin}
                  target="blank"
                  className={css(styles.linkedin)}
                >
                  <i
                    className={css(styles.icon) + ' fa fa-linkedin'}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  brotherContainer: {},

  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0'
  },

  broInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },

  broHeader: {
    fontFamily: 'Lato, sans-serif',
    letterSpacing: '0.035em',
    padding: '10px 20px',
    textAlign: 'center'
  },

  name: {
    color: '#895FAD',
    fontSize: '3em',
    margin: '0',
    padding: '10px 0 5px 0',
    textAlign: 'center'
  },

  position: {
    color: '#818181',
    fontSize: '1.25em',
    margin: '0',
    textTransform: 'uppercase'
  },

  imageContainer: {
    padding: '0 20px'
  },

  image: {
    border: '3px solid #895FAD',
    height: '600px',
    width: '402px'
  },

  broBio: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.125em',
    fontWeight: '500',
    lineHeight: '1.5em',
    margin: 'auto',
    width: '80%'
  },

  bio: {
    color: '#818181'
  }
});
