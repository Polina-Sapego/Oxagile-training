import { INewUsers } from '@redux/newUser/actionCreators';
import { ADD_USER, UPDATE_SELECT_USER } from './actionTypes';

const initialState: INewUsers = {
  users: [
    {
      id: 1, name: 'Степан', color: 'blue', selected: true,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_SELECT_USER:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload
          ? { ...user, selected: true }
          : { ...user, selected: false })),
      };
    default:
      return state;
  }
};

export default usersReducer;
