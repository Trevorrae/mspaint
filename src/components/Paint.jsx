import React, { Component, Fragment } from 'react';
import Canvas from './Canvas';
import Tools from './Tools';
import  Color  from './Colour';
import  Resize  from './Resize';
//comment and document function paths
//this ended up being where bulk of methods take place, should extrapolate this into a MVC model
export const PaintTools = {
    Pencil: 0,
    Fill: 1,
  }

class Paint extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedTool: PaintTools.Pencil,
        selectedColor: "#FC0000",
        selectedHeight: "50",
        selectedWidth: "50"

    }
  }

  setTool = (tool) => {
     // console.log(tool)
    this.setState({selectedTool: tool});
  }

  setColor = (color) => {
   // console.log(color)
  this.setState({selectedColor: color});
}
setHeight = (height) => {
  //console.log(height)
  this.setState({selectedHeight: height});
}
setWidth = (width) => {
  //console.log(height)
  this.setState({selectedWidth: width});
}
  render() {
    return (
    <Fragment>
        <h3 style={{ textAlign: 'center' }}>MS Paint Challenge</h3>
        <div className="main">
          <div className="color-guide">
          <Resize setHeight={this.setHeight} setWidth={this.setWidth}/>
            <h5>Tool Selecter</h5>
          <Tools setTool={this.setTool} />
          <Color setColor={this.setColor}/>
          </div>
          <Canvas selectedTool={this.state.selectedTool} selectedColor={this.state.selectedColor} selectedHeight={this.state.selectedHeight} selectedWidth={this.state.selectedWidth}/>
        </div>
      </Fragment>
    );
  }
}

export default Paint;