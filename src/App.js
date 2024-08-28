import React, { Component } from 'react';
import Home from './component/Home';
import Calculator from './component/Calculator';




class App extends Component {

  

  
  render() {
    return (
      <div className="App">
        {/* <h1 className=' text-orange-200'>2elf2ef</h1> */}
         <Home></Home>
         <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
