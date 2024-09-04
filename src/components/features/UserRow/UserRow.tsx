import React from 'react';
import { User } from '../../../redux/userSlice.ts';
import styles from './UserRow.module.scss';

interface UserRowProps {
  user: User;
  onClick: () => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, onClick }) => {
  return (
    <tr className={styles.row} onClick={onClick}>
      <td className={styles.name}>{user.name}</td>
      <td className={styles.username}>{user.username}</td>
      <td className={styles.email}>{user.email}</td>
      <td className={styles.phone}>{user.phone}</td>
    </tr>
  );
};

export default UserRow;