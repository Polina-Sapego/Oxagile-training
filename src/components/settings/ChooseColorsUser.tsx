import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ColorCarousel from '@components/UI/ColorCarousel';
import { addProfile, IProfile } from '@redux/newUser/actionCreators';
import { ProfileDispatch, RootState } from '@redux/store';

function ChooseColorsUser() {
  const dispatch: ProfileDispatch = useDispatch<ProfileDispatch>();
  const [selectedColor, setSelectedColor] = useState<string>('green');
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const selectedProfile = profileList.find((profile) => profile.selected);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleSubmit = () => {
    const profile: IProfile = {
      id: selectedProfile.id,
      color: selectedColor,
    };
    dispatch(addProfile(profile));
  };

  return (
    <div className="body-container-add-colors">
      <ColorCarousel selectedColor={selectedColor} handleColorClick={handleColorClick} />
      <div className="add-color-user-button">
        <NavLink
          to="/settings/profile"
        >
          <button className="button-back-color-profile btn" type="button">Назад</button>
        </NavLink>
        <NavLink to={`/settings/profile?color=${selectedColor}`}>
          <button
            className="button-back-color-profile btn"
            type="button"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ChooseColorsUser;
