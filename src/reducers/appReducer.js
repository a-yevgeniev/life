import DEFAULTS from '../defaults';

const initialState = {
  age: 0,
  speed: DEFAULTS.speed,
  isRunning: false,
  figures: DEFAULTS.figures,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_ACTION':
      return Object.assign({}, state, {
        isRunning: true,
      })
    case 'STOP_ACTION':
      return Object.assign({}, state, {
        isRunning: false,
      })
    case 'DRAW_ACTION':
      return Object.assign({}, state, {
        age: 0,
      })
    case 'CALCULATE_ACTION':
      return Object.assign({}, state, {
        age: state.age + 1,
      })
    default:
      return state
  }
}