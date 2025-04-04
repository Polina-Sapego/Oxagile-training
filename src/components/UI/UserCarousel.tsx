import Profile from '@components/userPage/Profile';
import Tick from '@images/tick.png';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

function UserCarousel({ visibleIndex, handleProfileClick }) {
  const profileList = useSelector((state: RootState) => state.newUser.users);

  return (
    <>
      {profileList.map((profile, index) => (
        <div
          role="button"
          key={profile.id}
          className={`carousel-profiles-page  ${index === visibleIndex ? 'state-selected' : ''}`}
          style={{
            paddingLeft: index === 0 ? '220px' : 'none',
          }}
          onClick={() => handleProfileClick(index)}
        >
          <div
            className={`profiles-carousel-item 
                ${index === visibleIndex
              ? 'profiles-carousel-item-active'
              : 'profiles-carousel-item-disabled'}`}
          >
            <Profile key={profile.id} profile={profile} />
            {profile.selected && (
            <div className="checkmark-image-container-carousel">
              <img
                src={Tick}
                alt="Selected"
                className="checkmark-image-carousel"
              />
            </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCarousel;
