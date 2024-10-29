import React from 'react';
import Setting from './Setting';
import Navigation from './Navigation';
import Login from '@images/login.png';
import Support from '@images/support.png';
import Useragreement from '@images/useragreement.png';
import '@styles/Settings.sass';

function Settings() {
  const settings: Array<{ id: number, title: string, img: string, link?: string }> = [{
    id: 1,
    title: 'Вход',
    img: Login,
    link: '/profile',
  }, {
    id: 2, title: 'Поддержка', img: Support, link: '/vvu',
  },
  {
    id: 3,
    title: 'Пользовательское соглашение',
    img: Useragreement,
    link: '/useragreement',
  }];

  return (
    <>
      <Navigation />
      <h1 className="title-block">Settings</h1>
      <div className="settings">
        {settings.map((item) => (
          <Setting key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Settings;
