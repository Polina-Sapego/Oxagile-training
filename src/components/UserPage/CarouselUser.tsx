import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BlueProfile from '@images/BlueProfile.png';
import AddButton from '@images/addButton.png';
import AddButtonActive from '@images/addButtonActive.png';
import Profile from './Profile';

function CarouselUser() {
  const [offset, setOffset] = useState(0);
  const pageWidth = ((window.innerWidth * 0.5) / 100);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const ProfileList = [{
    id: 1,
    title: 'Степан',
    img: BlueProfile,
  },
  ];
  function createStyles(index: number) {
    return ({
      width: index === visibleIndex ? '100%' : '90%',
      transform: index === visibleIndex ? 'scale(1.23)' : 'scale(1)',
      transition: 'transform 0.3s ease, margin-top 0.3s ease',
      marginTop: index === visibleIndex ? '23%' : '10%',
      color: index === visibleIndex ? '#FFD919' : '',
    });
  }

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

  useEffect(() => {
    const centerIndex = Math.round(Math.abs(offset) / pageWidth);
    setVisibleIndex(centerIndex);
  }, [offset, pageWidth]);

  return (
    <div className="main-profile-carousel">
      <div className="window-profile">
        <div className="all-pages-profile" style={{ transform: `translateX(${offset}px)` }}>
          {ProfileList.map((profile, index) => (
            <div
              key={profile.id}
              className="carousel-profiles-page"
              style={{
                paddingLeft: index === 0 ? '250px' : 'none',
              }}
            >
              <div
                className="page-profiles"
                style={createStyles(index)}
              >
                <Profile key={profile.id} profile={profile} />
              </div>
            </div>
          ))}
          {ProfileList.length < 6 && (
          <div className="add-button-container" style={createStyles(ProfileList.length)}>
            <img
              className="profile-user-image"
              src={visibleIndex === ProfileList.length ? AddButtonActive : AddButton}
            />
            <span
              className="add-profile"
              style={{ color: visibleIndex === ProfileList.length ? '#14171A' : '#ffff' }}
            >
              +
            </span>
            {visibleIndex === ProfileList.length
                    && <h1 className="add-button-title">Создать профиль</h1>}
          </div>
          )}
        </div>
      </div>
      <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick} />
      <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />
    </div>
  );
}

export default CarouselUser;
