import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getItemById } from '../utils/mockItems';

import '../assets/styles/ItemDetail.css';

function ItemDetail() {
  const { productId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItemById(parseInt(productId));
      console.log(item);
      if (item) setItem(item);
    };
    fetchItem();
  }, [productId]);

  return (
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
  );
}
export default ItemDetail;
