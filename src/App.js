import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './pages/ItemListContainer';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import NavBar from './components/NavBar';
import { getCategories } from './utils/mockCategories';
import ItemDetail from './pages/ItemDetail';
import { useEffect, useState } from 'react';

import CartContextWrapper from './context/CartContext';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const itemsCategories = await getCategories();
      setCategories(itemsCategories);
    };
    fetchCategories();
  });

  return (
    <div>
      <BrowserRouter>
        <CartContextWrapper>
          <NavBar appName="sweetStore" categories={categories} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryPath"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetail />} />
            <Route path="/:categoryPath/:itemId" element={<ItemDetail />} />
            <Route path="*" element={<NotFound text="404 NOT FOUND" />} />
          </Routes>
          <Footer />
        </CartContextWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
