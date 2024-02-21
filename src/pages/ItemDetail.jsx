import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getItemById, getItemByIdAndCategory } from '../utils/mockItems';

import '../assets/styles/ItemDetail.css';
import { getCategoryByPath } from '../utils/mockCategories';
import NotFound from './NotFound';

function ItemDetail() {
  const { itemId, categoryPath } = useParams();
  const [item, setItem] = useState(undefined);
  const [foundTxt, setFoundTxt] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      let item = {};
      if (categoryPath) {
        const category = await getCategoryByPath(categoryPath);
        if (!category) {
          setFoundTxt('Not Found');
          return undefined;
        }
        setFoundTxt('');
        item = await getItemByIdAndCategory(parseInt(itemId), category.id);
      } else {
        item = await getItemById(parseInt(itemId));
        if (!item) {
          setFoundTxt('Not Found');
          return undefined;
        }
      }
      if (item) {
        setItem(item);
      } else {
        setFoundTxt('Not Found');
      }
    };
    fetchItem();
  }, [itemId, categoryPath]);

  return (
    <div>
      {item ? (
        <div className="item-detail card">
          <div className="card-img">
            <img src={item.image} />
          </div>
          <div className="card-header">
            <h5 className="card-title">{item.title}</h5>
          </div>
          <div className="card-body">
            <p className="card-text">{item.description}</p>
          </div>
          <div className="card-footer">
            <b>Price: </b>
            {item.price}
          </div>
        </div>
      ) : (
        <NotFound text={foundTxt} />
      )}
    </div>
  );
}
export default ItemDetail;
