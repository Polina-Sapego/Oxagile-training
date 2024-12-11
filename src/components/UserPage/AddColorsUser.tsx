import React, { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Tick from '@images/tick.png';
import { addUsersAction } from '@redux/newUser/actionCreators';
import { IProfileUserItem } from './Profile';

function AddColorsUser() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState<string>('green');
  const username = searchParams.get('name');

  const saveColor = () => {
    const newProfile: IProfileUserItem = {
      id: Date.now(),
      name: username!,
      color: selectedColor,
      selected: false,
    };

    dispatch(addUsersAction(newProfile));
  };

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
          <NavLink
            to={`/userprofile/nameuser?name=${username}`}
          >
            <button className="button-back-color-profile btn" type="button">Назад</button>
          </NavLink>
          <NavLink to="/userprofile">
            <button
              className="button-back-color-profile btn"
              type="button"
              onClick={saveColor}
            >
              Сохранить
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddColorsUser;
