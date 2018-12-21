import React from 'react';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AgeCounter from './AgeCounter';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import DEFAULTS from '../defaults';

const styles = theme => ({
  drawer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: `${DEFAULTS.design.asideWidth}px`,
    height: "100%",
    padding: "20px",
    [theme.breakpoints.down('md')]: {
      paddingTop: "7px",
      paddingBottom: "7px",
    },
  },
  top: {
    [theme.breakpoints.down('md')]: {
      margin: "0 -15px"
    },
  },
  margin: {
    margin: `${theme.spacing.unit}px 0`
  },
  footer: {
    marginTop: "auto"
  }
});

let selectVal = '';

const ControlPanel = ({
  classes,
  size,
  speed,
  age,
  isRunning,
  figures,
  dx,
  closeButton,
  changeSize,
  changeSpeed,
  toggle,
  clear,
  selectFigure,
  onClose
}) => (
  <div className={classes.drawer}>
    <div className={classes.top}>
      <Typography
        className={classes.typo}
        component="h2"
        variant="h6"
        gutterBottom
      >
        {closeButton && (
          <IconButton
            color="default"
            aria-label="Close drawer"
            onClick={onClose}
            className={classes.menuButton}
          >
            <CloseIcon />
          </IconButton>
        )}
        Conway's Game of Life
      </Typography>
    </div>
    <Typography gutterBottom>
      To start the game choose figure from dropdown and press 'Run'
    </Typography>
    <FormControl margin="normal" fullWidth>
      <InputLabel htmlFor="figure">Select figure</InputLabel>
      <Select
        inputProps={{
          name: "figure",
          id: "figure"
        }}
        value={selectVal}
        onChange={e => {
          selectFigure(e.target.value, dx)
          selectVal = e.target.value;
        }}
      >
        <MenuItem key="random" value="random">
          random
        </MenuItem>
        {figures.map(figure => (
          <MenuItem key={figure} value={figure}>
            {figure}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl margin="normal" fullWidth>
      <InputLabel htmlFor="sizeInput">Size {size}</InputLabel>
      <Input
        id="sizeInput"
        type="range"
        inputProps={{
          min: 1,
          max: 100
        }}
        fullWidth
        disableUnderline
        value={size}
        disabled={isRunning}
        onChange={changeSize}
      />
    </FormControl>
    <FormControl margin="normal" fullWidth>
      <InputLabel htmlFor="speedInput">Speed {speed}</InputLabel>
      <Input
        id="speedInput"
        type="range"
        inputProps={{
          min: 1,
          max: 10
        }}
        fullWidth
        disableUnderline
        value={speed}
        disabled={isRunning}
        onChange={changeSpeed}
      />
    </FormControl>
    <Button
      className={classes.margin}
      variant="contained"
      fullWidth
      onClick={clear}
    >
      Clear
    </Button>
    <Button
      className={classes.margin}
      color="primary"
      variant="contained"
      fullWidth
      onClick={() => {
        toggle(speed, isRunning);
        if (onClose)
          onClose();
      }}
    >
      {!isRunning ? 'Run' : 'Stop'}
    </Button>
    <AgeCounter className={classes.footer} count={age} />
  </div>
);

export default withStyles(styles)(ControlPanel);
