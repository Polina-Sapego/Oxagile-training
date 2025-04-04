import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useSearchParams } from 'react-router-dom';
import { RootState } from '@redux/store';
import { updateUserAgeAction } from '@redux/newUser/actionCreators';
import Toggle from '@components/UI/Toggle';

function DeleteProfile() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = Number(searchParams.get('id'));
  const isAdmin = searchParams.get('admin') === 'true';
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const userProfile = profileList.find((profile) => profile.id === id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState<number>(userProfile?.parentalRating);
  const [startAge, setStartAge] = useState<number>(userProfile?.parentalRating);
  const [toggled, setToggled] = useState(false);
  const isChanged = selectedAge !== startAge;

  const ageOptions = [
    { value: 18, label: '18+' },
    { value: 16, label: '16+' },
    { value: 12, label: '12+' },
    { value: 6, label: '6+' },
    { value: 0, label: '0+' },
  ];

  useEffect(() => {
    if (userProfile?.parentalRating !== undefined) {
      setSelectedAge(userProfile.parentalRating);
    }
  }, [userProfile]);

  const handleAgeClick = (newAge: number) => {
    setSelectedAge(newAge);
  };

  const handleOptionClick = (value) => {
    handleAgeClick(value);
    setIsDropdownOpen(false);
  };

  const handleSave = () => {
    if (isChanged) {
      console.log(selectedAge);
      dispatch(updateUserAgeAction(id, selectedAge));
      setStartAge(selectedAge);
    }
  };

  return (
    <div className="user-page-parental">
      <h1 className="parental-control-title">НАСТРОЙКИ</h1>
      <h2 className="parental-control">Родительский контроль</h2>
      <div className="layout-text">
        <div className="parent-item-age">
          <div className="parent-item-key">
            Какой контент показывать в профиле?
          </div>
          <div className="parent-item-val">
            <div className="custom-select-wrapper">
              <div
                className="custom-select-display btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {ageOptions.find((option) => option.value === selectedAge)?.label}
              </div>
              {isDropdownOpen && (
                <div className="custom-select-options">
                  {ageOptions.map((option) => (
                    <div
                      key={option.value}
                      className="custom-select-option"
                      onClick={() => handleOptionClick(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {selectedAge === 18 && (
          <div className="parent-item-checkbox-delete">
            <div className="parent-item-checkbox-key">Скрыть контент для взрослых</div>
            <div className="parent-item-checkbox-val">
              <div className="mod-checkbox">
                <Toggle onChange={(event) => setToggled(event.target.checked)} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="button-back-profile-delete">
        <NavLink to="/settings/parental-control">
          <button className="back btn" type="button">Назад</button>
        </NavLink>
        {!isAdmin
      && (
        <NavLink to={`confirm-delete?id=${id}`}>
          <button className="back btn" type="button">Удалить профиль</button>
        </NavLink>
      )}
        <NavLink to="/settings/parental-control">
          <button
            className={`back btn ${!isChanged ? 'disabled-save' : ''}`}
            type="button"
            disabled={!isChanged}
            onClick={handleSave}
          >
            Сохранить
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default DeleteProfile;
