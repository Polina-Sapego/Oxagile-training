import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/settings';
import UserProfile from './components/settings/UserProfile';
import ForYou from './components/ForYou';
import MainLayout from './layouts/MainLayout';
import UserAgreement from './components/settings/UserAgreement';

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
