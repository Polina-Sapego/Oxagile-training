import { ADD_USER, UPDATE_SELECT_USER } from './actionTypes';

export interface IUser {
  id: number;
  name: string;
  color: string;
  selected: boolean;
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
