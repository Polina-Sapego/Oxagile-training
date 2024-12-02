import React from 'react';
import SettingsDisabled from '@images/settings-disabled.png';
import Settings from '@images/settings.png';
import Main from '@images/main.png';
import MainDisabled from '@images/main-disabled.png';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const menu = [
    { path: '/', imgActive: Main, imgInactive: MainDisabled },
    { path: 'settings', imgActive: Settings, imgInactive: SettingsDisabled },
  ];

  return (
    <nav className="navigation">
      {menu.map((item) => (
        <NavLink key={item.path} to={item.path} className="navigation-setting">
          {({ isActive }) => (
            <img
              src={isActive ? item.imgActive : item.imgInactive}
              alt=""
            />
          )}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
