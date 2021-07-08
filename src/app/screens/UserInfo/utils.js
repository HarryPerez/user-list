export const getUserInfo = (user) => {
  const userName = ` ${user.name.first} ${user.name.last}`;
  const location = `${user.location.city} ${user.location.state} ${user.location.country}`;
  const { picture, email, phone } = user;
  return { userName, location, picture, email, phone };
};
