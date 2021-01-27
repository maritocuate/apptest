import './App.scss';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Lista de items'}/>
    </>
  );
}

export default App;
