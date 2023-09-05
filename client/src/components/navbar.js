import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <NavLink to="/">
                <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}>
                  Home
                </Button>
              </NavLink>
              <NavLink to="/write">
                <Button 
                sx={{ my: 2, color: 'white', display: 'block' }}>
                  Write a message
                </Button>
              </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;