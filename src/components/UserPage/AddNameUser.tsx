import React from 'react';
import { NavLink } from 'react-router-dom';

function AddNameUser() {
  return (
    <div className="body-container-add-name">
      <div className="add-new-name-user">
        <h1 className="new-profile-user">НОВЫЙ ПРОФИЛЬ</h1>
        <h2 className="name-profile">Имя профиля</h2>
        <div className="add-name-user">
          <input className="new-name-profile" />
        </div>
        <div className="add-name-user-button">
          <NavLink to="/userprofile">
            <button type="button" className="button-back-user-profile btn">Назад</button>
          </NavLink>
          <NavLink to="/userprofile/coloruser">
            <button type="button" className="button-back-user-profile btn">Далее</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddNameUser;
