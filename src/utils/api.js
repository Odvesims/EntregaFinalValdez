//import { itemsList } from './mockItems';
//import { itemCategories } from './mockCategories';
import { CartContext } from '../context/CartContext';

import { db } from '../config/firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const productsCollectionRef = collection(db, 'products');
const categoriesCollectionRef = collection(db, 'categories');
const ordersCollectionRef = collection(db, 'orders');

//API REQUESTS

export const apiRequest = async (request, ...params) => {
  try {
    const result = await apiFunctions[request](...params);
    return { valid: true, message: '', data: result };
  } catch (error) {
    return { valid: false, message: error.message, data: undefined };
  }
};

/// PRODUCTS ///

const getProducts = async () => {
  const data = await getDocs(productsCollectionRef);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return products;
};

const getProductById = async (productId) => {
  const productRef = doc(db, 'products', productId);
  const productSnapshot = await getDoc(productRef);

  if (productSnapshot.exists()) {
    return productSnapshot.data();
  } else {
    return null;
  }
};

const getProductsByCategory = async (categoryId) => {
  const data = await getDocs(productsCollectionRef);
  const products = data.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .filter((product) => product.category_id === categoryId);

  return products;
};

const getProductsByIdAndCategory = async (id, categoryId) => {
  const data = await getDocs(productsCollectionRef);
  const product = data.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .find((item) => item.id === id && item.category_id === categoryId);

  return product;
};

/// CATEGORIES ///

const getProductsCategories = async () => {
  const data = await getDocs(categoriesCollectionRef);

  const categories = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return categories;
};

const getProductCategoryByPath = async (path) => {
  const data = await getDocs(categoriesCollectionRef);
  const category = data.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .find((item) => item.path === path);

  return category;
};

const getProductCategoryById = async (id) => {
  const data = await getDocs(categoriesCollectionRef);
  const category = data.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .find((item) => item.id === id);

  return category;
};

/// ORDERS ///

const getOrders = async () => {
  const data = await getDocs(ordersCollectionRef);

  const orders = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return orders;
};

const getOrderByNumber = async (number) => {
  const data = await getDocs(ordersCollectionRef);

  const order = data.docs
    .map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    .find((order) => order.number === number);

  return order;
};

const apiFunctions = {
  getProducts,
  getProductById,
  getProductsByCategory,
  getProductsByIdAndCategory,
  getProductsCategories,
  getProductCategoryByPath,
  getProductCategoryById,
  getOrders,
  getOrderByNumber,
};

/*export const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsList);
    }, 500);
  });
};

export const getItemById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsList.find((item) => item.id === itemId));
    }, 500);
  });
};

export const getItemsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsList.filter((item) => item.category_id === categoryId));
    }, 500);
  });
};

export const getItemByIdAndCategory = (itemId, categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        itemsList.find(
          (item) => item.id === itemId && item.category_id === categoryId
        )
      );
    }, 300);
  });
};


export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemCategories);
    }, 200);
  });
};

export const getCategoryByPath = (path) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemCategories.find((item) => item.path === path));
    }, 100);
  });
};

export const getCategoryById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemCategories.find((item) => item.id === id));
    }, 100);
  });
};

*/
