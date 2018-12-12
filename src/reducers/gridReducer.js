import DEFAULTS from '../defaults';
import { getNextGenaration, getRandom, getByFigure, getReverted } from '../Population';

const initialState = {
  size: DEFAULTS.size,
  life: {},
  width: DEFAULTS.width,
  figures: DEFAULTS.figures,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_ACTION':
      return Object.assign({}, state, {
        life: getNextGenaration(state.life)
      })
    case 'CHANGESIZE_ACTION':
      return Object.assign({}, state, {
        size: action.payload
      })
    case 'REVERTCELL_ACTION':
      if (action.payload.x === undefined || action.payload.y === undefined) {
        return state;
      }

      return Object.assign({}, state, {
        life: getReverted(state.life, {
          x: Math.floor(action.payload.x*state.size/state.width),
          y: Math.floor(action.payload.y*state.size/state.width),
        })
      })
    case 'DRAW_ACTION':
      if (action.payload === 'clear') {
        return Object.assign({}, state, {
          life: {}
        })
      }

      if (action.payload === 'random') {
        return Object.assign({}, state, {
          life: getRandom(state.size)
        })
      }

      return Object.assign({}, state, {
        life: getByFigure(state.figures[action.payload])
      })
    default:
      return state
  }
}