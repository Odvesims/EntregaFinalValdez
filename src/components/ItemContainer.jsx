import '../assets/styles/ItemContainer.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategoryById } from '../utils/mockCategories';

function ItemContainer({ id, title, image, price, rate, category_id }) {
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchCategoryName = async () => {
      const category = await getCategoryById(category_id);
      console.log('categoryId', category);
      if (category) setCategoryName(category.path);
    };
    fetchCategoryName();
  }, [category_id]);

  return (
    <div className="column is-4 item-container">
      <div className="item-image">
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
          <b>Rate</b> {rate}
        </div>
      </div>
      <hr />
      <div className="item-more row">
        <div className="col-6">
          <Link className="btn btn-info" to={`/item/${id}`}>
            More
          </Link>
        </div>
        <div className="col-6">
          <Link className="btn btn-secondary" to={`/${categoryName}/${id}`}>
            More+
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
