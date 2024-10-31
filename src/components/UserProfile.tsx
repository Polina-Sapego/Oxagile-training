import React from 'react';
import { Link } from 'react-router-dom';
import '@styles/Navigation.sass';
import '@styles/UserProfile.sass';

function UserProfile() {
  return (
    <>
      <h1 className="settings-title">SETTINGS</h1>
      <h2 className="profile">Profile</h2>
      <div className="form">
        <div className="form-user">
          <span>Name</span>
          <span>Admin</span>
        </div>
        <div className="change-color">
          <span>Color</span>
          <button className="change btn" type="button">Change</button>
        </div>
        <div className="change-pin">
          <span>PIN for profile</span>
          <button className="change btn" type="button">Change</button>
        </div>
      </div>
      <div className="button-back-profile">
        <Link to="/"><button className="back btn" type="button">Back</button></Link>
      </div>
    </>
  );
}

export default UserProfile;
