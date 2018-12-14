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
    let { size } = this.props;
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.refs.canvas.width = width;
    this.refs.canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    for (let x = 0; x <= width; x += size) {
        ctx.moveTo(0.5 + x, 0);
        ctx.lineTo(0.5 + x, height);
    }

    for (let y = 0; y <= height; y += size) {
        ctx.moveTo(0, 0.5 + y);
        ctx.lineTo(width, 0.5 + y);
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
    let { size, life } = this.props;

    let width = window.innerWidth;
    let height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "#808080";
    ctx.fillStyle = "#666";
    ctx.lineWidth = 1;
    for (let cell in life) {
      ctx.fillRect((life[cell][0])*size, (life[cell][1])*size, size, size);
    }

    ctx.stroke();
  }

  render() {
    return (
      <canvas ref="canvas" onClick={this.props.onClick}/>
    );
  }
}

export default Areal;
