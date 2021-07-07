import axios from 'axios';

export const getUsers = async () =>
  axios.get('https://randomuser.me/api/?results=10');
