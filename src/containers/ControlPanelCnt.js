import { connect } from 'react-redux';
import * as action from '../actions/appAction';
import ControlPanel from '../components/ControlPanel';

let time = null;

const handleToggle = (dispatch, speed, isRunning) => {
  if (isRunning) {
    clearInterval(time);
    time = null;
    dispatch(action.stop());
  } else {
    time = setInterval(() => {
      dispatch(action.calculate())
    }, speed);
    dispatch(action.start());
  }
}

const mapStateToProps = state => ({
  size: state.grid.size,
  speed: state.app.speed,
  isRunning: state.app.isRunning
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  generate: () => dispatch(action.generate()),
  changeSize: (e) => dispatch(action.changeSize(+e.target.value)),
  toggle: (speed, isRunning) => handleToggle(dispatch, speed, isRunning),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanel);
