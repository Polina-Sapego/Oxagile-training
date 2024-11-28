import React from 'react';
import CarouselUser from './CarouselUser';

function UserPage() {
  return (
    <div className="user-page">
      <h1 className="title-profile">Профиль</h1>
      <h2 className="change-profile">Выберите профиль</h2>
      <div className="user-wrapper">
        <CarouselUser />
      </div>
    </div>
  );
}

export default UserPage;
