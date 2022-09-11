
import React , { useState } from 'react';
import './App.css';



/*function App(){
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=> setCount( count+1 )}>Click me</button>
    </div>
  )
}*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0
    };
  }

  render(){
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={()=> this.setState({ count:
          this.state.count + 1})}>
          Click me
          </button>
      </div>
    )
  };
}

export default App;
