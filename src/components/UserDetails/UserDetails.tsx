import React from 'react';
import { User } from '../../redux/userSlice.ts'; // Zakładając, że masz definicję typu User
import styles from './UserDetails.module.scss';

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  return (
    <div className={styles.detailsContainer}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <h2>User Details</h2>
      <div className={styles.details}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer">{user.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${user.phone}`} target="_blank" rel="noopener noreferrer">{user.phone}</a></p>
        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserDetails;