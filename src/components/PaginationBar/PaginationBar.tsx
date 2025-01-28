import React from 'react';
import styles from './paginationBar.module.scss';
import CustomPagination from './CustomPagination';

interface PaginationBarProps {
  count: number;
  page: number;
  setPage: any;
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  count,
  page,
  setPage,
}) => {
  const newCount: number = Math.ceil(count / 6);

  return (
    <div className={styles.pagination}>
      <CustomPagination
        count={newCount}
        page={page}
        onChange={(_, num) => setPage(num)}
        shape="rounded"
        sx={{ marginY: '40px' }}
        size="small"
        siblingCount={1}
        boundaryCount={1}
      />
    </div>
  );
};

export default PaginationBar;
