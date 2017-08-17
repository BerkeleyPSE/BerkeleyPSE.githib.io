// React
import React from 'react';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Local Helper Files & Components
import { animations } from '../../stylesheets/Animations.js';

export default class WhyPSE extends React.Component {
  render() {
    return (
      <div className={css(styles.whyPSEContainer, animations.fadeIn)}>
        <h1 className={css(styles.header)}>Why Pi Sigma Epsilon?</h1>
        <div className={css(styles.bodyContainer)}>
          <div className={css(styles.section, styles.darkBackground)}>
            <p className={css(styles.description, styles.lightDescription)} />
          </div>
          <div className={css(styles.section, styles.lightBackground)}>
            <h2 className={css(styles.sectionHeader, styles.darkBottom)}>
              Rahul's Testimonial
            </h2>
            <div className={css(styles.descriptionContainer)}>
              <p className={css(styles.description, styles.darkDescription)}>
                When I came into Berkeley as a freshman, I was shocked by the
                sheer number of business organizations and fraternities on
                campus. As an intended-business major, I knew I wanted to join
                at least one of these. I randomly decided upon a business
                fraternity (not Pi Sigma Epsilon), attended the rush events, and
                failed to get past the first round of interviews. Throughout my
                brief rush process, I felt as though every word coming out of my
                mouth was being judged. I felt as though I had to prove myself
                (which is a good thing), but that after a certain point, minds
                were made up and my words fell on deaf ears. It’s not a knock on
                that fraternity (or any business fraternity or organization). It
                just wasn’t a culture fit, which led to my terrible experience..
                <br /> <br />
                When I recruited for PSE, however, I had an entirely different
                experience. The brothers I met and conversations I had were
                genuine. The questions asked of me were beyond the usual “What’s
                your major?”, “Why this fraternity/organization?”, and “What are
                your qualifications?”. I had the floor to open up about myself,
                my campus involvements, my career aspirations, rather than
                dictate my resume and hope brothers liked what they heard. I
                talked with Kent (then-senior, now-alum) and Kevin (our current
                president) about running cross country in high school during the
                formal Meet the Chapter event. I met Jill, my future Big, during
                a game we played at the Social Mixer. My interview with the
                brothers was tough but positive. In the end, I just felt I could
                be myself with the brothers in PSE.
                <br /> <br />
                So now, as the VP of Marketing for PSE, I love my decision in
                joining this fraternity for several reasons.
                <br /> <br />
                (1) PSE didn’t (and doesn’t) haze. As a prospective member, I
                was never forced to do anything I didn’t want to do. I didn’t
                have to wake up at 6am in a suit-and-tie and run to campus to
                flyer students. I didn’t experience any physical or emotional
                abuse because my work wasn’t perfect or I asked for more
                direction. I didn’t drink and do mindless work. I didn’t
                sacrifice my academics or cut off all communication to my
                friends because I was in the training process. My PMT was fun
                and educational. I grew closer with my fellow Thetas because we
                all enjoyed showing up and putting in the work in a positive
                environment.
                <br /> <br />
                I believe that when a fraternity hazes its prospective members,
                it ingrains a negative culture in the brotherhood. The mindset
                of “I had to go through this bad experience doing XYZ, you
                should have to do the same (or even worse)” doesn’t promote
                happiness or inclusivity. It alienates and harbors resentment in
                its brothers, which is then fed into a never-ending cycle of
                hazing. So when PSE says it doesn’t haze and sticks to it, I’m
                proud to say that I am a brother of a fraternity that shares my
                values.
                <br /> <br />
                (2) Chapter Growth — we’re still a relatively new fraternity
                chapter. We’ve only been around for 4 years. I’ve been able to
                see our progress from when I joined to now, and we still have a
                crazy amount of room for growth. We received sponsorship from
                Haas. We graduated our third class of seniors into amazing
                companies for full-time. We’ve gained real-world experiences
                working on corporate projects with Under Armour and Course Hero.
                We’ve had info sessions with Goldman Sachs and PwC, networking
                dinners with Infosys, CBS, and L.E.K. Consulting. There’s so
                much we’ve been able to accomplish in just one year. My
                contributions to the fraternity make a difference. Our future is
                bright.
                <br /> <br />
                (3) The Brothers — it’s cliche, but it’s true — my Cal
                experience would not have been the same without them. I’ve
                visited corporate offices with Akshay and Eva, taught Jon to use
                Adobe Photoshop, ran to the Berkeley Marina with Taylor, Kevin,
                Charissa, and Emma, studied with Abhi and Catie during dead
                week, and even picked up two spectacular Littles in Kyle and
                Varsha. PSE has given me a brotherhood that shares my values and
                genuinely cares for my happiness and success.
              </p>
              <div className={css(styles.imagesContainer)}>
                <img
                  src={'/images/rahul.jpg'}
                  className={css(styles.image)}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={css(styles.section)} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  whyPSEContainer: {},

  header: {
    color: '#895FAD',
    fontFamily: 'Lato, sans-serif',
    fontSize: '3em',
    fontWeight: '500',
    margin: '0',
    padding: '30px 0',
    textAlign: 'center'
  },

  bodyContainer: {},

  section: {
    padding: '40px 30px'
  },

  darkBackground: {
    backgroundColor: '#303030'
  },

  lightBackground: {
    backgroundColor: '#FFF'
  },

  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
    textAlign: 'left',
    '@media (max-width: 1200px)': {
      flexDirection: 'column'
    }
  },

  description: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.25em',
    fontWeight: '500',
    padding: '0 10px'
  },

  darkDescription: {
    color: '#303030'
  },

  lightDescription: {
    color: '#FFF'
  },

  sectionHeader: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '2em',
    fontWeight: '500',
    margin: 'auto',
    padding: '30px 0',
    textAlign: 'center',
    width: '95%'
  },

  darkBottom: {
    borderBottom: '3px solid #303030'
  },

  imagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  image: {
    border: '3px solid #895FAD'
  }
});
