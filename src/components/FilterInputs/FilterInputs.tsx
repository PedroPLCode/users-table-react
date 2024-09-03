import React from 'react';
import styles from './FilterInputs.module.scss';

interface FilterInputsProps {
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
}

const FilterInputs: React.FC<FilterInputsProps> = ({ onFilterChange }) => {
  return (
    <div className={styles.filterInputs}>
      <input
        placeholder="Filter by name"
        onChange={(e) => onFilterChange(e, 'name')}
      />
      <input
        placeholder="Filter by username"
        onChange={(e) => onFilterChange(e, 'username')}
      />
      <input
        placeholder="Filter by email"
        onChange={(e) => onFilterChange(e, 'email')}
      />
      <input
        placeholder="Filter by phone"
        onChange={(e) => onFilterChange(e, 'phone')}
      />
    </div>
  );
};

export default FilterInputs;