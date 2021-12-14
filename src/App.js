import React from 'react' 
import './App.css';
import NavBar from './components/NavBar'
import Greeting from './components/ItemListContainer'
import Contador from './components/ItemCount'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Greeting></Greeting>
        <Contador></Contador>
       
    </div>
  );
}

export default App;
