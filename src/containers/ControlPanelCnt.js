import { connect } from 'react-redux';
import * as action from '../actions/appAction';
import ControlPanel from '../components/ControlPanel';

let time = null;
const speed = 500;

const handleRun = (dispatch) => {
  handleStop(dispatch);
  time = setInterval(() => {
    dispatch(action.calculate())
  }, speed);
  dispatch(action.start());
}

const handleStop = (dispatch) => {
  clearInterval(time);
  time = null;
  dispatch(action.stop());
}

const handleChangeSize = (event, dispatch) => {
  handleStop(dispatch);
  dispatch(action.changeSize(+event.target.value))
}

const mapStateToProps = state => ({
  size: state.grid.size,
  isRunning: state.app.isRunning
});

const mapDispatchToProps = (dispatch) => ({
  generate: () => dispatch(action.generate()),
  changeSize: (e) => handleChangeSize(e, dispatch),
  run: () => handleRun(dispatch),
  stop: () => handleStop(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
