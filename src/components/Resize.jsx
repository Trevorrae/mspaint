import React, { Component } from 'react';
//todo - Debug why the height cannot go below 50%
//edit css for static tool bar on side and readjust max screen size to follow
//comment and document function paths
class Resize extends Component {

  state = {
    selectedHeight: '',
    selectedWidth: ''
  };

  

  handleChangeHeight = (height) =>{
    this.setState({selectedHeight:height.target.value});
    this.props.setHeight(height.target.value);

  };
  handleChangeWidth = (width) =>{
    this.setState({selectedWidth:width.target.value});
    this.props.setWidth(width.target.value);

  };

  render() {
    return (
    <div>
       <p>Height</p>
       <input
         defaultValue="50"
         type="range"
         min="0"
         max="100"
         onChange={this.handleChangeHeight}
       />
      <p>Width (Adjust using arrow keys for now)</p>
       <input
         defaultValue="50"
         type="range"
         min="0"
         max="100"
         onChange={this.handleChangeWidth}
       />           
    </div>
    );
  }
}

export default Resize;

// export const Resize = ({
//   setHeight
// })=> {
//     return (
//       <div>
//       <p>Height</p>
//       <input
//         defaultValue="50"
//         type="range"
//         min="0"
//         max="100"
//         onChange={setHeight}
//       />
//       </div>
//     );
//   }


