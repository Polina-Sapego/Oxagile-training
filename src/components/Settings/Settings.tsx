import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Login from '@images/account_profile.png';
import Support from '@images/support.png';
import Useragreement from '@images/useragreement.png';
import Setting, { ISettingItem } from './Setting';

function Settings() {
  const location = useLocation();
  const isMainSettingsPage = location.pathname === '/settings';

  const settings: Array< ISettingItem > = [{
    id: 1,
    title: 'Profile',
    img: Login,
    link: '/settings/profile',
  },
  {
    id: 2, title: 'Поддержка', img: Support, link: '/settings/support',
  },
  {
    id: 3,
    title: 'Пользовательское соглашение',
    img: Useragreement,
    link: '/settings/useragreement',
  }];

  return (
      <>
        {isMainSettingsPage && (
          <>
            <h1 className="title-block">Settings</h1>
            <div className="settings">
              {settings.map((item) => (
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
