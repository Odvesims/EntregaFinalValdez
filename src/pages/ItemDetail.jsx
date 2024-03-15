import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import { apiRequest } from '../utils/api';

import '../assets/styles/ItemDetail.css';
import NotFound from './NotFound';
import ItemQuantitySelector from '../components/ItemQuantitySelector';
import AddItemButton from '../components/AddItemButton';

import { useErrorToast } from '../context/ErrorToastContext';
import { useLoading } from '../context/LoadingContext';
import Description from '../components/Description';

const ItemDetail = () => {
  const { showError } = useErrorToast();
  const { setItemInCart, getItemCount, itemCartExistence } =
    useContext(CartContext);

  const { itemUrlKey, categoryPath } = useParams();

  const [item, setItem] = useState(undefined);
  const [foundTxt, setFoundTxt] = useState('');
  const [itemCount, setItemCount] = useState(0);
  const [itemInCart, setItemInCartExistence] = useState(false);

  const { setLoading } = useLoading();

  useEffect(() => {
    const fetchItem = async () => {
      let item = {};
      setLoading(true);
      if (categoryPath) {
        const category = await apiRequest(
          'getProductCategoryByPath',
          categoryPath
        );
        if (!category.data) {
          setLoading(false);
          showError(item.message);
          setFoundTxt('Category not Found');
          return undefined;
        }
        setFoundTxt('');
        item = await apiRequest(
          'getProductsByUrlKeyAndCategory',
          itemUrlKey,
          category.data.id
        );
      } else {
        item = await apiRequest('getProductByUrlKey', itemUrlKey);
        if (!item.data) {
          setLoading(false);
          showError(item.message);
          setFoundTxt('Product Not found');
          return undefined;
        }
      }
      if (item.data) {
        setItem(item.data);
      } else {
        showError(item.message);
        setFoundTxt('Product Not found');
      }
      setLoading(false);
    };
    fetchItem();
  }, [categoryPath, itemUrlKey]);

  useEffect(() => {
    const count = getItemCount(itemUrlKey);
    setItemCount(count);
  }, [getItemCount, itemUrlKey]);

  useEffect(() => {
    const existence = itemCartExistence({ url_key: itemUrlKey }).exists;
    setItemInCartExistence(existence);
  }, [itemCount, itemUrlKey, itemCartExistence, setItemInCart]);

  return (
    <div>
      {item ? (
        <div className="item-detail card">
          <Description item={item} />
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
                  itemUrlKey={item.url_key}
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
