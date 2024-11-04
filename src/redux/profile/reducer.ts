import { Reducer } from 'react';
import ActionTypes from './actionTypes';
import { AddProfileAction, IProfile } from './actionCreators';

const initialState: IProfile = {
  name: '',
  pin: 0,
};

export type IAction = AddProfileAction;

const ProfileReducer: Reducer<IProfile, IAction> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROFILE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default ProfileReducer;
