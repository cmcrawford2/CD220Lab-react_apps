import React from 'react';

class SimpleApp extends React.Component {
  state = {counter:0}

  incrementCounter = () => {
    this.setState({counter:this.state.counter+1});
  }
  render() {
    const colorStyle = {
      color: this.props.color,
      fontSize: this.props.size+"px",
      background: this.props.background
    }
    return (
      <div>
        <div style={colorStyle}>
          Hello World!
        </div>
        React Component
        <br /><br />
        <button onClick={this.incrementCounter}>Click Me!</button>
        <br /><br />
        {this.state.counter}
      </div>
    )
  }
}
// function App(props) {
//   const colorStyle = {
//     color:props.color,
//     fontSize:props.size+"px"
//   }
//   return (
//     <div>
//       <div style={colorStyle}>
//       Hello World!
//       </div>
//     </div>
//   );
// }

export default SimpleApp;
