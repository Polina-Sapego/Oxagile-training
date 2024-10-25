import React from 'react';
import Settings from '@images/settings.png';
import '@styles/Navigation.sass';

function Navigation() {
  return (
    <nav className="navigation">
      <img src={Settings} alt="settings button" className="navigation-setting" />
    </nav>
  );
}

export default Navigation;
