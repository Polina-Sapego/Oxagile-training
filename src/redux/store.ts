import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from './profile/reducer';
import NewUser from './newUser/reducer';

const store = configureStore({
  reducer: {
    profile: ProfileReducer,
    newUser: NewUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ProfileDispatch = typeof store.dispatch;

export default store;
