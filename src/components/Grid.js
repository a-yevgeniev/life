import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import AgeCounter from './AgeCounter';

const Grid = ({ grid, age, width, size, onClick }) => (
  <>
    <Field width={width}>
      <GridWrap onClick={onClick}>
        {grid.map((row, i) => {
          return row.map((cell, j) => {
            return <Cell
              key={`${i}${j}`}
              alive={cell}
              i={i}
              j={j}
              size={size} />
          })
        })}
      </GridWrap>
    </Field>
    <AgeCounter count={age}/>
  </>
);

export default Grid;


const Field = styled.div`
  width: ${props => props.width}px;
  margin: 0 auto 20px;
`

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
