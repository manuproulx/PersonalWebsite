import React from 'react';
import { Paper, Typography, Grid, LinearProgress } from '@material-ui/core';
import './DevPlaceholder.scss';

const DevPlaceholder = () => (
  <Grid className="DevPlaceholder">
  <Paper className="DevPlaceholder__Paper">
          <Typography variant="h5">
            In development
          </Typography>
          <Typography>
            Come back soon!
          </Typography>
    </Paper>
    <LinearProgress className="DevPlaceholder__Loading" color="secondary"/>
  </Grid>
);

export default DevPlaceholder;