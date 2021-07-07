import React from 'react';
import { useQuery } from 'react-query';

import { getUsers } from '../../../services/UserService';

import UserCard from './components/UserCard';

function UserInfo() {
  const { data } = useQuery('users', getUsers);
  const users = data?.data?.results || [];
  return users.map(user => <UserCard user={user} />);
}

export default UserInfo;
