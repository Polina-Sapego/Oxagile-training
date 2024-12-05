import React from 'react';

export interface IProfileUserItem {
  id: number;
  title: string;
}

export interface IProfileUser {
  profile: IProfileUserItem;
}

function Profile({ profile }: IProfileUser) {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <div className="profile-image" />
        <span className="profile-initial">{profile.title[0]}</span>
      </div>
      <h1 className="profile-title">{profile.title}</h1>
    </div>
  );
}

export default Profile;
