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

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const itemsCategories = await getCategories();
      setCategories(itemsCategories);
    };
    fetchCategories();
  });

  return (
    <BrowserRouter>
      <NavBar appName="sweetStore" categories={categories} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:productId" element={<ItemDetail />} />
        <Route
          path="/products/category/:categoryPath"
          element={<ItemListContainer />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
