import { INewUsers } from '@redux/newUser/actionCreators';
import {
  ADD_USER, DELETE_USER, UPDATE_AGE_USER, UPDATE_SELECT_USER, UPDATE_USER,
} from './actionTypes';

const initialState: INewUsers = {
  users: [
    {
      id: 1, name: 'Степан', color: 'blue', selected: true, parentalRating: 18, isAdmin: true,
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
    case UPDATE_AGE_USER:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id
          ? { ...user, parentalRating: action.payload.parentalRating }
          : user)),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id
          ? { ...user, ...action.payload }
          : user)),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => (user.id !== action.payload)),
      };
    default:
      return state;
  }
};

export default usersReducer;
