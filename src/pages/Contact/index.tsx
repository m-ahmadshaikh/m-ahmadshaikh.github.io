import React from 'react';
import styles from './contact.module.css';
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { IconContext } from 'react-icons';
function Contact() {
  return (
    <div className={`main ${styles.contact}`}>
      <h1>Contact me</h1>
      <h3>I&apos;d love to hear from you! </h3>
      <a
        href="mailto: mbilal.bese18seecs@seecs.edu.pk"
        className={styles.contact_btn}>
        Get in touch!
      </a>
      <h3>
        Or, Hire me on{' '}
        <a href="https://www.upwork.com/freelancers/~0108d229bc11c79344">
          Upwork
        </a>
      </h3>
      <div className={styles.row}>
        <IconContext.Provider value={{ size: '42' }}>
          <a href="https://www.instagram.com/ahmadshaikhk/">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ahmadshaikhk/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/m-ahmadshaikh">
            <AiFillGithub />
          </a>
          <a href="https://www.facebook.com/ahmad.bilal.292/">
            <AiFillFacebook />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;
