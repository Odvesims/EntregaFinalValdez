import '../assets/styles/ItemContainer.css';
import { Link } from 'react-router-dom';

function ItemContainer({ id, title, image, price, rate }) {
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
      <div className="item-more">
        <Link className="btn btn-info" to={`/products/${id}`}>
          More
        </Link>
      </div>
    </div>
  );
}

export default ItemContainer;
