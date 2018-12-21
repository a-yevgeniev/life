import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ControlPanel from './ControlPanel';
import DEFAULTS from '../defaults';

const Aside = ({ classes, isMenuOpened, onToggleClick, ...props }) => (
  <>
    <Hidden mdUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="left"
        open={isMenuOpened}
        onClose={onToggleClick}
      >
        <ControlPanel {...props} onClose={onToggleClick} closeButton />
      </Drawer>
    </Hidden>
    <Hidden mdDown implementation="css">
      <Drawer open anchor="right" variant="permanent">
        <ControlPanel {...props} title="Conway's Game of Life" dx={DEFAULTS.design.asideWidth} />
      </Drawer>
    </Hidden>
  </>
);

export default Aside;
