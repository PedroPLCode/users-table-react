import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchUsers, setFilter } from '../../redux/userSlice.ts';
import UserRow from '../UserRow/UserRow.tsx';
import styles from './UserTable.module.scss';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, filter } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    dispatch(setFilter({ key, value: e.target.value }));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filter.username.toLowerCase()) &&
    user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
    user.phone.toLowerCase().includes(filter.phone.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <div className={styles.filterInputs}>
        <input placeholder="Filter by name" onChange={(e) => handleFilterChange(e, 'name')} />
        <input placeholder="Filter by username" onChange={(e) => handleFilterChange(e, 'username')} />
        <input placeholder="Filter by email" onChange={(e) => handleFilterChange(e, 'email')} />
        <input placeholder="Filter by phone" onChange={(e) => handleFilterChange(e, 'phone')} />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;