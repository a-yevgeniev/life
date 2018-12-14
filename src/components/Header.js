import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  typo: {
    [theme.breakpoints.down('sm')]: {
      fontSize: "30px",
    },
  },
});

const Header = ({ classes }) => (
  <header>
    <Typography className={classes.typo} component="h1" variant="h5" align="center" gutterBottom>Conway's Game of Life</Typography>
  </header>
);

export default withStyles(styles)(Header);