import { IForm } from '@redux/form/actionCreators';
import { ADD_FORM } from './actionTypes';

interface IState {
  forms: IForm[];
  emailExists: boolean;
}

const initialState: IState = {
  forms: [],
  emailExists: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM: {
      const emailExists = state.forms.some((form) => form.email === action.payload.email);

      if (emailExists) {
        return {
          ...state,
          emailExists: true,
        };
      }

      return {
        ...state,
        forms: [...state.forms, action.payload],
        emailExists: false,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
