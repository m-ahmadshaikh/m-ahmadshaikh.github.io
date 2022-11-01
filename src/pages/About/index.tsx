import React from 'react';
import BracketText from '../../components/BracketText';
import dp from '../../assets/display-picture.png';
import classes from './About.module.css';
function About() {
  return (
    <div className={classes.main}>
      <div className={classes.banner}>
        <img src={dp} className={classes.image} />
      </div>
      <div className={classes.h1}>Muhammad Ahmad</div>
      <BracketText />
      <div className={classes.h1}>Developer</div>
      <div className={classes.about}>About</div>

      <div className={classes.desp}>
        I am a Software Engineer with a passion to become an expert Web
        Developer. I have an ability to adapt different situations and I have
        potential to grow self.
      </div>
    </div>
  );
}

export default About;
