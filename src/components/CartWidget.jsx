import { NavItem, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cartItemsCount } = useContext(CartContext);

  return (
    <NavItem className="mr-auto">
      <Link className="text-black" to={`/cart`}>
        <FaShoppingCart className="cart-icon" size={24} />
        <Badge pill variant="danger" className="ml-1">
          {JSON.stringify(cartItemsCount)}
        </Badge>
      </Link>
    </NavItem>
  );
};
export default CartWidget;
