import React, { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

function AddNameUser() {
  const [searchParams] = useSearchParams();
  const profile = searchParams.get('profile');
  const [username, setUsername] = React.useState(`Профиль ${profile}`);
  const newUsername = searchParams.get('name');

  useEffect(() => {
    if (newUsername) {
      setUsername(newUsername);
    }
  }, [newUsername]);

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="body-container-add-name">
      <div className="add-new-name-user">
        <h1 className="new-profile-user">НОВЫЙ ПРОФИЛЬ</h1>
        <h2 className="name-profile">Имя профиля</h2>
        <div className="add-name-user">
          <input className="new-name-profile" onChange={handleNameChange} value={username} autoFocus />
        </div>
        <div className="add-name-user-button">
          <NavLink to="/userprofile">
            <button type="button" className="button-back-user-profile btn">Назад</button>
          </NavLink>
          <NavLink to={`/userprofile/coloruser?name=${username}`}>
            <button type="button" className="button-back-user-profile btn">Далее</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AddNameUser;
