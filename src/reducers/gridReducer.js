import DEFAULTS from '../defaults';

function getEmptyGrid(size) {
  return Array(size).fill(0).map(()=>{
    return Array(size).fill(0);
  });
}

function getNextGen(gen, fn) {
  return gen.map((row, i) => {
    return row.map((cell, j) => {
      return fn(gen, i, j);
    })
  });
}

function getCellBasedOnRules(gen, i, j) {
  function getNeighbourCount(count = 0) {
    if (i !== 0) {
      count += gen[i - 1][j - 1] === 1 ? 1: 0;
      count += gen[i - 1][j] === 1 ? 1: 0;
      count += gen[i - 1][j + 1] === 1 ? 1: 0;
    }
    if (i !== gen.length - 1) {
      count += gen[i + 1][j - 1] === 1 ? 1: 0;
      count += gen[i + 1][j] === 1 ? 1: 0;
      count += gen[i + 1][j + 1] === 1 ? 1: 0;
    }
    count += gen[i][j - 1] === 1 ? 1: 0;
    count += gen[i][j + 1] === 1 ? 1: 0;
    return count;
  }

  let count = getNeighbourCount();
  if (gen[i][j] === 0){
    return count === 3 ? 1 : 0;
  }

  return count === 2 || count === 3 ? 1 : 0;
}

const initialState = {
  size: DEFAULTS.size,
  grid: getEmptyGrid(DEFAULTS.size)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_ACTION':
      return Object.assign({}, state, {
        grid: getNextGen(state.grid, () => (Math.round(Math.random())))
      })
    case 'CALCULATE_ACTION':
      return Object.assign({}, state, {
        grid: getNextGen(state.grid, getCellBasedOnRules)
      })
    case 'CHANGESIZE_ACTION':
      return Object.assign({}, state, {
        size: action.payload,
        grid: getEmptyGrid(action.payload)
      })
    default:
      return state
  }
}