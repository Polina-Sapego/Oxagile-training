import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import MainLayout from './layouts/MainLayout';
import UserAgreement from './components/UserAgreement';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Settings />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="useragreement" element={<UserAgreement />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
