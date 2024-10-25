import React from 'react';
import { NavLink } from 'react-router-dom';
import '@styles/Setting.sass';

interface IItem {
  title: string;
  img: string;
  link?: string;
}

interface ISetting {
  item: IItem;
}

function Setting({ item }: ISetting) {
  return (
    item.link ? (
      <NavLink to={item.link} className="navlink">
        <div className="setting">
          <img className="setting-image" src={item.img} alt={item.toString()} />
          <p className="setting-text">{item.title}</p>
        </div>
      </NavLink>
    ) : (
      <div className="setting">
        <img className="setting-image" src={item.img} alt={item.toString()} />
        <p className="setting-text">{item.title}</p>
      </div>
    )
  );
}

export default Setting;
