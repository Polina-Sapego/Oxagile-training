import React from 'react';

export interface IProfileUserItem {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  parentalRating: number;
  isAdmin: boolean;
}

export interface IProfileUser {
  profile: IProfileUserItem;
}

function Profile({ profile }: IProfileUser) {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <div
          className={`profile-image ${profile.color}`}
        />
        <span className="profile-initial">{profile.name[0].toUpperCase()}</span>
      </div>
      <h1 className="profile-title">{profile.name}</h1>
      <h1 className="profile-age">
        {profile.parentalRating}
        +
      </h1>
    </div>
  );
}

export default Profile;
