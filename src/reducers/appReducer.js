import DEFAULTS from '../defaults';

const initialState = {
  age: 0,
  speed: DEFAULTS.speed,
  isRunning: false,
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
    case 'CHANGESPEED_ACTION':
      return Object.assign({}, state, {
        speed: action.payload,
      })
    default:
      return state
  }
}