import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import logo from '../pic/26.jpg';

export default props => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <img src={logo} alt="Logo" style={{ borderRadius: 40 }} />
      <Grid container justify="center">
        <Typography variant="h6">My Company</Typography>
      </Grid>
    </Toolbar>
  </AppBar>
);
