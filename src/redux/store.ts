import { configureStore } from '@reduxjs/toolkit';
import { loadStateFromLocalStorage, saveStateToLocalStorage } from '../utils/localStorage';
import NewUser from './newUser/reducer';

const persistedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: {
    newUser: NewUser,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type ProfileDispatch = typeof store.dispatch;

export default store;
