import React from 'react';
import SettingsDisabled from '@images/settings-disabled.png';
import Settings from '@images/settings.png';
import Main from '@images/main.png';
import MainDisabled from '@images/main-disabled.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

function Navigation() {
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const selectedProfile = profileList.find((profile) => profile.selected);

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
      <NavLink to="userprofile" className="navigation-profile">
        <div className="profile-container-navigation">
          <div className="profile-image-container-navigation">
            <div
              className={`profile-image-navigation ${selectedProfile.color}`}
            />
            <span className="profile-initial-navigation">{selectedProfile.name[0].toUpperCase()}</span>
          </div>
        </div>
      </NavLink>
    </nav>
  );
}

export default Navigation;
