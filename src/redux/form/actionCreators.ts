import { ADD_FORM } from '@redux/form/actionTypes';

export interface ICompany {
  name: string;
  responsibilities?: string;
}

export interface IFormBase {
  name: string;
  surname: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  linkedin?: string;
  location?: string;
  cv?: FileList;
  hasExperience: boolean;
}

export interface IFormWithoutExperience extends IFormBase {
  hasExperience: false;
  companies?: undefined;
  experience?: undefined;
  position?: undefined;
  workPeriodFrom?: undefined;
  workPeriodTo?: undefined;
  responsibilities?: undefined;
}

export interface IFormWithExperience extends IFormBase {
  hasExperience: true;
  experience: string;
  position?: string;
  workPeriodFrom?: Date | null;
  workPeriodTo?: Date | null;
  responsibilities?: string;
  companies: ICompany[];
}

export type IForm = IFormWithoutExperience | IFormWithExperience;

export const addUsersAction = (payload: IForm) => ({
  type: ADD_FORM,
  payload,
});
