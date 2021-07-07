import React from 'react';

import styles from './styles.module.scss';

function UserCard({ user }) {
  console.log(user);
  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  return (
    <div className={styles.userCardContainer}>
      <div>{userName}</div>
    </div>
  );
}

export default UserCard;
