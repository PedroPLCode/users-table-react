import React from 'react';
import styles from './UserRow.module.scss'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UserRow: React.FC<{ user: User }> = ({ user }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{user.name}</td>
      <td className={styles.cell}>{user.username}</td>
      <td className={styles.cell}>{user.email}</td>
      <td className={styles.cell}>{user.phone}</td>
    </tr>
  );
};

export default UserRow;