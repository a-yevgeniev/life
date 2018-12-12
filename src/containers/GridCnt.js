import { connect } from 'react-redux';
import * as action from '../actions/appAction';

import Grid from '../components/Grid';

const mapStateToProps = state => ({
  life: state.grid.life,
  size: state.grid.size,
  age: state.app.age,
  isRunning: state.app.isRunning,
  width: state.grid.width,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (e) => dispatch(action.revertCell(e.nativeEvent.layerX, e.nativeEvent.layerY)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
