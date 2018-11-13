import React from 'react';

const Cell = ({size, alive, i, j}) => (
  <div
    className={"cell " + (alive ? 'cell-alive' : '')}
    style={{ width: `${size}px`, height: `${size}px`}}
    data-i={i}
    data-j={j}
  />
);

export default Cell;
