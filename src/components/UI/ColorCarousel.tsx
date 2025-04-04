import Tick from '@images/tick.png';
import React from 'react';

function ColorCarousel({ selectedColor, handleColorClick }) {
  return (
    <div className="add-new-color-user">
      <h1 className="new-profile-color">НОВЫЙ ПРОФИЛЬ</h1>
      <h2 className="color-profile">Цвет профиля</h2>
      <div className="color-choose">
        {['green', 'orange', 'red', 'pink', 'blue'].map((color) => (
          <button
            key={color}
            className={`color-item ${color} ${selectedColor === color ? 'state-focused' : ''}`}
            onClick={() => handleColorClick(color)}
            type="button"
          >
            {selectedColor === color && (
            <div className="checkmark-image-container">
              <img
                src={Tick}
                alt="Selected"
                className="checkmark-image"
              />
            </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorCarousel;
