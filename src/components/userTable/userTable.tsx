import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { fetchUsers, setFilter, User } from '../../redux/userSlice.ts';
import UserRow from '../UserRow/UserRow.tsx';
import FilterInputs from '../FilterInputs/FilterInputs.tsx';
import UserDetails from '../UserDetails/UserDetails.tsx';
import styles from './UserTable.module.scss';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, filter } = useSelector((state: RootState) => state.users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    dispatch(setFilter({ key, value: e.target.value }));
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
    user.username.toLowerCase().includes(filter.username.toLowerCase()) &&
    user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
    user.phone.toLowerCase().includes(filter.phone.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <FilterInputs onFilterChange={handleFilterChange} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.name}>Name</th>
            <th className={styles.username}>Username</th>
            <th className={styles.email}>Email</th>
            <th className={styles.phone}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <UserRow key={user.id} user={user} onClick={() => handleUserClick(user)} />
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <UserDetails user={selectedUser} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default UserTable;