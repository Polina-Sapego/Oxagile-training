import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import ColorCarousel from '@components/UI/ColorCarousel';

function AddColorsUser() {
  const [searchParams] = useSearchParams();
  const [selectedColor, setSelectedColor] = useState<string>('green');
  const username = searchParams.get('name');
  const NewUsercolor = searchParams.get('color');

  useEffect(() => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
      setSelectedColor(savedColor);
    } else if (NewUsercolor) {
      setSelectedColor(NewUsercolor);
    }
  }, [NewUsercolor]);

  useEffect(() => {
    if (NewUsercolor) {
      setSelectedColor(NewUsercolor);
    }
  }, [NewUsercolor]);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    localStorage.setItem('selectedColor', color);
  };

  return (
    <div className="body-container-add-colors">
      <ColorCarousel selectedColor={selectedColor} handleColorClick={handleColorClick} />
      <div className="add-color-user-button">
        <NavLink
          to={`/userprofile/nameuser?name=${username}`}
        >
          <button className="button-back-color-profile btn" type="button">Назад</button>
        </NavLink>
        <NavLink to={`/userprofile/ageuser?color=${selectedColor}&name=${username}`}>
          <button
            className="button-back-color-profile btn"
            type="button"
          >
            Далее
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default AddColorsUser;
