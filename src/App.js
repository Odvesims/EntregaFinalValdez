import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const categories = [
    { id: 1, name: 'Remeras', path: '/tops' },
    { id: 2, name: 'Pantalones', path: '/pants' },
    { id: 3, name: 'Zapatos', path: '/shoes' },
    { id: 4, name: 'Ropa Interior', path: '/underwear' },
  ];

  const greeting = 'Hola, bienvenido a SweetStore';

  return (
    <div className="App">
      <NavBar appName="sweetStore" categories={categories} />
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
