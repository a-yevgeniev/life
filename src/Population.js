const getCentralizedFigure = (figure, size) => {
  let dx = Math.round((window.innerWidth - 400) / (2 * size));
  let dy = Math.round(window.innerHeight / (2 * size));
  return figure.map(dot => {
    return [dot[0] + dx, dot[1] + dy];
  });
}

export const getNextGenaration = (life) => {
  let check = {};

  for (let key in life) {
    check[`${life[key][0] - 1}_${life[key][1] - 1}`] = true;
    check[`${life[key][0] - 1}_${life[key][1]}`] = true;
    check[`${life[key][0] - 1}_${life[key][1] + 1}`] = true;
    check[`${life[key][0]}_${life[key][1] - 1}`] = true;
    check[`${life[key][0]}_${life[key][1]}`] = true;
    check[`${life[key][0]}_${life[key][1] + 1}`] = true;
    check[`${life[key][0] + 1}_${life[key][1] - 1}`] = true;
    check[`${life[key][0] + 1}_${life[key][1]}`] = true;
    check[`${life[key][0] + 1}_${life[key][1] + 1}`] = true;
  }

  function getNeighbourCount(key) {
    let count = 0;
    let i = +key.split('_')[0];
    let j = +key.split('_')[1];

    count += life.hasOwnProperty(`${[i - 1]}_${[j - 1]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i - 1]}_${[j]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i - 1]}_${[j + 1]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i]}_${[j - 1]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i]}_${[j + 1]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i + 1]}_${[j - 1]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i + 1]}_${[j]}`) ? 1: 0;
    count += life.hasOwnProperty(`${[i + 1]}_${[j + 1]}`) ? 1: 0;

    return count;
  }

  return Object.keys(check).filter(key => {
    let count = getNeighbourCount(key);
    if (life[key] === undefined){
      return count === 3;
    }
    return count === 2 || count === 3;
  }).reduce((acc, key) => {
    acc[key] = key.split('_').map(i => +i);
    return acc;
  }, {});
}

export const getRandom = (size) => {
  return Array(size*size).fill(0).reduce((acc, key, index) => {
    if (Math.round(Math.random()) === 1) {
      const x = index % size;
      const y = Math.floor(index / size);
      acc[`${x}_${y}`] = [x, y];
    }
    return acc;
  }, {});
}

export const getReverted = (life, cell) => {
  let newLife = Object.assign({}, life);
  const key = `${cell.x}_${cell.y}`;
  if (newLife.hasOwnProperty(key)) {
    delete newLife[key];
  } else {
    newLife[key] = [cell.x, cell.y];
  }
  return newLife;
}

export const getByFigure = (figure, size) => {
  let life = {};

  if (!figure)
   return life;

  let newFigure = getCentralizedFigure(figure, size);

  for (let i = 0; i < newFigure.length; i++) {
    life[newFigure[i].join('_')] = newFigure[i];
  }

  return life;
}
