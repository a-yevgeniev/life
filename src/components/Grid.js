import React from 'react';
import styled from 'styled-components';

import AgeCounter from './AgeCounter';
import Areal from './Areal';

const Grid = ({ age, width, size, onClick, life }) => (
  <>
    <Field width={width}>
      <GridWrap>
        <Areal width={width} size={size} life={life} onClick={onClick} />
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
  position: relative;
`
