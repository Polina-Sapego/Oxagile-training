import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { updateUserSelectedAction } from '@redux/newUser/actionCreators';
import { NavLink } from 'react-router-dom';
import { RootState } from '@redux/store';
import Tick from '@images/tick.png';
import Profile from './Profile';

function CarouselUser() {
  const [offset, setOffset] = useState(0);
  const pageWidth = ((window.innerWidth * 13.5) / 100);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState<number | null>(null);
  const [clickedOnceMap, setClickedOnceMap] = useState<Record<number, boolean>>({});
  const [clickedOnceAdd, setClickedOnceAdd] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLeftArrowClick = () => {
    setClickedOnceAdd(false);
    setVisibleIndex((index) => index - 1);
    if (visibleIndex === 1 && offset !== 0) {
      setOffset(0);
    }
  };

  const handleRightArrowClick = () => {
    setVisibleIndex((index) => index + 1);
    if (visibleIndex === 4 && offset === 0) {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - pageWidth;
        const maxOffset = -(pageWidth * (profileList.length));

        return Math.max(newOffset, maxOffset);
      });
    }
  };

  const handleAddButtonClick = (e: SyntheticEvent) => {
    setVisibleIndex(() => profileList.length);

    if (!clickedOnceAdd) {
      e.preventDefault();
      setVisibleIndex(() => profileList.length);
      setClickedOnceAdd(true);
    } else {
      setClickedOnceAdd(false);
    }
    if (profileList.length === 5 && offset === 0) {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - pageWidth;
        const maxOffset = -(pageWidth * (profileList.length));
        return Math.max(newOffset, maxOffset);
      });
    }
  };

  const handleProfileClick = (index: number) => {
    setClickedOnceAdd(false);
    if (selectedProfileIndex !== index) {
      setClickedOnceMap({});
    }

    if (clickedOnceMap[index]) {
      setSelectedProfileIndex(index);
      dispatch(updateUserSelectedAction(profileList[index].id));
      setClickedOnceMap({});
    } else {
      setClickedOnceMap((prevState) => ({
        ...prevState,
        [index]: true,
      }));
    }
    setClickedOnceAdd(false);
    setVisibleIndex(index);
    if (index === 0 && offset !== 0) {
      setOffset((currentOffset) => {
        const newOffset = currentOffset + pageWidth;
        return Math.min(newOffset, 0);
      });
    }

    if (index === 5 && offset === 0) {
      setOffset((currentOffset) => {
        const newOffset = currentOffset - pageWidth;
        const maxOffset = -(pageWidth * (profileList.length));
        return Math.max(newOffset, maxOffset);
      });
    }
  };

  return (
    <div className="main-profile-carousel">
      <div className="visible-part-carousel-profile">
        <div className="all-pages-profile" style={{ transform: `translateX(${offset}px)` }}>
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
          {profileList.length < 6 && (
            <NavLink
              className="link-add-button"
              to={`nameuser?profile=${profileList.length + 1}`}
              onClick={handleAddButtonClick}
            >
              <div className="add-button-carousel-page">
                <div className={`add-button-container ${
                  clickedOnceAdd
                    || visibleIndex === profileList.length
                    ? 'add-button-item-active'
                    : 'add-button-item-disabled'
                }`}
                >
                  <div className="add-container">
                    <div className="add-image-container">
                      <div
                        className={`profile-user-image ${clickedOnceAdd || visibleIndex === profileList.length ? 'profile-user-image-active' : ''}`}
                      />
                      <span
                        className="add-profile"
                        style={{ color: clickedOnceAdd || visibleIndex === profileList.length ? '#14171A' : '#ffff' }}
                      >
                        +
                      </span>
                    </div>
                    {(clickedOnceAdd || visibleIndex === profileList.length)
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
      {visibleIndex < profileList.length + (profileList.length < 6 ? 0 : -1) && (
        <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />)}
    </div>
  );
}

export default CarouselUser;
