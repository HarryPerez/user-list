export const getUserInfo = (user) => {
  const userName = user.name.first
    ? `${user.name.first} ${user.name.last}`
    : user.name;
  const location = user.location.city
    ? `${user.location.city} ${user.location.state} ${user.location.country}`
    : user.location;
  const { picture, email, phone } = user;
  return { userName, location, picture, email, phone };
};
