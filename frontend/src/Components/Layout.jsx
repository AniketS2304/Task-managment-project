import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 3 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;