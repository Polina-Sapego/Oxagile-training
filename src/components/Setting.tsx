import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/Setting.sass';

export interface ISettingItem {
  id: number;
  title: string;
  img: string;
  link?: string;
}

interface ISetting {
  item: ISettingItem;
}

function Setting({ item }: ISetting) {
  const settingContent = (
    <div className="setting">
      <img className="setting-image" src={item.img} alt={item.toString()} />
      <p className="setting-text">{item.title}</p>
    </div>
  );

  return (
    item.link ? (
      <NavLink to={item.link} className="navlink">
        {settingContent}
      </NavLink>
    ) : (
      settingContent
    )
  );
}

export default Setting;
