import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: 1
  }
});

const Header = ({ classes, onToggleClick }) => (
  <Hidden lgUp implementation="css">
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onToggleClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography>Conway's Game of Life</Typography>
      </Toolbar>
    </AppBar>
  </Hidden>
);

export default withStyles(styles)(Header);
