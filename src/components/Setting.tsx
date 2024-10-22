import React from 'react';
import '../../public/assets/styles/Setting.sass';

interface Item {
  title: string;
  img: string;
}

interface SettingProps {
  item: Item;
}

function Setting({ item }: SettingProps) {
  return (
    <div className="setting">
      <img className="setting-image" src={item.img} alt={item.toString()} />
      <p className="setting-text">{item.title}</p>
    </div>

  );
}

export default Setting;
