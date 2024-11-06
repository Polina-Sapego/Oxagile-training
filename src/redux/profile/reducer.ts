import { Reducer } from 'react';
import { ADD_PROFILE } from './actionTypes';
import { AddProfileAction, IProfile } from './actionCreators';

const initialState: IProfile = {
  name: '',
  pin: '',
};

export type IAction = AddProfileAction;

const ProfileReducer: Reducer<IProfile, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;
