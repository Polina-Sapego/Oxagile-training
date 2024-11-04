import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import addProfile, { IProfile } from '../redux/profile/actionCreators';
import { RootState, ProfileDispatch } from '../redux/store';
import '@styles/Navigation.sass';
import '@styles/UserProfile.sass';

function UserProfile() {
  const dispatch: ProfileDispatch = useDispatch<ProfileDispatch>();
  const currentProfile = useSelector((state: RootState) => state.profile);
  const [name, setName] = useState(currentProfile?.name);
  const [pin, setPin] = useState(currentProfile?.pin);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    if (currentProfile) {
      setName(currentProfile.name);
      setPin(currentProfile.pin);
    }
  }, [currentProfile]);

  const handlePinChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (/^\d{1,4}$/.test(value)) {
      setPin(Number(value));
    }
  };

  useEffect(() => {
    setIsButtonVisible(name !== currentProfile?.name || pin !== currentProfile?.pin);
  }, [name, pin, currentProfile]);

  const handleSubmit = () => {
    const profile: IProfile = {
      name: name || 'Admin',
      pin,
    };
    if (profile.name && profile.pin.toString().length === 4) {
      dispatch(addProfile(profile));
    }
  };

  return (
    <>
      <h1 className="settings-title">SETTINGS</h1>
      <h2 className="profile">Profile</h2>
      <div className="form">
        <div className="form-user">
          <span>Name</span>
          <button className="button-change btn" type="button">
            <input
              className="user-input"
              placeholder="Admin"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </button>
        </div>
        <span className="change-color" />
        <div className="change-pin">
          <span>PIN for profile</span>
          <button className="change btn" type="button">
            <input
              className="user-input"
              placeholder="0"
              value={pin}
              type="text"
              onChange={handlePinChange}
            />
          </button>
        </div>
      </div>
      <div className="button-back-profile">
        {isButtonVisible && (
        <button onClick={handleSubmit} className={pin.toString().length === 4 ? 'save btn' : 'save-disabled btn'} type="button">Save</button>
        )}
        <Link to="/">
          <button className="back btn" type="button">Back</button>
        </Link>
      </div>
    </>
  );
}

export default UserProfile;
