import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { IProfileUserItem } from '@components/userPage/Profile';
import { addUsersAction } from '@redux/newUser/actionCreators';
import { useDispatch } from 'react-redux';
import Toggle from '@components/UI/Toggle';

function AddAgeUser() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [selectedAge, setSelectedAge] = useState<number>(12);
  const username = searchParams.get('name');
  const usercolor = searchParams.get('color');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggled, setToggled] = useState(false);

  const ageOptions = [
    { value: 18, label: '18+' },
    { value: 16, label: '16+' },
    { value: 12, label: '12+' },
    { value: 6, label: '6+' },
    { value: 0, label: '0+' },
  ];
  const handleAgeClick = (newAge: number) => {
    setSelectedAge(newAge);
  };

  const handleOptionClick = (value) => {
    handleAgeClick(value);
    setIsDropdownOpen(false);
  };

  const saveColor = () => {
    const newProfile: IProfileUserItem = {
      id: Date.now(),
      name: username!,
      color: usercolor!,
      selected: false,
      parentalRating: selectedAge!,
      isAdmin: false,
    };
    localStorage.removeItem('selectedAge');
    localStorage.removeItem('selectedColor');
    localStorage.removeItem('username');
    dispatch(addUsersAction(newProfile));
  };
  const handleBackClick = () => {
    localStorage.setItem('selectedAge', selectedAge.toString());
  };

  useEffect(() => {
    const savedAge = localStorage.getItem('selectedAge');
    if (savedAge) {
      setSelectedAge(Number(savedAge));
    }
  }, []);

  return (
    <div className="body-container-add-colors">
      <div className="user-page-parental">
        <h1 className="parental-control-title">НАСТРОЙКИ</h1>
        <h2 className="parental-control">Родительский контроль</h2>
        <div className="layout-text">
          <div className="parent-item-add-age">
            <div className="parent-item-age-key">
              Какой контент показывать в профиле?
            </div>
            <div className="parent-item-age-val">
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
          <div className="parent-item-checkbox">
            <div className="parent-item-key">Скрыть контент для взрослых</div>
            <div className="parent-item-val">
              <div className="mod-checkbox">
                <Toggle onChange={(event) => setToggled(event.target.checked)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-back-profile-age">
        <NavLink to={`/userprofile/coloruser?color=${usercolor}&name=${username}`}>
          <button className="back btn" type="button" onClick={handleBackClick}>Назад</button>
        </NavLink>
        <NavLink to="/userprofile">
          <button className="back btn" type="button" onClick={saveColor}>Сохранить</button>
        </NavLink>
      </div>
    </div>
  );
}

export default AddAgeUser;
