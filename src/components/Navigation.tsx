import React from 'react';
import Settings from '@images/settings.png';

function Navigation() {
  return (
    <nav className="navigation">
      <img className="navigation-setting" src={Settings} alt="settings button" />
    </nav>
  );
}

export default Navigation;
