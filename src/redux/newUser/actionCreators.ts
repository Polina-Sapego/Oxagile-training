import {
  ADD_USER,
  DELETE_USER,
  UPDATE_AGE_USER,
  UPDATE_SELECT_USER,
  UPDATE_USER,
} from './actionTypes';

export interface IUser {
  id: number;
  name: string;
  color: string;
  selected: boolean;
  parentalRating: number;
  isAdmin: boolean;
}

export interface IProfile {
  id: number;
  name: string;
  color: string;
}

export interface INewUsers {
  users: IUser[];
}

export const addUsersAction = (payload: IUser) => ({
  type: ADD_USER,
  payload,
});

export const updateUserSelectedAction = (id: number) => ({
  type: UPDATE_SELECT_USER,
  payload: id,
});

export const updateUserAgeAction = (id: number, parentalRating: number) => ({
  type: UPDATE_AGE_USER,
  payload: { id, parentalRating },
});

export const addProfile = (newProfile: IProfile) => ({
  type: UPDATE_USER,
  payload: newProfile,
});

export const deleteProfile = (id: number) => ({
  type: DELETE_USER,
  payload: id,
});
