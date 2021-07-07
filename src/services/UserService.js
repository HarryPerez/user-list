export const getUsers = async () => {
  const { data: response } = await axios.get('https://randomuser.me/api/');
  return response.data;
};
￼ sc