import React,{Component} from 'react';
import './App.css';
import Clicked from './clicked'

class App extends Component {
  constructor(){
    super()
    this.state={
      name:"Hello",
      clicked:1,
      color: 'red'
    }
  }
  onchange(e){
    var col=e.target.getAttribute('style')
    console.log(col);
    debugger
   
    if (this.state.color==="red"){
      this.setState({
        name: "Prasid",
        clicked:this.state.clicked+1,
        color: "blue"
      })
    }else{
      this.setState({
        name: "Prasid",
        clicked:this.state.clicked+1,
        color: "red"
      })
    }

  }
  render(){
    return (
      <div className="App">
        {this.state.name}
      <Clicked
      val= {this.state.clicked}
      />
        <button className="btn" onClick={(e)=>this.onchange(e)} style={{background:this.state.color}}>Change</button>
      </div>
    );
  }
  
}

export default App;
