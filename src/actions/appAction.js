export const start = () => ({
  type: 'START_ACTION'
})

export const stop = () => ({
  type: 'STOP_ACTION'
})

export const calculate = () => ({
  type: 'CALCULATE_ACTION'
})

export const changeSize = (size) => ({
  type: 'CHANGESIZE_ACTION',
  payload: size
})

export const changeSpeed = (speed) => ({
  type: 'CHANGESPEED_ACTION',
  payload: speed
})

export const revertCell = (x, y) => ({
  type: 'REVERTCELL_ACTION',
  payload: {
    x,
    y
  }
})

export const draw = (figure) => ({
  type: 'DRAW_ACTION',
  payload: figure
})
