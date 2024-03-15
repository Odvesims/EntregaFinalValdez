import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ItemList from '../components/ItemList';

import '../assets/styles/ItemListContainer.css';
import { apiRequest } from '../utils/api';
import NotFound from './NotFound';
import { useErrorToast } from '../context/ErrorToastContext';
import { useLoading } from '../context/LoadingContext';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [foundTxt, setFoundTxt] = useState([]);
  const { categoryPath } = useParams();
  const { showError } = useErrorToast();
  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      if (categoryPath) {
        const category = await apiRequest(
          'getProductCategoryByPath',
          categoryPath
        );
        if (!category.data) {
          setLoading(false);
          setFoundTxt('Not Found');
          return [];
        }
        const filteredItems = await apiRequest(
          'getProductsByCategory',
          category.data.id
        );
        filteredItems.valid
          ? setItems(filteredItems.data)
          : showError(filteredItems.message);
      } else {
        const allItems = await apiRequest('getProducts');
        allItems.valid ? setItems(allItems.data) : showError(allItems.message);
      }
      setLoading(false);
    };
    fetchItems();
  }, [categoryPath]);

  return (
    <div>
      {items && items.length > 0 ? (
        <div>
          <h1>Items</h1>
          <div className="gallery">
            {items.map(
              ({
                id,
                title,
                image,
                description,
                price,
                stock,
                category_id,
              }) => {
                return (
                  <ItemList
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                    stock={stock}
                    description={description}
                    category_id={category_id}
                  />
                );
              }
            )}
          </div>
        </div>
      ) : (
        <NotFound text={foundTxt} />
      )}
    </div>
  );
};
export default ItemListContainer;
