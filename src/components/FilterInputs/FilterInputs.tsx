import React from 'react';
import styles from './FilterInputs.module.scss';

interface FilterInputsProps {
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
}

const FilterInputs: React.FC<FilterInputsProps> = ({ onFilterChange }) => {
  return (
    <div className={styles.filterInputs}>
      <input
        className={styles.filterName}
        placeholder="Filter by name"
        onChange={(e) => onFilterChange(e, 'name')}
      />
      <input
        className={styles.filterUsername}
        placeholder="Filter by username"
        onChange={(e) => onFilterChange(e, 'username')}
      />
      <input
        className={styles.filterEmail}
        placeholder="Filter by email"
        onChange={(e) => onFilterChange(e, 'email')}
      />
      <input
        className={styles.filterPhone}
        placeholder="Filter by phone"
        onChange={(e) => onFilterChange(e, 'phone')}
      />
    </div>
  );
};

export default FilterInputs;