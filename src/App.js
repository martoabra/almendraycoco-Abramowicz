import {React, useState, useEffect} from 'react' 
import './App.css';
import NavBar from './components/NavBar'
import Greeting from './components/ItemListContainer'
import Contador from './components/ItemCount'
import ItemList from './components/ItemList'

const items = [
  {
     id: 1,
     title: "CheeseCake",
     price: "$ 100",
     pictureUrl: <img src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/1b.jpg" alt="CheeseCake" className='ImgProd'/>
     
  },
  {
     id: 2,
     title: "NY",
     price: "$ 200",
     pictureUrl: <img src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/2b.jpg" alt="CheeseCake" className='ImgProd'/>
     
  },
  {
     id: 3,
     title: "Brownie",
     price: "$ 300",
     pictureUrl: <img src="https://martoabra.github.io/Proyectofinal-JS-Coder-Abramowicz/assets/3b.jpg" alt="CheeseCake" className='ImgProd'/>
     
  },
]

function App() {
  const [state, setState] = useState([])

  const getData = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(items)
    }, 2000);
  })

  useEffect(()=>{
    getData.then((res)=>setState(res))
  },[])

  return (
    <div className="App">
        <NavBar/>
        <Greeting></Greeting>
        <Contador stock="5" initial="1"/>
        <ItemList items={state}/>
    </div>
  );
}

export default App;
