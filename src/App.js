import React from 'react' 
import './App.css';
import NavBar from './components/NavBar'
import Greeting from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Greeting></Greeting>
       
    </div>
  );
}

export default App;
