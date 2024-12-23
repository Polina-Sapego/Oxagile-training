import UserCarousel from '@components/UI/UserCarousel';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { NavLink, useNavigate } from 'react-router-dom';

function ParentalControl() {
  const [offset, setOffset] = useState(0);
  const pageWidth = ((window.innerWidth * 13.5) / 100);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const [selectedProfileIndex, setSelectedProfileIndex] = useState<number | null>(null);
  const [clickedOnceMap, setClickedOnceMap] = useState<Record<number, boolean>>({});
  const navigate = useNavigate();

  const handleLeftArrowClick = () => {
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

  const handleProfileClick = (index: number) => {
    if (selectedProfileIndex !== index) {
      setClickedOnceMap({});
    }

    if (clickedOnceMap[index]) {
      setSelectedProfileIndex(index);
      setClickedOnceMap({});
      navigate(`delete-profile?id=${profileList[index].id}&admin=${profileList[index].isAdmin}`);
    } else {
      setClickedOnceMap((prevState) => ({
        ...prevState,
        [index]: true,
      }));
    }
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
    <div className="user-page-parental">
      <h1 className="parental-control-title">НАСТРОЙКИ</h1>
      <h2 className="parental-control">Родительский контроль</h2>
      <h3 className="parental-control-choose">Выберите профиль для редактирования</h3>
      <div className="main-profile-carousel-parental">
        <div className="visible-part-carousel-profile-parental">
          <div className="all-pages-profile" style={{ transform: `translateX(${offset}px)` }}>
            <UserCarousel visibleIndex={visibleIndex} handleProfileClick={handleProfileClick} />
          </div>
        </div>
      </div>
      {visibleIndex > 0 && (
        <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick} />
      )}
      {visibleIndex < profileList.length + (profileList.length < 6 ? 0 : -1) && (
        <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />)}
      <div className="button-back-profile-parental">
        <NavLink to="/settings">
          <button className="back btn" type="button">Back</button>
        </NavLink>
      </div>
    </div>
  );
}

export default ParentalControl;
