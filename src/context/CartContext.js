import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextWrapper({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
      setCartItemsCount(
        storedCartItems.reduce((total, item) => total + item.count, 0)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    let itemsCount = 0;
    let cartTotal = 0;
    cartItems.map((cartItem) => {
      itemsCount += cartItem.count;
      cartTotal += cartItem.total;
    });
    setCartItemsCount(itemsCount);
    setCartTotal(cartTotal);
  }, [cartItems]);

  const itemCartExistence = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === parseInt(item.id)
    );
    let exists = false;
    if (existingItemIndex !== -1) exists = true;
    return { exists: exists, index: existingItemIndex };
  };

  const setItemInCart = (item, count) => {
    const itemExistence = itemCartExistence(item);
    const total = count * item.price;
    if (itemExistence.exists) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[itemExistence.index].count = count;
        updatedCartItems[itemExistence.index].total = total;
        return updatedCartItems;
      });
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, count: count, total },
      ]);
    }
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((obj) => obj.id !== itemId);
    setCartItems(updatedCart);
  };

  const getItemCount = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) return item.count;
    return 0;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setItemInCart,
        removeItemFromCart,
        cartItemsCount,
        cartTotal,
        setCartItemsCount,
        getItemCount,
        itemCartExistence,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextWrapper;
