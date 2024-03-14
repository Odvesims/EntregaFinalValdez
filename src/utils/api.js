//import { itemsList } from './mockItems';
//import { itemCategories } from './mockCategories';

import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const productsCollectionRef = collection(db, 'products');
const categoriesCollectionRef = collection(db, 'categories');
const ordersCollectionRef = collection(db, 'orders');

//API REQUESTS

export const apiRequest = async (request, ...params) => {
  try {
    let forceRemoteFetch = false;
    if (params.includes('force_remote_fetch')) {
      forceRemoteFetch = params.force_remote_fetch;
    }
    params.push(forceRemoteFetch);
    const result = await apiFunctions[request](...params);
    return { valid: true, message: '', data: result };
  } catch (error) {
    return { valid: false, message: error.message, data: undefined };
  }
};

const fetchFilteredData = async (
  fetchingFunction,
  filterParams,
  storageKey,
  remoteFetch
) => {
  if (remoteFetch || !localStorage.getItem(storageKey)) {
    const data = await fetchingFunction();
    localStorage.setItem(storageKey, JSON.stringify(data));
    return filterParams(data);
  } else {
    return filterParams(JSON.parse(localStorage.getItem(storageKey)));
  }
};

/// PRODUCTS ///

const getAllProducts = async () => {
  const data = await getDocs(productsCollectionRef);
  const products = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  localStorage.setItem('products', JSON.stringify(products));
  return products;
};

const getProducts = async (forceRemoteFetch) => {
  let products = [];
  if (forceRemoteFetch || !localStorage.getItem('products')) {
    products = await getAllProducts();
  } else {
    products = JSON.parse(localStorage.getItem('products'));
  }
  return products;
};

const getProductById = async (productId, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllProducts,
    (products) => products.find((item) => item.id === productId),
    'products',
    forceRemoteFetch
  );
};

const getProductsByCategory = async (categoryId, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllProducts,
    (products) => products.filter((item) => item.category_id === categoryId),
    'products',
    forceRemoteFetch
  );
};

const getProductsByIdAndCategory = async (id, categoryId, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllProducts,
    (products) =>
      products.find(
        (item) => item.id === id && item.category_id === categoryId
      ),
    'products',
    forceRemoteFetch
  );
};

/// CATEGORIES ///

const getAllCategories = async () => {
  const data = await getDocs(categoriesCollectionRef);
  const categories = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  localStorage.setItem('product_categories', JSON.stringify(categories));
  return categories;
};

const getProductsCategories = async (forceRemoteFetch) => {
  let categories = [];
  if (forceRemoteFetch || !localStorage.getItem('product_categories')) {
    categories = await getAllCategories();
  } else {
    categories = JSON.parse(localStorage.getItem('product_categories'));
  }
  return categories;
};

const getProductCategoryByPath = async (path, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllCategories,
    (categories) => categories.find((item) => item.path === path),
    'product_categories',
    forceRemoteFetch
  );
};

const getProductCategoryById = async (id, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllCategories,
    (categories) => categories.find((item) => item.id === id),
    'product_categories',
    forceRemoteFetch
  );
};

/// ORDERS ///

const getAllOrders = async () => {
  const data = await getDocs(ordersCollectionRef);
  const orders = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  localStorage.setItem('orders', JSON.stringify(orders));
  return orders;
};

const getOrders = async (forceRemoteFetch) => {
  let orders = [];
  if (forceRemoteFetch || !localStorage.getItem('orders')) {
    orders = await getAllOrders();
  } else {
    orders = JSON.parse(localStorage.getItem('orders'));
  }
  return orders;
};

const getOrderByNumber = async (number, forceRemoteFetch) => {
  return fetchFilteredData(
    getAllOrders,
    (orders) => orders.find((item) => item.order_number === number),
    'orders',
    forceRemoteFetch
  );
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
