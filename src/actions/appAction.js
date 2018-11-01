export const start = () => dispatch => {
  dispatch({
    type: 'START_ACTION'
  })
}

export const stop = () => dispatch => {
  dispatch({
    type: 'STOP_ACTION'
  })
}

export const generate = () => dispatch => {
  dispatch({
    type: 'GENERATE_ACTION'
  })
}

export const calculate = () => dispatch => {
  dispatch({
    type: 'CALCULATE_ACTION'
  })
}

export const changeSize = (size) => dispatch => {
  dispatch({
    type: 'CHANGESIZE_ACTION',
    payload: size
  })
}