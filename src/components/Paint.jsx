import React, { Component, Fragment } from 'react';
import Canvas from './Canvas';
import Tools from './Tools';
import  Color  from './Colour';

export const PaintTools = {
    Pencil: 0,
    Fill: 1,
  }

class Paint extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTool: PaintTools.Pencil,
        selectedColor: "#FC0000"
    }
  }

  setTool = (tool) => {
      console.log(tool)
    this.setState({selectedTool: tool});
  }

  setColor = (color) => {
    console.log(color)
  this.setState({selectedColor: color});
}


  render() {
    return (
    <Fragment>
        <h3 style={{ textAlign: 'center' }}>MS Paint Challenge</h3>
        <div className="main">
          <div className="color-guide">
            <h5>Tool Selecter</h5>
          <Tools setTool={this.setTool} />
          <Color setColor={this.setColor}/>
          </div>
          <Canvas selectedTool={this.state.selectedTool} selectedColor={this.state.selectedColor}/>
        </div>
      </Fragment>
    );
  }
}

export default Paint;