import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import MainLayout from './layouts/MainLayout';
import UserAgreement from './components/UserAgreement';
import UserPage from './components/UserPage';
import AddNameUser from './components/UserPage/AddNameUser';
import AddColorsUser from './components/UserPage/AddColorsUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="settings" replace />} />
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
