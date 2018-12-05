import DEFAULTS from '../defaults';

function getEmptyGrid(size) {
  return Array(size).fill(0).map(()=>{
    return Array(size).fill(0);
  });
}

function getGeneration(size, fn) {
  let shape = getEmptyGrid(size);

  return shape.map((row, i) => {
    return row.map((cell, j) => {
      return fn(i, j);
    })
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

function getNormalizedFigure(f, size) {
  let w = f.length;
  let h = f[0].length;
  let arr = getEmptyGrid(size);
  let dx = Math.floor((size - w)/2);
  let dy = Math.floor((size - h)/2);

  for (var i = 0; i < size; i++){
    for (var j = 0; j < size; j++){
      if (f[i - dx] !== undefined && f[i - dx][j - dy] !== undefined) {
        arr[i][j] = f[i - dx][j - dy];
      } else {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

const initialState = {
  size: DEFAULTS.size,
  grid: getEmptyGrid(DEFAULTS.size),
  width: DEFAULTS.width,
  figures: DEFAULTS.figures,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CALCULATE_ACTION':
      return Object.assign({}, state, {
        grid: getNextGen(state.grid, getCellBasedOnRules)
      })
    case 'CHANGESIZE_ACTION':
      return Object.assign({}, state, {
        size: action.payload,
        grid: getEmptyGrid(action.payload)
      })
    case 'REVERTCELL_ACTION':
      if (state.isRunning || action.i === undefined || action.j === undefined) {
        return state;
      }

      var newGrid = getGeneration(state.size, (i, j) => (state.grid[i][j]));
      newGrid[action.i][action.j] = !newGrid[action.i][action.j];
      return Object.assign({}, state, {
        grid: newGrid
      })
    case 'DRAW_ACTION':
      if (action.payload === 'clear') {
        return Object.assign({}, state, {
          grid: getEmptyGrid(state.size)
        })
      }

      if (action.payload === 'random'){
        return Object.assign({}, state, {
          grid: getGeneration(state.size, () => (Math.round(Math.random())))
        });
      }

      const figure = state.figures[action.payload];
      if (!figure){
        return state;
      }

      return Object.assign({}, state, {
        grid: getNormalizedFigure(figure, state.size)
      })
    default:
      return state
  }
}