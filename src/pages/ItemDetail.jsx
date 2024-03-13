import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import { getItemById, getItemByIdAndCategory } from '../utils/mockItems';

import '../assets/styles/ItemDetail.css';
import { getCategoryByPath } from '../utils/mockCategories';
import NotFound from './NotFound';
import ItemQuantitySelector from '../components/ItemQuantitySelector';
import AddItemButton from '../components/AddItemButton';

const ItemDetail = () => {
  const { setItemInCart, getItemCount, itemCartExistence } =
    useContext(CartContext);

  const { itemId, categoryPath } = useParams();
  const [item, setItem] = useState(undefined);
  const [foundTxt, setFoundTxt] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [itemInCart, setItemInCartExistence] = useState(false);

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
  }, [itemId]);

  useEffect(() => {
    const count = getItemCount(itemId);
    setItemCount(count);
  }, [getItemCount, itemId]);

  useEffect(() => {
    const existence = itemCartExistence({ id: itemId }).exists;
    setItemInCartExistence(existence);
  }, [itemCount, itemId, itemCartExistence, setItemInCart]);

  return (
    <div>
      {item ? (
        <div className="item-detail card">
          <div className="card-img img-fluid rounded-start">
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
          <div className="row">
            <div className="col-12">
              <ItemQuantitySelector
                itemCount={itemCount}
                setItemCount={setItemCount}
                itemCartExistence={itemInCart}
              />
            </div>
          </div>
          {!itemInCart && (
            <div className="row">
              <div className="col-12">
                <AddItemButton
                  setItemInCart={setItemInCart}
                  itemCount={itemCount}
                  itemId={item.id}
                  itemName={item.title}
                  itemImage={item.image}
                  itemPrice={item.price}
                />
              </div>
            </div>
          )}
          <hr />
        </div>
      ) : (
        <NotFound text={foundTxt} />
      )}
    </div>
  );
};
export default ItemDetail;
