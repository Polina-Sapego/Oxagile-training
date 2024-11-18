import React from 'react';
import SettingsDisabled from '@images/settings-disabled.png';
import Settings from '@images/settings.png';
import Main from '@images/main.png';
import MainDisabled from '@images/main-disabled.png';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isSettingsPage = location.pathname.startsWith('/settings');
  const isMainPage = location.pathname === '/';

  return (
    <nav className="navigation">
      <NavLink to="settings" className="navigation-setting">
        <img
          src={isSettingsPage ? Settings : SettingsDisabled}
          alt="settings button"
        />
      </NavLink>
      <NavLink to="/" className="navigation-main">
        <img
          src={isMainPage ? Main : MainDisabled}
          alt="main button"
        />
      </NavLink>
    </nav>
  );
}

export default Navigation;
