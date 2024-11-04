import ActionTypes from './actionTypes';

export interface IProfile {
  name: string;
  pin: number;
}

export interface AddProfileAction {
  type: ActionTypes.ADD_PROFILE;
  payload: IProfile;
}

const addProfile = (newProfile: IProfile): AddProfileAction => ({
  type: ActionTypes.ADD_PROFILE,
  payload: newProfile,
});

export default addProfile;
