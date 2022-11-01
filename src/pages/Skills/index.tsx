import React from 'react';
import classes from './Skills.module.css';
import {
  SiApollographql,
  SiCss3,
  SiFlutter,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPython,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
function Skills() {
  return (
    <IconContext.Provider value={{ color: 'white', size: '45' }}>
      <div className="main">
        <h1 className={classes.title}>Languages</h1>
        <div className={classes.row}>
          <SiFlutter />
          <SiJavascript />
          <SiHtml5 />
          <SiCss3 />
          <SiPython />
        </div>

        <h1 className={classes.title}>Skills</h1>
        <div className={classes.row}>
          <SiNodedotjs />
          <SiApollographql />
          <SiNpm />
          <SiMongodb />
          <SiGithub />
          <SiGraphql />
        </div>

        <h1 className={classes.title}>Other</h1>
        <div className={classes.row}>
          <div className={classes.flat_button}>Typescript</div>
          <div className={classes.flat_button}>Express.js</div>
          <div className={classes.flat_button}>Mongoose.js</div>
          <div className={classes.flat_button}>Next.js</div>
          <div className={classes.flat_button}>GraphQL</div>
          <div className={classes.flat_button}>JQuery</div>
          <div className={classes.flat_button}>Flutter</div>
          <div className={classes.flat_button}>COREML</div>
          <div className={classes.flat_button}>Bootstrap</div>
          <div className={classes.flat_button}>Redux.js</div>
          <div className={classes.flat_button}>Rest API</div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Skills;
