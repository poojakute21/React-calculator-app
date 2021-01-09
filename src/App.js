import React, {Component} from 'react';
import './App.css';
import Button  from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';


class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       input :""
    }
  }
  addToInput = val =>{
    this.setState({input: this.state.input + val});
  }
  handleEqual = () =>{
    this.setState({input: math.evaluate(this.state.input)});
  }
 
  handleMath = () =>{
    this.setState({input: math.evaluate(this.state.input * -1)});
  }
 
  handlePercentage = () =>{
    this.setState({input: math.evaluate(this.state.input/100)});
  }

  render() {
    return (
      <div className="App">
          <div className="calc-wrapper">
            <Input input={this.state.input}></Input>
            <div className="row">
                <ClearButton handleClear={() => this.setState({input: ""})}>AC</ClearButton>
                <Button handleClick = {() => this.handleMath()}>+/-</Button>
                <Button handleClick = {() => this.handlePercentage()}>%</Button>
                <Button handleClick = {this.addToInput}>/</Button>
            </div>
            <div className="row">
                <Button handleClick = {this.addToInput}>7</Button>
                <Button handleClick = {this.addToInput}>8</Button>
                <Button handleClick = {this.addToInput}>9</Button>
                <Button handleClick = {this.addToInput}>*</Button>
            </div>
            <div className="row">
                <Button handleClick = {this.addToInput}>4</Button>
                <Button handleClick = {this.addToInput}>5</Button>
                <Button handleClick = {this.addToInput}>6</Button>
                <Button handleClick = {this.addToInput}>-</Button>
            </div>
            <div className="row">
                <Button handleClick = {this.addToInput}>1</Button>
                <Button handleClick = {this.addToInput}>2</Button>
                <Button handleClick = {this.addToInput}>3</Button>
                <Button handleClick = {this.addToInput}>+</Button>
            </div>
            <div className="row">
                <Button handleClick = {this.addToInput}>0</Button>
                <Button handleClick = {this.addToInput}>00</Button>
                <Button handleClick ={this.addToInput} >.</Button>
                <Button handleClick ={() => this.handleEqual()}>=</Button>
            </div>
            <div className="row">
             
            </div>
          </div>
      </div>
    );
  }
}

export default App;
