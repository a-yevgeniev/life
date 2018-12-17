import React from 'react';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AgeCounter from './AgeCounter';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  drawer: {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "100%",
    padding: "20px",
  },
  margin: {
    margin: `${theme.spacing.unit}px 0`,
  },
  footer: {
    marginTop: "auto",
  }
});

const ControlPanel = ({
  classes,
  size,
  speed,
  age,
  isRunning,
  figures,
  changeSize,
  changeSpeed,
  toggle,
  clear,
  selectFigure,
}) => (
  <Drawer
    open
    anchor="right"
    variant="permanent"
  >
    <div className={classes.drawer}>
      <Header />
      <Typography gutterBottom>To start the game choose figure from dropdown and press 'Run'</Typography>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="figure">Select figure</InputLabel>
        <Select
          inputProps={{
            name: 'figure',
            id: 'figure',
          }}
          value={''}
          onChange={(e) => selectFigure(e.target.value)}
        >
          <MenuItem key="random" value="random">random</MenuItem>
          {figures.map((figure) => (
            <MenuItem key={figure} value={figure}>{figure}</MenuItem>
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
        onClick={() => toggle(speed, isRunning)}
      >
        {!isRunning ? 'Run' : 'Stop'}
      </Button>
      <AgeCounter className={classes.footer} count={age} />
    </div>
  </Drawer>
)

export default withStyles(styles)(ControlPanel);
