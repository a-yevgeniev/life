export const start = () => ({
  type: 'START_ACTION'
})

export const stop = () => ({
  type: 'STOP_ACTION'
})

export const generate = () => ({
  type: 'GENERATE_ACTION'
})

export const calculate = () => ({
  type: 'CALCULATE_ACTION'
})

export const changeSize = (size) => ({
  type: 'CHANGESIZE_ACTION',
  payload: size
})

export const revertCell = (i, j) => ({
  type: 'REVERTCELL_ACTION',
  i: i,
  j: j,
})