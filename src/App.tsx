import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNameUser from '@components/userPage/AddNameUser';
import AddColorsUser from '@components/userPage/AddColorsUser';
import UserProfile from '@components/settings/UserProfile';
import UserAgreement from '@components/settings/UserAgreement';
import ChooseColorsUser from '@components/settings/ChooseColorsUser';
import ParentalControl from '@components/settings/ParentalControl';
import DeleteProfile from '@components/settings/DeleteProfile';
import ConfirmDelete from '@components/settings/ConfirmDelete';
import AddAgeUser from '@components/userPage/AddAgeUser';
import Index from '@components/search';
import MainLayout from './layouts/MainLayout';
import Settings from './components/settings';
import UserPage from './components/userPage';
import ForYou from './components/forYou';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ForYou />} />
          <Route path="search" element={<Index />} />
          <Route path="settings" element={<Settings />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="profile/choose-color" element={<ChooseColorsUser />} />
            <Route path="useragreement" element={<UserAgreement />} />
            <Route path="parental-control" element={<ParentalControl />} />
            <Route path="parental-control/delete-profile" element={<DeleteProfile />} />
            <Route path="parental-control/delete-profile/confirm-delete" element={<ConfirmDelete />} />
          </Route>
          <Route path="userprofile" element={<UserPage />}>
            <Route path="nameuser" element={<AddNameUser />} />
            <Route path="coloruser" element={<AddColorsUser />} />
            <Route path="ageuser" element={<AddAgeUser />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
