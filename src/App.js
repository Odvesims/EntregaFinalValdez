import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './pages/ItemListContainer';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import NavBar from './components/NavBar';
import ItemDetail from './pages/ItemDetail';

import CartContextProvider from './context/CartContext';
import ErrorToastProvider from './context/ErrorToastContext';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import PastOrders from './pages/PastOrders';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <ErrorToastProvider>
            <NavBar appName="sweetStore" />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryPath"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetail />} />
              <Route path="/:categoryPath/:itemId" element={<ItemDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/past_orders" element={<PastOrders />} />
              <Route path="*" element={<NotFound text="404 NOT FOUND" />} />
            </Routes>
            <Footer />
          </ErrorToastProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
