import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
<>    
<NavBar background={"blue"}/>
<ItemListContainer greeting="Lista de Productos"/>
</>

  );
}

export default App;
