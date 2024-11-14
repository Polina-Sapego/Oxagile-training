import React, { useState } from 'react';
import SettingsDisabled from '@images/settings-disabled.png';
import Settings from '@images/settings.png';
import Main from '@images/main.png';
import MainDisabled from '@images/main-disabled.png';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isHoveredSettings, setIsHoveredSettings] = useState(false);
  const [isHoveredMain, setIsHoveredMain] = useState(false);
  const location = useLocation();

  const isSettingsPage = location.pathname === '/settings';
  const isMainPage = location.pathname === '/';
  return (
    <nav className="navigation">
      <Link to="settings">
        <img
          className="navigation-setting"
          src={isSettingsPage || isHoveredSettings ? Settings : SettingsDisabled}
          alt="settings button"
          onMouseEnter={() => setIsHoveredSettings(true)}
          onMouseLeave={() => setIsHoveredSettings(false)}
        />
      </Link>
      <Link to="/">
        <img
          className="navigation-main"
          src={isMainPage || isHoveredMain ? Main : MainDisabled}
          alt="main button"
          onMouseEnter={() => setIsHoveredMain(true)}
          onMouseLeave={() => setIsHoveredMain(false)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
