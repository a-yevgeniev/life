import React from 'react';

class Areal extends React.Component {
  componentDidMount() {
    this.drawCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  drawCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let { width, size } = this.props;
    const cellSize = width/size;

    ctx.clearRect(0, 0, width, width);

    for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, width);
    }

    for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(0, 0.5 + x);
        ctx.lineTo(width, 0.5 + x);
    }

    ctx.strokeStyle = "#808080";
    ctx.stroke();
  }

  componentWillReceiveProps(newProps){
    if (this.props.size !== newProps.size) {
      this.drawCanvas();
    }
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    let { width, size, life } = this.props;
    const cellSize = width/size;

    ctx.clearRect(0, 0, width, width);

    ctx.strokeStyle = "#808080";
    ctx.fillStyle = "#666";
    ctx.lineWidth = 1;
    for (let cell in life) {
      ctx.fillRect((life[cell][0])*cellSize, (life[cell][1])*cellSize, cellSize, cellSize);
    }

    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.width} height={this.props.width} onClick={this.props.onClick}/>
    );
  }
}

export default Areal;
