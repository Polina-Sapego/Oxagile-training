import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Login from '@images/account_profile.png';
import ParentalControl from '@images/parentalcontrol.png';
import Useragreement from '@images/useragreement.png';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import Setting, { ISettingItem } from './Setting';

function Settings() {
  const location = useLocation();
  const isMainSettingsPage = location.pathname === '/settings';
  const usersList = useSelector((state: RootState) => state.newUser.users);
  const isAdminSelected = usersList.some((user) => user.isAdmin && user.selected);
  const settings: Array< ISettingItem > = [{
    id: 1,
    title: 'Профиль',
    img: Login,
    link: '/settings/profile',
  },
  {
    id: 3,
    title: 'Пользовательское соглашение',
    img: Useragreement,
    link: '/settings/useragreement',
  }];

  const finalSettings = isAdminSelected
    ? [
      ...settings.slice(0, 1),
      {
        id: 2,
        title: 'Родительский контроль',
        img: ParentalControl,
        link: '/settings/parental-control',
      },
      ...settings.slice(1),
    ]
    : settings;

  return (
    <>
      {isMainSettingsPage && (
        <>
          <h1 className="title-block">Settings</h1>
          <div className="settings">
            {finalSettings.map((item) => (
              <Setting key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
      <Outlet />
    </>
  );
}

export default Settings;
