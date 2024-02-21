import { useState, useEffect } from 'react';
import { getItems, getItemsByCategory } from '../utils/mockItems';

import { useParams } from 'react-router-dom';

import ItemContainer from '../components/ItemContainer';

import '../assets/styles/ItemListContainer.css';
import { getCategoryByPath } from '../utils/mockCategories';
import NotFound from './NotFound';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [foundTxt, setFoundTxt] = useState([]);
  const { categoryPath } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      if (categoryPath) {
        const category = await getCategoryByPath(categoryPath);
        if (!category) {
          setFoundTxt('Not Found');
          return [];
        }
        const filteredItems = await getItemsByCategory(category.id);
        setItems(filteredItems);
      } else {
        const allItems = await getItems();
        setItems(allItems);
      }
    };
    fetchItems();
  }, [categoryPath]);

  return (
    <div>
      {items.length > 0 ? (
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
                rating,
                category_id,
              }) => {
                return (
                  <ItemContainer
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                    rate={rating.rate}
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
}
export default ItemListContainer;
