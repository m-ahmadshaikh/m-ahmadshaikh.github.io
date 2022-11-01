import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import resume from '../../assets/resume.pdf';
function Header() {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/work">
            Work
          </NavLink>{' '}
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/contact">
            Contact
          </NavLink>
        </li>
        <a className={classes.download} href={resume} download>
          Resume
        </a>
      </ul>
    </div>
  );
}

export default Header;
