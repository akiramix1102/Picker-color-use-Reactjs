
import React, { Component } from 'react';
import './App.css';
import Reset from './Component/Reset';
import Result from './Component/Result';
import Picker from './Component/Picker';
import SizeSetting from './Component/SizeSetting';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 14 
    }
  }
  // function set border color for Picker.js
  setColor=(params)=>{
    this.setState({
      color:params
    })
  }
  setFontSize=(value)=>{
    if(this.state.fontSize+value>=8 && this.state.fontSize+value<=36 )
    {
      this.setState({
        fontSize: this.state.fontSize+value
      })
    }
  }

  onSettingDefault=(value)=>{
    if(value){
      this.setState({
        color: 'red',
      fontSize: 14 
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <Picker color={this.state.color} receiveColor={this.setColor}/>
            <div className="col-lg-6 change-text">
              <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.setFontSize}/>
              <Reset settingDefault={this.onSettingDefault}/>
            </div>
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;