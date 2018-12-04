import React from 'react';
import styled from 'styled-components';

const ControlPanel = ({ size, speed, isRunning, figures, changeSize, toggle, selectFigure}) => (
  <Panel>
    <Select onChange={(e) => selectFigure(e.target.value)}>
      <PlaceholderOption selected disabled>Select figure</PlaceholderOption>
      <option key="clear" value="clear">clear</option>
      <option key="random" value="random">random</option>
      {Object.keys(figures).map((figure) => (
        <option key={figure} value={figure}>{figure}</option>
      ))}
    </Select>
    <Button onClick={() => toggle(speed, isRunning)}>
      {!isRunning ? 'Run' : 'Stop'}
    </Button>
    <div>
      <label>Size {size}</label>
      <Input type="range" onChange={changeSize} disabled={isRunning} value={size} min="1" max="100" />
    </div>
    <Info>
      <p>To start the game choose figure from dropdown and then press 'Run'</p>
      <p>Revert the cell by clicking on it</p>
    </Info>
  </Panel>
)

export default ControlPanel;


const Panel = styled.div`
  /* background: #ccc; */
`

const Button = styled.button`
  width: 100%;
  margin-bottom: 30px;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
`

const Info = styled.div`
  font-size: 14px;
`

const Select = styled.select`
  width: 100%;
  margin-bottom: 30px;
`

const PlaceholderOption = styled.option`
  display: none;
`
