import { styled } from '@mui/material/styles';
import { Pagination } from '@mui/material';

const CustomPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    color: `var(--font-color)`,
    position: 'relative',
    fontSize: '16px',

    '&::after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '1px',
      backgroundColor: 'var(--font-color)',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },

    '&.Mui-selected': {
      backgroundColor: 'var(--background-pagination)',
      fontWeight: '500',
      pointerEvents: 'none',
    },
    '&.MuiPaginationItem-previousNext': {
      '& svg': {
        width: '20px',
        height: '20px',
      },
      '&:hover': {
        backgroundColor: 'var(--background-pagination)',
        '&::after': {
          transform: 'scaleX(0)',
        },
      },
    },
    '&.MuiPaginationItem-ellipsis': {
      pointerEvents: 'none',
    },
  },
}));

export default CustomPagination;
