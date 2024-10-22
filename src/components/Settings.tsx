import React from 'react';
import Setting from './Setting';
import '../../public/assets/styles/Settings.sass';

function Settings() {
  const settings: Array<{ id: number, title: string, img: string }> = [{
    id: 1,
    title: 'Вход',
    img: './assets/images/login.png',
  }, { id: 2, title: 'Поддержка', img: './assets/images/support.png' },
  {
    id: 3,
    title: 'Пользовательское соглашение',
    img: './assets/images/useragreement.png',
  }];

  return (
    <>
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
