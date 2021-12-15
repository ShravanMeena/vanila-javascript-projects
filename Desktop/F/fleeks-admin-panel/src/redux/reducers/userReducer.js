import { USER_DATA } from "../actions/types";

const initialState = {
  data: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
