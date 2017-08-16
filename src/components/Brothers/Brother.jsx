// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';
import {
  brotherInfo,
  brotherList
  // executiveList
} from './brotherhood_constants';
import { PageHandler } from './PageHandler.jsx';

// Constants
const infoList = [
  'year',
  'hometown',
  'class',
  'major',
  'minor',
  'career_interests',
  'previous_positions'
];

const infoMap = {
  year: 'Year',
  hometown: 'Hometown',
  class: 'Class',
  major: 'Major',
  minor: 'Minor',
  career_interests: 'Career Interests',
  previous_positions: 'Previous Positions'
};

export default class Brother extends React.Component {
  broNotFound = () => {
    this.broNotFound = setTimeout(
      function() {
        this.props.history.push('/brothers');
      }.bind(this),
      250
    );
  };

  render() {
    var brother = this.props.match.params.name;
    var broIndex = brotherList.indexOf(brother);
    var bro = brotherInfo[brother];

    if (!bro) {
      this.broNotFound();
      return null;
    }

    const infoTable = infoList.map(item => {
      if (bro[item]) {
        return (
          <div className={css(table.infoRow)} key={`${bro.name}_${item}`}>
            <p className={css(table.infoTitle)}>
              {infoMap[item]}
            </p>
            <p className={css(table.infoValue)}>
              {bro[item]}
            </p>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div className={css(animations.fadeIn) + ' brother-container'}>
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
            <div className={css(table.tableContainer)}>
              <div className={css(table.infoTableContainer)}>
                {infoTable}
              </div>
              {/* TODO: TABLE OF EXPERIENCES */}
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
                  className={css(styles.mediaLink)}
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
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      textAlign: 'center'
    }
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
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center'
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
  },

  broMedia: {
    display: 'flex',
    justifyContent: 'center'
  },

  mediaLink: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#895FAD',
    textDecoration: 'none',
    border: '2px solid #895FAD',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px',
    height: '30px',
    width: '30px',
    ':hover': {
      backgroundColor: '#895FAD',
      color: '#FFF'
    }
  },

  icon: {
    fontSize: '1.5em'
  }
});

const table = StyleSheet.create({
  tableContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0'
  },

  infoTableContainer: {},

  infoRow: {
    borderBottom: '1px solid #303030',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0'
  },

  infoTitle: {
    color: '#895FAD',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    fontWeight: 'bold',
    letterSpacing: '0.025em',
    margin: '0',
    padding: '0 10px',
    textAlign: 'left',
    textTransform: 'uppercase'
  },

  infoValue: {
    color: '#818181',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1em',
    margin: '0',
    padding: '0 10px',
    textAlign: 'right'
  }
});
