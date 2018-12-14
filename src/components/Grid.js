import React from 'react';
import styled from 'styled-components';

import Areal from './Areal';

const Grid = ({ size, onClick, life }) => (
  <GridWrap>
    <Areal size={size} life={life} onClick={onClick} />
  </GridWrap>
);

export default Grid;


const GridWrap = styled.main`
  position: relative;
`
