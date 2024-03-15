import '../assets/styles/ItemContainer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiRequest } from '../utils/api';
import { useLoading } from '../context/LoadingContext';

const ItemList = ({ id, url_key, title, image, price, stock, category_id }) => {
  const { setLoading } = useLoading();
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchCategoryName = async () => {
      setLoading(true);
      const category = await apiRequest('getProductCategoryById', category_id);
      if (category) setCategoryName(category.data.path);
      setLoading(false);
    };
    fetchCategoryName();
  }, [category_id]);

  return (
    <div className="column is-4 item-container">
      <div className="item-image w-100">
        <img src={image} />
      </div>
      <div className="item-title">
        <h5 className="title">{title}</h5>
      </div>
      <hr />
      <div className="col-12 row item-price-rate">
        <div className="col-6">
          <b>Price:</b> {price}
        </div>
        <div className="col-6">
          <b>Stock</b> {stock}
        </div>
      </div>
      <hr />
      <div className="item-more row">
        <div className="col-12">
          <Link className="btn btn-primary" to={`/${categoryName}/${url_key}`}>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
