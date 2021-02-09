import './scss/main.scss';

import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer greeting={'Lista de items'}/> */}
    </>
  );
}

export default App;
