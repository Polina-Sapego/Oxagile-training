import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@styles/UserAgreement.sass';
import Agreementtext from './Agreementtext';

function UserAgreement() {
  const [viewAll, setViewAll] = useState(false);

  function handleViewAll() {
    setViewAll(!viewAll);
  }

  return (
    <>
      <div className="kebab-case">
        <h1 className="setting-agreement">НАСТРОЙКИ</h1>
        <h2 className="user-agreement">Пользовательское соглашение</h2>
        <h3 className="user-agreement-beeline">Пользовательское соглашение билайн тв</h3>
        <div className="content">
          <div className="content-text">
            <div className={viewAll ? 'scrollable' : ''}>
              <Agreementtext />
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-panel">
        <Link to="/">
          <button className="button-back-agreement btn" type="button">Назад</button>
        </Link>
        <button className="view-all btn" onClick={handleViewAll} type="button">
          { viewAll ? 'Свернуть' : 'Смотреть все' }
        </button>
      </div>
    </>
  );
}

export default UserAgreement;
