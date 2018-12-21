import { connect } from 'react-redux';
import * as action from '../actions/appAction';
import Aside from '../components/Aside';

let timer = null;

const startLife = (dispatch, speed) => {
  const changeGeneration = () => {
    dispatch(action.calculate());
    timer = setTimeout(() => {
      changeGeneration();
    }, 1000/speed);
  }

  changeGeneration();
  dispatch(action.start());
};

const stopLife = (dispatch) => {
  clearTimeout(timer);
  timer = null;
  dispatch(action.stop());
};

const handleToggle = (dispatch, speed, isRunning) => {
  if (isRunning) {
    stopLife(dispatch);
   } else {
    startLife(dispatch, speed);
  }
}

const mapStateToProps = state => ({
  size: state.grid.size,
  speed: state.app.speed,
  age: state.app.age,
  isRunning: state.app.isRunning,
  isMenuOpened: state.app.isMenuOpened,
  figures: Object.keys(state.grid.figures),
});

const mapDispatchToProps = (dispatch) => ({
  changeSize: (e) => dispatch(action.changeSize(+e.target.value)),
  changeSpeed: (e) => dispatch(action.changeSpeed(+e.target.value)),
  clear: () => dispatch(action.clear()),
  toggle: (speed, isRunning) => handleToggle(dispatch, speed, isRunning),
  selectFigure: (val, dx) => dispatch(action.draw(val, dx)),
  onToggleClick: () => dispatch(action.toggleMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Aside);
