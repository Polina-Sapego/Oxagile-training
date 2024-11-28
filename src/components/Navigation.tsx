import React from 'react';
import Settings from '@images/settings.png';
import UserDefault from '@images/userdefault.png';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <img className="navigation-setting" src={Settings} alt="settings button" />
      <NavLink to="userprofile">
        <img className="navigation-user" src={UserDefault} alt="user button" />
      </NavLink>
    </nav>
  );
}

export default Navigation;
