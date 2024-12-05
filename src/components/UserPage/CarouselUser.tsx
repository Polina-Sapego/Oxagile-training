import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Profile, { IProfileUserItem } from './Profile';

function CarouselUser() {
  const [offset, setOffset] = useState(0);
  const pageWidth = ((window.innerWidth * 0.5) / 100);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const ProfileList: IProfileUserItem[] = [{
    id: 1,
    title: 'Степан',
  },
  ];

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + pageWidth;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - pageWidth;
      const maxOffset = -(pageWidth * (ProfileList.length));
      return Math.max(newOffset, maxOffset);
    });
  };

  const handleProfileClick = (index: number) => {
    setVisibleIndex(index);
    setOffset(-(index * pageWidth));
  };

  useEffect(() => {
    const centerIndex = Math.round(Math.abs(offset) / pageWidth);
    setVisibleIndex(centerIndex);
  }, [offset, pageWidth]);

  return (
    <div className="main-profile-carousel">
      <div className="visible-part-carousel-profile">
        <div className="all-pages-profile" style={{ transform: `translateX(${offset}px)` }}>
          {ProfileList.map((profile, index) => (
            <div
              key={profile.id}
              className="carousel-profiles-page"
              style={{
                paddingLeft: index === 0 ? '250px' : 'none',
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
              </div>
            </div>
          ))}
          {ProfileList.length < 6 && (
            <NavLink
              className="link-add-button"
              to="nameuser"
              onClick={() => handleProfileClick(ProfileList.length)}
            >
              <div className="add-button-carousel-page">
                <div className={`add-button-container  ${ProfileList.length === visibleIndex ? 'add-button-item-active' : 'add-button-item-disabled'}`}>
                  <div className="add-container">
                    <div className="add-image-container">
                      <div
                        className={`profile-user-image ${ProfileList.length === visibleIndex ? 'profile-user-image-active' : ''}`}
                      />
                      <span
                        className="add-profile"
                        style={{ color: visibleIndex === ProfileList.length ? '#14171A' : '#ffff' }}
                      >
                        +
                      </span>
                    </div>
                    {visibleIndex === ProfileList.length
                    && <h1 className="add-button-title">Создать профиль</h1>}
                  </div>
                </div>
              </div>
            </NavLink>
          )}
        </div>
      </div>
      {visibleIndex > 0 && (
        <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick} />
      )}
      {visibleIndex < ProfileList.length + (ProfileList.length < 6 ? 0 : -1) && (
        <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />)}
    </div>
  );
}

export default CarouselUser;
