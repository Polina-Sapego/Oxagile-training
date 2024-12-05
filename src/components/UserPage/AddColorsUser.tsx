import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tick from '@images/tick.png';

function AddColorsUser() {
  const [selectedColor, setSelectedColor] = useState<string>('green');

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="body-container-add-colors">
      <div className="add-new-color-user">
        <h1 className="new-profile-color">НОВЫЙ ПРОФИЛЬ</h1>
        <h2 className="color-profile">Цвет профиля</h2>
        <div className="color-choose">
          {['green', 'orange', 'red', 'pink', 'blue'].map((color) => (
            <button
              key={color}
              className={`color-item ${color} ${selectedColor === color ? 'state-focused' : ''}`}
              onClick={() => handleColorClick(color)}
              type="button"
            >
              {selectedColor === color && (
              <div className="checkmark-image-container">
                <img
                  src={Tick}
                  alt="Selected"
                  className="checkmark-image"
                />
              </div>
              )}
            </button>
          ))}
        </div>
        <div className="add-color-user-button">
          <NavLink to="/userprofile/nameuser">
            <button className="button-back-color-profile btn" type="button">Назад</button>
          </NavLink>
          <NavLink to="/userprofile">
            <button className="button-back-color-profile btn" type="button">Сохранить</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddColorsUser;
