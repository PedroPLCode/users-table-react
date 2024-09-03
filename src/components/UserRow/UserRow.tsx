import React from 'react';
import { User } from '../../redux/userSlice.ts';
import styles from './UserRow.module.scss';

interface UserRowProps {
  user: User;
  onClick: () => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, onClick }) => {
  return (
    <tr className={styles.row} onClick={onClick}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

export default UserRow;