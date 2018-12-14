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

const styles = () => ({
  drawer: {
    width: "400px",
    padding: "20px",
  },
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
          <MenuItem key="clear" value="clear">clear</MenuItem>
          <MenuItem key="random" value="random">random</MenuItem>
          {figures.map((figure) => (
            <MenuItem key={figure} value={figure}>{figure}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl margin="normal" fullWidth>
        <InputLabel htmlFor="size">Size {size}</InputLabel>
        <Input
          id="size"
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
        <InputLabel htmlFor="speed">Speed {speed}</InputLabel>
        <Input
          id="speed"
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
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => toggle(speed, isRunning)}
      >
        {!isRunning ? 'Run' : 'Stop'}
      </Button>
      <AgeCounter count={age}/>
    </div>
  </Drawer>
)

export default withStyles(styles)(ControlPanel);
