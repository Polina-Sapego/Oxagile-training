import React from 'react';

export default function Toggle({ onChange }) {
  return (
    <label className="input-wrapper">
      <input className="input" type="checkbox" onChange={onChange} />
      <span className="slider" />
    </label>
  );
}
