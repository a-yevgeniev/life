import DEFAULTS from '../defaults';
import { getNextGenaration, getRandom, getByFigure, getReverted } from '../Population';

const initialState = {
  size: DEFAULTS.size,
  life: {},
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
          x: Math.floor(action.payload.x/state.size),
          y: Math.floor(action.payload.y/state.size),
        })
      })
    case 'CLEAR_ACTION':
      return Object.assign({}, state, {
        life: {}
      })
    case 'DRAW_ACTION':
      if (action.payload.figure === 'random') {
        let xN = Math.round(window.innerWidth / state.size);
        let yN = Math.round(window.innerHeight / state.size);
        return Object.assign({}, state, {
          life: getRandom(xN, yN)
        })
      }

      return Object.assign({}, state, {
        life: getByFigure(state.figures[action.payload.figure], state.size, action.payload.dx)
      })
    default:
      return state
  }
}