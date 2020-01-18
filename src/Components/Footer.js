import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default props => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs justify="flex-end">
        <Button variant="contained" color="primary" onClick={props.clickForm}>
          Form
        </Button>
      </Grid>
      <Grid item xs>
        <Button variant="contained" color="primary" onClick={props.clickView}>
          View{' '}
        </Button>
      </Grid>
    </Grid>
  );
};
