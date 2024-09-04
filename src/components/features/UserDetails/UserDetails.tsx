import React, { useRef, useEffect } from 'react';
import styles from './UserDetails.module.scss';

interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
  };
}

interface UserDetailsProps {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user, onClose }) => {
  const googleMapsAddressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.address.street)},${encodeURIComponent(user.address.city)}`;

  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.detailsContainer} ref={detailsRef}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>User Details</h2>
        <div className={styles.details}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer">{user.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${user.phone}`} target="_blank" rel="noopener noreferrer">{user.phone}</a></p>
          <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <p><strong>Address:</strong> <a href={googleMapsAddressUrl} target="_blank" rel="noopener noreferrer">{user.address.street} {user.address.suite}, {user.address.zipcode} {user.address.city}</a></p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;