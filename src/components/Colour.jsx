import React from 'react'
import { SketchPicker } from 'react-color';

class Color extends React.Component {
    state = {
        selectedColor: '#fff',
      };
      handleChangeComplete = (color) => {
        this.setState({ selectedColor: color.hex });
        this.props.setColor(color);
      }; 
  
    render() {
      return (
          <div>
          <p>Colour Selector</p>
          <p>Select a Colour to Begin Drawing</p>
          <SketchPicker
        color={ this.state.selectedColor }
        onChangeComplete={ this.handleChangeComplete } 
        />
        </div>
      );
    }
  }
export default Color