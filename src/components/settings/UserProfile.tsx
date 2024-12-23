import React, { SyntheticEvent, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile, IProfile } from '@redux/newUser/actionCreators';
import { ProfileDispatch, RootState } from '@redux/store';

function UserProfile() {
  const dispatch: ProfileDispatch = useDispatch<ProfileDispatch>();
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const selectedProfile = profileList.find((profile) => profile.selected);
  const [name, setName] = useState(selectedProfile?.name);
  const [color, setColor] = useState(selectedProfile?.color);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const colorFromUrl = queryParams.get('color');

  useEffect(() => {
    if (colorFromUrl) {
      setColor(colorFromUrl);
    }
  }, [colorFromUrl]);

  useEffect(() => {
    if (selectedProfile) {
      setName(selectedProfile.name);
      setColor(selectedProfile.color);
    }
  }, [selectedProfile]);

  useEffect(() => {
    setIsButtonVisible(name !== selectedProfile?.name || color !== selectedProfile?.color);
  }, [name, color, selectedProfile, isButtonVisible]);

  const handlePinChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setColor(value);
  };

  const handleSubmit = () => {
    if (isEditing && isButtonVisible) {
      const profile: IProfile = {
        id: selectedProfile.id,
        name: name || 'Admin',
        color,
      };
      if (profile.name) {
        dispatch(addProfile(profile));
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <h1 className="settings-title">SETTINGS</h1>
      <h2 className="profile">Profile</h2>
      <div className="form">
        <div className="form-user">
          <span>Name</span>
          <div className="change-name button-change-name btn">
            <input
              className="user-input btn"
              placeholder="Admin"
              value={name}
              onChange={(e) => {
                const newName = e.target.value;
                setName(newName);
              }}
              onBlur={() => {
                if (selectedProfile) {
                  const updatedProfile: IProfile = {
                    ...selectedProfile,
                    name: name.trim() || selectedProfile.name,
                  };
                  dispatch(addProfile(updatedProfile));
                }
              }}
            />
          </div>
        </div>
        <span className="change-color" />
        <div className="password">
          <span>PIN for profile</span>
          <NavLink to="choose-color" className="change-color">
            <div className="change-color button-change-color btn">
              <button
                className="color-input"
                value={color}
                onChange={handlePinChange}
                type="button"
                onClick={handleSubmit}
              >
                Изменить
              </button>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="button-back-profile">
        <NavLink to="/settings">
          <button className="back btn" type="button">Back</button>
        </NavLink>
      </div>
    </>
  );
}

export default UserProfile;
