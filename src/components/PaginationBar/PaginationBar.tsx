import React from 'react';
import styles from './paginationBar.module.scss';
import Pagination from './Pagination/Pagination';

interface PaginationBarProps {
  count: number;
  page: number;
  setPage: (value: number) => void;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  count,
  page,
  setPage,
}) => {
  const totalPages: number = Math.ceil(count / 6) + 3;

  return (
    <div className={styles.pagination}>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};

export default PaginationBar;
