
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div> 
    <NavBar/> 
    <ItemListContainer greeting={"Esto es Muna Shop. Encontrá todo lo de nuevo de la temporada SS2022"}> </ItemListContainer>


    </div>
  );
}

export default App;
