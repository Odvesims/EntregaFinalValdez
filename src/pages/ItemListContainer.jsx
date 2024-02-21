import { useState, useEffect } from 'react';
import { getItems, getItemsByCategory } from '../utils/mockItems';

import { useParams } from 'react-router-dom';

import ItemContainer from '../components/ItemContainer';

import '../assets/styles/ItemListContainer.css';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      if (categoryId) {
        const filteredItems = await getItemsByCategory(parseInt(categoryId));
        setItems(filteredItems);
      } else {
        const allItems = await getItems();
        setItems(allItems);
      }
    };
    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>Items</h1>
      <div className="gallery">
        {items &&
          items.map(({ id, title, image, description, price, rating }) => {
            return (
              <ItemContainer
                id={id}
                title={title}
                image={image}
                price={price}
                rate={rating.rate}
                description={description}
              />
            );
          })}
      </div>
    </div>
  );
}
export default ItemListContainer;
