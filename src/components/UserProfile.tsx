import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import addProfile, { IProfile } from '../redux/profile/actionCreators';
import { ProfileDispatch, RootState } from '../redux/store';

function UserProfile() {
  const dispatch: ProfileDispatch = useDispatch<ProfileDispatch>();
  const currentProfile = useSelector((state: RootState) => state.profile);
  const [name, setName] = useState(currentProfile?.name);
  const [pin, setPin] = useState(currentProfile?.pin);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (currentProfile) {
      setName(currentProfile.name);
      setPin(currentProfile.pin);
    }
  }, [currentProfile]);

  useEffect(() => {
    setIsButtonVisible(name !== currentProfile?.name || pin !== currentProfile?.pin);
  }, [name, pin, currentProfile, isButtonVisible]);

  const handlePinChange = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (/^\d{0,4}$/.test(value)) {
      setPin(value);
    }
  };

  const handleSubmit = () => {
    if (isEditing && isButtonVisible) {
      const profile: IProfile = {
        name: name || 'Admin',
        pin,
      };
      if (profile.name && profile.pin.toString().length === 4) {
        dispatch(addProfile(profile));
        setSuccessMessage('Profile saved successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setName(currentProfile?.name);
    setPin(currentProfile?.pin);
    setIsEditing(false);
  };

  const buttonClass = () => {
    if (isEditing) {
      return pin.toString().length === 4 && isButtonVisible ? 'save btn' : 'save-disabled btn';
    }
    return 'edit btn';
  };

  return (
    <>
      <h1 className="settings-title">SETTINGS</h1>
      <h2 className="profile">Profile</h2>
      <div className="form">
        <div className="form-user">
          <span>Name</span>
          <div className={`change-name  ${isEditing ? 'button-change-name btn' : ''}`}>
            <input
              className="user-input"
              placeholder="Admin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>
        <span className="change-color" />
        <div className="password">
          <span>PIN for profile</span>
          <div className={`change-pin  ${isEditing ? 'button-change-pin btn' : ''}`}>
            <input
              className="pin-input"
              placeholder="0"
              value={pin}
              type="text"
              onChange={handlePinChange}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
      <div className="button-back-profile">
        <div className="button-group">
          <div className={`button-message ${successMessage ? 'show-toast' : ''}`}>
            {successMessage && (
              <span className="toast-message show-toast">
                {successMessage}
              </span>
            )}
            <button
              onClick={handleSubmit}
              className={`${buttonClass()} ${successMessage ? 'show-toast' : ''}`}
              type="button"
              disabled={isEditing && (!isButtonVisible || pin.toString().length !== 4)}
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
            {isEditing ? (
              <button
                className="save btn"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </div>
        <Link to="/">
          <button className="back btn" type="button">Back</button>
        </Link>
      </div>
    </>
  );
}

export default UserProfile;
