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
        <Contador stock="5" initial="1"/>
       
    </div>
  );
}

export default App;
