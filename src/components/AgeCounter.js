import React from 'react';
import Typography from '@material-ui/core/Typography';

const AgeCounter = ({ className, count }) => (
  <Typography className={className} align="center" gutterBottom>Age {count}</Typography>
)

export default AgeCounter;
