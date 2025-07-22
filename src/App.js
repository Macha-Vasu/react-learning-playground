import React from 'react';
import './App.css';
import SampleArray from './SampleArray';
import UserPage from './UserPage'; // ✅ You imported it



function App() {
  return (
    <div className="App">
      <h1>React Learning Playground!!</h1>
      
      {/* <SampleArray/> */}
      <UserPage/>

    </div>  
  );
}



export default App;
