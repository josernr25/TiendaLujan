import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <br/>
      <div className="itemList">
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
