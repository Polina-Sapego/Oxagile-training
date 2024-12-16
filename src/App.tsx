import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForYou from './components/forYou';
import MainLayout from './layouts/MainLayout';
import UserPage from './components/userPage';
import AddNameUser from '@components/userPage/AddNameUser';
import AddColorsUser from '@components/userPage/AddColorsUser';
import Settings from './components/settings';
import UserProfile from '@components/settings/UserProfile';
import UserAgreement from '@components/settings/UserAgreement';

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
          <Route path="userprofile" element={<UserPage />}>
            <Route path="nameuser" element={<AddNameUser />} />
            <Route path="coloruser" element={<AddColorsUser />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
