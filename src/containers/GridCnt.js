import { connect } from 'react-redux';
import * as action from '../actions/appAction';

import Grid from '../components/Grid';

const mapStateToProps = state => ({
  grid: state.grid.grid,
  size: state.grid.width / state.grid.size,
  age: state.app.age,
  isRunning: state.app.isRunning,
  width: state.grid.width,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (e) => dispatch(action.revertCell(e.target.dataset.i, e.target.dataset.j)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
