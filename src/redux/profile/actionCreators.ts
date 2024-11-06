import { ADD_PROFILE } from './actionTypes';

export interface IProfile {
  name: string;
  pin: string;
}

export interface AddProfileAction {
  type: ADD_PROFILE;
  payload: IProfile;
}

const addProfile = (newProfile: IProfile): AddProfileAction => ({
  type: ADD_PROFILE,
  payload: newProfile,
});

export default addProfile;
