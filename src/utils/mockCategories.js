const itemCategories = [
  { id: 1, title: 'Electronics', path: 'electronics' },
  { id: 2, title: 'Jewelery', path: 'jewelery' },
  { id: 3, title: "Men's Clothing", path: 'mens_clothing' },
  { id: 4, title: "Women's Clothing", path: 'womens_clothing' },
];

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
