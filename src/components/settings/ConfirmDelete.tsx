import React from 'react';
import Warning from '@images/warning.png';
import { NavLink, useLocation } from 'react-router-dom';
import { ProfileDispatch, RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfile } from '@redux/newUser/actionCreators';

function ConfirmDelete() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dispatch: ProfileDispatch = useDispatch<ProfileDispatch>();
  const id = Number(queryParams.get('id'));
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const userProfile = profileList.find((profile) => profile.id === id);

  function handleDelete() {
    dispatch(deleteProfile(id));
  }

  return (
    <div className="user-page-parental">
      <div className="mod-notice">
        <img src={Warning} alt="" />
        <h1 className="title-delete-profile">{`Вы точно хотите удалить профиль ${userProfile.name}?`}</h1>
      </div>
      <div className="button-back-profile">
        <NavLink to="/settings/parental-control/delete-profile">
          <button className="back btn" type="button">Отмена</button>
        </NavLink>
        <NavLink to="/settings/parental-control">
        <button
          className="back btn"
          type="button"
          onClick={handleDelete}
        >
          Удалить
        </button>
        </NavLink>
      </div>
    </div>

  );
}

export default ConfirmDelete;
