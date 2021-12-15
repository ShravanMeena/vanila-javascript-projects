import { USER_DATA } from './types';

export const userDataAction = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
