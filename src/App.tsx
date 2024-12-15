import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForYou from './components/ForYou';
import MainLayout from './layouts/MainLayout';
import Settings from './components/Settings';
import UserProfile from './components/Settings/UserProfile';
import UserAgreement from './components/Settings/UserAgreement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ForYou />} />
          <Route path="settings" element={<Settings />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="useragreement" element={<UserAgreement />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
