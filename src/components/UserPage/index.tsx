import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CarouselUser from './CarouselUser';

function UserPage() {
  const location = useLocation();
  const isMainSettingsPage = location.pathname === '/userprofile';

  return (
    <>
      {isMainSettingsPage && (
      <div className="user-page">
        <h1 className="title-profile">Профиль</h1>
        <h2 className="change-profile">Выберите профиль</h2>
        <div className="user-wrapper">
          <CarouselUser />
        </div>
      </div>
      )}
      <Outlet />
    </>
  );
}

export default UserPage;
