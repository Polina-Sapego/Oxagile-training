import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from './profile/reducer';

const store = configureStore({
  reducer: {
    profile: ProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ProfileDispatch = typeof store.dispatch;

export default store;
