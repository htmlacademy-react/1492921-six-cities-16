import {user} from '../mock/mock-user';
import {User} from '../types/types';

const loginInfo: User = user;

const userLogOut = (): void => {
  loginInfo.name = '';
};

export {loginInfo, userLogOut};
