
import { api } from '../API';
import { USER_LOGIN, USER_LOGOUT } from '../actions/user.action';

const initialState = {
  user: null,
  isLoggedIn: false,
  username: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case api.endpoints.login.matchFulfilled.type:
      return { ...state, user: action.payload };
    case api.endpoints.updateUserProfile.matchFulfilled.type:
      return { ...state, user: { ...state.user, ...action.payload } };
    case USER_LOGIN:
      return { ...state, isLoggedIn: true, username: action.payload };
    case USER_LOGOUT:
      return { ...state, isLoggedIn: false, username: '' };
    default:
      return state;
  }
}